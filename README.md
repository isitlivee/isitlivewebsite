# Isitlive - Website

**"Know What You're Walking Into - Save the Pain of Long Lines and Shitty Music"**

A modern, responsive website for the Isitlive app that helps college students find the best bars and clubs for their night out.

## 🎯 About Isitlive

Isitlive is an innovative app designed specifically for college students who want to make informed decisions about where to go out for the night. The app provides real-time information about bars and clubs including:

- **Live Camera Footage** - See actual line lengths and crowd sizes
- **Wait Time Estimates** - Know exactly how long you'll wait to get in
- **Food & Drink Menus** - Browse complete menus with pricing
- **DJ & Music Information** - Discover what genre and who's playing tonight
- **College-Specific Areas** - Find venues around your campus

## 🚀 Features

### Website Features
- **Modern Dark Theme** - Appealing to college students with vibrant gradients
- **Fully Responsive** - Works perfectly on all devices and screen sizes
- **Interactive Demos** - Live college selection and venue information displays
- **Smooth Animations** - Engaging scroll animations and transitions
- **Mobile Navigation** - Hamburger menu for mobile devices
- **Contact Integration** - Direct links to Instagram and email

### Interactive Elements
- Auto-rotating college selection demo
- Dynamic venue information updates
- Animated statistics counters
- Smooth scrolling navigation
- Button ripple effects
- "Coming Soon" download notifications

## 📱 Slogans

- **Primary**: "Know what you're walking into - save the pain of long lines and Shitty music."
- **Secondary**: "We Spy the Line So You Don't Cry in It."

## 🛠️ Setup Instructions

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - runs entirely in the browser

### Installation

1. **Download the files**
   ```bash
   # If you have git installed
   git clone <repository-url>
   
   # Or download the files directly
   # - index.html
   # - style.css
   # - script.js
   # - README.md
   ```

2. **Open the website**
   - Simply double-click `index.html` to open in your default browser
   - Or drag and drop `index.html` into any browser window
   - For development, you can use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (if you have live-server installed)
     npx live-server
     ```

3. **View the website**
   - Navigate to `http://localhost:8000` if using a local server
   - Or simply open the `index.html` file directly

## 📁 File Structure

```
isitlive-website/
├── index.html          # Main HTML structure
├── style.css           # All styling and responsive design
├── script.js           # Interactive functionality
└── README.md          # This file
```

## 🎨 Design Features

### Color Scheme
- **Primary Colors**: 
  - Coral Red (`#ff6b6b`)
  - Turquoise (`#4ecdc4`)
  - Sky Blue (`#45b7d1`)
- **Background**: Dark gradient (`#0F0F23` to `#16213e`)
- **Text**: White and light gray for contrast

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 600, 700, 800
- **Hierarchy**: Clear distinction between headings and body text

### Layout
- **Grid-based**: Responsive CSS Grid and Flexbox
- **Mobile-first**: Designed for mobile with desktop enhancements
- **Sections**: Hero, Features, How It Works, Demo, Stats, CTA, Footer

## 📊 Sections Overview

1. **Navigation Bar**
   - Fixed position with backdrop blur
   - Responsive hamburger menu for mobile
   - Smooth scroll to sections

2. **Hero Section**
   - Compelling headline with gradient text
   - App download buttons (with "Coming Soon" functionality)
   - Interactive phone mockup with college selection demo

3. **Features Grid**
   - 6 key features with icons and descriptions
   - Hover animations and gradient icons
   - Mobile-responsive card layout

4. **How It Works**
   - 4-step process explanation
   - Numbered circles with gradient backgrounds
   - Clear, actionable descriptions

5. **Interactive Demo**
   - Live venue information display
   - Auto-updating content every 4 seconds
   - Realistic bar/club data simulation

6. **Statistics Section**
   - Animated counters (50K users, 2.5K venues, 150 cities)
   - Triggered by scroll position
   - Smooth easing animations

7. **Call-to-Action**
   - Final download prompts
   - Gradient background section
   - Mobile app store buttons

8. **Footer**
   - Contact information
   - Social media links
   - Company tagline

## 📱 Mobile Responsiveness

The website is fully responsive with breakpoints at:
- **768px and below**: Tablet and mobile layout
- **480px and below**: Small mobile optimization

### Mobile Features
- Hamburger navigation menu
- Stacked layouts instead of grids
- Optimized touch targets
- Reduced font sizes for readability
- Single-column hero section

## 🔧 JavaScript Functionality

### Classes and Features
- **CollegeSelector**: Auto-rotating college options in phone demo
- **VenueDemo**: Dynamic venue information updates
- **ScrollAnimations**: Intersection Observer for scroll-triggered animations
- **DownloadButtons**: Interactive button effects with ripples
- **StatsCounter**: Animated number counting on scroll
- **NavbarScroll**: Background changes on scroll

### Interactive Elements
- Smooth scrolling navigation
- Mobile menu toggle
- Button ripple effects
- Auto-updating demo content
- Scroll-triggered animations

## 📞 Contact Information

- **Instagram**: [@isitlivee](https://instagram.com/isitlivee)
- **Email**: [isitlivelines@gmail.com](mailto:isitlivelines@gmail.com)

## 🌐 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Notes

- All external dependencies are loaded via CDN (Google Fonts, Font Awesome)
- No build process required
- Optimized for performance with CSS Grid and modern JavaScript
- Uses CSS custom properties for consistent theming
- Includes proper semantic HTML for accessibility

## 🚀 Deployment

### GitHub Pages
1. Upload files to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop the project folder to [Netlify](https://netlify.com)
2. Get instant deployment with automatic HTTPS

### Traditional Web Hosting
1. Upload all files to your web server
2. Ensure `index.html` is in the root directory
3. No server-side configuration needed

---

**Built for college students who deserve to know what they're walking into. 🎉**