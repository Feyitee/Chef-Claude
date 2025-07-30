import React from "react";
import chef from "../assets/images/chef.png";

const Header = () => {
  return (
    <>
      <header>
        <img src={chef} />
        <h1>Chef Claude</h1>
      </header>
    </>
  );
};

export default Header;
