// src/data/projects.js

const projects = {
  alma: {
    title: "ALMA",
    hero: "/assets/ALMA/Mock Up/mockup-large.jpeg",
    heroAlt: "ALMA project hero",
    scrollSpy: true,

    intro:
      "Short overview of ALMA — what it is, who it’s for, and the core idea behind the design.",

    overviewRows: [
      { label: "Client / Context", value: "Class project" },
      { label: "My Role", value: "Design + layout" },
      { label: "Deliverables", value: "Posters + social graphics" },
      { label: "Tools", value: "Illustrator, Photoshop" },
    ],

    brief: {
      background:
        "Context for the project — what problem or need led to this design?",
      objectives: [
        "Clarify a complex message through clear hierarchy.",
        "Create a system that works across formats.",
        "Design for accessibility and clarity.",
      ],
      concept: "One sentence concept that ties the visuals together.",
    },

    processSteps: [
      {
        title: "Research & Inspiration",
        text: "Describe research, references, and context.",
        image: "/assets/ALMA/Assets/png/research-placeholder.jpg",
        alt: "Research placeholder",
      },
      {
        title: "Exploration & Sketches",
        text: "Sketches, layout tests, early exploration.",
        image: "/assets/ALMA/Assets/png/wireframes-placeholder.jpg",
        alt: "Sketches placeholder",
      },
      {
        title: "Refinement & Production",
        text: "Refinement, hierarchy, prototypes, production.",
      },
    ],

    finalDesign: {
      intro:
        "Overview of the final work: how the system comes together and functions across touchpoints.",
      mainImage: "/assets/ALMA/Assets/png/final-ui-1.jpg",
      mainAlt: "ALMA final UI",
      keyPieces: [
        { title: "Key Piece 1 — Main Screen", text: "Describe what makes this screen work." },
        { title: "Key Piece 2 — Flow / System", text: "Explain how the system extends." },
      ],
      gridImages: [
        { src: "/assets/ALMA/Assets/png/final-ui-2.jpg", alt: "Detail 1" },
        { src: "/assets/ALMA/Assets/png/final-ui-3.jpg", alt: "Detail 2" },
        { src: "/assets/ALMA/Assets/png/final-ui-4.jpg", alt: "Detail 3" },
      ],
    },

    credits:
      "Note collaborators and reflect on what you learned, what worked, and what you’d refine next time.",

    relatedProjects: [
      {
        href: "/project/pcos",
        image: "/assets/ALMA/ALMA.gif",
        alt: "PCOS project",
        title: "PCOS",
        meta: "Awareness Campaign",
      },
    ],
  },

  pcos: {
    title: "PCOS Awareness Project",
    hero: "/assets/PCOS/hero.jpg",
    heroAlt: "PCOS project hero",
    scrollSpy: false,

    intro: "Short 1–2 sentence overview.",

    overviewRows: [
      { label: "Client / Context", value: "Self-initiated" },
      { label: "My Role", value: "Design + layout" },
      { label: "Deliverables", value: "Posters + socials" },
      { label: "Tools", value: "Illustrator, InDesign" },
    ],

    brief: {
      background: "Background text…",
      objectives: ["Goal 1", "Goal 2", "Goal 3"],
      concept: "Core concept…",
    },

    processSteps: [
      {
        title: "Research & Inspiration",
        text: "What you looked at / learned.",
        image: "/assets/PCOS/research.jpg",
        alt: "Research image",
      },
    ],

    finalDesign: {
      intro: "What the final system does.",
      mainImage: "/assets/PCOS/final-1.jpg",
      mainAlt: "Primary final design",
      keyPieces: [{ title: "Key Piece 1", text: "What it shows." }],
      gridImages: [
        { src: "/assets/PCOS/final-2.jpg", alt: "Detail 2" },
        { src: "/assets/PCOS/final-3.jpg", alt: "Detail 3" },
      ],
    },

    credits: "Short reflection / credits…",

    relatedProjects: [
      {
        href: "/project/alma",
        image: "/assets/ALMA/ALMA.gif",
        alt: "ALMA project",
        title: "ALMA",
        meta: "UX/UI",
      },
    ],
  },
};

export default projects;
