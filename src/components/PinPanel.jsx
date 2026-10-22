import { forwardRef, useImperativeHandle, useRef } from 'react';
import useFitTitle from '../useFitTitle.js';

// second pinned panel; App drives the overlay fade, so expose the nodes it measures
const PinPanel = forwardRef(function PinPanel({ title }, ref) {
  const pinRef = useRef(null);
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const overlayRef = useRef(null);
  useFitTitle(heroRef, titleRef);

  useImperativeHandle(ref, () => ({
    pin: pinRef.current,
    hero: heroRef.current,
    title: titleRef.current,
    overlay: overlayRef.current,
  }));

  return (
    <div className="pin" ref={pinRef}>
      <section className="pin-hero" ref={heroRef}>
        <h1 ref={titleRef}>{title}</h1>
        <p></p>
        <div className="pin-overlay" ref={overlayRef}></div>
      </section>
    </div>
  );
});

export default PinPanel;
