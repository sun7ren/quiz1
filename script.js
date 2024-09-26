document.querySelectorAll('.image-card').forEach(card => {
    card.addEventListener('click', function() {
        const target = document.querySelector(this.getAttribute('data-target'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
