import gsap from "gsap";

export default function animateElement(selector: string, parentSelector: string, fromVars: gsap.TweenVars, toVars: gsap.TweenVars, start= "top 60%", end= "top 10%", markers = false) {
  toVars.scrollTrigger = 
  {
    trigger: document.querySelector(parentSelector),
    start: start,
    end: end,
    scrub: true,
    markers: markers
  };

  gsap.fromTo(
    document.querySelector(selector),
    fromVars,
    toVars
  );
}