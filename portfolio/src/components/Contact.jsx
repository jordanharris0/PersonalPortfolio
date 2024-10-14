import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Contact({ setActiveSection }) {
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      setActiveSection("contact");
    }
  }, [inView, setActiveSection]);

  return (
    <section ref={ref} id="contact">
      <h1>Contact Section</h1>
      {/* Content */}
    </section>
  );
}
