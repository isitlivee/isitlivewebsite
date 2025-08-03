// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on nav links
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(15, 15, 35, 0.98)';
    } else {
        navbar.style.background = 'rgba(15, 15, 35, 0.95)';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all feature cards, bar cards, and steps
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.feature-card, .bar-card, .step');
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Simulate live updates for demo bars
function updateBarStatus() {
    const bars = [
        {
            name: '.bar-card:nth-child(1)',
            waitTimes: ['10 min wait', '15 min wait', '20 min wait', '12 min wait'],
            lineStatus: ['Short line', 'Medium line', 'Long line', 'Medium line']
        },
        {
            name: '.bar-card:nth-child(2)',
            waitTimes: ['5 min wait', '8 min wait', '3 min wait', '6 min wait'],
            lineStatus: ['Short line', 'Short line', 'Very short line', 'Short line']
        },
        {
            name: '.bar-card:nth-child(3)',
            waitTimes: ['25 min wait', '30 min wait', '35 min wait', '28 min wait'],
            lineStatus: ['Long line', 'Very long line', 'Extremely long line', 'Long line']
        }
    ];

    bars.forEach((bar, index) => {
        const barElement = document.querySelector(bar.name);
        if (barElement) {
            const waitTimeElement = barElement.querySelector('.wait-time span');
            const lineElement = barElement.querySelector('.line-length span');
            
            setInterval(() => {
                const randomWaitIndex = Math.floor(Math.random() * bar.waitTimes.length);
                const randomLineIndex = Math.floor(Math.random() * bar.lineStatus.length);
                
                if (waitTimeElement) {
                    waitTimeElement.textContent = bar.waitTimes[randomWaitIndex];
                    waitTimeElement.style.animation = 'pulse 0.5s ease';
                    setTimeout(() => {
                        waitTimeElement.style.animation = '';
                    }, 500);
                }
                
                if (lineElement) {
                    lineElement.textContent = bar.lineStatus[randomLineIndex];
                    lineElement.style.animation = 'pulse 0.5s ease';
                    setTimeout(() => {
                        lineElement.style.animation = '';
                    }, 500);
                }
            }, 5000 + (index * 1000)); // Stagger updates
        }
    });
}

// College selection simulation
function simulateCollegeSelection() {
    const collegeItems = document.querySelectorAll('.college-item');
    let currentActive = 0;

    setInterval(() => {
        collegeItems.forEach(item => item.classList.remove('active'));
        collegeItems[currentActive].classList.add('active');
        currentActive = (currentActive + 1) % collegeItems.length;
    }, 3000);
}

// Add pulse animation for live indicators
document.addEventListener('DOMContentLoaded', () => {
    const liveDots = document.querySelectorAll('.live-dot');
    liveDots.forEach(dot => {
        setInterval(() => {
            dot.style.animation = 'none';
            setTimeout(() => {
                dot.style.animation = 'pulse 2s infinite';
            }, 10);
        }, 2000);
    });
});

// Button hover effects
document.querySelectorAll('.primary-btn, .secondary-btn, .cta-button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-3px)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero::before');
    const speed = scrolled * 0.5;
    
    if (parallax) {
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Initialize all animations and features
document.addEventListener('DOMContentLoaded', () => {
    updateBarStatus();
    simulateCollegeSelection();
    
    // Add loading animation to hero content
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    
    setTimeout(() => {
        if (heroContent) {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }
        if (heroImage) {
            heroImage.style.opacity = '1';
            heroImage.style.transform = 'translateY(0)';
        }
    }, 300);
});

// Contact form handling (if added in future)
function handleContactForm(event) {
    event.preventDefault();
    // Add contact form logic here
    alert('Thanks for your interest! We\'ll be in touch soon.');
}

// Add some easter eggs for college students
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // Up up down down left right left right B A

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.keyCode);
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        // Easter egg activation
        document.body.style.animation = 'rainbow 2s infinite';
        setTimeout(() => {
            document.body.style.animation = '';
            alert('🎉 You found the secret! Early access coming soon to the coolest students! 🎉');
        }, 2000);
    }
});

// Add rainbow animation for easter egg
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);