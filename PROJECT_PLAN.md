# TryggVän - Senior Companion Marketplace Project Plan

## Project Overview
A modern marketplace platform connecting adult children with trusted companions who can provide social companionship for their elderly parents. The platform prioritizes trust, warmth, and simplicity.

## Design Philosophy
- **Round, friendly, simple** - no fluff or unnecessary complexity
- Modern, clean aesthetic inspired by Care.com's functional approach
- Warm, welcoming colors with soft edges and friendly typography
- Focus on human connection and trust

## Technical Stack
- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: Shadcn UI (customized for warmth and friendliness)
- **State Management**: React Context (initially, Redux/Zustand for scale)
- **Database**: PostgreSQL with Prisma ORM (future)
- **Authentication**: NextAuth.js (future)
- **Image Handling**: Next.js Image optimization
- **Deployment**: Vercel

## Core Pages (Phase 1 - Visual Only)

### 1. Landing Page (`/`)
- Hero section with search functionality
- Trust indicators and value proposition
- Category cards for different companionship types
- Simple CTA to explore companions
- Clean navigation with login/signup buttons

### 2. Marketplace (`/companions`)
- Filter sidebar:
  - Location/area selection
  - Activity types (promenader, fika, läsning, handarbete, etc.)
  - Availability
  - Price range
  - Languages spoken
- Companion cards showing:
  - Profile photo
  - Name and location
  - Short bio/tagline
  - Rating (5-star system)
  - Price per hour
  - 2-3 activity badges
  - Availability indicator
- Search and sort functionality
- Pagination or infinite scroll

### 3. Companion Profile (`/companions/[id]`)
- Hero section with photo and basic info
- Detailed about section
- Services offered with icons
- Availability calendar
- Reviews and ratings
- Photo gallery of activities
- Contact/booking button
- Similar companions section

## Design System

### Colors
```css
- Primary: Warm coral/salmon (#FF6B6B)
- Secondary: Soft teal (#4ECDC4)
- Background: Off-white (#FAFAFA)
- Card backgrounds: Pure white (#FFFFFF)
- Text primary: Dark charcoal (#2D3436)
- Text secondary: Medium gray (#636E72)
- Success: Soft green (#00B894)
- Border: Light gray (#E0E0E0)
```

### Typography
- Headings: Inter or similar modern sans-serif
- Body: System font stack for readability
- Friendly, readable sizes (16px base)

### Components
- Rounded corners (8-16px radius)
- Soft shadows for depth
- Smooth transitions
- Accessible contrast ratios
- Mobile-first responsive design

## Future Considerations
- User authentication system
- Booking and payment integration
- Messaging system
- Review and rating system
- Admin dashboard
- Companion onboarding flow
- Background check integration
- Mobile app

## Development Phases

### Phase 1 (Current)
- Project setup with Next.js, TypeScript, Tailwind, Shadcn
- Landing page implementation
- Marketplace list view
- Individual profile pages
- Basic routing and navigation

### Phase 2
- Database schema design
- API routes for data fetching
- Search and filter functionality
- User authentication

### Phase 3
- Booking system
- Payment integration
- Messaging platform
- Review system

### Phase 4
- Admin dashboard
- Analytics
- Mobile optimization
- Performance optimization

## Key Design Inspiration Elements
- Care.com's practical card-based layout
- Warm, human-centered photography
- Clear CTAs and user journey
- Trust signals (verifications, reviews)
- Simple, scannable information hierarchy