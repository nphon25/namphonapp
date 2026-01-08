// src/data/projects.js

const projects = {
  alma: {
    title: "ALMA",
    hero: "/assets/ALMA/Mock Up/mockup (1).jpeg",
    heroAlt: "ALMA project hero",
    scrollSpy: true,

    intro:
      "Alma makes healthy eating easy and affordable with recipes, budget-friendly dining and groceries, plus savings through deals—all in one app!",

    overviewRows: [
      { label: "Client / Context", value: "Academic Capstone Project" },
      { label: "My Role", value: "Branding Identity, Logo Design, Wireframing, Researcher" },
      { label: "Timeline", value: "4 weeks (Fall 2024)" },
      { label: "Deliverables", value: "Mobile app prototype, design system" },
      { label: "Tools", value: "Figma, Illustrator" },
    ],

    brief: {
      showTitle: true,
      showSubtitles: true,
      subtitles: {
        background: false, // ✅ Hides only "Background" subtitle
        objectives: true,
        concept: true,
      },
      background:
        "In North Carolina, over 1.6 million residents live in food deserts, lacking access to affordable, nutritious food, leading to higher obesity and health issues. Our app connects them to healthier food options, improving their well-being.",
      objectives: [
        "Structuring complex food data into intuitive user flows",
        "Translate a real-world social issue into an intuitive digital product",
        "Creating a cohesive visual system that supports clarity, trust, and ease of decision-making",
      ],
    },

    processLayout: "standard", // Regular layout for ALMA

    processSteps: [
      {
        title: "Research",
        text:
          "Unlike many apps that focus solely on health, recipes, or local dining, Alma integrates all three—serving as a comprehensive resource for nutritious, budget-friendly food options. Research focused on understanding barriers to healthy eating, accessibility challenges, and cost sensitivity.",
        image: "/assets/ALMA/PNGs/research.png",
        alt: "User research findings and affinity mapping",
        excludeFromBento: true, // ✅ Shows as regular section
      },
      {
        title: "Information Architecture & Wireframes",
        text:
          "Based on research insights, I mapped out the information architecture prioritizing core user needs. Early wireframes explored navigation patterns and content hierarchy, iterating through usability testing to reduce friction and cognitive load.",
        
        // ✅ New structure with separate groups
       imageGroups: [
  {
    subtitle: "Information Architecture",
    images: [
      { 
        src: "/assets/ALMA/PNGs/ia (1).png", 
        alt: "Information architecture diagram",
        size: "large" // ✅ Individual size control
      },
      { 
        src: "/assets/ALMA/PNGs/ia (2).png", 
        alt: "User flow mapping",
        size: "small" // ✅ Smaller image
      },
    ],
  },
  {
    subtitle: "Wireframes",
    images: [
      { 
        src: "/assets/ALMA/PNGs/wireframe (1).png", 
        alt: "Low-fidelity wireframes",
        size: "large"
      },
      { 
        src: "/assets/ALMA/PNGs/wireframe (2).png", 
        alt: "Screen layouts",
        size: "medium"
      },
      { 
        src: "/assets/ALMA/PNGs/wireframe (3).png", 
        alt: "Interaction patterns",
        size: "medium"
      },
      { 
        src: "/assets/ALMA/PNGs/wireframe (4).png", 
        alt: "Interaction patterns",
        size: "medium"
      },
    ],
  },
],
        excludeFromBento: true,
      },



      {
        title: "Visual Design & Prototyping",
        text:
          "The visual language balances warmth and clarity. Soft colors and rounded components create approachability, while a structured design system ensures consistency. High-fidelity prototypes were tested to validate interactions and refine the experience.",
        image: "/assets/ALMA/Assets/png/final-ui-1.jpg",
        alt: "High-fidelity UI mockups and design system",
        excludeFromBento: true, // ✅ Shows as regular section
      },
    ],


finalDesign: {
  showTitle: true,
  intro: "",
  
  sections: [
    // Video section
    {
  title: "Prototype", // 
  video: "/assets/ALMA/VID/mobile.mp4",
  alt: "ALMA mobile app prototype demonstration", 
},
    
    // Single image section
    {
      title: "Design System",
      text: "Comprehensive component library.",
      image: "/assets/ALMA/Assets/png/design-system.jpg",
      alt: "Design system overview",
    },
    
    // Multiple images with groups
    {
      title: "Key Screens",
      text: "The most important user touchpoints.",
      imageGroups: [
        {
          subtitle: "Onboarding",
          images: [
            { src: "/assets/img1.jpg", alt: "Step 1", size: "large" },
            { src: "/assets/img2.jpg", alt: "Step 2", size: "small" },
          ],
        },
        {
          subtitle: "Dashboard",
          images: [
            { src: "/assets/img3.jpg", alt: "Dashboard", size: "full" },
          ],
        },
      ],
    },
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

    processLayout: "bento", // ✅ Bento grid layout for PCOS

    processSteps: [
      { 
        image: "/assets/PCOS/pcos-mockup02.png", 
        alt: "Primary campaign poster design", 
        size: "large" 
      },
      { 
        image: "/assets/PCOS/color.png", 
        alt: "Color palette design", 
        size: "small" 
      },
      { 
        image: "/assets/PCOS/ribbon.png", 
        alt: "Campaign ribbon design", 
        size: "small" 
      },
      { 
        image: "/assets/PCOS/tshirt.png", 
        alt: "T-shirt design", 
        size: "large" 
      },
      { 
        image: "/assets/PCOS/button.png", 
        alt: "Campaign button", 
        size: "wide" 
      },
    ],

    finalDesign: {
      showTitle: false,
      carousel: true,
      carouselSubtitle: "Instagram carousel series",
      mainImage: "/assets/PCOS/pcos-mockup01.png",
      mainAlt: "PCOS awareness campaign materials",
      carouselImages: [
        { src: "/assets/PCOS/Post Row 1.png", alt: "PCOS symptoms infographic" },
        { src: "/assets/PCOS/Post Row 2.png", alt: "PCOS statistics and facts" },
        { src: "/assets/PCOS/Post Row 3.png", alt: "PCOS treatment options" },
        { src: "/assets/PCOS/Post Row 4.png", alt: "PCOS support resources" },
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