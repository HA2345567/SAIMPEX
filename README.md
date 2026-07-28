# SAIMPEX — Premium Button Wholesale, Retailer & Garment Accessories Supplier

![SAIMPEX Website - Premium Garment Accessories Supplier](public/images/saimpex-hero-screenshot.jpg)

> **S.A. IMPEX** · Delivering world-class garment accessories — premium buttons, zippers, buckles, hooks, rings, and adjusters for global fashion brands.


🌐 **Live Site:** [saimpex.co.in](https://www.saimpex.co.in)

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Pages & Routes](#pages--routes)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Database Schema](#database-schema)
- [API Endpoints](#api-endpoints)
- [PDF Catalog](#pdf-catalog)
- [Deployment](#deployment)
- [Admin Dashboard](#admin-dashboard)

---

## About

**SAIMPEX** is a full-stack B2B/B2C e-commerce and lead-generation web application for a premium garment accessories manufacturer and exporter based in New Delhi, India.

| Detail | Info |
|---|---|
| **Founded** | 2023 |
| **Location** | New Delhi, India |
| **Focus** | B2B Wholesale · B2C Retail · Global Export |
| **Experience** | 10+ Years of Industry Excellence |
| **Global Reach** | 50+ Countries · 100+ Brand Partners · 1M+ Units Shipped |

### Products We Supply

| Category | Products |
|---|---|
| **Buttons** | Zinc Alloy, Brass, Copper, Polyester, Plastic, Wooden, Natural Shell |
| **Zippers** | Metal, Nylon, Invisible, Custom YKK-standard |
| **Buckles** | Fancy metal buckles for belts and fashion bags |
| **Hardware** | Hooks, Eyes, Ring Adjustors, Sliders, O-Rings, Snap Buttons |
| **Accessories** | Cord Stoppers, Aglets, Drawstring fittings |

---

## Features

- 🛍️ **Product Catalog** — Browseable product listings with category filters and detail pages
- 📄 **PDF Catalogs** — 8 downloadable digital catalogs covering every product range
- 📸 **Gallery** — Visual showcase of product collections and samples
- 📬 **Inquiry Form** — WhatsApp-integrated contact and bulk order inquiry system
- 🔐 **Admin Dashboard** — Protected route for viewing and managing customer inquiries
- 🔑 **Authentication** — Secure custom JWT auth via serverless API (`/api/auth`)
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop
- ⚡ **Performance Optimized** — Vite build with lazy-loaded images and Framer Motion animations
- 🎨 **Premium UI** — Glassmorphism, smooth transitions, dark-mode ready design system

---

## Pages & Routes

| Route | Page | Description |
|---|---|---|
| `/` | **Home** | Hero, featured products, category showcase, key stats |
| `/products` | **Products** | Full product listing with category filters |
| `/product/:id` | **Product Detail** | Individual product specs, MOQ, and inquiry CTA |
| `/catalog` | **Catalog** | Downloadable PDF catalogs for all product ranges |
| `/gallery` | **Gallery** | Visual gallery of product collections |
| `/contact` | **Contact** | Inquiry form with WhatsApp integration |
| `/legal` | **Legal** | Terms, Privacy Policy |
| `/auth` | **Sign In / Register** | Admin authentication page |
| `/admin` | **Admin Dashboard** | Protected: manage and update customer inquiries |

---

## Tech Stack

### Frontend

| Technology | Purpose |
|---|---|
| [React 18](https://react.dev) | UI framework |
| [Vite 5](https://vitejs.dev) | Build tool & dev server |
| [TypeScript 5](https://www.typescriptlang.org) | Type safety |
| [Tailwind CSS 3](https://tailwindcss.com) | Utility-first styling |
| [shadcn/ui](https://ui.shadcn.com) | Accessible component library |
| [Framer Motion](https://www.framer.com/motion) | Animations & micro-interactions |
| [Lucide React](https://lucide.dev) | Icon set |
| [React Router v6](https://reactrouter.com) | Client-side routing |
| [TanStack Query](https://tanstack.com/query) | Server state management |
| [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev) | Form handling & validation |

### Backend & Database

| Technology | Purpose |
|---|---|
| [Vercel Serverless Functions](https://vercel.com/docs/functions) | API endpoints (`/api/*`) |
| [Prisma ORM 5](https://www.prisma.io) | Database client & schema management |
| [Neon PostgreSQL](https://neon.tech) | Serverless PostgreSQL database |
| Custom HMAC-SHA256 JWT | Stateless session token auth |

### Infrastructure

| Technology | Purpose |
|---|---|
| [Vercel](https://vercel.com) | Hosting, CI/CD, serverless functions |
| [GitHub](https://github.com) | Version control |

---

## Project Structure

```
SAIMPEX/
├── api/                        # Vercel Serverless API functions
│   ├── _auth_helper.ts         # JWT token generation & verification
│   ├── _db.ts                  # Prisma client singleton
│   ├── auth.ts                 # POST /api/auth (login & register)
│   ├── inquiries.ts            # GET / POST / PATCH /api/inquiries
│   └── products.ts             # GET /api/products
│
├── prisma/
│   └── schema.prisma           # Database schema (Product, Inquiry, User)
│
├── public/
│   ├── images/                 # Product & brand images
│   └── pdf/                    # Downloadable PDF catalogs
│       ├── AII_buttons.pdf     # Master Collection 2026
│       ├── new_coming.pdf      # New Arrivals Lookbook
│       ├── plastic_buttons.pdf # Polyester & Plastic Series
│       ├── metals_buttons.pdf  # Metal & Alloys Catalog
│       ├── buckles.pdf         # Buckles Collection
│       ├── ring_adjusters.pdf  # Ring Adjusters
│       ├── wooden_buttons.pdf  # Wooden Button Collection
│       └── stoppers.pdf        # Stoppers & Cord Accessories
│
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── CategoryShowcase.tsx
│   │   ├── FeaturedProducts.tsx
│   │   ├── CTASection.tsx
│   │   ├── NavLink.tsx
│   │   └── ProtectedRoute.tsx  # Auth guard for /admin
│   │
│   ├── pages/                  # Application pages/routes
│   │   ├── Index.tsx           # Home page
│   │   ├── Products.tsx
│   │   ├── ProductDetail.tsx
│   │   ├── Catalog.tsx
│   │   ├── Gallery.tsx
│   │   ├── Contact.tsx
│   │   ├── Auth.tsx
│   │   ├── AdminDashboard.tsx
│   │   ├── Legal.tsx
│   │   └── NotFound.tsx
│   │
│   ├── integrations/supabase/
│   │   └── client.ts           # Custom mock Supabase-compatible client
│   │
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utility functions
│   ├── App.tsx                 # Root component & router setup
│   └── main.tsx                # Application entry point
│
├── index.html                  # HTML shell with SEO meta tags
├── vercel.json                 # Vercel rewrite rules (SPA + API routing)
├── vite.config.ts              # Vite configuration
├── tailwind.config.ts          # Tailwind CSS configuration
└── package.json
```

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** or **bun**
- A **Neon PostgreSQL** database (or any PostgreSQL instance)

### 1. Clone the Repository

```bash
git clone https://github.com/HA2345567/SAIMPEX.git
cd SAIMPEX
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Copy the example below and create a `.env` file in the project root:

```env
# Database — Neon PostgreSQL (pooled connection for serverless)
DATABASE_URL="postgresql://user:password@ep-xxx.region.aws.neon.tech/neondb?sslmode=require&pgbouncer=true"

# Database — Direct connection (for Prisma migrations)
DIRECT_URL="postgresql://user:password@ep-xxx.region.aws.neon.tech/neondb?sslmode=require"

# JWT signing secret for session tokens
JWT_SECRET="your-super-secret-jwt-key"

# Admin fallback password (used as static bearer token for emergencies)
ADMIN_PASSWORD="your-admin-password"
```

### 4. Push Database Schema

```bash
npx prisma db push
```

### 5. Start Development Server

```bash
npm run dev
```

The app will be available at **`http://localhost:8080`**.

> **Note:** Serverless API functions (`/api/*`) are only available via the Vercel runtime. For local development, API calls fall back to the mock client in `src/integrations/supabase/client.ts` which uses `localStorage`.

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `DATABASE_URL` | ✅ | Neon PostgreSQL pooled connection string |
| `DIRECT_URL` | ✅ | Neon PostgreSQL direct connection (Prisma migrations) |
| `JWT_SECRET` | ✅ | Secret key for signing HMAC-SHA256 session tokens |
| `ADMIN_PASSWORD` | ⬜ | Static fallback token for admin API access (defaults to `saimpexadmin`) |

> **Security:** Never commit `.env` to version control. The `.gitignore` file excludes it by default.

---

## Database Schema

Three models are defined in [`prisma/schema.prisma`](./prisma/schema.prisma):

### `Product`
Stores the product catalog synced from the database.

| Field | Type | Description |
|---|---|---|
| `id` | UUID | Primary key |
| `name` | String | Product name |
| `category` | String | Product category |
| `description` | String? | Optional description |
| `image_url` | String? | Product image path |
| `sku` | String? | Unique SKU identifier |
| `specs` | JSON | Technical specifications |
| `min_order_quantity` | Int | MOQ (default: 500) |
| `in_stock` | Boolean | Availability status |

### `Inquiry`
Stores customer inquiries submitted via the contact form.

| Field | Type | Description |
|---|---|---|
| `id` | UUID | Primary key |
| `name` | String | Customer name |
| `company` | String? | Company name |
| `email` | String | Contact email |
| `whatsapp` | String? | WhatsApp number |
| `product` | String? | Product of interest |
| `quantity` | String? | Required quantity |
| `sample_request` | Boolean | Whether a sample is requested |
| `message` | String | Inquiry message |
| `status` | String | `new` / `contacted` / `closed` |

### `User`
Admin users who can access the dashboard.

| Field | Type | Description |
|---|---|---|
| `id` | UUID | Primary key |
| `email` | String | Unique email |
| `password` | String | Hashed password (PBKDF2) |
| `full_name` | String? | Display name |
| `role` | String | `admin` (default) |

---

## API Endpoints

All endpoints are Vercel Serverless Functions located in the `/api` directory.

### `POST /api/auth`

Handles admin authentication.

**Actions:**

| Action | Body | Response |
|---|---|---|
| `login` | `{ action, email, password }` | `{ session: { access_token, user } }` |
| `register` | `{ action, email, password, fullName }` | `{ message, user }` |

### `POST /api/inquiries`

Submit a new customer inquiry (public, no auth required).

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Fashion Co.",
  "whatsapp": "+91XXXXXXXXXX",
  "product": "Metal Buttons",
  "quantity": "5000 pcs",
  "sample_request": true,
  "message": "Looking for zinc alloy jeans buttons."
}
```

### `GET /api/inquiries`

Returns all inquiries ordered by date descending.

> 🔒 **Requires** `Authorization: Bearer <token>` header.

### `PATCH /api/inquiries`

Updates the status of an inquiry.

> 🔒 **Requires** `Authorization: Bearer <token>` header.

```json
{ "id": "uuid", "status": "contacted" }
```

---

## PDF Catalog

The `/catalog` page lets customers download product catalogs as PDFs. All catalogs are stored in `public/pdf/` and served as static assets.

| Catalog | File | Size |
|---|---|---|
| Master Collection 2026 | `AII_buttons.pdf` | 4.4 MB |
| New Collections Lookbook | `new_coming.pdf` | 0.2 MB |
| Polyester & Plastic Series | `plastic_buttons.pdf` | 0.8 MB |
| Metal & Alloys | `metals_buttons.pdf` | 1.8 MB |
| Buckles Collection | `buckles.pdf` | — |
| Ring Adjusters | `ring_adjusters.pdf` | — |
| Wooden Buttons | `wooden_buttons.pdf` | — |
| Stoppers & Cord Accessories | `stoppers.pdf` | — |

Downloads use a **Blob fetch** strategy for reliable cross-browser and mobile downloads — avoiding browser "open-in-tab" behavior.

---

## Deployment

The project is deployed on **Vercel** with automatic deployments on every push to `main`.

### Deploy Your Own

1. Push the repository to GitHub.
2. Import the project on [Vercel](https://vercel.com/new).
3. Add all environment variables in **Vercel Project Settings → Environment Variables**.
4. Deploy — Vercel automatically runs `npm run build` (which runs `prisma generate`, `prisma db push`, and `vite build`).

### Build Command

```bash
npm run build
# Runs: node prisma-build.js
# → prisma generate
# → prisma db push
# → vite build
```

### Routing

[`vercel.json`](./vercel.json) configures URL rewrites so:
- `/api/*` routes to Vercel serverless functions
- All other routes serve `index.html` for client-side React Router navigation

---

## Admin Dashboard

The admin section at `/admin` allows authorized users to view and manage all customer inquiries.

### Access

1. Navigate to [`/auth`](https://www.saimpex.co.in/auth)
2. Sign in with your registered admin credentials
3. You will be redirected to `/admin` upon successful authentication

### Features

- 📋 View all customer inquiries in a sortable list
- 🔄 Update inquiry status: `New → Contacted → Closed`
- 📧 See customer contact details, WhatsApp, and product interests
- 🔒 Protected by JWT session tokens — expired sessions auto-redirect to `/auth`

### Authentication Flow

```
User submits credentials
  → POST /api/auth { action: "login", email, password }
  → Server verifies hashed password (PBKDF2-SHA256)
  → Generates HMAC-SHA256 signed token (24hr expiry)
  → Token stored in localStorage as session
  → Bearer token sent with every /api/inquiries request
```

---

## License

This project is proprietary. All rights reserved by **S.A. IMPEX**, New Delhi, India.

---

<div align="center">
  <strong>S.A. IMPEX</strong> · New Delhi, India<br/>
  <a href="https://www.saimpex.co.in">saimpex.co.in</a> · 
  <a href="mailto:saimpex2023@gmail.com">saimpex2023@gmail.com</a>
</div>
