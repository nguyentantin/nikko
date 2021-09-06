import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Back } from 'gsap/gsap-core';

import Right from 'src/svg/Right';
import Wave from 'src/svg/Wave';
import ResponsiveWave from 'src/svg/ResponsiveWave';

type Props = {};

const WhoWeAre: React.FC<Props> = (props) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      defaults: { duration: 1, ease: Back.easeOut.config(2), opacity: 0 },
    });

    tl.from(
      contentRef.current,
      {
        duration: 1,
        opacity: 0,
        x: 100,
      },
      '1',
    ).from(
      svgRef.current,
      {
        duration: 1,
        yoyo: true,
        opacity: 0,
        x: -200,
      },
      '1',
    );

    if (window.innerWidth > 840) {
      ScrollTrigger.create({
        trigger: svgRef.current,
        start: 'top top',
        endTrigger: 'section.funds',
        // end: 'bottom+=100vh bottom-=100px',
        pin: true,
        pinType: 'fixed',
        // markers: true,
        pinReparent: true,
        pinSpacing: false,
      });
    }
  }, []);

  return (
    <section className="who_we_are container">
      <div ref={svgRef} className="wave">
        <Wave />
      </div>
      <div className="responsive_wave">
        <ResponsiveWave />
      </div>
      <div ref={contentRef} className="content">
        <div className="head">
          Progressive Solutions <br /> Competitive Performance <br /> Global
          Citizen with Asian DNA
        </div>
        <div className="learn_more">
          <div className="text">
            We’re one of Asia’s largest asset managers.
          </div>
          <a href="https://www.google.com.vn/" target="_blank" rel="noreferrer">
            Learn more about who we are
            <Right stroke="#00A4B8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
