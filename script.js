// Smooth scroll behavior for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Follow button toggle
document.querySelectorAll('.btn-follow').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        if (this.textContent === 'Follow') {
            this.textContent = 'Following';
            this.style.opacity = '0.7';
        } else {
            this.textContent = 'Follow';
            this.style.opacity = '1';
        }
    });
});

// Tab button functionality
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
    });
});

// Set first tab as active on page load
window.addEventListener('DOMContentLoaded', function() {
    const firstTab = document.querySelector('.tab-btn');
    if (firstTab) {
        firstTab.classList.add('active');
    }
});

// Button click feedback
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function() {
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = '';
        }, 100);
    });
});

// Add animation on scroll for athlete and event cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.athlete-card, .event-card, .ranking-item').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Watch button functionality
document.querySelectorAll('.btn-watch').forEach(btn => {
    btn.addEventListener('click', function() {
        if (this.textContent === 'Watch Live') {
            alert('Opening live stream...');
        } else if (this.textContent === 'Set Reminder') {
            this.textContent = 'Reminder Set ✓';
            this.style.opacity = '0.7';
            setTimeout(() => {
                this.textContent = 'Set Reminder';
                this.style.opacity = '1';
            }, 2000);
        }
    });
});

// Add scroll-to-top button
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        if (!document.querySelector('.scroll-top')) {
            const btn = document.createElement('button');
            btn.className = 'scroll-top';
            btn.innerHTML = '↑';
            btn.style.cssText = `
                position: fixed;
                bottom: 30px;
                right: 30px;
                width: 50px;
                height: 50px;
                background: linear-gradient(135deg, #0066ff, #00d4ff);
                color: white;
                border: none;
                border-radius: 50%;
                cursor: pointer;
                font-size: 1.5rem;
                font-weight: 700;
                z-index: 99;
                box-shadow: 0 4px 12px rgba(0, 102, 255, 0.3);
                transition: all 0.3s ease;
            `;
            
            btn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            
            btn.addEventListener('mouseover', function() {
                this.style.transform = 'scale(1.1)';
                this.style.boxShadow = '0 6px 20px rgba(0, 102, 255, 0.5)';
            });
            
            btn.addEventListener('mouseout', function() {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = '0 4px 12px rgba(0, 102, 255, 0.3)';
            });
            
            document.body.appendChild(btn);
        }
    } else {
        const btn = document.querySelector('.scroll-top');
        if (btn) btn.remove();
    }
});

// Form submission (for sign up)
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you! We\'ll be in touch soon.');
        this.reset();
    });
});

// Add active state to navigation links based on scroll position
window.addEventListener('scroll', function() {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-list a').forEach(link => {
        link.style.color = 'white';
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = '#00d4ff';
        }
    });
});

// CTA button actions
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
    btn.addEventListener('click', function() {
        const text = this.textContent;
        if (text.includes('Sign Up') || text.includes('Start Free')) {
            alert('Redirecting to signup page...');
        } else if (text.includes('Learn')) {
            alert('Loading more information...');
        } else if (text.includes('Explore')) {
            document.querySelector('#athletes').scrollIntoView({ behavior: 'smooth' });
        }
    });
});