import React, {
  useCallback,
  useState,
  useEffect,
  useMemo,
  useRef,
} from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function Hero() {
  const [init, setInit] = useState(false);
  const particlesRef = useRef(null);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      console.log("Particles Init called");
      await loadFull(engine);
      console.log("Particles Engine loaded successfully");
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Update window size on resize
  useEffect(() => {
    const handleResize = () => setWindowSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseMove = (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const maxRadius = 250; // Max radius for full opacity and linking

    const particlesInstance = particlesRef.current;
    if (particlesInstance && particlesInstance.particles) {
      const particlesArray = particlesInstance.particles._array; // Access particles using the correct array

      particlesArray.forEach((particle) => {
        // Calculate the distance from the mouse to the particle
        const dx = mouseX - particle.position.x;
        const dy = mouseY - particle.position.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Gradually adjust opacity based on distance
        if (distance < maxRadius) {
          // Calculate a fade based on proximity
          const opacity = 1 - distance / maxRadius; // Closer = more opaque
          particle.opacity.value = opacity; // Apply calculated opacity
          particle.linksOpacity = opacity; // Link opacity based on distance
        } else {
          particle.opacity.value = 0.3; // Set a minimum opacity when far away
          particle.linksOpacity = 0; // Unlink particles when far
        }
      });
    }
  };

  const particlesLoaded = (container) => {
    console.log(container);
    particlesRef.current = container;
  };

  const getParticleCount = () => {
    const windowSize = window.innerWidth;
    if (windowSize > 1600) return 600;
    if (windowSize > 1300) return 575;
    if (windowSize > 1100) return 500;
    if (windowSize > 800) return 300;
    if (windowSize > 600) return 200;
    return 100;
  };

  const particleOptions = useMemo(
    () => ({
      particles: {
        number: {
          value: getParticleCount(), //number of particles
          density: {
            enable: true,
            value_area: 800, //adjust based on screen size
          },
        },
        color: {
          value: [
            "rgb(81, 162, 233)", //blue 80%
            "rgb(255, 255, 255)", // white 20%
          ],
        },
        opacity: {
          value: { min: 0.3, max: 1 },
          anim: {
            enable: false,
          },
        },
        size: {
          value: { min: 1, max: 3 }, //particle size
          random: true, //random sizes
        },
        move: {
          enable: true,
          speed: 1, //speed of particles
          direction: "none",
          random: true,
        },
        links: {
          enable: false, //links particles together
          distance: 70, //distance threshold for connecting particles
          color: "rgb(81, 162, 233)",
          opacity: 0,
          width: 1,
        },
        zLayers: -1,
      },
      interactivity: {
        events: {
          resize: true,
        },
      },
    }),
    []
  );

  if (init) {
    return (
      <>
        <div
          id="hero"
          style={{ height: "100vh", width: "100vw", position: "relative" }}
          onMouseMove={handleMouseMove}
        >
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={particleOptions}
          />
          <div className="hero-content">
            <h1>
              Hello, I'm <span>Jordan</span>.
            </h1>
            <h1>I'm a full stack web developer.</h1>
          </div>
        </div>
      </>
    );
  }
  return <></>;
}
