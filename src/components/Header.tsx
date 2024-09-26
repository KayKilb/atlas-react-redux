// src/components/Header.tsx
import React from "react";
import logo from "../assets/logo.png";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 border-b-2 border-blue bg-off-white-light pb-8 pt-8">
      <img className="mx-auto w-56" src={logo} alt="logo" />
    </header>
  );
};

export default Header;
