import { useEffect, useState } from "react";

const ScrollSpyNav = ({ items = [], offset = 96, ariaLabel = "Project navigation" }) => {
  const [activeId, setActiveId] = useState(items?.[0]?.id || "overview");

  useEffect(() => {
    if (!items?.length) return;

    const sections = items.map(i => document.getElementById(i.id)).filter(Boolean);
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const best = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (best?.target?.id) setActiveId(best.target.id);
      },
      {
        threshold: [0.2, 0.35, 0.5],
        rootMargin: `-${offset}px 0px -60% 0px`,
      }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [items, offset]);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  if (!items?.length) return null;

  return (
    <nav className="scrollspy-nav" aria-label={ariaLabel}>
      <div className="scrollspy-nav-inner">
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={scrollTo(item.id)}
                className={`scrollspy-link ${activeId === item.id ? "active" : ""}`}
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
