// Smooth scrolling for navbar links
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Dark mode toggle
const toggleBtn = document.createElement('button');
toggleBtn.textContent = 'Toggle Dark Mode';
toggleBtn.style.position = 'fixed';
toggleBtn.style.top = '10px';
toggleBtn.style.right = '10px';
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Alert on contact email click
const emailLink = document.querySelector('a[href^="mailto:"]');
if (emailLink) {
    emailLink.addEventListener('click', () => {
        alert('Thank you for reaching out!');
    });
}