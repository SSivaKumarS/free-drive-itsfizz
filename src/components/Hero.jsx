import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const headlineRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Headline animation
    tl.fromTo(
      headlineRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );

    // Stats animation with stagger
    tl.fromTo(
      statsRef.current.children,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
      },
      "-=0.8"
    );

    // Optional ScrollTrigger effect
    gsap.fromTo(
      headlineRef.current,
      { scale: 1 },
      {
        scale: 1.05,
        scrollTrigger: {
          trigger: headlineRef.current,
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="hero h-screen flex flex-col justify-center items-center text-center relative">
      <h1
        ref={headlineRef}
        className="text-6xl md:text-7xl tracking-[0.6em] font-bold text-white"
      >
        W E L C O M E I T Z F I Z Z
      </h1>

      <div
        ref={statsRef}
        className="mt-12 flex gap-12 text-lg md:text-xl"
      >
        <div>
          <h2 className="text-4xl font-bold text-white">98%</h2>
          <p className="text-gray-400">Customer Satisfaction</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-white">120+</h2>
          <p className="text-gray-400">Projects Delivered</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-white">24/7</h2>
          <p className="text-gray-400">Support System</p>
        </div>
      </div>
    </section>
  );
}