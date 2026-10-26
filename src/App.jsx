import { useEffect, useRef } from 'react';
import Hero from './components/Hero.jsx';
import PinPanel from './components/PinPanel.jsx';
import Timeline from './components/Timeline.jsx';
import Tiers from './components/Tiers.jsx';
import Sponsors from './components/Sponsors.jsx';
import { timeline, tiers, links, sponsors } from './data.js';

export default function App() {
  const heroOverlayRef = useRef(null);
  const pin2Ref = useRef(null);
  const nextContentRef = useRef(null);

  useEffect(() => {
    const fadeDistance = window.innerHeight * 0.8; // how much scroll it takes to fully cover

    function onScroll() {
      const y = window.scrollY;
      const progress = Math.min(y / fadeDistance, 1);

      heroOverlayRef.current.style.opacity = progress;

      // second panel starts fading a little before it pins, and is fully gone by the
      // time the next content box reaches the title, so the narrow text column never
      // slides over a half-visible title
      const { pin, hero, title, overlay } = pin2Ref.current;
      const top = pin.getBoundingClientRect().top;
      const titleBottom = title.getBoundingClientRect().bottom - hero.getBoundingClientRect().top;
      const gapWhenPinned = nextContentRef.current.getBoundingClientRect().top - top - titleBottom;
      const fadeStart = window.innerHeight * 0.35;
      const fadeLength = fadeStart + Math.max(gapWhenPinned, 0);
      overlay.style.opacity = Math.min(Math.max((fadeStart - top) / fadeLength, 0), 1);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Hero />

      <div className="hero-overlay" ref={heroOverlayRef}></div>

      <div className="spacer"></div>

      <main className="content">
        <section>
          <h2>The Play</h2>
          <p>On a cold Chicago night, four friends debate a serious question: Is stealing Indigenous art of Latin America a radical act of decolonization or a stupid way to get arrested? In <i>How to Rob the Art Institute of Chicago</i>, a comedy about friendship, identity, and colonialism, four college seniors plan the most important heist of their lives.</p>
          <Timeline items={timeline} />
          <a href="https://drive.google.com/file/d/1olkIs4eUn38mYOcnGg5k4L8aIebgdd0p/view?usp=sharing" className="btn" target="_blank">Read a Sample</a>
        </section>
        <section>
          <h2>The Community</h2>
          <p><i>How to Rob the Art Institute of Chicago</i> began as a response to experiences of Latine identity in the context of predominantly white institutions, and evolved into a story about grief, family, and finding the courage to decolonize individual identity. From playwright Sam Hernandez, director Octavio Montes De Oca, and Adams Theatre Company, our team is committed to building a diverse cast and production team to bring this story to the stage in the most authentic way possible.</p>
        </section>
        <section>
          <h2>The Reason</h2>
          <p><i>How to Rob The Art Institute of Chicago</i> is a radical and timely play that will provide an avenue for Latine Chicago theatre artists and audiences to have important conversations regarding identity, colonization, and grief. The play addresses these topics with nuance, humor, and heart. After two years of developmental readings and workshops, the play is ready and eager to be brought to life on stage.</p>
        </section>
      </main>

      <PinPanel ref={pin2Ref} title="WHAT DO WE NEED FROM YOU?" />

      <main className="content content-after" ref={nextContentRef}>
        <section>
          <h2>We are looking to raise funds to support the staged debut of this play through community crowdfunding and corporate sponsorship. </h2>
          <p>As a 501(c)3 organization, your tax-deductible donation will be used to fund production costs for the play's debut. Donation receipts will be provided for tax purposes and corporate gift matching.</p>
        </section>
        <section>
          <a href="https://www.zeffy.com/en-US/donation-form/how-to-rob-the-art-institute-of-chicago" className="btn">Donate Now</a>
        </section>
        <Tiers items={tiers} />

        <section>
          <h2>Community Sponsors</h2>
          <p>Thank you to our community sponsors who have supported this project! If you choose to donate to <i>How to Rob the Art Institute of Chicago</i>, your name will help appear on this list.</p>
        <div className="sponsors-wrap">
          <Sponsors items={sponsors} />
        </div>
        </section>

        <section>
          <h2>Want to get involved?</h2>
          <p>If you're interested in sponsoring this project or joining the team, please contact us below.</p>
          <a href="mailto:adamstheatrecompany@gmail.com" className="btn">Contact Adams Theatre Company</a>
        </section>
      </main>
    </>
  );
}
