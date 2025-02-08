document.addEventListener('DOMContentLoaded', () => {
    // Store ratings and comments
    const ratings = {};
    const comments = {};

    // Rating text mapping
    const ratingTexts = {
        1: 'Ruim',
        2: 'Regular',
        3: 'Bom',
        4: 'Muito Bom',
        5: 'Excelente'
    };

    // Star SVG template
    const starSvg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="star">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
    `;

    // Create star rating elements
    document.querySelectorAll('.stars').forEach(starsContainer => {
        const topicId = starsContainer.dataset.topic;
        
        // Create 5 stars for each rating container
        for (let i = 1; i <= 5; i++) {
            const starWrapper = document.createElement('button');
            starWrapper.type = 'button';
            starWrapper.innerHTML = starSvg;
            starWrapper.classList.add('star-button');
            starWrapper.dataset.value = i;
            starWrapper.dataset.topic = topicId;
            starsContainer.appendChild(starWrapper);
        }
    });

    // Handle star hover and click events
    document.querySelectorAll('.stars').forEach(starsContainer => {
        const topicId = starsContainer.dataset.topic;
        const ratingText = document.querySelector(`[data-rating-text="${topicId}"]`);
        const stars = starsContainer.querySelectorAll('.star-button');

        // Hover effects
        stars.forEach(star => {
            star.addEventListener('mouseenter', () => {
                const value = parseInt(star.dataset.value);
                updateStars(stars, value, true);
                ratingText.textContent = ratingTexts[value];
                ratingText.classList.add('visible');
            });
        });

        starsContainer.addEventListener('mouseleave', () => {
            const rating = ratings[topicId];
            updateStars(stars, rating || 0, false);
            if (rating) {
                ratingText.textContent = ratingTexts[rating];
                ratingText.classList.add('visible');
            } else {
                ratingText.classList.remove('visible');
            }
        });

        // Click events
        stars.forEach(star => {
            star.addEventListener('click', () => {
                const value = parseInt(star.dataset.value);
                ratings[topicId] = value;
                updateStars(stars, value, false);
                ratingText.textContent = ratingTexts[value];
                ratingText.classList.add('visible');
            });
        });
    });

    // Handle textarea input
    document.querySelectorAll('textarea').forEach(textarea => {
        const topicId = textarea.dataset.comment;
        textarea.addEventListener('input', (e) => {
            comments[topicId] = e.target.value;
        });
    });

    // Handle form submission
    document.getElementById('feedbackForm').addEventListener('submit', (e) => {
        e.preventDefault();
        console.log({ ratings, comments });
        alert('Feedback enviado com sucesso!');
    });

    // Helper function to update star appearance
    function updateStars(stars, value, isHover) {
        stars.forEach(star => {
            const starValue = parseInt(star.dataset.value);
            if (starValue <= value) {
                star.classList.add('filled');
            } else {
                star.classList.remove('filled');
            }
        });
    }
});