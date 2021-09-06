import React, { useEffect } from 'react';
import { Linear } from 'gsap/gsap-core';
import { gsap } from 'gsap';

const Circle = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { transformOrigin: '-200px -200px' },
    });
    const dur = 5;

    tl.to('#main_circle', dur, {
      rotation: -360,
      transformOrigin: '200px 200px',
      repeat: -1,
    }).to(
      '#circle_up',
      dur,
      {
        rotation: -360,
        transformOrigin: '200px 200px',
        repeat: -1,
        ease: Linear.easeNone,
      },
      1,
    );

    tl.to(
      '#circle_down_1',
      dur,
      {
        rotation: -360,
        transformOrigin: '-190px -190px',
        repeat: -1,
        ease: Linear.easeNone,
      },
      1,
    )
      .to(
        '#circle_down_2',
        dur,
        {
          rotation: -360,
          transformOrigin: '-180px -180px',
          repeat: -1,
          ease: Linear.easeNone,
        },
        1,
      )
      .to(
        '#circle_down_3',
        dur,
        {
          rotation: -360,
          transformOrigin: '-170px -170px',
          repeat: -1,
          ease: Linear.easeNone,
        },
        1,
      )
      .to(
        '#circle_down_4',
        dur,
        {
          rotation: -360,
          transformOrigin: '-160px -160px',
          repeat: -1,
          ease: Linear.easeNone,
        },
        1,
      )
      .to(
        '#circle_down_5',
        dur,
        {
          rotation: -360,
          transformOrigin: '-150px -150px',
          repeat: -1,
          ease: Linear.easeNone,
        },
        1,
      )
      .to(
        '#circle_down_6',
        dur,
        {
          rotation: -360,
          transformOrigin: '-140px -140px',
          repeat: -1,
          ease: Linear.easeNone,
        },
        1,
      )
      .to(
        '#circle_down_7',
        dur,
        {
          rotation: -360,
          transformOrigin: '-130px -130px',
          repeat: -1,
          ease: Linear.easeNone,
        },
        1,
      )
      .to(
        '#circle_down_8',
        dur,
        {
          rotation: -360,
          transformOrigin: '-120px -120px',
          repeat: -1,
          ease: Linear.easeNone,
        },
        1,
      )
      .to(
        '#circle_down_9',
        dur,
        {
          rotation: -360,
          transformOrigin: '-110px -110px',
          repeat: -1,
          ease: Linear.easeNone,
        },
        1,
      )
      .to(
        '#circle_down_10',
        dur,
        {
          rotation: -360,
          transformOrigin: '-100px -100px',
          repeat: -1,
          ease: Linear.easeNone,
        },
        1,
      )
      .to(
        '#circle_down_11',
        dur,
        {
          rotation: -360,
          transformOrigin: '-90px -90px',
          repeat: -1,
          ease: Linear.easeNone,
        },
        1,
      )
      .to(
        '#circle_down_12',
        dur,
        {
          rotation: -360,
          transformOrigin: '-80px -80px',
          repeat: -1,
          ease: Linear.easeNone,
        },
        1,
      )
      .to(
        '#circle_down_13',
        dur,
        {
          rotation: -360,
          transformOrigin: '-70px -70px',
          repeat: -1,
          ease: Linear.easeNone,
        },
        1,
      )
      .to(
        '#circle_down_14',
        dur,
        {
          rotation: -360,
          transformOrigin: '-60px -60px',
          repeat: -1,
          ease: Linear.easeNone,
        },
        1,
      )
      .to(
        '#circle_down_15',
        dur,
        {
          rotation: -360,
          transformOrigin: '-50px -50px',
          repeat: -1,
          ease: Linear.easeNone,
        },
        1,
      )
      .to(
        '#circle_down_16',
        dur,
        {
          rotation: -360,
          transformOrigin: '-40px -40px',
          repeat: -1,
          ease: Linear.easeNone,
        },
        1,
      )
      .to(
        '#circle_down_17',
        dur,
        {
          rotation: -360,
          transformOrigin: '-30px -30px',
          repeat: -1,
          ease: Linear.easeNone,
        },
        1,
      )
      .to(
        '#circle_down_18',
        dur,
        {
          rotation: -360,
          transformOrigin: '-20px -20px',
          repeat: -1,
          ease: Linear.easeNone,
        },
        1,
      )
      .to(
        '#circle_down_19',
        dur,
        {
          rotation: -360,
          transformOrigin: '-10px -10px',
          repeat: -1,
          ease: Linear.easeNone,
        },
        1,
      )
      .to(
        '#circle_down_20',
        dur,
        {
          rotation: -360,
          transformOrigin: '0 0',
          repeat: -1,
          ease: Linear.easeNone,
        },
        1,
      )
      .to(
        '#circle_down_21',
        dur,
        {
          rotation: -360,
          transformOrigin: '10px 10px',
          repeat: -1,
          ease: Linear.easeNone,
        },
        1,
      )
      .to(
        '#circle_down_22',
        dur,
        {
          rotation: -360,
          transformOrigin: '20px 20px',
          repeat: -1,
          ease: Linear.easeNone,
        },
        1,
      )
      .to(
        '#circle_down_23',
        dur,
        {
          rotation: -360,
          transformOrigin: '30px 30px',
          repeat: -1,
          ease: Linear.easeNone,
        },
        1,
      )
      .to(
        '#circle_down_24',
        dur,
        {
          rotation: -360,
          transformOrigin: '40px 40px',
          repeat: -1,
          ease: Linear.easeNone,
        },
        1,
      )
      .to(
        '#circle_down_25',
        dur,
        {
          rotation: -360,
          transformOrigin: '50px 50px',
          repeat: -1,
          ease: Linear.easeNone,
        },
        1,
      )
      .to(
        '#circle_down_26',
        dur,
        {
          rotation: -360,
          transformOrigin: '60px 60px',
          repeat: -1,
          ease: Linear.easeNone,
        },
        1,
      )
      .to(
        '#circle_down_27',
        dur,
        {
          rotation: -360,
          transformOrigin: '70px 70px',
          repeat: -1,
          ease: Linear.easeNone,
        },
        1,
      );
  }, []);

  return (
    <svg
      width="500"
      height="500"
      viewBox="-200 -200 800 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="circle_up"
        d="M35.3297 70.717C54.2895 70.717 69.6594 54.9923 69.6594 35.5948C69.6594 16.1974 54.2895 0.472656 35.3297 0.472656C16.3699 0.472656 1 16.1974 1 35.5948C1 54.9923 16.3699 70.717 35.3297 70.717Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        id="circle_up"
        d="M41.3062 82.8884C63.5299 82.8884 81.5457 64.4567 81.5457 41.7201C81.5457 18.9834 63.5299 0.551758 41.3062 0.551758C19.0826 0.551758 1.06671 18.9834 1.06671 41.7201C1.06671 64.4567 19.0826 82.8884 41.3062 82.8884Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        id="circle_up"
        d="M47.2882 95.0549C72.7731 95.0549 93.4328 73.9183 93.4328 47.845C93.4328 21.7716 72.7731 0.63501 47.2882 0.63501C21.8032 0.63501 1.14362 21.7716 1.14362 47.845C1.14362 73.9183 21.8032 95.0549 47.2882 95.0549Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        id="circle_up"
        d="M53.2622 107.228C82.0111 107.228 105.317 83.384 105.317 53.9716C105.317 24.5591 82.0111 0.715576 53.2622 0.715576C24.5134 0.715576 1.20789 24.5591 1.20789 53.9716C1.20789 83.384 24.5134 107.228 53.2622 107.228Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        id="circle_up"
        d="M59.2381 119.396C91.2508 119.396 117.202 92.8457 117.202 60.0939C117.202 27.3421 91.2508 0.791504 59.2381 0.791504C27.2254 0.791504 1.27393 27.3421 1.27393 60.0939C1.27393 92.8457 27.2254 119.396 59.2381 119.396Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        id="circle_up"
        d="M65.2144 131.566C100.491 131.566 129.088 102.308 129.088 66.2175C129.088 30.1266 100.491 0.869141 65.2144 0.869141C29.9378 0.869141 1.34045 30.1266 1.34045 66.2175C1.34045 102.308 29.9378 131.566 65.2144 131.566Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        id="circle_up"
        d="M71.1948 143.731C109.733 143.731 140.974 111.768 140.974 72.3408C140.974 32.9133 109.733 0.950928 71.1948 0.950928C32.6569 0.950928 1.41577 32.9133 1.41577 72.3408C1.41577 111.768 32.6569 143.731 71.1948 143.731Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        id="circle_up"
        d="M77.1711 155.901C118.973 155.901 152.86 121.232 152.86 78.4647C152.86 35.6979 118.973 1.02856 77.1711 1.02856C35.3693 1.02856 1.4823 35.6979 1.4823 78.4647C1.4823 121.232 35.3693 155.901 77.1711 155.901Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        id="circle_up"
        d="M83.1465 168.07C128.212 168.07 164.745 130.694 164.745 84.588C164.745 38.482 128.212 1.10571 83.1465 1.10571C38.0808 1.10571 1.54785 38.482 1.54785 84.588C1.54785 130.694 38.0808 168.07 83.1465 168.07Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        id="circle_up"
        d="M89.1277 180.245C137.457 180.245 176.636 140.161 176.636 90.7161C176.636 41.2708 137.457 1.1875 89.1277 1.1875C40.7981 1.1875 1.61926 41.2708 1.61926 90.7161C1.61926 140.161 40.7981 180.245 89.1277 180.245Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        id="circle_up"
        d="M95.1032 192.409C146.694 192.409 188.517 149.621 188.517 96.8395C188.517 44.0577 146.694 1.26953 95.1032 1.26953C43.5123 1.26953 1.6897 44.0577 1.6897 96.8395C1.6897 149.621 43.5123 192.409 95.1032 192.409Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        id="circle_up"
        d="M101.079 204.58C155.934 204.58 200.403 159.084 200.403 102.963C200.403 46.8421 155.934 1.34692 101.079 1.34692C46.2248 1.34692 1.75623 46.8421 1.75623 102.963C1.75623 159.084 46.2248 204.58 101.079 204.58Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        id="circle_up"
        d="M107.06 216.749C165.178 216.749 212.293 168.547 212.293 109.087C212.293 49.6268 165.178 1.4248 107.06 1.4248C48.9411 1.4248 1.82666 49.6268 1.82666 109.087C1.82666 168.547 48.9411 216.749 107.06 216.749Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        id="circle_up"
        d="M113.036 228.919C174.419 228.919 224.179 178.01 224.179 115.211C224.179 52.4112 174.419 1.5022 113.036 1.5022C51.6536 1.5022 1.89325 52.4112 1.89325 115.211C1.89325 178.01 51.6536 228.919 113.036 228.919Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        id="circle_up"
        d="M119.012 241.089C183.655 241.089 236.059 187.475 236.059 121.339C236.059 55.203 183.655 1.58911 119.012 1.58911C54.3678 1.58911 1.96362 55.203 1.96362 121.339C1.96362 187.475 54.3678 241.089 119.012 241.089Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        id="circle_up"
        d="M124.988 253.259C192.896 253.259 247.946 196.938 247.946 127.463C247.946 57.9875 192.896 1.66675 124.988 1.66675C57.0803 1.66675 2.03021 57.9875 2.03021 127.463C2.03021 196.938 57.0803 253.259 124.988 253.259Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        id="circle_up"
        d="M130.968 265.428C202.14 265.428 259.836 206.401 259.836 133.586C259.836 60.7715 202.14 1.74365 130.968 1.74365C59.7966 1.74365 2.10065 60.7715 2.10065 133.586C2.10065 206.401 59.7966 265.428 130.968 265.428Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        id="circle_up"
        d="M136.945 277.593C211.377 277.593 271.717 215.861 271.717 139.709C271.717 63.5582 211.377 1.82544 136.945 1.82544C62.5117 1.82544 2.172 63.5582 2.172 139.709C2.172 215.861 62.5117 277.593 136.945 277.593Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        id="circle_up"
        d="M142.92 289.763C220.617 289.763 283.602 225.324 283.602 145.833C283.602 66.3428 220.617 1.90308 142.92 1.90308C65.2233 1.90308 2.23761 66.3428 2.23761 145.833C2.23761 225.324 65.2233 289.763 142.92 289.763Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        id="circle_up"
        d="M148.901 301.938C229.862 301.938 295.493 234.791 295.493 151.961C295.493 69.1317 229.862 1.98511 148.901 1.98511C67.9405 1.98511 2.30896 69.1317 2.30896 151.961C2.30896 234.791 67.9405 301.938 148.901 301.938Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        id="circle_up"
        d="M154.877 314.108C239.101 314.108 307.379 244.254 307.379 158.085C307.379 71.9164 239.101 2.06274 154.877 2.06274C70.652 2.06274 2.37457 71.9164 2.37457 158.085C2.37457 244.254 70.652 314.108 154.877 314.108Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        id="circle_up"
        d="M160.853 326.272C248.339 326.272 319.26 253.714 319.26 164.209C319.26 74.7032 248.339 2.14478 160.853 2.14478C73.3672 2.14478 2.44598 74.7032 2.44598 164.209C2.44598 253.714 73.3672 326.272 160.853 326.272Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        id="circle_up"
        d="M166.829 338.442C257.579 338.442 331.146 263.177 331.146 170.332C331.146 77.4876 257.579 2.22217 166.829 2.22217C76.0792 2.22217 2.51202 77.4876 2.51202 170.332C2.51202 263.177 76.0792 338.442 166.829 338.442Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        id="circle_up"
        d="M172.81 350.612C266.823 350.612 343.036 272.639 343.036 176.455C343.036 80.2715 266.823 2.29907 172.81 2.29907C78.796 2.29907 2.58295 80.2715 2.58295 176.455C2.58295 272.639 78.796 350.612 172.81 350.612Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        id="circle_up"
        d="M178.785 362.787C276.063 362.787 354.922 282.107 354.922 182.584C354.922 83.0612 276.063 2.38184 178.785 2.38184C81.5079 2.38184 2.64899 83.0612 2.64899 182.584C2.64899 282.107 81.5079 362.787 178.785 362.787Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        id="circle_up"
        d="M184.761 374.952C285.3 374.952 366.803 291.567 366.803 188.708C366.803 85.8479 285.3 2.46362 184.761 2.46362C84.2226 2.46362 2.71991 85.8479 2.71991 188.708C2.71991 291.567 84.2226 374.952 184.761 374.952Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        id="main_circle"
        d="M190.742 387.121C294.544 387.121 378.693 301.03 378.693 194.831C378.693 88.632 294.544 2.54077 190.742 2.54077C86.939 2.54077 2.79034 88.632 2.79034 194.831C2.79034 301.03 86.939 387.121 190.742 387.121Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        id="circle_down_1"
        d="M356.225 387.198C368.717 387.198 378.844 376.838 378.844 364.058C378.844 351.277 368.717 340.917 356.225 340.917C343.733 340.917 333.606 351.277 333.606 364.058C333.606 376.838 343.733 387.198 356.225 387.198Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        id="circle_down_2"
        d="M352.29 387.146C366.932 387.146 378.801 375.002 378.801 360.022C378.801 345.042 366.932 332.899 352.29 332.899C337.648 332.899 325.779 345.042 325.779 360.022C325.779 375.002 337.648 387.146 352.29 387.146Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        id="circle_down_3"
        d="M348.35 387.097C365.145 387.097 378.759 373.168 378.759 355.986C378.759 338.804 365.145 324.875 348.35 324.875C331.556 324.875 317.942 338.804 317.942 355.986C317.942 373.168 331.556 387.097 348.35 387.097Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        id="circle_down_4"
        d="M344.411 387.045C363.355 387.045 378.712 371.333 378.712 351.951C378.712 332.57 363.355 316.858 344.411 316.858C325.467 316.858 310.11 332.57 310.11 351.951C310.11 371.333 325.467 387.045 344.411 387.045Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        id="circle_down_5"
        d="M340.475 386.991C361.569 386.991 378.669 369.496 378.669 347.915C378.669 326.334 361.569 308.84 340.475 308.84C319.381 308.84 302.281 326.334 302.281 347.915C302.281 369.496 319.381 386.991 340.475 386.991Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        id="circle_down_6"
        d="M336.535 386.938C359.779 386.938 378.622 367.66 378.622 343.88C378.622 320.099 359.779 300.821 336.535 300.821C313.292 300.821 294.449 320.099 294.449 343.88C294.449 367.66 313.292 386.938 336.535 386.938Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        id="circle_down_7"
        d="M332.595 386.885C357.989 386.885 378.575 365.824 378.575 339.844C378.575 313.864 357.989 292.803 332.595 292.803C307.202 292.803 286.616 313.864 286.616 339.844C286.616 365.824 307.202 386.885 332.595 386.885Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        id="circle_down_8"
        d="M328.656 386.832C356.2 386.832 378.528 363.988 378.528 335.808C378.528 307.629 356.2 284.785 328.656 284.785C301.113 284.785 278.784 307.629 278.784 335.808C278.784 363.988 301.113 386.832 328.656 386.832Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        id="circle_down_9"
        d="M324.721 386.779C354.414 386.779 378.485 362.152 378.485 331.773C378.485 301.394 354.414 276.767 324.721 276.767C295.028 276.767 270.956 301.394 270.956 331.773C270.956 362.152 295.028 386.779 324.721 386.779Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        id="circle_down_10"
        d="M320.781 386.725C352.624 386.725 378.438 360.315 378.438 327.737C378.438 295.159 352.624 268.749 320.781 268.749C288.938 268.749 263.124 295.159 263.124 327.737C263.124 360.315 288.938 386.725 320.781 386.725Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        id="circle_down_11"
        d="M316.841 386.677C350.837 386.677 378.396 358.482 378.396 323.702C378.396 288.921 350.837 260.726 316.841 260.726C282.846 260.726 255.287 288.921 255.287 323.702C255.287 358.482 282.846 386.677 316.841 386.677Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        id="circle_down_12"
        d="M312.901 386.624C349.047 386.624 378.348 356.645 378.348 319.666C378.348 282.686 349.047 252.708 312.901 252.708C276.756 252.708 247.454 282.686 247.454 319.666C247.454 356.645 276.756 386.624 312.901 386.624Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        id="circle_down_13"
        d="M308.966 386.57C347.261 386.57 378.305 354.809 378.305 315.63C378.305 276.451 347.261 244.689 308.966 244.689C270.671 244.689 239.626 276.451 239.626 315.63C239.626 354.809 270.671 386.57 308.966 386.57Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        id="circle_down_14"
        d="M305.026 386.517C345.471 386.517 378.259 352.973 378.259 311.594C378.259 270.216 345.471 236.672 305.026 236.672C264.581 236.672 231.794 270.216 231.794 311.594C231.794 352.973 264.581 386.517 305.026 386.517Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        id="circle_down_15"
        d="M301.086 386.464C343.681 386.464 378.211 351.137 378.211 307.559C378.211 263.981 343.681 228.654 301.086 228.654C258.491 228.654 223.961 263.981 223.961 307.559C223.961 351.137 258.491 386.464 301.086 386.464Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        id="circle_down_16"
        d="M297.151 386.41C341.896 386.41 378.168 349.3 378.168 303.523C378.168 257.745 341.896 220.635 297.151 220.635C252.406 220.635 216.133 257.745 216.133 303.523C216.133 349.3 252.406 386.41 297.151 386.41Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        id="circle_down_17"
        d="M293.211 386.358C340.105 386.358 378.121 347.465 378.121 299.488C378.121 251.51 340.105 212.617 293.211 212.617C246.316 212.617 208.301 251.51 208.301 299.488C208.301 347.465 246.316 386.358 293.211 386.358Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        id="circle_down_18"
        d="M289.272 386.309C338.319 386.309 378.079 345.631 378.079 295.452C378.079 245.272 338.319 204.594 289.272 204.594C240.225 204.594 200.464 245.272 200.464 295.452C200.464 345.631 240.225 386.309 289.272 386.309Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        id="circle_down_19"
        d="M285.332 386.256C336.529 386.256 378.032 343.795 378.032 291.416C378.032 239.038 336.529 196.576 285.332 196.576C234.135 196.576 192.632 239.038 192.632 291.416C192.632 343.795 234.135 386.256 285.332 386.256Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        id="circle_down_20"
        d="M281.397 386.203C334.743 386.203 377.989 341.959 377.989 287.38C377.989 232.802 334.743 188.558 281.397 188.558C228.05 188.558 184.804 232.802 184.804 287.38C184.804 341.959 228.05 386.203 281.397 386.203Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        id="circle_down_21"
        d="M277.457 386.15C332.953 386.15 377.942 340.123 377.942 283.345C377.942 226.567 332.953 180.54 277.457 180.54C221.96 180.54 176.971 226.567 176.971 283.345C176.971 340.123 221.96 386.15 277.457 386.15Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        id="circle_down_22"
        d="M273.517 386.097C331.163 386.097 377.895 338.286 377.895 279.309C377.895 220.332 331.163 172.521 273.517 172.521C215.87 172.521 169.139 220.332 169.139 279.309C169.139 338.286 215.87 386.097 273.517 386.097Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        id="circle_down_23"
        d="M269.577 386.044C329.373 386.044 377.847 336.45 377.847 275.274C377.847 214.097 329.373 164.504 269.577 164.504C209.781 164.504 161.306 214.097 161.306 275.274C161.306 336.45 209.781 386.044 269.577 386.044Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        id="circle_down_24"
        d="M265.642 385.995C327.588 385.995 377.805 334.619 377.805 271.243C377.805 207.867 327.588 156.49 265.642 156.49C203.696 156.49 153.478 207.867 153.478 271.243C153.478 334.619 203.696 385.995 265.642 385.995Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        id="circle_down_25"
        d="M261.702 385.943C325.798 385.943 377.758 332.783 377.758 267.208C377.758 201.632 325.798 148.472 261.702 148.472C197.606 148.472 145.646 201.632 145.646 267.208C145.646 332.783 197.606 385.943 261.702 385.943Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        id="circle_down_26"
        d="M257.762 385.894C324.01 385.894 377.715 330.949 377.715 263.171C377.715 195.394 324.01 140.449 257.762 140.449C191.514 140.449 137.809 195.394 137.809 263.171C137.809 330.949 191.514 385.894 257.762 385.894Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        id="circle_down_27"
        d="M253.827 385.841C322.225 385.841 377.673 329.113 377.673 259.136C377.673 189.159 322.225 132.431 253.827 132.431C185.429 132.431 129.981 189.159 129.981 259.136C129.981 329.113 185.429 385.841 253.827 385.841Z"
        stroke="#FAFAFA"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export default Circle;
