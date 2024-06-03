import React from "react";

// Navbar
export const NavLink = ({ children, href }) => {
  return (
    <a
      href={href}
      className="py-4 hover:text-orange-500 focus:text-orange-500 md:focus:border-b-4 md:focus:border-orange-500"
    >
      {children}
    </a>
  );
};
export const navLinks = [
  { name: "ACCUEIL", href: "#accueil" },
  { name: "PRÉSENTATION", href: "#presentation" },
  { name: "PORTFOLIO", href: "#portfolio" },
  { name: "COMPÉTENCES", href: "#competences" },
  { name: "EXPÉRIENCES", href: "#experiences" },
];

// Section 1
