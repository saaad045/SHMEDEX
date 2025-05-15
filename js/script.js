       function animateCounters() {
            const projectCounter = document.getElementById('projectCount');
            const clientCounter = document.getElementById('clientCount');
            const teamCounter = document.getElementById('teamCount');
            
            const targetProjects = 250;
            const targetClients = 150;
            const targetTeam = 30;
            
            let projectCount = 0;
            let clientCount = 0;
            let teamCount = 0;
            
            const projectInterval = setInterval(() => {
                projectCount += 5;
                projectCounter.textContent = projectCount + '+';
                
                if (projectCount >= targetProjects) {
                    clearInterval(projectInterval);
                    projectCounter.textContent = targetProjects + '+';
                }
            }, 20);
            
            const clientInterval = setInterval(() => {
                clientCount += 3;
                clientCounter.textContent = clientCount + '+';
                
                if (clientCount >= targetClients) {
                    clearInterval(clientInterval);
                    clientCounter.textContent = targetClients + '+';
                }
            }, 20);
            
            const teamInterval = setInterval(() => {
                teamCount += 1;
                teamCounter.textContent = teamCount;
                
                if (teamCount >= targetTeam) {
                    clearInterval(teamInterval);
                    teamCounter.textContent = targetTeam;
                }
            }, 50);
        }
        
        // Run the counter animation when the stats section comes into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(document.querySelector('.stats'));
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Navbar background change on scroll
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                navbar.style.padding = '10px 0';
            } else {
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                navbar.style.padding = '15px 0';
            }
        });

        document.querySelector('.view-more-btn').addEventListener('click', function() {
    // Add your functionality here
    alert('Viewing more services!');
    // Or redirect to a services page:
    // window.location.href = 'services.html';
});
    // Add animation to carousel items
    document.addEventListener('DOMContentLoaded', function() {
        const carousel = document.getElementById('testimonialCarousel');
        
        carousel.addEventListener('slide.bs.carousel', function (e) {
            const nextItem = e.relatedTarget;
            const items = nextItem.querySelectorAll('.testimonial-img, .testimonial-content');
            
            // Reset animation
            items.forEach(item => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
            });
            
            // Animate in
            setTimeout(() => {
                items.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, index * 150);
                });
            }, 50);
        });
        
        // Initialize first slide
        const firstSlide = document.querySelector('.carousel-item.active');
        firstSlide.querySelectorAll('.testimonial-img, .testimonial-content').forEach(item => {
            item.style.opacity = '1';
        });
    });

        // Form validation
    (function () {
        'use strict'
        
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')
        
        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }
                    
                    form.classList.add('was-validated')
                }, false)
            })
    })()
    
    // Form submission handling
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Here you would typically send the form data to your server
        // For demo purposes, we'll just show an alert
        
        if (this.checkValidity()) {
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
            this.classList.remove('was-validated');
        }
    });