document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const filterItems = document.querySelectorAll('.filter-item');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            filterItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Lightbox feature for gallery images
    const images = document.querySelectorAll('.gallery-images img');
    images.forEach(image => {
        image.addEventListener('click', function() {
            const modal = document.createElement('div');
            modal.classList.add('modal');
            modal.innerHTML = `
                <span class="close">&times;</span>
                <img src="${this.src}" alt="${this.alt}">
            `;
            document.body.appendChild(modal);

            modal.querySelector('.close').addEventListener('click', () => {
                document.body.removeChild(modal);
            });
        });
    });
});
