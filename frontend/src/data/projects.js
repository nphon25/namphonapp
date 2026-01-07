// src/data/projects.js

const projects = {
  alma: {
    title: "ALMA",
    hero: "/assets/ALMA/Mock Up/mockup-large.jpeg",
    heroAlt: "ALMA project hero",
    scrollSpy: true,

    intro:
      "ALMA is a comprehensive health tracking application designed to empower women with PCOS to monitor their symptoms, track patterns, and take control of their health journey through intuitive data visualization and personalized insights.",

    overviewRows: [
      { label: "Client / Context", value: "Academic Capstone Project" },
      { label: "My Role", value: "UX/UI Designer, Researcher" },
      { label: "Timeline", value: "12 weeks (Fall 2024)" },
      { label: "Deliverables", value: "Mobile app prototype, design system" },
      { label: "Tools", value: "Figma, Illustrator, Adobe XD" },
    ],

    brief: {
      background:
        "Women with PCOS struggle to track complex symptoms across multiple categories—hormonal, metabolic, and emotional. Existing health apps lack PCOS-specific features, making it difficult to identify patterns and communicate effectively with healthcare providers. ALMA bridges this gap by providing a comprehensive, empathetic tracking solution.",
      objectives: [
        "Create an intuitive symptom tracking system tailored to PCOS",
        "Visualize health data to reveal patterns and correlations",
        "Design an accessible, empowering experience that reduces health anxiety",
        "Build a scalable design system for future features",
      ],
      concept: "A companion app that transforms overwhelming health data into actionable insights, helping women feel in control of their PCOS journey.",
    },

    processSteps: [
      {
        title: "Research & User Interviews",
        text: "I conducted interviews with 8 women diagnosed with PCOS to understand their tracking habits, pain points, and needs. Key insights revealed that users wanted more than just a symptom log—they needed context, patterns, and the ability to share data with doctors. Competitive analysis of existing health apps showed gaps in PCOS-specific features and emotional support.",
        image: "/assets/ALMA/Assets/png/research-placeholder.jpg",
        alt: "User research findings and affinity mapping",
      },
      {
        title: "Information Architecture & Wireframes",
        text: "Based on research findings, I mapped out the information architecture prioritizing three core features: daily logging, pattern analysis, and health reports. Early wireframes tested different navigation patterns and data input methods, iterating based on usability feedback. The goal was to make tracking feel effortless, not like homework.",
        image: "/assets/ALMA/Assets/png/wireframes-placeholder.jpg",
        alt: "Wireframes and user flow diagrams",
      },
      {
        title: "Visual Design & Prototyping",
        text: "The visual language needed to feel calming yet empowering—soft gradients and rounded corners create approachability while clear data visualizations maintain credibility. I developed a comprehensive design system with reusable components, ensuring consistency across all screens. High-fidelity prototypes were tested with users to validate interaction patterns and refine the experience.",
        image: "/assets/ALMA/Assets/png/final-ui-1.jpg",
        alt: "High-fidelity mockups and design system",
      },
    ],

    finalDesign: {
      intro:
        "The final ALMA app features a modular tracking system, intelligent data visualization, and personalized insights. Users can log symptoms in under 30 seconds, view correlations through interactive charts, and generate comprehensive health reports to share with their care team.",
      mainImage: "/assets/ALMA/Assets/png/final-ui-1.jpg",
      mainAlt: "ALMA app main dashboard showing symptom tracking",

      keyPieces: [
        {
          title: "Daily Check-In Flow",
          text: "The quick-log interface lets users track symptoms with minimal friction—customizable categories, smart defaults, and optional note-taking make daily logging feel natural rather than burdensome.",
        },
        {
          title: "Pattern Recognition Dashboard",
          text: "Interactive charts reveal correlations between symptoms, cycle phases, and lifestyle factors. Users can tap any data point to explore details, helping them understand their body's unique patterns over time.",
        },
        {
          title: "Health Report Generator",
          text: "One-tap report generation creates a professional PDF summary of symptoms, trends, and notes—designed specifically for doctor appointments to facilitate better conversations about care.",
        },
      ],

      gridImages: [
        { src: "/assets/ALMA/Assets/png/final-ui-2.jpg", alt: "Onboarding screens" },
        { src: "/assets/ALMA/Assets/png/final-ui-3.jpg", alt: "Data visualization screens" },
        { src: "/assets/ALMA/Assets/png/final-ui-4.jpg", alt: "Settings and profile" },
      ],
    },

    credits:
      "Special thanks to my advisor Dr. Sarah Chen for guidance throughout the process, and to the 8 incredible women who shared their PCOS experiences during research interviews. This project taught me the importance of designing with empathy—not just for users' functional needs, but for their emotional journey with chronic health conditions. If I were to continue this project, I'd love to explore community features and integrate with wearable devices for automatic data collection.",

    relatedProjects: [
      {
        href: "/project/pcos",
        image: "/assets/PCOS/pcos-mockup01.png",
        alt: "PCOS Awareness Campaign",
        title: "PCOS Awareness",
        meta: "Graphic Design • Social Campaign",
      },
    ],
  },

  pcos: {
    title: "PCOS Awareness Campaign",
    hero: "/assets/PCOS/pcos-mockup01.png",
    heroAlt: "PCOS Awareness Campaign infographic poster mockup",
    scrollSpy: false,
    showProcessTitle: false,

    intro:
      "A visual awareness campaign educating women about Polycystic Ovary Syndrome—a commonly undiagnosed hormonal disorder. Through accessible infographics and social media content, this project breaks down complex medical information into shareable, actionable resources.",

    overviewRows: [
      { label: "Type", value: "Self-Initiated Campaign" },
      { label: "Year", value: "2024" },
      { label: "Medium", value: "Print & Digital" },
      { label: "Tools", value: "Illustrator, Photoshop" },
    ],

    processLayout: "bento", // ← Enable bento grid layout

    processSteps: [
      {
        image: "/assets/PCOS/pcos-mockup02.png",
        alt: "Primary campaign poster design",
        size: "large", // 8 columns - hero image
      },
       {
        image: "/assets/PCOS/pcos-mockup02.png",
        alt: "Primary campaign poster design",
        size: "small", // 8 columns - hero imag
      },
    ],
    

    finalDesign: {
      showTitle: false,
      carousel: true,
      carouselSubtitle: "Instagram carousel series",

      mainImage: "/assets/PCOS/pcos-mockup01.png",
      mainAlt: "PCOS awareness infographic poster in clinical setting",

      carouselImages: [
        {
          src: "/assets/PCOS/Social Media Mockup.png",
          alt: "PCOS symptoms infographic",
        },
        {
          src: "/assets/PCOS/Social Media Mockup2.png",
          alt: "PCOS statistics and facts",
        },
        {
          src: "/assets/PCOS/Social Media Mockup3.png",
          alt: "PCOS treatment options",
        },
        {
          src: "/assets/PCOS/Social Media Mockup4.png",
          alt: "PCOS support resources",
        },
      ],
    },

    relatedProjects: [
      {
        href: "/project/alma",
        image: "/assets/ALMA/Mock Up/mockup-large.jpeg",
        alt: "ALMA health tracking app",
        title: "ALMA",
        meta: "UX/UI Design • Health Tech",
      },
    ],
  },
};

export default projects;
