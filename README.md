# Book My Event - Production Ready Platform

## 🚀 Quick Start

### 1. Environment Setup

```bash
cp .env.example .env.local
```

Fill in your credentials:
- **Supabase**: Get from https://supabase.com
- **Razorpay**: Get from https://dashboard.razorpay.com (test keys first)

### 2. Database Setup

1. Create a new Supabase project
2. Go to SQL Editor and run the schema from `docs/DATABASE_SCHEMA.sql`
3. Enable Auth in Supabase project settings

### 3. Install Dependencies

```bash
npm install
# or
bun install
```

### 4. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000`

---

## 📁 Project Structure

```
src/
├── routes/              # TanStack Router pages
│   ├── index.tsx        # Home page
│   ├── events.tsx       # Browse events
│   ├── events.$eventId.tsx # Event details & booking
│   └── organizer.tsx    # Organizer dashboard
├── components/          # Reusable React components
│   └── EventCard.tsx    # Event card with DB integration
├── lib/
│   ├── supabase.ts      # Database client & queries
│   └── razorpay.ts      # Payment utilities
├── types/
│   └── booking.ts       # TypeScript interfaces
└── styles.css           # Tailwind styles
```

---

## 🎯 Features Implemented

### ✅ Phase 1: Production Foundation

- [x] Environment configuration (`.env.example`)
- [x] Comprehensive TypeScript types (`src/types/booking.ts`)
- [x] Supabase database schema with RLS (`docs/DATABASE_SCHEMA.sql`)
- [x] Supabase client & helper functions (`src/lib/supabase.ts`)
- [x] Razorpay payment integration (`src/lib/razorpay.ts`)
- [x] Real event listing with dynamic filters (`src/routes/events.tsx`)
- [x] Reusable EventCard component (`src/components/EventCard.tsx`)
- [x] Event detail page with seat selection (`src/routes/events.$eventId.tsx`)

### ⏳ Phase 2: Payment System (Next)

- [ ] `/api/create-order` endpoint
- [ ] `/api/verify-payment` endpoint
- [ ] Razorpay checkout UI
- [ ] Payment success/failure handling

### ⏳ Phase 3: Booking Management

- [ ] Seat locking (5-minute mechanism)
- [ ] Real-time seat updates
- [ ] Booking confirmation
- [ ] Cart functionality

### ⏳ Phase 4: Ticket Generation

- [ ] QR code generation
- [ ] PDF ticket download
- [ ] Email delivery
- [ ] Digital ticket viewer

### ⏳ Phase 5: Organizer Dashboard

- [ ] Event management
- [ ] Sales analytics
- [ ] Revenue reports

### ⏳ Phase 6: Admin Panel

- [ ] User management
- [ ] Event approval workflow
- [ ] Platform analytics

---

## 🗄️ Database Tables

| Table | Purpose | Status |
|-------|---------|--------|
| `users` | Customer, organizer, admin accounts | ✅ Ready |
| `events` | Event details & inventory | ✅ Ready |
| `seats` | Individual seat tracking | ✅ Ready |
| `bookings` | Booking records & payment status | ✅ Ready |
| `organizers` | Organizer profiles & stats | ✅ Ready |
| `refund_requests` | Refund management | ✅ Ready |
| `payment_logs` | Payment audit trail | ✅ Ready |

---

## 💳 Payment Flow

1. **User selects seats** → Seats are "locked" for 5 minutes
2. **Click "Pay Now"** → Creates Razorpay order via `/api/create-order`
3. **Razorpay popup opens** → Accept UPI/Card/Wallet/Netbanking
4. **After payment** → Verify signature via `/api/verify-payment`
5. **Success** → Mark seats booked, generate QR ticket, send email

---

## 🔐 Security Features

- ✅ HMAC-SHA256 signature verification for Razorpay
- ✅ Row-Level Security (RLS) on all tables
- ✅ JWT authentication via Supabase
- ✅ Rate limiting ready (use Vercel middleware)
- ✅ Input sanitization via Zod schemas
- ✅ Environment variable separation

---

## 🎨 UI/UX Highlights

- Premium glassmorphism design (like BookMyShow + Stripe)
- Dark/light mode support via Tailwind
- Smooth animations with Framer Motion
- Responsive grid layouts
- Real-time seat visualization
- Toast notifications via Sonner

---

## 📦 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 19 + TanStack Router/Query |
| Styling | Tailwind CSS + Radix UI |
| Backend | TanStack Start (Server Actions) |
| Database | Supabase (PostgreSQL) |
| Payments | Razorpay API |
| Deployment | Vercel |
| Dev Tools | TypeScript, Vite, ESLint, Prettier |

---

## 🚢 Deployment to Vercel

1. Push to GitHub
2. Connect repo to Vercel
3. Set environment variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
   - `VITE_RAZORPAY_KEY_ID`
   - `RAZORPAY_KEY_SECRET`
   - `JWT_SECRET`
4. Deploy!

---

## 📝 Sample API Endpoints (To Be Built)

### Create Order
```bash
POST /api/create-order
{
  "eventId": "uuid",
  "seats": ["A1", "A2"],
  "userId": "uuid"
}
```

### Verify Payment
```bash
POST /api/verify-payment
{
  "razorpay_order_id": "...",
  "razorpay_payment_id": "...",
  "razorpay_signature": "..."
}
```

---

## 🎓 Learning Resources

- [Supabase Docs](https://supabase.com/docs)
- [Razorpay Integration](https://razorpay.com/docs/payment-gateway/integrate/)
- [TanStack Router](https://tanstack.com/router)
- [TanStack Query](https://tanstack.com/query)

---

## 🤝 Support

For production issues:
1. Check `.env.local` credentials
2. Verify Supabase tables exist
3. Check Razorpay test keys are set
4. Review browser console for errors

---

**Built with ❤️ for event booking lovers**
