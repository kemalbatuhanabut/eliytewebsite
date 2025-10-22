// GSAP Animations
document.addEventListener('DOMContentLoaded', function() {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Fade in hero content
    gsap.from('.hero__content', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        delay: 0.3
    });

    // Animate service cards on scroll
    gsap.utils.toArray('.service__card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                end: 'top 20%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 60,
            rotationX: 10,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power2.out'
        });
    });

    // Animate project cards
    gsap.utils.toArray('.project__card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            scale: 0.8,
            duration: 0.6,
            delay: index * 0.1,
            ease: 'back.out(1.2)'
        });
    });

    // Section headers animation
    gsap.utils.toArray('.section__header').forEach(header => {
        gsap.from(header, {
            scrollTrigger: {
                trigger: header,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power2.out'
        });
    });

    // Service icons rotation
    gsap.utils.toArray('.service__icon').forEach(icon => {
        gsap.from(icon, {
            scrollTrigger: {
                trigger: icon,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            rotation: -180,
            scale: 0,
            duration: 0.8,
            ease: 'back.out(2)'
        });
    });

    // Parallax effect for hero
    gsap.to('.hero', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        },
        opacity: 0.3,
        y: 200
    });

    // Stagger animation for lists
    gsap.utils.toArray('.service__list').forEach(list => {
        gsap.from(list.children, {
            scrollTrigger: {
                trigger: list,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: -20,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out'
        });
    });

    // Button hover animation
    document.querySelectorAll('.button').forEach(button => {
        button.addEventListener('mouseenter', function() {
            gsap.to(this, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        button.addEventListener('mouseleave', function() {
            gsap.to(this, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Smooth scroll to sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#scroll-top') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    gsap.to(window, {
                        duration: 1,
                        scrollTo: {
                            y: target,
                            offsetY: 70
                        },
                        ease: 'power3.inOut'
                    });
                }
            }
        });
    });

    // Scroll to top button animation
    const scrollTopBtn = document.getElementById('scroll-top');
    if (scrollTopBtn) {
        ScrollTrigger.create({
            start: 'top -100',
            end: 99999,
            toggleClass: { className: 'show-scroll', targets: scrollTopBtn }
        });

        scrollTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            gsap.to(window, {
                duration: 1.5,
                scrollTo: { y: 0 },
                ease: 'power3.inOut'
            });
        });
    }

    // Magnetic effect for service icons
    gsap.utils.toArray('.service__icon').forEach(icon => {
        const card = icon.closest('.service__card');

        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            gsap.to(icon, {
                x: x * 0.1,
                y: y * 0.1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', function() {
            gsap.to(icon, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: 'elastic.out(1, 0.3)'
            });
        });
    });

    // Text reveal animation
    gsap.utils.toArray('.section__title, .section__subtitle').forEach(element => {
        const text = element.textContent;
        element.innerHTML = text.split('').map(char =>
            char === ' ' ? '<span>&nbsp;</span>' : `<span>${char}</span>`
        ).join('');

        gsap.from(element.children, {
            scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 20,
            rotationX: -90,
            stagger: 0.02,
            duration: 0.5,
            ease: 'back.out(1.7)'
        });
    });

    // Footer animation
    gsap.from('.footer__content > *', {
        scrollTrigger: {
            trigger: '.footer',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
    });

    // Mouse follower effect (optional, modern touch)
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateFollower() {
        const speed = 0.1;

        followerX += (mouseX - followerX) * speed;
        followerY += (mouseY - followerY) * speed;

        // Update any custom cursor if needed
        requestAnimationFrame(animateFollower);
    }

    animateFollower();

    // Loading animation
    window.addEventListener('load', function() {
        gsap.to('body', {
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out'
        });
    });

    // Refresh ScrollTrigger after everything loads
    window.addEventListener('load', function() {
        ScrollTrigger.refresh();
    });
});
