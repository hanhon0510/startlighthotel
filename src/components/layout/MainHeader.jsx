import React from "react";

const MainHeader = () => {
  return (
    <header className="header-banner">
      <div className="overlay"></div>
      <div className="animated-texts overlay-content">
        <h1>
          Welcome to <span className="hotel-color">Star Light Hotel</span>
        </h1>
        <h3>Where every stay is bright</h3>
      </div>
    </header>
  );
};

export default MainHeader;
