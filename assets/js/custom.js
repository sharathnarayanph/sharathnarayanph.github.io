document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.scrolling-cards .card');

    window.addEventListener('scroll', function () {
        cards.forEach((card) => {
            const rect = card.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calculate how far the card is through the viewport
            const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);

            if (scrollProgress > 0 && scrollProgress < 1) {
                // Apply a subtle rotation and scale effect based on scroll position
                const rotation = Math.min(Math.max(scrollProgress * 5 - 2.5, -2.5), 2.5);
                const scale = Math.min(Math.max(scrollProgress * 0.1 + 0.95, 0.95), 1.05);

                card.style.transform = `perspective(1000px) rotateX(${rotation}deg) scale(${scale})`;
            }
        });
    });
});