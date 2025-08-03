// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
});

// Smooth Scrolling for Navigation Links
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

// Interactive College Selection Demo
class CollegeSelector {
    constructor() {
        this.colleges = [
            { name: 'University of Texas', icon: 'fas fa-university', venues: 15 },
            { name: 'Penn State', icon: 'fas fa-university', venues: 12 },
            { name: 'Arizona State', icon: 'fas fa-university', venues: 18 },
            { name: 'UCLA', icon: 'fas fa-university', venues: 20 },
            { name: 'University of Florida', icon: 'fas fa-university', venues: 14 }
        ];
        this.currentIndex = 0;
        this.init();
    }
    
    init() {
        setInterval(() => {
            this.rotateColleges();
        }, 3000);
    }
    
    rotateColleges() {
        const collegeOptions = document.querySelectorAll('.college-option');
        if (collegeOptions.length === 0) return;
        
        // Remove active class from current
        collegeOptions.forEach(option => option.classList.remove('active'));
        
        // Update content and add active class
        this.currentIndex = (this.currentIndex + 1) % this.colleges.length;
        const randomColleges = this.getRandomColleges();
        
        collegeOptions.forEach((option, index) => {
            if (randomColleges[index]) {
                const icon = option.querySelector('i');
                const span = option.querySelector('span');
                
                if (icon) icon.className = randomColleges[index].icon;
                if (span) span.textContent = randomColleges[index].name;
                
                if (index === 0) option.classList.add('active');
            }
        });
    }
    
    getRandomColleges() {
        const shuffled = [...this.colleges].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 3);
    }
}

// Interactive Venue Demo
class VenueDemo {
    constructor() {
        this.venues = [
            {
                name: 'The Rooftop Bar',
                status: 'busy',
                waitTime: '15-20 min',
                lineLength: '25 people',
                dj: 'DJ Mike - House Music'
            },
            {
                name: 'Underground Club',
                status: 'moderate',
                waitTime: '8-12 min',
                lineLength: '12 people',
                dj: 'DJ Sarah - EDM'
            },
            {
                name: 'Campus Lounge',
                status: 'light',
                waitTime: '2-5 min',
                lineLength: '5 people',
                dj: 'DJ Alex - Hip Hop'
            },
            {
                name: 'The Sports Bar',
                status: 'busy',
                waitTime: '20-25 min',
                lineLength: '30 people',
                dj: 'Live Band - Rock'
            }
        ];
        this.currentVenueIndex = 0;
        this.init();
    }
    
    init() {
        setInterval(() => {
            this.updateVenueDemo();
        }, 4000);
    }
    
    updateVenueDemo() {
        const venueCard = document.querySelector('.venue-card');
        if (!venueCard) return;
        
        this.currentVenueIndex = (this.currentVenueIndex + 1) % this.venues.length;
        const venue = this.venues[this.currentVenueIndex];
        
        // Update venue header
        const venueName = venueCard.querySelector('.venue-header h3');
        const venueStatus = venueCard.querySelector('.venue-status');
        
        if (venueName) venueName.textContent = venue.name;
        if (venueStatus) {
            venueStatus.textContent = venue.status.charAt(0).toUpperCase() + venue.status.slice(1);
            venueStatus.className = `venue-status ${venue.status}`;
        }
        
        // Update venue info
        const infoItems = venueCard.querySelectorAll('.info-item span');
        if (infoItems.length >= 3) {
            infoItems[0].textContent = `Wait Time: ${venue.waitTime}`;
            infoItems[1].textContent = `Line Length: ${venue.lineLength}`;
            infoItems[2].textContent = venue.dj;
        }
        
        // Add animation effect
        venueCard.style.transform = 'scale(0.95)';
        setTimeout(() => {
            venueCard.style.transform = 'scale(1)';
        }, 200);
    }
}

// Scroll Animations
class ScrollAnimations {
    constructor() {
        this.animatedElements = document.querySelectorAll('.feature-card, .step, .demo-feature');
        this.init();
    }
    
    init() {
        this.setupIntersectionObserver();
    }
    
    setupIntersectionObserver() {
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, options);
        
        this.animatedElements.forEach(element => {
            observer.observe(element);
        });
    }
}

// Download Button Functionality
class DownloadButtons {
    constructor() {
        this.init();
    }
    
    init() {
        const downloadButtons = document.querySelectorAll('.cta-primary, .cta-secondary, .download-btn');
        
        downloadButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                this.handleDownload(button);
            });
        });
    }
    
    handleDownload(button) {
        // Show coming soon message
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-clock"></i> Coming Soon!';
        button.style.background = 'linear-gradient(45deg, #ffa726, #ff7043)';
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = '';
        }, 2000);
        
        // Add ripple effect
        this.createRipple(button);
    }
    
    createRipple(button) {
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = '50%';
        ripple.style.top = '50%';
        ripple.style.transform = 'translate(-50%, -50%)';
        ripple.classList.add('ripple');
        
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
}

// Real-time Statistics Counter
class StatsCounter {
    constructor() {
        this.stats = {
            users: 0,
            venues: 0,
            cities: 0
        };
        this.targetStats = {
            users: 50000,
            venues: 2500,
            cities: 150
        };
        this.init();
    }
    
    init() {
        this.createStatsSection();
        this.animateStats();
    }
    
    createStatsSection() {
        const statsHtml = `
            <section class="stats-section">
                <div class="container">
                    <div class="stats-grid">
                        <div class="stat-item">
                            <div class="stat-number" id="users-count">0</div>
                            <div class="stat-label">Active Users</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number" id="venues-count">0</div>
                            <div class="stat-label">Partner Venues</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number" id="cities-count">0</div>
                            <div class="stat-label">Cities Covered</div>
                        </div>
                    </div>
                </div>
            </section>
        `;
        
        const ctaSection = document.querySelector('.cta-section');
        if (ctaSection) {
            ctaSection.insertAdjacentHTML('beforebegin', statsHtml);
        }
    }
    
    animateStats() {
        const duration = 2000;
        const frameRate = 60;
        const totalFrames = duration / (1000 / frameRate);
        
        let frame = 0;
        
        const animate = () => {
            frame++;
            const progress = frame / totalFrames;
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            
            Object.keys(this.targetStats).forEach(key => {
                const current = Math.floor(this.targetStats[key] * easeOutQuart);
                const element = document.getElementById(`${key}-count`);
                if (element) {
                    element.textContent = current.toLocaleString();
                }
            });
            
            if (frame < totalFrames) {
                requestAnimationFrame(animate);
            }
        };
        
        // Trigger animation when stats section comes into view
        const statsSection = document.querySelector('.stats-section');
        if (statsSection) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animate();
                        observer.unobserve(entry.target);
                    }
                });
            });
            observer.observe(statsSection);
        }
    }
}

// Navbar Scroll Effect
class NavbarScroll {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.init();
    }
    
    init() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                this.navbar.style.background = 'rgba(15, 15, 35, 0.98)';
                this.navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
            } else {
                this.navbar.style.background = 'rgba(15, 15, 35, 0.95)';
                this.navbar.style.boxShadow = 'none';
            }
        });
    }
}

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new CollegeSelector();
    new VenueDemo();
    new ScrollAnimations();
    new DownloadButtons();
    new StatsCounter();
    new NavbarScroll();
});

// Add CSS for additional animations and effects
const additionalStyles = `
    <style>
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: translate(-50%, -50%) scale(4);
                opacity: 0;
            }
        }
        
        .animate-in {
            animation: fadeInUp 0.8s ease-out;
        }
        
        .stats-section {
            padding: 80px 0;
            background: rgba(255, 255, 255, 0.02);
        }
        
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            text-align: center;
        }
        
        .stat-item {
            padding: 2rem;
        }
        
        .stat-number {
            font-size: 3rem;
            font-weight: 800;
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 0.5rem;
        }
        
        .stat-label {
            color: #b8b8b8;
            font-size: 1.1rem;
            font-weight: 500;
        }
        
        .venue-status.moderate {
            background: #ffa726;
        }
        
        .venue-status.light {
            background: #66bb6a;
        }
        
        .venue-card {
            transition: transform 0.3s ease;
        }
        
        /* Mobile responsive navigation */
        @media (max-width: 768px) {
            .nav-menu.active {
                display: flex;
                position: fixed;
                top: 80px;
                left: 0;
                width: 100%;
                height: calc(100vh - 80px);
                background: rgba(15, 15, 35, 0.98);
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                padding-top: 2rem;
                gap: 2rem;
            }
            
            .hamburger.active span:nth-child(1) {
                transform: rotate(-45deg) translate(-5px, 6px);
            }
            
            .hamburger.active span:nth-child(2) {
                opacity: 0;
            }
            
            .hamburger.active span:nth-child(3) {
                transform: rotate(45deg) translate(-5px, -6px);
            }
        }
    </style>
`;

document.head.insertAdjacentHTML('beforeend', additionalStyles);