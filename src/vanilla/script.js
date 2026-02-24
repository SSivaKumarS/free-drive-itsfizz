gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

tl.to(".title span", {
    opacity: 1,
    y: -20,
    stagger: 0.05,
    duration: 1,
    ease: "power3.out"
});

tl.to(".stats", {
    opacity: 1,
    y: -10,
    duration: 1
}, "-=0.5");

gsap.to(".car", {
    x: 800,
    ease: "none",
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5
    }
});