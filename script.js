        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
        const tl = gsap.timeline();

        // ✅ Keep only this instance
        const smoother = ScrollSmoother.create({
            wrapper: ".smooth-wrapper",
            content: ".smooth-content",
            smooth: 1.2,
            effects: true
        });

        gsap.to("#page2", {
            backgroundPosition: "center 80%",
            scrollTrigger: {
                trigger: "#page2",
                scroller: ".smooth-wrapper",
                scrub: true,
                start: "top bottom",
                end: "bottom top"
            }
        });


        gsap.to('#page2 h1', {
            x: '-120vw',
            delay: 1,
            scrollTrigger: {
                scroller: '.smooth-wrapper',
                trigger: '#page2',
                pin: true,
                start: 'top top',
                end: 'top -200%',
                scrub: 2
            }
        });

        gsap.from('nav h1', {
            y: -40,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            delay: 1
        });

        gsap.from('nav ul li', {
            y: -40,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.15,
            delay: 1
        });

        const navTL = gsap.timeline();

        navTL.from('#hero-title', {
            y: 40,
            opacity: 0,
            duration: 1.5,
            ease: "power3.out"
        }, 1)
            .from('#hero-title span', {
                x: 40,
                opacity: 0,
                duration: 1.5,
                ease: "power3.out"
            }, 1.5);


        const heroTL = gsap.timeline({
            scrollTrigger: {
                scroller: '.smooth-wrapper',
                trigger: '#page1',
                start: 'top top',
                end: 'top -100%',
                scrub: 2,
                pin: true
            }
        });

        heroTL.to('#hero-title', {
            x: -890,
            duration: 1.5,
            ease: "power3.out"
        })
            .to('#hero-title span', {
                x: 2000,
                scale: 2,
                duration: 2,
                ease: "power3.out"
            }, "<"); // '<' start at the same time as previous tween


        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener("click", function (e) {
                e.preventDefault();
                const target = this.getAttribute("href");
                smoother.scrollTo(target, true, "top center"); // scroll smoothly to element
            });
        });


        const triangleTl = gsap.timeline({
            scrollTrigger: {
                scroller: ".smooth-wrapper",
                trigger: "#page3",
                start: "top top",
                end: "top -100%",
                scrub: 2,
                pin: true
            }
        });

        triangleTl
            .from("#triWrap2", {
                x: -600,
                y: -300,
                rotate: 1080,
                ease: "power2.inOut"
            })
            .from("#triWrap3", {
                x: 400,
                y: 200,
                rotate: -1080,
                ease: "power3.inOut"
            }, "<0.2") 
            .from("#triWrap1", {
                x: -200,
                y: -100,
                rotate: 720,
                opacity: 0.5,
                ease: "power4.inOut"
            }, "<0.3")
            .from('#page3 h1', {
                y: 40,
                opacity: 0,
                letterSpacing: '0.5rem',
                duration: 1.5,
                ease: "power3.out"
            }, "<0.5");



        var initialPath = "M 10 100 Q 500 100 990 100";
        var finalPath = "M 10 100 Q 500 100 990 100";
        var string = document.querySelector('#string');

        string.addEventListener('mouseenter', function () {
            console.log("Clicked on the string!");
        })

        string.addEventListener('mousemove', function (event) {

            initialPath = `M 10 100 Q ${event.x} ${event.y} 990 100`;

            gsap.to('#line path', {
                attr: { d: initialPath },
                duration: 0.2,
                ease: "power3.out"
            })
        })

        string.addEventListener('mouseleave', function () {
            gsap.to('#line path', {
                attr: { d: finalPath },
                duration: 1.5,
                ease: "elastic.out(1, 0.2)"
            })
        })
