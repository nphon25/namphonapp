// =========================
// HERO IMAGES (REQUIRED)
// =========================
const almaHero = "/assets/ALMA/ALMA.gif";
const pcosHero = "/assets/PCOS/main mockup.jpg";

const almaProcessImage = "/assets/ALMA/Group 15.png";
const almaWireframes = "/assets/ALMA/PNGs/Group 81.png";

const projects = {
  // -------------------------
  // ALMA
  // -------------------------
  alma: {
    id: "alma",
    title: "ALMA",
    hero: almaHero,
    heroAlt: "ALMA project hero",
    scrollSpy: true,

    intro:
      "Short overview of ALMA - what it is, who it's for, and the core idea behind the design.",

    overviewRows: [
      { label: "Client / Context", value: "Class project" },
      { label: "My Role", value: "Design + layout" },
      { label: "Deliverables", value: "Posters + social graphics" },
      { label: "Tools", value: "Illustrator, Photoshop" },
    ],

    brief: {
      background:
        "Context for the project - what problem or need led to this design?",
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
        image: almaProcessImage,
        alt: "Research placeholder",
      },
      {
        title: "Exploration & Sketches",
        text: "Sketches, layout tests, early exploration.",
        image: almaWireframes,
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
      // mainImage: almaFinal1,
      mainAlt: "ALMA final UI",
      keyPieces: [
        {
          title: "Key Piece 1 - Main Screen",
          text: "Describe what makes this screen work.",
        },
        {
          title: "Key Piece 2 - Flow / System",
          text: "Explain how the system extends.",
        },
      ],
      gridImages: [
        // { src: almaFinal2, alt: "Detail 1" },
        // { src: almaFinal3, alt: "Detail 2" },
        // { src: almaFinal4, alt: "Detail 3" },
      ],
    },

    reflection:
      "Note collaborators and reflect on what you learned, what worked, and what you'd refine next time.",

    relatedProjects: [
      {
        href: "/project/pcos",
        image: pcosHero,
        alt: "PCOS project",
        title: "PCOS",
        meta: "Awareness Campaign",
      },
      {
        href: "/project/tp",
        image: pcosHero,
        alt: "TP project",
        title: "TP",
        meta: "Branding",
      },
    ],
  },

  // -------------------------
  // PCOS
  // -------------------------
  pcos: {
    id: "pcos",
    title: "PCOS Awareness Project",
    hero: pcosHero,
    heroAlt: "PCOS project hero",
    scrollSpy: false,

    intro: "Short 1-2 sentence overview.",

    overviewRows: [
      { label: "Client / Context", value: "Self-initiated" },
      { label: "My Role", value: "Design + layout" },
      { label: "Deliverables", value: "Posters + socials" },
      { label: "Tools", value: "Illustrator, InDesign" },
    ],

    brief: {
      background: "Background text...",
      objectives: ["Goal 1", "Goal 2", "Goal 3"],
      concept: "Core concept...",
    },

    processSteps: [
      {
        title: "Research & Inspiration",
        text: "What you looked at / learned.",
        // image: pcosResearch,
        alt: "Research image",
      },
    ],

    finalDesign: {
      intro: "What the final system does.",
      // mainImage: pcosFinal1,
      mainAlt: "Primary final design",
      keyPieces: [{ title: "Key Piece 1", text: "What it shows." }],
      gridImages: [
        // { src: pcosFinal2, alt: "Detail 2" },
        // { src: pcosFinal3, alt: "Detail 3" },
      ],
    },

    reflection: "Short reflection / credits...",

    relatedProjects: [
      {
        href: "/project/alma",
        image: almaHero,
        alt: "ALMA project",
        title: "ALMA",
        meta: "UX/UI",
      },
      {
        href: "/project/tp",
        image: pcosHero,
        alt: "TP project",
        title: "TP",
        meta: "Branding",
      },
    ],
  },

  // -------------------------
  // TP
  // -------------------------
  tp: {
    id: "tp",
    title: "TP Branding",
    hero: pcosHero, // replace with TP hero when you have it
    heroAlt: "TP project hero",
    scrollSpy: false,

    intro: "Short 1-2 sentence overview.",

    overviewRows: [
      { label: "Client / Context", value: "Self-initiated" },
      { label: "My Role", value: "Design + layout" },
      { label: "Deliverables", value: "Brand system + mockups" },
      { label: "Tools", value: "Illustrator, InDesign" },
    ],

    brief: {
      background: "Background text...",
      objectives: ["Goal 1", "Goal 2", "Goal 3"],
      concept: "Core concept...",
    },

    processSteps: [
      {
        title: "Research & Inspiration",
        text: "What you looked at / learned.",
        alt: "Research image",
      },
    ],

    finalDesign: {
      intro: "What the final system does.",
      mainAlt: "Primary final design",
      keyPieces: [{ title: "Key Piece 1", text: "What it shows." }],
      gridImages: [],
    },

    reflection: "Short reflection / credits...",

    relatedProjects: [
      {
        href: "/project/alma",
        image: almaHero,
        alt: "ALMA project",
        title: "ALMA",
        meta: "UX/UI",
      },
      {
        href: "/project/pcos",
        image: pcosHero,
        alt: "PCOS project",
        title: "PCOS",
        meta: "Awareness Campaign",
      },
    ],
  },
};

export default projects;