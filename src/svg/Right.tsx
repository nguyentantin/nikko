import React from 'react';

const Right = ({ stroke }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="8" stroke={stroke} />
      <path d="M11 8.6001L14.5 12.0408L11 15.6001" stroke={stroke} />
    </svg>
  );
};

export default Right;
