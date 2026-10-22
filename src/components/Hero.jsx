import { useRef } from 'react';
import useFitTitle from '../useFitTitle.js';

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  useFitTitle(heroRef, titleRef);

  return (
    <section className="hero" ref={heroRef}>
      <img className="hero-img" src="/other-hero.png" alt="" />
      <h1 ref={titleRef}>HOW TO ROB THE ART INSTITUTE OF CHICAGO</h1>
      <p>A new play by Sam Hernandez. Produced by Adams Theatre Company.</p>
      <div className="scroll-hint">↓ scroll</div>
    </section>
  );
}
