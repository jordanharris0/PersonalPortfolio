import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Projects({ setActiveSection }) {
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      setActiveSection("projects");
    }
  }, [inView, setActiveSection]);

  return (
    <section ref={ref} id="projects">
      <h1>Projects Section</h1>
      {/* Content */}
    </section>
  );
}
