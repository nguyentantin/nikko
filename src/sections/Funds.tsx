import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Back } from 'gsap';

import Right from 'src/svg/Right';
import Charts from 'src/svg/Charts';

type Props = {};
const buttons = [1, 2, 3, 4];

const Funds: React.FC<Props> = (props) => {
  const [active, setActive] = useState<number>(1);
  const ref = useRef<Array<HTMLDivElement | null>>([]);

  const onClick = (b) => {
    if (active === b) {
      return;
    }
    setActive(b);
    gsap.from(ref.current[b], {
      x: 400,
      opacity: 0,
      duration: 1,
      ease: Back.easeOut.config(1),
      yoyo: true,
    });
  };

  return (
    <section className="funds container">
      <div className="content">
        <div className="carousel">
          <div className="head">Our Featured Funds</div>
          <div className="carousel_button">
            {buttons.map((button) => (
              <span
                className={active === button ? 'active' : ''}
                key={button}
                onClick={() => onClick(button)}
              >
                {`0${button}`}
              </span>
            ))}
          </div>
          <div className="carousel_button_responsive">
            {buttons.map((button) => (
              <span
                className={active === button ? 'active' : ''}
                key={button}
                onClick={() => onClick(button)}
              >
                {`0${button}`}
              </span>
            ))}
          </div>
          {buttons.map((button) => {
            return (
              <div
                ref={(el) => (ref.current[button] = el)}
                key={button}
                className={
                  active === button
                    ? 'active carousel_content'
                    : 'carousel_content'
                }
              >
                <p className="carousel_content_head stagger">
                  Nikko AM ARK Disruptive Innovation Fund {button}
                </p>
                <div className="carousel_content_charts stagger">
                  <Charts />
                </div>
                <div className="carousel_content_list stagger">
                  <ul>
                    <li>
                      <span className="carousel_content_list_title">
                        NAV (per 100 shares)
                      </span>
                      <span className="carousel_content_list_content">
                        ¥196,977
                      </span>
                    </li>
                    <li>
                      <span className="carousel_content_list_title">
                        Net Assets
                      </span>
                      <span className="carousel_content_list_content">
                        7,309,193 million
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
          <a href="https://www.google.com.vn/" target="_blank" rel="noreferrer">
            Explore more funds
            <Right stroke="#00A4B8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Funds;
