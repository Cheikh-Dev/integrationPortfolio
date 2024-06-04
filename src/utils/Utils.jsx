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
export const Items = ({ icon: MyIcon, children }) => {
  return (
    <div className="flex items-center justify-center">
      <MyIcon className="text-y mx-2 size-5" />
      <span className="">{children}</span>
    </div>
  );
};

// Section 3
export const getProjects = (images) => [
  {
    title: "Volkeno",
    description:
      "Créer un équivalent Netflix de Disney. Pour l'anecdote ce site a été fait avant la création de Disney+.",
    hashtags: "#React #API #Redux",
    githubLink: "#",
    image: images.volkeno,
  },
  {
    title: "Fewnu",
    description:
      "Créer un équivalent Netflix de Disney. Pour l'anecdote ce site a été fait avant la création de Disney+.",
    hashtags: "#React #API #Redux",
    githubLink: "#",
    image: images.fewnu,
  },
  {
    title: "Fewnu mobile",
    description:
      "Créer un équivalent Netflix de Disney. Pour l'anecdote ce site a été fait avant la création de Disney+.",
    hashtags: "#React #API #Redux",
    githubLink: "#",
    image: images.fewnuMobile,
  },
  {
    title: "Volkeno",
    description:
      "Créer un équivalent Netflix de Disney. Pour l'anecdote ce site a été fait avant la création de Disney+.",
    hashtags: "#React #API #Redux",
    githubLink: "#",
    image: images.volkeno2,
  },
  {
    title: "Bakeli Payment",
    description:
      "Créer un équivalent Netflix de Disney. Pour l'anecdote ce site a été fait avant la création de Disney+.",
    hashtags: "#React #API #Redux",
    githubLink: "#",
    image: images.BakeliPayment,
  },
  {
    title: "Mixte Feewnu",
    description:
      "Créer un équivalent Netflix de Disney. Pour l'anecdote ce site a été fait avant la création de Disney+.",
    hashtags: "#React #API #Redux",
    githubLink: "#",
    image: images.MixteFeewnu,
  },
];
export const ProjectCard = ({ project }) => (
  <div className="mx-auto text-center max-w-sm rounded bg-w px-14 py-5 hover:shadow-md hover:shadow-y group">
    <img className="w-full h-[190px]" src={project.image} alt={project.title} />
    <div className="px-2 py-4">
      <div className="font-semibold text-xl mb-1 text-g group-hover:text-y">
        {project.title}
      </div>
      <p className="text-gray-900 text-sm font-semibold">
        {project.description}
      </p>
      <p className="text-gray-700 text-base mt-1">{project.hashtags}</p>
    </div>
    <div className="">
      <a
        href={project.githubLink}
        className=" bg-w border border-g hover:border-none group-hover:text-w group-hover:bg-y group-hover:border-none text-g text-[9px] font-semibold py-2 px-4 rounded"
      >
        Voir le projet github
      </a>
    </div>
  </div>
);

// // Section 4
