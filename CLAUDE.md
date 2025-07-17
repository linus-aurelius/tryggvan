# TryggVän Project Guidelines

## Project Overview
TryggVän is a marketplace connecting adult children with trusted companions for their elderly parents. Focus on social companionship, trust, and warmth.

## Design Principles
- **Visual Style**: Round, friendly, simple - no fluff
- **Colors**: Warm coral (#FF6B6B), soft teal (#4ECDC4), off-white backgrounds
- **Typography**: Modern, readable, friendly (Inter for headings)
- **Components**: Rounded corners (8-16px), soft shadows, smooth transitions

## Tech Stack
- Next.js 14+ with App Router
- TypeScript
- Tailwind CSS
- Shadcn UI (customized for warmth)
- Mobile-first responsive design

## Core Pages
1. **Landing** (`/`): Hero with search, trust signals, category cards
2. **Marketplace** (`/companions`): Filterable list with companion cards
3. **Profile** (`/companions/[id]`): Detailed companion information

## Key Features
- Location-based search
- Activity filtering (promenader, fika, läsning, etc.)
- 5-star rating system
- Availability indicators
- Swedish language primary

## Component Patterns
- Card-based layouts
- Clear CTAs
- Trust indicators (ratings, verifications)
- Human-centered photography
- Accessible contrast ratios

## Future Considerations
- Database integration (PostgreSQL/Prisma)
- Authentication (NextAuth.js)
- Booking system
- Payment processing
- Messaging platform