# TryggVän - Current Application Flow

## Overview
TryggVän is a two-sided marketplace connecting families seeking companions for elderly relatives with qualified caregivers. The platform enables both sides to create profiles, browse, and communicate directly.

## Core Pages & Features

### 1. **Homepage** (`/`)
- **Hero section** with location search
- **Activity cards** for different types of care (Promenader, Fika, etc.)
- **How it works** section explaining the 3-step process
- **Navigation links:**
  - "Letar du efter jobb?" → `/create-profile` (for caregivers)
  - "Vårdgivare?" → `/care-seekers` (for browsing families)
- **Login/Register buttons** → Opens popups

### 2. **Caregiver Profiles System**

#### **Browse Caregivers** (`/companions`)
- **Search & filter** by location, activities, price, availability, languages
- **Caregiver cards** showing photo, name, rating, price, bio, activities
- **Sorting options** (relevance, price, rating)
- **Filter sidebar** with checkboxes and sliders

#### **Individual Caregiver Profile** (`/companions/[id]`)
- **Profile photo** and basic info (name, location, age, rating)
- **About section** with personal bio
- **Activities offered** as badges
- **Details** (availability, languages, experience, minimum booking)
- **Reviews** from families
- **Similar caregivers** suggestions
- **Contact buttons** (message, availability)

#### **Create Caregiver Profile** (`/create-profile`)
- **5-step registration process:**
  1. Basic info (name, email, phone, age, personnummer)
  2. Location and bio
  3. Activities offered (multi-select)
  4. Experience and detailed availability schedule
  5. Photo upload and profile summary
- **Progress bar** and step navigation
- **Results in** → `/profile-created` confirmation page

### 3. **Family/Care-Seeker System**

#### **Browse Families** (`/care-seekers`)
*(Exempel på hur det ser ut för vårdgivare som letar jobb)*
- **Search & filter** by location, interests, age range, frequency, start date
- **Family cards** showing elderly person's info, care needs, posted date
- **Verification badges** for trusted families
- **Filter sidebar** with age slider and checkboxes

#### **Individual Family Profile** (`/care-seekers/[id]`)
*(Exempel på hur det ser ut för vårdgivare som letar jobb)*
- **Elderly person's profile** (name, age, location, mobility, interests)
- **Care needs** (frequency, duration, timing, special requirements)
- **Family contact** information and relation
- **Living situation** and mobility details
- **Similar families** in the area
- **Contact buttons** to message family

#### **Family Registration** (via popup)
- **4-step process:**
  1. **Who needs help?** (elderly person's name, age, location, living situation, mobility, interests)
  2. **What activities?** (activities and interests they enjoy)
  3. **When and how often?** (frequency, duration, timing, start date, special needs)
  4. **About you** (your contact info and relation to elderly person)
- **Results in** → `/care-seekers/[id]` (their created profile)

### 4. **Authentication System**

#### **Login Popup**
- **Email/password** authentication
- **Remember me** checkbox
- **Forgot password** link
- **Registration options:**
  - "Sök sällskap" → Opens family registration
  - "Arbeta som sällskap" → `/create-profile`

#### **Registration Popup** 
- **Multi-step form** for families seeking care
- **Creates searchable profile** instead of just form submission
- **Updated messaging** about browsing caregivers yourself

### 5. **Messaging System** (`/messages`)
- **Conversation list** with search functionality
- **Chat interface** with real-time messaging
- **Message status indicators** (sent, delivered, read)
- **Contact type badges** ("Familie söker hjälp" vs "Vårdgivare")
- **Action buttons** (call, video, schedule, more options)
- **Online/offline status** indicators

### 6. **Navigation Structure**
- **Main nav:** Hem, Sök sällskap, Familjer, Meddelanden, Konto
- **Two-way browsing:**
  - Families can browse caregivers (`/companions`)
  - Caregivers can browse families (`/care-seekers`)

## Key Features

### **Two-Sided Marketplace**
- Both families and caregivers can create profiles
- Both sides can browse and discover each other
- Direct messaging between parties
- No automatic matching - users choose who to contact

### **Trust & Safety**
- Verification badges for both sides
- Review system for caregivers
- GDPR-compliant data handling
- Secure messaging platform

### **User Experience**
- **Mobile-first responsive design**
- **Warm, friendly design language** (rounded corners, soft colors)
- **Consistent navigation** across all pages
- **Clear value propositions** on each page
- **Progressive disclosure** in registration forms

### **Registration Flow Philosophy**
- **Family registration:** Start with who needs help, end with contact info
- **Caregiver registration:** Comprehensive profile creation
- **No budget discussion** during registration (handled later)
- **Focus on fit over price** in initial matching

## Technical Implementation
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Shadcn UI** components (customized)
- **Lucide React** icons
- **Responsive design** for all screen sizes

## Future Considerations
- Database integration for real profiles
- Real-time messaging implementation
- Payment processing system
- Advanced matching algorithms
- Video call integration
- Booking/scheduling system
- Background check integration