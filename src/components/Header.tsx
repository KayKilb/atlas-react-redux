// src/components/Header.tsx
import React from "react";

// Importing logo from assets
import logo from "../assets/logo.png";

const Header: React.FC = () => {
  return (
    <header className="pb- sticky top-0 border-b-2 border-blue bg-off-white-light pt-8">
      <img className="logo mx-auto w-56" src={logo} alt="Atlas School Logo" />
    </header>
  );
};

export default Header;
