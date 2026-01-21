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
      { label: "My Role", value: "Brand Identity, UX/UI Design, Wireframing, Research" },
      { label: "Timeline", value: "4 weeks (2024)" },
      { label: "Deliverables", value: "Mobile App Prototype, Design System" },
      { label: "Tools", value: "Figma, Illustrator, After Effect" }
    ],

    brief: {
      showTitle: true,
      showSubtitles: true,
      subtitles: {
        background: false,
        objectives: true,
        concept: false
      },
      background:
        "In North Carolina, over 1.6 million residents live in food deserts, limiting access to affordable, nutritious food. Alma addresses this gap by connecting users to healthier food options while remaining budget-conscious.",
      objectives: [
        "Translate a real-world social issue into a clear digital experience",
        "Design intuitive user flows for complex food and nutrition data",
        "Build trust through a cohesive, accessible visual system"
      ]
    },

    processLayout: "bento",

    processSteps: [
      {
        title: "Research",
        text:
          " Unlike many apps that focus solely on health, recipes, or local dining, our platform integrates all these aspects, serving as a comprehensive resource for delicious, nutritious, and budget-friendly meal options.",
        image: "/assets/ALMA/PNGs/research.png",
        alt: "User research findings and affinity mapping",
        excludeFromBento: true
      },

      {
        title: "Information Architecture & Wireframes",
        text:
          "Insights from research informed the information architecture and early wireframes. Iterations focused on reducing cognitive load and improving navigation clarity through usability testing.",

        imageGroups: [
          {
            subtitle: "Information Architecture",
            images: [
              { src: "/assets/ALMA/PNGs/ia (1).png", alt: "Information architecture diagram", size: "large" },
              { src: "/assets/ALMA/PNGs/ia (2).png", alt: "User flow mapping", size: "small" }
            ]
          },
          {
            subtitle: "Personas & User Journey",
            images: [
              { src: "/assets/ALMA/PNGs/Primary Persona.png", alt: "Primary user persona", size: "large" },
              { src: "/assets/ALMA/PNGs/Secondary Persona.png", alt: "Secondary user persona", size: "large" },
              { src: "/assets/ALMA/PNGs/User Journey Map.png", alt: "User journey map", size: "large" }
            ]
          },
          {
            subtitle: "Wireframes",
            images: [
              { src: "/assets/ALMA/PNGs/wireframes (1).png", alt: "Low-fidelity wireframes", size: "small" },
              { src: "/assets/ALMA/PNGs/wireframes (2).png", alt: "Wireframe iteration", size: "small" },
              { src: "/assets/ALMA/PNGs/wireframes (3).png", alt: "Wireframe iteration", size: "small" },
              { src: "/assets/ALMA/PNGs/wireframes (4).png", alt: "Apple Watch wireframe", size: "small" }
            ]
          },
          {
            subtitle: "Low-Fidelity Screens",
            images: [
              { src: "/assets/ALMA/PNGs/lofi (1).png", alt: "Mobile wireframe", size: "medium" },
              { src: "/assets/ALMA/PNGs/lofi (2).png", alt: "Wireframe iteration", size: "medium" },
              { src: "/assets/ALMA/PNGs/lofi (3).png", alt: "Low-fidelity flow", size: "medium" },
              { src: "/assets/ALMA/PNGs/lofi (4).png", alt: "Wireframe iteration", size: "medium" },
              { src: "/assets/ALMA/PNGs/A lofi.png", alt: "Apple Watch wireframe", size: "medium" }
            ]
          }
        ],
        excludeFromBento: true
      }
    ],

    finalDesign: {
      showTitle: true,
      bentoLayout: true,
      bentoItems: [
        { type: "image", image: "/assets/ALMA/Mock Up/Style Guide.png", alt: "ALMA brand style guide", size: "wide" },
        { type: "image", image: "/assets/ALMA/Mock Up/Style Guide for Presentation.png", alt: "Typography and color system", size: "wide" },
        { type: "image", image: "/assets/ALMA/VID/ALMA.gif", alt: "ALMA app motion preview", size: "wide" },
        { type: "image", image: "/assets/ALMA/Mock Up/Style Guide for Presentation-2.png", alt: "Grocery discovery screen", size: "wide" },
        { type: "image", image: "/assets/ALMA/Mock Up/Style Guide for Presentation-3.png", alt: "Recipe browsing screen", size: "wide" },
        { type: "image", image: "/assets/ALMA/Mock Up/phone.png", alt: "Mobile app mockup", size: "medium" },
        { type: "video", video: "/assets/ALMA/VID/mobile.mp4", alt: "Mobile prototype walkthrough", size: "medium" },
        { type: "image", image: "/assets/ALMA/Mock Up/applewatch style.png", alt: "Apple Watch design system", size: "wide" },
        { type: "image", image: "/assets/ALMA/Mock Up/applewatch (1).png", alt: "Apple Watch mockup", size: "small" },
        { type: "video", video: "/assets/ALMA/VID/applewatch.mp4", alt: "Apple Watch prototype demo", size: "small" },
        { type: "image", image: "/assets/ALMA/Mock Up/applewatch (2).png", alt: "Apple Watch screen", size: "small" },
        { type: "image", image: "/assets/ALMA/Mock Up/billboard.jpg", alt: "ALMA billboard concept", size: "wide" }
      ]
    },

    reflection:
      "This project strengthened my understanding of design systems, UX/UI principles, and collaborative workflows. I gained insight into how graphic design translates into development and how design decisions must adapt to coding constraints. I also developed a deeper appreciation for micro-interactions and their role in creating intuitive, human-centered digital experiences, while balancing accessibility.",

    relatedProjects: [
      {
        href: "/project/pcos",
        image: "/assets/PCOS/pcos-mockup01.png",
        alt: "PCOS Awareness Campaign",
        title: "PCOS Awareness",
        meta: "Design Campaign"
      },
      {
        href: "/project/tp",
        image: "/assets/TP/Mockups/Logo Mockup02.jpg",
        alt: "PCOS Awareness Campaign",
        title: "TP",
        meta: "Brand Identity"
      },
    ]
  },

  pcos: {
    title: "PCOS Awareness Campaign",
    hero: "/assets/PCOS/pcos-mockup01.png",
    heroAlt: "PCOS Awareness Campaign infographic poster mockup",
    scrollSpy: false,
    showProcessTitle: false,

    intro:
      " A visual awareness campaign educating women about Polycystic Ovary Syndrome, a commonly undiagnosed hormonal disorder. Through accessible infographics and social media content, the project breaks down complex medical information into shareable, actionable resources.",

    overviewRows: [
      { label: "Year", value: "2024" },
      { label: "Medium", value: "Print & Digital" },
      { label: "Tools", value: "Illustrator, Photoshop" }
    ],

    processLayout: "bento",

    processSteps: [
      { image: "/assets/PCOS/pcos-mockup02.png", alt: "Primary campaign poster design", size: "large" },
      { image: "/assets/PCOS/color.png", alt: "Color palette design", size: "small" },
      { image: "/assets/PCOS/ribbon.png", alt: "Campaign ribbon design", size: "small" },
      { image: "/assets/PCOS/tshirt.png", alt: "T-shirt design", size: "large" },
      { image: "/assets/PCOS/button.png", alt: "Campaign button", size: "wide" },
      { image: "/assets/PCOS/leaflet.png", alt: "Campaign leaflet", size: "wide" }
    ],

    finalDesign: {
      showTitle: false,
      carousel: true,
      carouselSubtitle: "Instagram carousel series",
      mainImage: "",
      mainAlt: "PCOS awareness campaign materials",
      carouselImages: [
        { src: "/assets/PCOS/Post Row 1.png", alt: "PCOS symptoms infographic" },
        { src: "/assets/PCOS/Post Row 2.png", alt: "PCOS statistics and facts" },
        { src: "/assets/PCOS/Post Row 3.png", alt: "PCOS treatment options" },
        { src: "/assets/PCOS/Post Row 4.png", alt: "PCOS support resources" }
      ]
    },

    relatedProjects: [
      {
        href: "/project/alma",
        image: "/assets/ALMA/VID/ALMA.gif", 
        alt: "ALMA health tracking app",
        title: "ALMA",
        meta: "UX/UI Design "
      },
       {
        href: "/project/sardine",
        image: "/assets/sardine-splash/sardine-splash.png", 
        alt: "Sardine splash",
        title: "Sardine Splash",
        meta: "Packaging  Design"
      }, 
    ]
  },

  tp: {
    title: "Crafting a Bold, Tech-Driven Identity",
    hero: "/assets/TP/tp-hero.mp4",
    heroVideo: "/assets/TP/TP ani.mp4",
    heroPoster: "/assets/TP/tp-poster.jpg",
    heroAlt: "TP project animation",
    scrollSpy: false,
  
    intro: "Logo and branding identity using initials to reflect the software developer's role, with a modern, clean, and tech-inspired design that highlights their expertise and creates a memorable, impactful brand.",
    
    overviewRows: [
      { label: "Context", value: "Branding Identity, Logo Design" },
      { label: "Timeline", value: "2024" },
      { label: "Tools", value: "Illustrator, Photoshop, After Effects" }
    ],
    
    processLayout: "bento",
    showProcessTitle: false,

    processSteps: [
      { image: "/assets/TP/Mockups/card 3.png", alt: "TP business card mockup", size: "wide" },
      { image: "/assets/TP/Mockups/card 1.png", alt: "TP business card design", size: "medium" },
      { image: "/assets/TP/Mockups/card 2.png", alt: "TP card variation", size: "medium" },
      { image: "/assets/TP/Mockups/mac.png", alt: "TP logo on laptop", size: "wide" },
      { image: "/assets/TP/Mockups/sticker.png", alt: "TP sticker design", size: "wide" },
      { image: "/assets/TP/Mockups/window.jpg", alt: "TP window signage", size: "wide" },
      { text: "Initial sketch", image: "/assets/TP/Process/sketch.jpg", alt: "Hand-drawn sketch", size: "small" },
      { text: "Digital iterations", image: "/assets/TP/Process/TP digital.jpg", alt: "Digital design process", size: "small" },
      { text: "Style guide", image: "/assets/TP/Mockups/style.jpg", alt: "TP brand style guide", size: "small" }
    ],

    relatedProjects: [
      {
        href: "/project/pcos",
        image: "/assets/PCOS/pcos-mockup01.png",
        alt: "PCOS Awareness Campaign",
        title: "PCOS Awareness",
        meta: " Campaign Design"
      },
       {
        href: "/project/alma",
        image: "/assets/ALMA/VID/ALMA.gif", 
        alt: "ALMA health tracking app",
        title: "ALMA",
        meta: "UX/UI Design "
      },
    ]
  },
  
   sardine: {
    title: "Sardine Splash Blind Box",
    hero: "/assets/sardine-splash/sardine-03.png",
    heroAlt: "sardine hero",
    scrollSpy: false,
  
    intro: " A playful, trend-driven sardine packaging concept with a nostalgic twist. Bold graphics, vibrant color, and character-driven branding come together in a custom tuck box designed specifically for the sardine product. The pop box format enhances the unboxing experience, turning everyday packaging into something fun, memorable, and shareable.",
    
    overviewRows: [
      { label: "Context", value: "Packaging Design, Branding" },
      { label: "Timeline", value: "2025" },
      { label: "Tools", value: "Illustrator, Photoshop " }
    ],
    
    processLayout: "bento",
    showProcessTitle: false,

    processSteps: [
      { image: "/assets/sardine-splash/sardine-01.png", alt: "sardine", size: "wide" },
       { image: "/assets/sardine-splash/sardine-17.png", alt: "sardine", size: "medium" },
      { image: "/assets/sardine-splash/sardine-18.png", alt: "sardine", size: "mediuml" },

       { image: "/assets/sardine-splash/sardine-15.png", alt: "sardine", size: "wide" },
              { image: "/assets/sardine-splash/keychain.png", alt: "sardine", size: "wide" },


      { text: "Style Guide", image: "/assets/sardine-splash/style-guide.png", alt: "design process", size: "wide" },
      { text: "Moodboard", image: "/assets/sardine-splash/moodboard.png", alt: "design moodboard", size: "small" },
      { text: "Early Design Iterations", image: "/assets/sardine-splash/box-draft-01.png", alt: "design process", size: "small" },
      { text: "Early Design Iterations", image: "/assets/sardine-splash/box-draft-02.png", alt: "design process", size: "small" },


      { text: "Tuck Box Dieline", image: "/assets/sardine-splash/tuck-box-final-print.png", alt: "Hand-drawn sketch", size: "wide" },
      { text: "POP box - back", image: "/assets/sardine-splash/pop-box-01.png", alt: "Digital design process", size: "small" },
      { text: "POP box - front & side ", image: "/assets/sardine-splash/pop-box-03.png", alt: "Digital design process", size: "large" },

    ],

    relatedProjects: [
      {
        href: "/project/alma",
        image: "/assets/ALMA/VID/ALMA.gif", 
        alt: "ALMA health tracking app",
        title: "ALMA",
        meta: "UX/UI Design • Health Tech"
      }, 
      {
        href: "/project/pcos",
        image: "/assets/PCOS/pcos-mockup01.png",
        alt: "PCOS Awareness Campaign",
        title: "PCOS Awareness",
        meta: "Graphic Campaign"
      }
    ]
  },
 
/* harboring: {
    title: "Harboring Hope",
    hero: "/assets/",
    heroAlt: "harboring hero",
    scrollSpy: false,
  
    intro: " ",
    
    overviewRows: [
      { label: "Context", value: "Design Campagin, Branding" },
      { label: "Timeline", value: "2025" },
      { label: "Tools", value: "Illustrator, Photoshop, AfterEffect, Figma " }
    ],
    
    processLayout: "bento",
    showProcessTitle: false,

    processSteps: [

      { image: "/assets/haboring-hope/poster.png", alt: "harboring hope ", size: "wide" },
      { image: "/assets/haboring-hope/book1.png", alt: "harboring hope ", size: "wide" },
      
      { image: "/assets/haboring-hope/book5.png", alt: "harboring hope ", size: "medium" },
       { image: "/assets/haboring-hope/book2.png", alt: "harboring hope ", size: "medium" },
 { image: "/assets/haboring-hope/book6.png", alt: "harboring hope ", size: "medium" },
        { image: "/assets/haboring-hope/book3.png", alt: "harboring hope ", size: "medium" },


    ],

    relatedProjects: [
      {
        href: "/project/alma",
        image: "/assets/ALMA/VID/ALMA.gif", 
        alt: "ALMA health tracking app",
        title: "ALMA",
        meta: "UX/UI Design • Health Tech"
      }, 
      {
        href: "/project/pcos",
        image: "/assets/PCOS/pcos-mockup01.png",
        alt: "PCOS Awareness Campaign",
        title: "PCOS Awareness",
        meta: "Graphic Campaign"
      }
    ]
  },
*/
};


export default projects;