import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import carImage from "../assets/car.jpeg";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollCar() {
  const carRef = useRef(null);

  useEffect(() => {
    gsap.to(carRef.current, {
      x: () => window.innerWidth * 0.7,
      ease: "none",
      scrollTrigger: {
        trigger: carRef.current,
        start: "top center",
        end: "bottom top",
        scrub: 1.5,
      },
    });
  }, []);

  return (
    <section className="h-[200vh] relative">
      <div className="sticky top-0 h-screen flex items-center justify-start">
        <img
          ref={carRef}
          src={carImage}
          className="w-72 will-change-transform"
          alt="Car Animation"
        />
      </div>
    </section>
  );
}