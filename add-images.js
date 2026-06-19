// Add Images Page Script
const imageForm = document.getElementById('imageForm');
const imageUrlInput = document.getElementById('imageUrl');
const imageAltInput = document.getElementById('imageAlt');
const imageCategorySelect = document.getElementById('imageCategory');
const newCategoryInput = document.getElementById('newCategory');
const messageBox = document.getElementById('messageBox');
const customImagesSection = document.getElementById('customImagesSection');
const customImagesList = document.getElementById('customImagesList');

// Handle category select change
imageCategorySelect.addEventListener('change', () => {
    if (imageCategorySelect.value === 'custom') {
        newCategoryInput.style.display = 'block';
        newCategoryInput.focus();
        newCategoryInput.required = true;
    } else {
        newCategoryInput.style.display = 'none';
        newCategoryInput.required = false;
        newCategoryInput.value = '';
    }
});

// Handle form submission
imageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addImage();
});

// Add Image Function
function addImage() {
    const url = imageUrlInput.value.trim();
    const alt = imageAltInput.value.trim();
    let category = imageCategorySelect.value;

    // Validation
    if (!url || !alt || !category) {
        showMessage('Please fill in all fields', 'error');
        return;
    }

    // Validate URL
    try {
        new URL(url);
    } catch (e) {
        showMessage('Please enter a valid URL', 'error');
        return;
    }

    // Handle custom category
    if (category === 'custom') {
        category = newCategoryInput.value.trim().toLowerCase();
        if (!category) {
            showMessage('Please enter a category name', 'error');
            return;
        }
    }

    // Create image object
    const newImage = {
        id: Date.now(),
        url,
        alt,
        category: category.toLowerCase(),
        isCustom: true,
        createdAt: new Date().toLocaleDateString()
    };

    // Load existing images
    let customImages = JSON.parse(localStorage.getItem('customImages') || '[]');

    // Add new image
    customImages.push(newImage);

    // Save to localStorage
    localStorage.setItem('customImages', JSON.stringify(customImages));

    // Show success message
    showMessage('✓ Image added successfully! Check the gallery to see it.', 'success');

    // Reset form
    imageForm.reset();
    newCategoryInput.style.display = 'none';
    imageCategorySelect.value = '';

    // Update display
    updateStats();
    displayCustomImages();
}

// Show Message
function showMessage(text, type) {
    messageBox.textContent = text;
    messageBox.className = `message-box ${type}`;

    setTimeout(() => {
        messageBox.className = 'message-box';
    }, 4000);
}

// Update Statistics
function updateStats() {
    const customImages = JSON.parse(localStorage.getItem('customImages') || '[]');
    const defaultImages = 12;
    const totalImages = defaultImages + customImages.length;

    // Get unique categories
    const categories = new Set(['nature', 'city', 'animals', 'technology']);
    customImages.forEach(img => {
        if (img.category) categories.add(img.category);
    });

    document.getElementById('totalImages').textContent = totalImages;
    document.getElementById('customImages').textContent = customImages.length;
    document.getElementById('totalCategories').textContent = categories.size;
}

// Display Custom Images
function displayCustomImages() {
    const customImages = JSON.parse(localStorage.getItem('customImages') || '[]');

    if (customImages.length === 0) {
        customImagesSection.style.display = 'none';
        return;
    }

    customImagesSection.style.display = 'block';
    customImagesList.innerHTML = '';

    customImages.forEach((img, index) => {
        const thumb = document.createElement('div');
        thumb.className = 'custom-image-thumb';
        thumb.innerHTML = `
            <img src="${img.url}" alt="${img.alt}" onerror="this.src='https://via.placeholder.com/150?text=Error'">
            <div class="thumb-overlay">
                <button class="delete-thumb-btn" onclick="deleteCustomImage(${index})" title="Delete this image">×</button>
            </div>
        `;
        customImagesList.appendChild(thumb);
    });

    // Add delete styles
    if (!document.getElementById('thumbStyles')) {
        const style = document.createElement('style');
        style.id = 'thumbStyles';
        style.textContent = `
            .custom-image-thumb {
                position: relative;
                cursor: pointer;
            }

            .thumb-overlay {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.5);
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0;
                transition: all 0.3s ease;
            }

            .custom-image-thumb:hover .thumb-overlay {
                opacity: 1;
            }

            .delete-thumb-btn {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: var(--danger-color);
                color: white;
                border: none;
                font-size: 24px;
                cursor: pointer;
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .delete-thumb-btn:hover {
                transform: scale(1.1);
                background: var(--danger-color, #ef4444);
            }
        `;
        document.head.appendChild(style);
    }
}

// Delete Custom Image
function deleteCustomImage(index) {
    if (confirm('Delete this image?')) {
        let customImages = JSON.parse(localStorage.getItem('customImages') || '[]');
        customImages.splice(index, 1);
        localStorage.setItem('customImages', JSON.stringify(customImages));
        
        updateStats();
        displayCustomImages();
        showMessage('Image deleted successfully', 'success');
    }
}

// Initialize page
function initAddImagesPage() {
    updateStats();
    displayCustomImages();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initAddImagesPage);

console.log('Add Images page initialized!');
