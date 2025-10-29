# Design Guidelines: College Club Website (GFG-Inspired)

## Design Approach
**Reference-Based Design** drawing from GeeksforGeeks' signature aesthetic combined with modern educational platform patterns from sites like Coursera and edX. The design emphasizes clarity, accessibility, and community-focused engagement.

## Color System
- **Primary Green:** #008000 (main brand color for headers, CTAs, active states)
- **Secondary Green:** #00b140 (accents, hover states, secondary buttons)
- **Neutral Base:** White (#FFFFFF) for backgrounds and cards
- **Text:** Dark gray (#1a1a1a) for body text, #4a4a4a for secondary text
- **Borders:** Light gray (#e5e5e5) for subtle separations

## Typography
- **Font Family:** Inter for headings and body (via Google Fonts CDN)
- **Heading Hierarchy:**
  - H1 (Hero): 3.5rem (56px) bold, leading-tight, tracking-tight
  - H2 (Section): 2.5rem (40px) bold, leading-tight
  - H3 (Cards): 1.5rem (24px) semibold
  - H4 (Subsections): 1.25rem (20px) medium
- **Body Text:** 1rem (16px) regular, leading-relaxed for optimal readability
- **Small Text:** 0.875rem (14px) for captions and footer content

## Layout System
**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, and 24 (p-4, m-6, gap-8, etc.)
- **Container:** max-w-7xl with px-6 padding, centered
- **Section Spacing:** py-20 on desktop, py-12 on mobile between major sections
- **Component Gaps:** gap-6 for cards, gap-4 for form elements
- **Vertical Rhythm:** Consistent mb-4 for paragraphs, mb-8 for section breaks

## Component Library

### Navigation Bar
- Fixed top, white background with subtle shadow (shadow-md)
- Height: h-16 or h-20
- Left: Logo placeholder (40px × 40px circle or square) + "GFG Campus Body" text (text-xl font-bold)
- Right: Horizontal nav links (Home, About, Team, Contact) with green underline on active
- Mobile: Hamburger menu (≤768px) with slide-in drawer
- Z-index: z-50 to stay above all content

### Hero Section
- **Layout:** Full viewport height (min-h-screen), flex centered content
- **Background:** Large hero image showing students collaborating/coding with dark gradient overlay (bg-gradient-to-r from-black/70 to-black/40)
- **Content Structure:**
  - Club name/tagline (H1 in white, text-center)
  - Subtitle describing mission (text-xl, text-gray-200)
  - Primary CTA button with blurred background (backdrop-blur-sm bg-white/10 border-2 border-white text-white, px-8 py-4 rounded-lg)
- **Visual Treatment:** Blurred glass-morphism effect for button, no hover interactions on transparent buttons

### About Section
- **Layout:** Two-column on desktop (lg:grid-cols-2), stacked on mobile
- **Left Column:** Heading + 2-3 paragraphs describing club purpose, mission, activities
- **Right Column:** Achievement stats in grid (2×2):
  - Icon (from Heroicons via CDN)
  - Large number (text-4xl font-bold text-primary)
  - Label (text-sm text-gray-600)
  - Each stat in card with p-6, rounded-xl, bg-gray-50
- **Container:** max-w-6xl centered

### Team Section
- **Layout:** Grid of profile cards (grid-cols-1 md:grid-cols-2 lg:grid-cols-3, gap-8)
- **Profile Card:**
  - Image: 200px × 200px circular photo (rounded-full), centered
  - Name: text-xl font-semibold, mt-4
  - Role: text-primary font-medium
  - Bio: 1-2 lines (text-sm text-gray-600)
  - Social Links: Row of 3-4 icons (GitHub, LinkedIn, Twitter) with hover:text-primary transition
  - Card styling: bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all
- **Minimum Members:** 6-9 core team members displayed

### Contact Section
- **Layout:** Two-column on desktop (lg:grid-cols-5, gap-12)
- **Left Column (3/5 width):** Contact form
  - Fields: Full Name, Email, Message (textarea)
  - Input styling: w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20
  - Submit button: w-full bg-primary text-white py-3 rounded-lg font-semibold
  - Labels: text-sm font-medium text-gray-700 mb-2
- **Right Column (2/5 width):** Contact information card
  - College address with location icon
  - Email with envelope icon
  - Social media links with respective icons
  - Card: bg-green-50 p-8 rounded-xl
- **Background:** Light gray (bg-gray-50) for full section

### Footer
- **Layout:** Three-column grid (md:grid-cols-3) with py-12
- **Column 1:** Club logo + tagline (text-sm text-gray-600)
- **Column 2:** Quick links (About, Events, Team, Join Us)
- **Column 3:** Social media icons + newsletter signup prompt
- **Bottom Bar:** Thin border-top with copyright (text-center text-sm text-gray-500)
- **Background:** Dark green (#006400) with white text for contrast

## Animations
- **Scroll Animations:** Fade-up on scroll for section entries (using Framer Motion or AOS)
- **Timing:** Stagger children by 0.1s in Team section
- **Hover States:** Subtle scale-105 transform on cards, smooth color transitions on links
- **Navigation:** Smooth scroll behavior for anchor links

## Images
- **Hero Image:** Full-width background showing diverse students coding/collaborating in modern space (1920×1080 minimum). Apply dark overlay for text contrast.
- **Team Photos:** Professional headshots with consistent lighting, 400×400px minimum, circular crop
- **Optional:** 1-2 photos in About section showing club activities/events (if space allows)

## Responsive Breakpoints
- Mobile: Base styles (≤640px) - single column, stacked navigation
- Tablet: md (768px) - two columns where appropriate
- Desktop: lg (1024px+) - full multi-column layouts, horizontal navigation

## Accessibility
- ARIA labels on all interactive elements
- Keyboard navigation support for menu and forms
- Sufficient color contrast (WCAG AA minimum)
- Focus indicators on all focusable elements (ring-2 ring-primary)

## Meta & SEO
- Favicon: 32×32px icon with green "G" or club initials on white background
- Title: "[Club Name] | [College Name]"
- Description: Brief club mission statement (150-160 characters)
- Open Graph tags for social sharing with hero image