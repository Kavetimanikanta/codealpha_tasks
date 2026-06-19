// Default Gallery Images (62+ images) - Using reliable image source
const defaultImages = [
    // Nature Images (16)
    { url: 'https://picsum.photos/400/300?random=1', alt: 'Snow-capped mountain landscape', category: 'nature' },
    { url: 'https://picsum.photos/400/300?random=2', alt: 'Dense forest with sunlight', category: 'nature' },
    { url: 'https://picsum.photos/400/300?random=3', alt: 'Scenic sunset over mountains', category: 'nature' },
    { url: 'https://picsum.photos/400/300?random=4', alt: 'Ocean waves at sunset', category: 'nature' },
    { url: 'https://picsum.photos/400/300?random=5', alt: 'Green valley landscape', category: 'nature' },
    { url: 'https://picsum.photos/400/300?random=6', alt: 'Alpine peaks at dawn', category: 'nature' },
    { url: 'https://picsum.photos/400/300?random=7', alt: 'Mountain terrain view', category: 'nature' },
    { url: 'https://picsum.photos/400/300?random=8', alt: 'Misty valley morning', category: 'nature' },
    { url: 'https://picsum.photos/400/300?random=9', alt: 'Autumn forest leaves', category: 'nature' },
    { url: 'https://picsum.photos/400/300?random=10', alt: 'Tropical beach waves', category: 'nature' },
    { url: 'https://picsum.photos/400/300?random=11', alt: 'Lush green meadow', category: 'nature' },
    { url: 'https://picsum.photos/400/300?random=12', alt: 'Rocky mountain peak', category: 'nature' },
    { url: 'https://picsum.photos/400/300?random=13', alt: 'Rolling hills landscape', category: 'nature' },
    { url: 'https://picsum.photos/400/300?random=14', alt: 'Lake reflection nature', category: 'nature' },
    { url: 'https://picsum.photos/400/300?random=15', alt: 'Forest canopy sunlight', category: 'nature' },
    { url: 'https://picsum.photos/400/300?random=16', alt: 'Waterfall cascading', category: 'nature' },

    // City Images (16)
    { url: 'https://picsum.photos/400/300?random=17', alt: 'Downtown city skyline', category: 'city' },
    { url: 'https://picsum.photos/400/300?random=18', alt: 'Urban street photography', category: 'city' },
    { url: 'https://picsum.photos/400/300?random=19', alt: 'Metropolitan cityscape', category: 'city' },
    { url: 'https://picsum.photos/400/300?random=20', alt: 'Busy city street corner', category: 'city' },
    { url: 'https://picsum.photos/400/300?random=21', alt: 'Night city lights', category: 'city' },
    { url: 'https://picsum.photos/400/300?random=22', alt: 'Urban architecture detail', category: 'city' },
    { url: 'https://picsum.photos/400/300?random=23', alt: 'Modern skyscrapers', category: 'city' },
    { url: 'https://picsum.photos/400/300?random=24', alt: 'Neon-lit city streets', category: 'city' },
    { url: 'https://picsum.photos/400/300?random=25', alt: 'City intersection', category: 'city' },
    { url: 'https://picsum.photos/400/300?random=26', alt: 'Urban street market', category: 'city' },
    { url: 'https://picsum.photos/400/300?random=27', alt: 'Downtown park', category: 'city' },
    { url: 'https://picsum.photos/400/300?random=28', alt: 'City plaza view', category: 'city' },
    { url: 'https://picsum.photos/400/300?random=29', alt: 'Rooftop cityscape', category: 'city' },
    { url: 'https://picsum.photos/400/300?random=30', alt: 'Downtown alley way', category: 'city' },
    { url: 'https://picsum.photos/400/300?random=31', alt: 'City bridge view', category: 'city' },
    { url: 'https://picsum.photos/400/300?random=32', alt: 'City at twilight', category: 'city' },

    // Animals Images (16)
    { url: 'https://picsum.photos/400/300?random=33', alt: 'Majestic eagle soaring', category: 'animals' },
    { url: 'https://picsum.photos/400/300?random=34', alt: 'Wolf in winter snow', category: 'animals' },
    { url: 'https://picsum.photos/400/300?random=35', alt: 'Lion resting portrait', category: 'animals' },
    { url: 'https://picsum.photos/400/300?random=36', alt: 'Playful dolphins', category: 'animals' },
    { url: 'https://picsum.photos/400/300?random=37', alt: 'Grizzly bear walking', category: 'animals' },
    { url: 'https://picsum.photos/400/300?random=38', alt: 'Leopard spotted cat', category: 'animals' },
    { url: 'https://picsum.photos/400/300?random=39', alt: 'Bear close-up', category: 'animals' },
    { url: 'https://picsum.photos/400/300?random=40', alt: 'Wolf pack together', category: 'animals' },
    { url: 'https://picsum.photos/400/300?random=41', alt: 'Lion in savanna', category: 'animals' },
    { url: 'https://picsum.photos/400/300?random=42', alt: 'Marine whale', category: 'animals' },
    { url: 'https://picsum.photos/400/300?random=43', alt: 'Bird of prey hunting', category: 'animals' },
    { url: 'https://picsum.photos/400/300?random=44', alt: 'Big cat predator', category: 'animals' },
    { url: 'https://picsum.photos/400/300?random=45', alt: 'Bear in nature', category: 'animals' },
    { url: 'https://picsum.photos/400/300?random=46', alt: 'Wolf howling', category: 'animals' },
    { url: 'https://picsum.photos/400/300?random=47', alt: 'Feline hunter', category: 'animals' },
    { url: 'https://picsum.photos/400/300?random=48', alt: 'Ocean marine life', category: 'animals' },

    // Technology Images (14)
    { url: 'https://picsum.photos/400/300?random=49', alt: 'Laptop and coffee', category: 'technology' },
    { url: 'https://picsum.photos/400/300?random=50', alt: 'Smartphone technology', category: 'technology' },
    { url: 'https://picsum.photos/400/300?random=51', alt: 'Tech workspace setup', category: 'technology' },
    { url: 'https://picsum.photos/400/300?random=52', alt: 'Programming desk', category: 'technology' },
    { url: 'https://picsum.photos/400/300?random=53', alt: 'Developer workspace', category: 'technology' },
    { url: 'https://picsum.photos/400/300?random=54', alt: 'Mobile app device', category: 'technology' },
    { url: 'https://picsum.photos/400/300?random=55', alt: 'Office technology', category: 'technology' },
    { url: 'https://picsum.photos/400/300?random=56', alt: 'Code programming', category: 'technology' },
    { url: 'https://picsum.photos/400/300?random=57', alt: 'App development tech', category: 'technology' },
    { url: 'https://picsum.photos/400/300?random=58', alt: 'Computer workstation', category: 'technology' },
    { url: 'https://picsum.photos/400/300?random=59', alt: 'Tech innovation hub', category: 'technology' },
    { url: 'https://picsum.photos/400/300?random=60', alt: 'Digital gadget', category: 'technology' },
    { url: 'https://picsum.photos/400/300?random=61', alt: 'Modern tech office', category: 'technology' },
    { url: 'https://picsum.photos/400/300?random=62', alt: 'Software engineering', category: 'technology' }
];

// Gallery Variables
let currentIndex = 0;
let allImages = [...defaultImages];
let filteredImages = [...defaultImages];
const gallery = document.getElementById('gallery');
const filterContainer = document.querySelector('.filter-container');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const closeBtn = document.getElementById('closeBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Initialize Gallery
function init() {
    loadCustomImages();
    renderGallery();
    setupEventListeners();
}

// Load Custom Images from LocalStorage
function loadCustomImages() {
    const stored = localStorage.getItem('customImages');
    if (stored) {
        const customImages = JSON.parse(stored);
        allImages = [...defaultImages, ...customImages];
        filteredImages = [...allImages];
        updateFilterButtons();
    }
}

// Update Filter Buttons with Custom Categories
function updateFilterButtons() {
    const dynamicContainer = document.getElementById('dynamicFilters');
    const categories = new Set();

    allImages.forEach(img => {
        if (img.category && !['nature', 'city', 'animals', 'technology'].includes(img.category)) {
            categories.add(img.category);
        }
    });

    categories.forEach(category => {
        const exists = Array.from(filterContainer.querySelectorAll('.filter-btn')).some(
            btn => btn.getAttribute('data-filter') === category
        );

        if (!exists) {
            const btn = document.createElement('button');
            btn.className = 'filter-btn';
            btn.setAttribute('data-filter', category);
            btn.textContent = category.charAt(0).toUpperCase() + category.slice(1);

            btn.addEventListener('click', () => {
                filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                filterGallery(category);
            });

            dynamicContainer.appendChild(btn);
        }
    });
}

// Render Gallery
function renderGallery() {
    gallery.innerHTML = '';
    filteredImages.forEach((img) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.setAttribute('data-category', img.category);
        item.innerHTML = `
            <img src="${img.url}" alt="${img.alt}" loading="lazy">
            <div class="overlay">
                <span class="category-badge">${img.category}</span>
            </div>
        `;

        item.addEventListener('click', () => {
            openLightbox(img);
        });

        gallery.appendChild(item);
    });
}

// Setup Event Listeners
function setupEventListeners() {
    // Filter Buttons
    filterContainer.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterGallery(btn.getAttribute('data-filter'));
        });
    });

    // Lightbox Controls
    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', previousImage);
    nextBtn.addEventListener('click', nextImage);

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    // Keyboard Navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'ArrowLeft') previousImage();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'Escape') closeLightbox();
    });

    // Touch Swipe
    let touchStartX = 0;
    let touchEndX = 0;

    lightbox.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    lightbox.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        if (touchStartX - touchEndX > 50) nextImage();
        if (touchEndX - touchStartX > 50) previousImage();
    });
}

// Filter Gallery
function filterGallery(filter) {
    gallery.style.opacity = '0';

    setTimeout(() => {
        if (filter === 'all') {
            filteredImages = [...allImages];
        } else {
            filteredImages = allImages.filter(img => img.category === filter);
        }
        renderGallery();
        gallery.style.opacity = '1';
    }, 150);
}

// Lightbox Functions
function openLightbox(img) {
    currentIndex = filteredImages.indexOf(img);
    lightboxImage.src = img.url;
    lightboxImage.alt = img.alt;
    lightboxCaption.textContent = img.alt;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function previousImage() {
    currentIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    const img = filteredImages[currentIndex];
    lightboxImage.src = img.url;
    lightboxImage.alt = img.alt;
    lightboxCaption.textContent = img.alt;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % filteredImages.length;
    const img = filteredImages[currentIndex];
    lightboxImage.src = img.url;
    lightboxImage.alt = img.alt;
    lightboxCaption.textContent = img.alt;
}

// Initialize Gallery Transitions
const style = document.createElement('style');
style.textContent = `
    #gallery {
        transition: opacity 0.15s ease;
    }
`;
document.head.appendChild(style);

// Initialize on Page Load
document.addEventListener('DOMContentLoaded', init);

console.log('Image Gallery initialized!');


