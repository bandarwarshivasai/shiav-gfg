# GFG Campus Body - College Club Website

## Overview
A modern, responsive single-page application for a college coding club built with React, TypeScript, Tailwind CSS, and Express. Features smooth animations, a GeeksforGeeks-inspired green color scheme, and a fully functional contact form.

## Project Structure
```
├── client/
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   │   ├── Navbar.tsx    # Fixed navigation with smooth scroll
│   │   │   ├── Hero.tsx      # Hero section with CTA
│   │   │   ├── About.tsx     # Mission and statistics
│   │   │   ├── Team.tsx      # Member profile cards
│   │   │   ├── Contact.tsx   # Contact form with backend integration
│   │   │   └── Footer.tsx    # Footer with links
│   │   ├── pages/
│   │   │   └── Home.tsx      # Main page composition
│   │   └── App.tsx           # Route configuration
├── server/
│   ├── routes.ts             # API endpoints for contact form
│   └── storage.ts            # In-memory data storage
└── shared/
    └── schema.ts             # Shared TypeScript types and Zod schemas
```

## Features

### Frontend
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Framer Motion scroll animations
- **Navigation**: Smooth scrolling to sections, mobile hamburger menu
- **Hero Section**: Full-screen hero with background image and gradient overlay
- **About Section**: Club mission, offerings, and achievement statistics
- **Team Section**: Profile cards for 6 core team members with social links
- **Contact Form**: Fully functional form with validation and success feedback
- **Footer**: Quick links and social media connections

### Backend
- **Contact Form API**: POST endpoint for form submissions
- **Data Persistence**: In-memory storage for contact submissions
- **Validation**: Zod schema validation for all submissions

## Color Scheme
GeeksforGeeks-inspired green palette:
- Primary: `#008000` (HSL: 142 100% 25%)
- Secondary: `#00b140` (used for accents)
- Neutral backgrounds and text colors for optimal readability

## Recent Changes (October 29, 2025)
- Created complete single-page college club website
- Implemented responsive navigation with smooth scroll functionality
- Added hero section with background image and call-to-action
- Built about section with statistics cards
- Created team section with 6 member profile cards
- Implemented fully functional contact form with backend API
- Added footer with navigation and social links
- Configured custom Tailwind theme with GeeksforGeeks green colors
- Integrated Framer Motion for smooth scroll animations
- Added comprehensive SEO meta tags and favicon
- Tested all functionality including form submission and responsive design

## Tech Stack
- **Frontend**: React 18, TypeScript, Wouter (routing), Tailwind CSS, Framer Motion
- **Backend**: Express, Node.js
- **Validation**: Zod
- **State Management**: TanStack Query (React Query)
- **UI Components**: Custom components + shadcn/ui primitives
- **Build Tool**: Vite

## API Endpoints

### Contact Form
- `POST /api/contact` - Submit contact form
  - Request body: `{ name: string, email: string, message: string }`
  - Response: `{ success: boolean, submission: ContactSubmission }`

- `GET /api/contact` - Retrieve all submissions
  - Response: Array of ContactSubmission objects

## Running the Project
The application runs on a single port (5000) with both frontend and backend:
```bash
npm run dev
```

The workflow "Start application" is configured to automatically run this command.

## User Preferences
- Modern, clean design aesthetic
- Green and white color palette (GeeksforGeeks-inspired)
- Smooth animations and transitions
- Mobile-responsive throughout
- Professional yet approachable feel for a college club

## Future Enhancements
- Database persistence (PostgreSQL)
- Events/activities section with calendar
- Blog or resources section for technical content
- Member registration and authentication
- Projects showcase gallery
- Admin dashboard for managing submissions
