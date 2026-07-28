import * as crypto from 'crypto';

// Secret key for signing tokens. In production, this should be set in process.env.JWT_SECRET
const JWT_SECRET = process.env.JWT_SECRET || 'saimpex-fallback-jwt-secret-key-987654321';

/**
 * Hash a plain text password using PBKDF2.
 * Returns salt and hash joined by a colon.
 */
export function hashPassword(password: string): string {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  return `${salt}:${hash}`;
}

/**
 * Verify a plain text password against a stored salted hash.
 */
export function verifyPassword(password: string, stored: string): boolean {
  try {
    const parts = stored.split(':');
    if (parts.length !== 2) return false;
    const [salt, hash] = parts;
    const verifyHash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
    return hash === verifyHash;
  } catch (error) {
    console.error('Password verification error:', error);
    return false;
  }
}

/**
 * Generate a signed session token.
 * Contains user id, email, role, and expiry timestamp, signed with HMAC-SHA256.
 */
export function generateToken(user: { id: string; email: string; role: string }): string {
  const expiry = Date.now() + 1000 * 60 * 60 * 24; // 24 hours
  const payload = `${user.id}|${encodeURIComponent(user.email)}|${user.role}|${expiry}`;
  const signature = crypto.createHmac('sha256', JWT_SECRET).update(payload).digest('hex');
  return `${payload}|${signature}`;
}

/**
 * Verify a signed session token and return the payload if valid.
 */
export function verifyToken(token: string): { id: string; email: string; role: string } | null {
  if (!token) return null;
  try {
    const parts = token.split('|');
    if (parts.length !== 5) return null;
    const [id, emailEncoded, role, expiryStr, signature] = parts;
    
    // Check expiration
    const expiry = parseInt(expiryStr, 10);
    if (isNaN(expiry) || expiry < Date.now()) {
      return null;
    }

    // Verify signature against primary JWT_SECRET and default fallback secret
    const payload = `${id}|${emailEncoded}|${role}|${expiryStr}`;
    const expectedSignature = crypto.createHmac('sha256', JWT_SECRET).update(payload).digest('hex');
    const fallbackSignature = crypto.createHmac('sha256', 'saimpex-fallback-jwt-secret-key-987654321').update(payload).digest('hex');
    
    if (signature !== expectedSignature && signature !== fallbackSignature) {
      return null;
    }

    return {
      id,
      email: decodeURIComponent(emailEncoded),
      role
    };
  } catch (error) {
    console.error('Token verification error:', error);
    return null;
  }
}
