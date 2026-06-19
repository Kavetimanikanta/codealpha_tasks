# Image Gallery Website

A beautiful, responsive image gallery with modern features including lightbox view, image filtering, and smooth animations.

## Features

✨ **Core Features:**
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Image Gallery Grid** - Auto-responsive grid layout with CSS Grid
- **Lightbox View** - Click any image to view it in full screen
- **Navigation Controls** - Previous/Next buttons to browse images in lightbox
- **Hover Effects** - Smooth animations and visual feedback on hover
- **Smooth Transitions** - CSS transitions for all interactive elements

🎨 **Advanced Features:**
- **Image Filters/Categories** - Filter images by categories (Nature, City, Animals, Technology)
- **Keyboard Navigation** - Use arrow keys to navigate in lightbox, ESC to close
- **Touch Gestures** - Swipe left/right on mobile to navigate between images
- **Category Badges** - Display image category on hover
- **Lazy Loading** - Optimized image loading for better performance
- **Animations** - Fade-in effects and scale animations for smooth UX

## File Structure

```
image gallery/
├── index.html       # Main HTML structure
├── styles.css       # Styling and responsive design
├── script.js        # JavaScript functionality
└── README.md        # This file
```

## How to Use

1. **Open the Gallery**: Open `index.html` in your web browser
2. **Browse Images**: The gallery displays all images in a responsive grid
3. **Filter Images**: Click filter buttons (All, Nature, City, Animals, Technology) to filter by category
4. **View Full Screen**: Click any image to open it in lightbox view
5. **Navigate**: 
   - Use Next/Previous buttons to navigate between images
   - Use arrow keys (← →) for keyboard navigation
   - Swipe left/right on mobile devices
   - Press ESC to close the lightbox

## Features Breakdown

### Responsive Design
- **Desktop**: 3-4 column grid
- **Tablet**: 2-3 column grid
- **Mobile**: 1-2 column grid (adjustable based on screen size)

### Interactive Elements
- Filter buttons with active state
- Hover effects on gallery items (scale and brightness change)
- Smooth transitions on all animations
- Disabled navigation buttons when only one image is visible

### Accessibility
- Semantic HTML structure
- Image alt text for accessibility
- Keyboard navigation support
- Mobile-friendly touch controls

## Customization

### Adding New Images
Edit `index.html` and add new `gallery-item` divs:

```html
<div class="gallery-item" data-category="nature">
    <img src="image-url" alt="Image description" loading="lazy">
    <div class="overlay">
        <span class="category-badge">Nature</span>
    </div>
</div>
```

### Adding New Categories
1. Add a filter button in `index.html`:
```html
<button class="filter-btn" data-filter="new-category">New Category</button>
```

2. Add the category to gallery items using `data-category="new-category"`

### Modifying Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #6c63ff;
    --secondary-color: #ff006e;
    --dark-bg: #1a1a2e;
    --light-bg: #f5f5f5;
}
```

### Adjusting Grid Layout
Change grid columns in `styles.css`:
```css
.gallery {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
```

## Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Notes

- Uses Unsplash API for images (free, high-quality)
- Lazy loading implemented for images
- Smooth 60fps animations
- Optimized for mobile devices

## License

This project is free to use and modify for personal and commercial projects.

---

Enjoy your beautiful image gallery! 🎨
