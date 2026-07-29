# SAIMPEX — Premium Button Wholesale, Retailer & Garment Accessories Supplier

![SAIMPEX Website - Premium Garment Accessories Supplier](public/images/saimpex-hero-screenshot.jpg)

> **S.A. IMPEX** · Delivering world-class garment accessories — premium buttons, zippers, buckles, hooks, rings, and adjusters for global fashion brands, B2B wholesale buyers, and retail apparel partners.

🌐 **Live Site:** [saimpex.co.in](https://www.saimpex.co.in)

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Pages & Routes](#pages--routes)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Database Schema](#database-schema)
- [API Endpoints](#api-endpoints)
- [PDF Catalogs](#pdf-catalogs)
- [Deployment](#deployment)
- [Admin Dashboard](#admin-dashboard)

---

## About

**SAIMPEX** is a full-stack B2B and B2C web application for a premier garment accessories manufacturer, wholesaler, retailer, and exporter based in New Delhi, India.

| Detail | Info |
|---|---|
| **Company Name** | S.A. IMPEX |
| **Location** | New Delhi, India |
| **Business Scope** | B2B Wholesale · Retailer · Custom Manufacturing · Global Export |
| **Industry Experience** | 10+ Years of Manufacturing Excellence |
| **Global Reach** | 50+ Countries · 100+ Brand Partners · 1M+ Units Shipped |

### Product Portfolio

| Category | Products & Material Specifications |
|---|---|
| **Buttons** | Zinc Alloy, Solid Brass, Copper, Sustainable Polyester, Resin, Wooden, Natural Shell |
| **Zippers** | Heavy-duty Metal Zippers, Nylon Tapes, Invisible Zippers, Custom Sliders |
| **Buckles** | Belt Buckles, Outerwear Clasps, Custom Casted Fittings |
| **Hardware** | Precision Hooks, Eyes, Ring Adjusters, Strap Sliders, O-Rings, Snap Fasteners |
| **Trims & Accessories** | Cord Stoppers, Metal Aglets, Drawstring End Fittings |

---

## Features

- 🛍️ **Product Catalog** — Interactive catalog with category filtering, minimum order quantities (MOQ), and individual specification sheets.
- 📄 **Digital Technical Library & PDF Previews** — 8 high-resolution downloadable PDF catalogs with instant in-browser preview modals.
- 📬 **B2B Inquiry System** — Direct inquiry submission form integrated with Supabase database and one-click WhatsApp sales routing.
- 🔐 **Protected Admin Portal** — Secure admin dashboard (`/admin`) to manage, filter, and respond to incoming sales leads and sample requests.
- 🔑 **Authentication & Role Security** — Custom JWT authentication via Vercel serverless API handlers (`/api/auth`).
- 📱 **Responsive Design System** — Built with Tailwind CSS, custom fonts, glassmorphism, and Framer Motion micro-interactions.
- 🔍 **SEO & Search Engine Optimization** — Complete OpenGraph, Twitter Cards, canonical URL tags, and JSON-LD Schema.org structured data.

---

## Pages & Routes

| Route | Page | Description |
|---|---|---|
| `/` | **Home** | Hero banner, category showcase, best sellers grid, and company stats |
| `/products` | **Products** | Comprehensive product directory with category filters |
| `/product/:id` | **Product Detail** | Technical parameters, MOQ specifications, and inquiry CTAs |
| `/catalog` | **Catalog** | Technical PDF catalogs with in-browser preview modal viewer |
| `/contact` | **Contact** | B2B wholesale & retailer inquiry desk with WhatsApp integration |
| `/legal` | **Legal** | Terms of Trade, Privacy Policy, and Compliance disclosures |
| `/auth` | **Sign In / Admin Auth** | Secure login portal for SAIMPEX admin team |
| `/admin` | **Admin Dashboard** | Protected management portal for incoming client inquiries |

---

## Tech Stack

### Frontend
- **Framework:** React 18 + Vite 5
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 3 + shadcn/ui components
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **State & Data Fetching:** TanStack Query (React Query)
- **Forms & Validation:** React Hook Form + Zod

### Backend & Database
- **Serverless API:** Vercel Serverless Functions (`/api/*`)
- **Database:** Supabase PostgreSQL + Prisma ORM
- **Authentication:** Custom JWT Token Auth with HTTP-only Cookies / Bearer headers

---

## Getting Started

### Prerequisites
- Node.js (v18+) or Bun

### Installation

```bash
# Clone repository
git clone https://github.com/HA2345567/SAIMPEX.git
cd SAIMPEX

# Install dependencies
bun install   # or npm install

# Start local development server
bun dev       # or npm run dev
```

The application will run locally at `http://localhost:8080`.

---

## Contact & Information

- 🌐 **Website:** [https://www.saimpex.co.in](https://www.saimpex.co.in)
- 📧 **Email:** [saimpex2023@gmail.com](mailto:saimpex2023@gmail.com)
- 📞 **Phone:** +91 98188 64648
- 📍 **Address:** 276/4, 3rd floor, LHS, Govindpuri, New Delhi, India 110019
