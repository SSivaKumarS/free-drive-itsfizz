import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const headlineRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headlineRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, ease: "power3.out", duration: 1.2 }
    );

    gsap.fromTo(
      statsRef.current.children,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        ease: "power3.out",
        duration: 1,
        stagger: 0.3,
        delay: 0.5,
      }
    );
  }, []);

  return (
    <section className="hero h-screen flex flex-col justify-center items-center text-center relative">
      <h1
        ref={headlineRef}
        className="text-6xl md:text-7xl tracking-widest font-bold"
      >
        W E L C O M E I T Z F I Z Z
      </h1>

      <div
        ref={statsRef}
        className="mt-10 flex gap-10 text-lg md:text-xl"
      >
        <div>
          <h2 className="text-3xl font-bold">98%</h2>
          <p className="text-gray-400">Customer Satisfaction</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">120+</h2>
          <p className="text-gray-400">Projects Delivered</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">24/7</h2>
          <p className="text-gray-400">Support System</p>
        </div>
      </div>
    </section>
  );
}