# BID LOGISTICS - Technical Specification

## 1. Component Inventory

### shadcn/ui Components (Built-in)
| Component | Purpose | Customization |
|-----------|---------|---------------|
| Button | CTAs, form submissions | Orange theme, custom sizing |
| Card | Feature cards, pricing, blog | Custom shadows, hover effects |
| Input | Search, newsletter form | Orange focus state |
| NavigationMenu | Header navigation | Custom styling |
| Sheet | Mobile menu drawer | Slide from right |
| Carousel | Team members, testimonials | Auto-scroll, custom arrows |
| Dialog | Modal / lightbox | Fullscreen images |
| Badge | Labels, tags | Orange accent |
| Separator | Section dividers | Light gray |

### Third-Party Registry Components
| Component | Registry | Purpose |
|-----------|----------|---------|
| @magicui/marquee | magicui | Client logos scroll |
| @aceternity/timeline | aceternity | Shipping steps visualization |

### Custom Components
| Component | Purpose | Props |
|-----------|---------|-------|
| Header | Fixed navigation | - |
| HeroSection | Main hero with trucks | - |
| TrustedBy | Client logos | logos[] |
| FeaturesSection | Feature cards | features[] |
| TeamSection | Team carousel | members[] |
| AboutSection | Customs clearance | - |
| PricingSection | Pricing cards | plans[] |
| StepsSection | Shipping process | steps[] |
| BlogSection | Blog cards | posts[] |
| NewsletterSection | Email signup | - |
| Footer | Site footer | - |
| ScrollReveal | Animation wrapper | children, delay |
| SectionHeader | Consistent headers | title, subtitle, label |

---

## 2. Animation Implementation Table

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| Page load fade-in | Framer Motion | AnimatePresence + initial/animate | Low |
| Navbar scroll shadow | React hooks | useScroll + conditional class | Low |
| Hero text stagger | Framer Motion | staggerChildren + variants | Medium |
| Hero parallax | Framer Motion | useScroll + useTransform | Medium |
| Scroll reveal (fade up) | Framer Motion | whileInView + viewport | Low |
| Card hover lift | CSS/Tailwind | hover:translate-y + shadow | Low |
| Button hover scale | CSS/Tailwind | hover:scale-102 | Low |
| Team carousel | Embla Carousel | Auto-scroll plugin | Medium |
| Image hover zoom | CSS/Tailwind | group-hover:scale-105 | Low |
| Logo marquee | @magicui/marquee | Built-in component | Low |
| Steps connector draw | Framer Motion | pathLength animation | Medium |
| Counter animation | Framer Motion | useSpring + useInView | Medium |
| Mobile menu slide | Sheet component | Built-in animation | Low |

---

## 3. Animation Library Choices

### Primary: Framer Motion
- **Rationale**: Best React integration, declarative API, excellent scroll animations
- **Use for**: Page transitions, scroll reveals, hover effects, complex sequences

### Secondary: CSS/Tailwind
- **Rationale**: Performance, simplicity for basic effects
- **Use for**: Simple hovers, transitions, transforms

### Supporting: Embla Carousel
- **Rationale**: Lightweight, performant, good React support
- **Use for**: Team carousel, testimonial slider

---

## 4. Project File Structure

```
/mnt/okcomputer/output/app/
├── public/
│   ├── images/
│   │   ├── hero-trucks.png
│   │   ├── team/
│   │   └── blog/
│   └── fonts/
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ScrollReveal.tsx
│   │   └── SectionHeader.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── TrustedBy.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── TeamSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── PricingSection.tsx
│   │   ├── StepsSection.tsx
│   │   ├── BlogSection.tsx
│   │   └── NewsletterSection.tsx
│   ├── hooks/
│   │   ├── useScrollPosition.ts
│   │   └── useInView.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── components.json
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## 5. Dependencies

### Core
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "typescript": "^5.0.0"
}
```

### Animation
```json
{
  "framer-motion": "^11.0.0"
}
```

### UI Components
```json
{
  "@radix-ui/react-*": "latest",
  "class-variance-authority": "latest",
  "clsx": "latest",
  "tailwind-merge": "latest"
}
```

### Carousel
```json
{
  "embla-carousel-react": "^8.0.0",
  "embla-carousel-autoplay": "^8.0.0"
}
```

### Icons
```json
{
  "lucide-react": "latest"
}
```

---

## 6. Key Implementation Notes

### Scroll Reveal Pattern
```tsx
// Reusable scroll reveal wrapper
const ScrollReveal = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ 
      duration: 0.6, 
      delay,
      ease: [0.25, 0.46, 0.45, 0.94] 
    }}
  >
    {children}
  </motion.div>
);
```

### Stagger Animation Pattern
```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};
```

### Header Scroll Effect
```tsx
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

---

## 7. Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Mobile | < 640px | Single column, hamburger menu |
| Tablet | 640-1024px | 2 columns, condensed spacing |
| Desktop | > 1024px | Full layout, all features |

---

## 8. Performance Considerations

1. **Images**: Use WebP format, lazy loading, proper sizing
2. **Animations**: Use `transform` and `opacity` only
3. **Fonts**: Preload critical fonts, use `font-display: swap`
4. **Code Splitting**: Lazy load below-fold sections
5. **Reduced Motion**: Respect `prefers-reduced-motion`
