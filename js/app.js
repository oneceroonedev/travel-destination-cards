// Shorten card description text
document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.city-card'); // Select all cards

    cards.forEach(card => {
        const description = card.querySelector('.description');
        const btnViewMore = card.querySelector('.btn-view-more');
        const originalText = description.innerHTML; // Save the full original text for each card
        const maxLength = 175; // maximum length for text (in characters)

        // Function to shorten text
        if (originalText.length > maxLength) {
            const shortText = originalText.substring(0, maxLength) + '...';
            description.innerHTML = shortText;
        }

        // Event to expand or collapse the text
        let isExpanded = false;
        btnViewMore.addEventListener('click', function() {
            if (!isExpanded) {
                // Show full text and change button
                description.innerHTML = originalText;
                btnViewMore.innerHTML = 'Ver menos';
            } else {
                // Shorten the text again and change the button
                const shortText = originalText.substring(0, maxLength) + '...';
                description.innerHTML = shortText;
                btnViewMore.innerHTML = 'Saber más';
            }
            isExpanded = !isExpanded; // Toggle status
        });
    });
});
