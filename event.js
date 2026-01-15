document.addEventListener('DOMContentLoaded', () => {
    // 1. Navigation Active State Handling
    // Get current path, removing the leading slash if present for easier comparison
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        // Remove active class from all first (though HTML might default one)
        link.classList.remove('active');

        // Get the href of the link
        const linkHref = link.getAttribute('href');

        // If the href matches the current path, add active class
        // We handle the empty path case (root) acting as index.html
        if (linkHref === currentPath || (currentPath === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        }
    });

    // 2. Registration Form Handling
    const form = document.getElementById('registrationForm');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Basic validation is handled by HTML5 (required, type="email", etc.)
            // We can add custom validation or simply simulate success

            const name = document.getElementById('fullName').value;
            const email = document.getElementById('email').value;
            const ticketType = document.querySelector('input[name="ticketType"]:checked').value;

            // Simulating an API call/processing
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerText;

            submitBtn.innerText = 'Processing...';
            submitBtn.disabled = true;

            setTimeout(() => {
                alert(`Thank you, ${name}! \n\nRegistration confirmed for: ${ticketType === 'full' ? 'Full Access Pass' : 'Day Pass'}.\nA confirmation email has been sent to ${email}.`);

                form.reset();
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
            }, 1000);
        });
    }

    // 3. Simple animation check or other interactions could go here
    console.log('TechFuture 2026 Ready');
});
