import { prisma } from './_db.js';
import { hashPassword, verifyPassword, generateToken } from './_auth_helper.js';

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

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { action, email, password, fullName } = req.body;

    if (!action) {
      return res.status(400).json({ error: 'Action is required' });
    }

    if (action === 'register') {
      if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
      }

      const normalizedEmail = email.trim().toLowerCase();

      // Check if user already exists
      const existingUser = await prisma.user.findUnique({
        where: { email: normalizedEmail },
      });

      if (existingUser) {
        return res.status(400).json({ error: 'User already registered' });
      }

      // Hash password and save user
      const hashedPassword = hashPassword(password);
      const user = await prisma.user.create({
        data: {
          email: normalizedEmail,
          password: hashedPassword,
          full_name: fullName ? fullName.trim() : null,
          role: 'admin', // Any user created via the Admin Portal sign up is an admin
        },
      });

      return res.status(201).json({
        message: 'Registration successful',
        user: {
          id: user.id,
          email: user.email,
          fullName: user.full_name,
          role: user.role,
        },
      });
    }

    if (action === 'login') {
      if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
      }

      const normalizedEmail = email.trim().toLowerCase();

      // Find user
      const user = await prisma.user.findUnique({
        where: { email: normalizedEmail },
      });

      if (!user || !verifyPassword(password, user.password)) {
        return res.status(401).json({ error: 'Invalid login credentials' });
      }

      // Generate session token
      const token = generateToken({
        id: user.id,
        email: user.email,
        role: user.role,
      });

      return res.status(200).json({
        session: {
          user: {
            id: user.id,
            email: user.email,
            role: user.role,
            fullName: user.full_name,
          },
          access_token: token,
        },
      });
    }

    return res.status(400).json({ error: `Invalid action: ${action}` });
  } catch (error: any) {
    console.error('Authentication handler error:', error);
    return res.status(500).json({ error: error.message || 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
}
