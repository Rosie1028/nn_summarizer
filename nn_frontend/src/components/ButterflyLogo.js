import React from 'react';
import './ButterflyLogo.css';

const ButterflyLogo = () => {
  return (
    <div className="butterfly-container">
      <div className="butterfly">
        <div className="wings left-wing"></div>
        <div className="wings right-wing"></div>
        <div className="body">
          <div className="antenna left-antenna"></div>
          <div className="antenna right-antenna"></div>
        </div>
      </div>
    </div>
  );
};

export default ButterflyLogo; 