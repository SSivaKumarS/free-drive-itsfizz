import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import carImg from "../assets/car.jpeg";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef(null);
  const carRef = useRef(null);
  const wheel1Ref = useRef(null);
  const wheel2Ref = useRef(null);
  const smokeRef = useRef(null);
  const lightRef = useRef(null);
  const speedRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const speedObj = { value: 0 };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2000",
          scrub: 1,
          pin: true,
        },
      });

      // CAR LEFT → RIGHT
      tl.fromTo(
        carRef.current,
        { x: "-35vw", scale: 0.8, rotationY: 15, transformPerspective: 1000 },
        { x: "35vw", scale: 1.05, rotationY: 0, ease: "power2.out" }
      );

      // WHEELS rotation
      tl.to(
        [wheel1Ref.current, wheel2Ref.current],
        { rotate: 1440, ease: "none" },
        0
      );

      // SMOKE
      tl.fromTo(
        smokeRef.current,
        { opacity: 0, x: 0 },
        { opacity: 0.6, x: -100, ease: "none" },
        0
      );

      // HEADLIGHT
      tl.to(
        lightRef.current,
        { boxShadow: "0 0 40px 20px rgba(255,255,200,0.9)", ease: "none" },
        0
      );

      // SPEED COUNTER
      tl.to(
        speedObj,
        {
          value: 320,
          duration: 1,
          onUpdate: () => {
            if (speedRef.current) speedRef.current.textContent = Math.floor(speedObj.value);
          },
        },
        0
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[400vh] overflow-hidden bg-black text-white"
    >
      {/* WATERMARK */}
      <div className="absolute bottom-4 right-4 text-white/20 text-sm tracking-widest select-none pointer-events-none">
        itsFizz digital
      </div>

      {/* ROAD */}
      <div className="absolute bottom-28 w-full h-24 bg-gray-900" />

      {/* SPEED UI */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-xl font-semibold bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl z-50">
        Speed: <span ref={speedRef}>0</span> km/h
      </div>

      {/* CAR */}
      <div
        ref={carRef}
        className="absolute bottom-28 left-1/2 -translate-x-1/2 w-[320px] md:w-[520px]"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* SMOKE */}
        <div
          ref={smokeRef}
          className="absolute bottom-6 -left-16 w-40 h-20 bg-gray-400 blur-3xl opacity-0 rounded-full"
        />
        {/* HEADLIGHT */}
        <div
          ref={lightRef}
          className="absolute right-2 top-1/2 w-6 h-6 bg-yellow-200 rounded-full blur-xl"
        />
        <img
          src={carImg}
          alt="car"
          className="w-full pointer-events-none select-none"
        />
        {/* WHEELS */}
        <div
          ref={wheel1Ref}
          className="absolute bottom-2 left-[22%] w-14 h-14 bg-gray-800 rounded-full border-4 border-black"
        />
        <div
          ref={wheel2Ref}
          className="absolute bottom-2 right-[18%] w-14 h-14 bg-gray-800 rounded-full border-4 border-black"
        />
      </div>

      {/* TITLE */}
      <h1 className="absolute top-24 left-1/2 -translate-x-1/2 text-5xl md:text-7xl font-bold tracking-widest z-50">
        FUTURE DRIVE
      </h1>

      {/* 4 FEATURES BLOCK */}
      <div className="absolute top-[120vh] w-full flex flex-col md:flex-row justify-around px-10 gap-10 text-center">
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl text-xl font-semibold">
          Feature 1: Turbo Boost
        </div>
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl text-xl font-semibold">
          Feature 2: Auto Steering
        </div>
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl text-xl font-semibold">
          Feature 3: Night Vision
        </div>
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl text-xl font-semibold">
          Feature 4: AI Assistant
        </div>
      </div>
    </section>
  );
}