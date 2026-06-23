import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    if (req.method === 'POST') {
      const {
        name,
        company,
        email,
        whatsapp,
        product,
        quantity,
        sample_request,
        message,
        status = 'new',
      } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, email, and message are required' });
      }

      const inquiry = await prisma.inquiry.create({
        data: {
          name: name.trim(),
          company: company ? company.trim() : null,
          email: email.trim(),
          whatsapp: whatsapp ? whatsapp.trim() : null,
          product: product ? product.trim() : null,
          quantity: quantity ? quantity.trim() : null,
          sample_request: !!sample_request,
          message: message.trim(),
          status,
        },
      });

      return res.status(201).json(inquiry);
    }

    if (req.method === 'GET') {
      // Validate credentials using Authorization header
      const authHeader = req.headers.authorization || '';
      const token = authHeader.replace('Bearer ', '').trim();
      const adminPassword = process.env.ADMIN_PASSWORD || 'saimpexadmin';

      // Verify token
      if (token !== adminPassword) {
        return res.status(401).json({ error: 'Unauthorized: Invalid admin token' });
      }

      const inquiries = await prisma.inquiry.findMany({
        orderBy: { created_at: 'desc' },
      });
      return res.status(200).json(inquiries);
    }

    if (req.method === 'PATCH') {
      const authHeader = req.headers.authorization || '';
      const token = authHeader.replace('Bearer ', '').trim();
      const adminPassword = process.env.ADMIN_PASSWORD || 'saimpexadmin';

      // Verify token
      if (token !== adminPassword) {
        return res.status(401).json({ error: 'Unauthorized: Invalid admin token' });
      }

      const { id, status } = req.body;
      if (!id || !status) {
        return res.status(400).json({ error: 'Inquiry ID and status are required' });
      }

      const updatedInquiry = await prisma.inquiry.update({
        where: { id: String(id) },
        data: { status: String(status) },
      });

      return res.status(200).json(updatedInquiry);
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error: any) {
    console.error('Error handling inquiries:', error);
    return res.status(500).json({ error: error.message || 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
}
