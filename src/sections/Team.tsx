import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Right from 'src/svg/Right';
import Circle from 'src/svg/Circle';

type Props = {};

const Team: React.FC<Props> = (props) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl1 = gsap.timeline({
      defaults: { duration: 1, opacity: 0 },
      scrollTrigger: {
        trigger: contentRef.current,
        start: '-40% 30%',
        toggleActions: 'restart none none reverse',
      },
    });
    tl1
      .from(contentRef.current, { x: 400 }, 0.2)
      .from(svgRef.current, { x: -400 }, 0.2);

    const tl2 = gsap.timeline({
      defaults: { duration: 1, opacity: 0 },
      scrollTrigger: {
        trigger: contentRef.current,
        start: '40% -30%',
        toggleActions: 'restart none none reverse',
      },
    });
    tl2
      .to(contentRef.current, { x: 400 }, 0.2)
      .to(svgRef.current, { x: -400 }, 0.2);
  }, []);

  return (
    <section className="team container">
      <div ref={svgRef} className="wave">
        <Circle />
      </div>
      <div ref={contentRef} className="content">
        <h3>Team of unique combination</h3>
        <div className="head">
          Global Intelligence <br />
          Asian Insights <br />
          Local Experience
        </div>
        <div className="learn_more">
          <div className="text">
            We transform intelligent insights into innovative, relevant
            investment opportunities for our clients. Leveraging our unique
            combination of a global perspective complemented by our Asian DNA,
            we aspire to create sophisticated and diverse solutions that set new
            standards in the asset management industry.
          </div>
          <a href="https://www.google.com.vn/" target="_blank" rel="noreferrer">
            Learn more about what makes us unique
            <Right stroke="#fff" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;
