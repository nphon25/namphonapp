
import { useState, useEffect, useRef } from 'react';
import '../styles/project.css';

const ScrollSpyNav = ({ 
  items = [], 
  offset = 96,
  rootMarginTop = '-96px',
  rootMarginBottom = '-50%'
}) => {
  const [activeId, setActiveId] = useState('');
  const observerRef = useRef(null);
  const sectionsRef = useRef(new Map());

  useEffect(() => {
    // Clean up previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Clear sections map
    sectionsRef.current.clear();

    // Get all sections
    const sections = items.map(item => document.getElementById(item.id)).filter(Boolean);
    
    if (sections.length === 0) return;

    // Create intersection observer with proper margins
    const observerOptions = {
      root: null,
      rootMargin: `${rootMarginTop} 0px ${rootMarginBottom} 0px`,
      threshold: 0
    };

    // Track which sections are currently intersecting
    const intersectingEntries = new Map();

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          intersectingEntries.set(entry.target.id, entry);
        } else {
          intersectingEntries.delete(entry.target.id);
        }
      });

      // If we have intersecting sections, find the topmost one
      if (intersectingEntries.size > 0) {
        // Get all intersecting entries as array
        const intersecting = Array.from(intersectingEntries.values());
        
        // Sort by their position on page (topmost first)
        intersecting.sort((a, b) => {
          return a.boundingClientRect.top - b.boundingClientRect.top;
        });

        // The topmost intersecting section should be active
        const topSection = intersecting[0];
        if (topSection && topSection.target.id !== activeId) {
          setActiveId(topSection.target.id);
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observerRef.current = observer;

    // Observe all sections
    sections.forEach(section => {
      if (section) {
        observer.observe(section);
        sectionsRef.current.set(section.id, section);
      }
    });

    // Set initial active section based on scroll position
    const initialActive = sections.find(section => {
      const rect = section.getBoundingClientRect();
      return rect.top <= offset + 50 && rect.bottom > offset;
    });

    if (initialActive) {
      setActiveId(initialActive.id);
    } else if (sections.length > 0) {
      // Default to first section if nothing else matches
      setActiveId(sections[0].id);
    }

    // Cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      intersectingEntries.clear();
    };
  }, [items, offset, rootMarginTop, rootMarginBottom]);

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offsetPosition = element.offsetTop - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      // Immediately set as active
      setActiveId(id);
    }
  };

  if (items.length === 0) return null;

  return (
    <nav className="scrollspy-nav">
      <div className="scrollspy-nav-inner">
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`scrollspy-link ${activeId === item.id ? 'active' : ''}`}
                onClick={(e) => handleClick(e, item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default ScrollSpyNav;
