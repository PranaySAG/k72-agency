"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";
import { useNavigate } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger, SplitText);

const cardsData = [
  {
    title: "Lamejure",
    description:
      "A futuristic residence that plays with curvature and flow, blending bold geometry with natural topography.",
    img: "https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg",
    link: "https://www.instagram.com/k72_creation/"
  },
  {
    title: "Crisis24",
    description:
      "Sustainable architecture designed to reshape modern living and connect people with nature.",
    img: "https://k72.ca/uploads/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes-1280x960.jpg",
    link: ""
  },
  {
    title: `Fruité`,
    description:
      "A bold digital-first living concept that reimagines how architecture exists in virtual and real spaces.",
    img: "https://k72.ca/uploads/caseStudies/FRUITE/Fruite_thumbnail_bbq-1280x960.jpg",
    link: ""
  },
];


export default function Cards() {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  


  useEffect(() => {
    const ctx = gsap.context(() => {
      const lenis = new Lenis();
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);

      const cards = gsap.utils.toArray(".card");

      cards.forEach((card) => {
        const title = card.querySelector(".card-title h1");
        const split = new SplitText(title, {
          type: "chars",
          charsClass: "char",
        });
        split.chars.forEach((char) => {
          char.innerHTML = `<span>${char.textContent}</span>`;
        });
      });

      const animateContentIn = (titleChars, description) => {
        gsap.to(titleChars, { x: "0%", opacity: 1, duration: 0.75, stagger: 0.02 });
        gsap.to(description, { x: 0, opacity: 1, duration: 0.75, delay: 0.1 });
      };

      const animateContentOut = (titleChars, description) => {
        gsap.to(titleChars, { x: "100%", opacity: 0, duration: 0.5, stagger: 0.02 });
        gsap.to(description, { x: 40, opacity: 0, duration: 0.5 });
      };

      cards.forEach((card, index) => {
        const imgWrapper = card.querySelector(".card-img");
        const img = card.querySelector(".card-img img");
        const description = card.querySelector(".card-description");
        const titleChars = card.querySelectorAll(".char span");

        if (index === 0) {
          gsap.set(imgWrapper, { scale: 0.5, borderRadius: "400px" });
          gsap.set(img, { scale: 1.5 });

          ScrollTrigger.create({
            trigger: card,
            start: "top top",
            end: "+=300vh",
            onUpdate: (self) => {
              const progress = self.progress;
              gsap.set(imgWrapper, { scale: 0.5 + progress * 0.5, borderRadius: 400 - progress * 375 + "px" });
              gsap.set(img, { scale: 1.5 - progress * 0.5 });

              if (progress > 0.3 && !card.contentRevealed) {
                card.contentRevealed = true;
                animateContentIn(titleChars, description);
              } else if (progress < 0.3 && card.contentRevealed) {
                card.contentRevealed = false;
                animateContentOut(titleChars, description);
              }
            },
          });
        } else {
          ScrollTrigger.create({
            trigger: card,
            start: "top top",
            onEnter: () => animateContentIn(titleChars, description),
            onLeaveBack: () => animateContentOut(titleChars, description),
          });

          ScrollTrigger.create({
            trigger: card,
            start: "top bottom",
            end: "top top",
            onUpdate: (self) => {
              const progress = self.progress;
              gsap.set(img, { scale: 2 - progress });
              gsap.set(imgWrapper, { borderRadius: 150 - progress * 125 + "px" });
            },
          });
        }

        const isLastCard = index === cards.length - 1;
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          end: isLastCard ? "+=100vh" : "top top",
          pinSpacing: isLastCard,
        });
      });

      document.querySelectorAll(".marquee").forEach((marquee) => {
        marquee.innerHTML += marquee.innerHTML;
        gsap.to(marquee, { xPercent: -50, duration: 20, repeat: -1, ease: "linear" });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-black text-white p-3">
      <section className="intro h-screen flex items-center justify-center px-6">
        <h1 className="text-center text-5xl md:text-7xl font-medium max-w-3xl leading-tight">
          We design spaces that don’t just exist.
        </h1>
      </section>

      {cardsData.map((card, i) => (
        <section key={i} className="cards relative flex flex-col">
          <div className="card relative w-screen h-screen p-6">
            <div className="card-marquee absolute top-1/2 left-0 -translate-y-1/2 overflow-hidden w-full">
              {/* <div className="marquee flex">
                {card.marquee.map((m, j) => (
                  <h1 key={j} className="whitespace-nowrap text-[10vw] font-semibold mr-8">{m}</h1>
                ))}
              </div> */}
            </div>

            <div className="card-wrapper relative w-full h-full flex flex-col items-center justify-center">
              <div className="card-content relative w-full h-full flex flex-col items-center justify-center z-10">
                <div className="card-title w-full text-center">
                  <h1 className="text-5xl md:text-7xl font-bold ">{card.title}</h1>
                </div>
              </div>

              <div className="card-img absolute top-0 left-0 w-full h-full rounded-[150px] overflow-hidden">
                <img src={card.img} alt={card.title} className="w-full h-full object-cover scale-150" />
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
