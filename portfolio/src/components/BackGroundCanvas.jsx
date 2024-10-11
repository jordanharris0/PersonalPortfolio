import React, {
  useCallback,
  useState,
  useEffect,
  useMemo,
  useRef,
} from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import "../styles/about.css";

export default function BackGround() {
  const [init, setInit] = useState(false);
  const particlesRef = useRef(null);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  //start particle engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
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

  useEffect(() => {
    const handleMouseMove = (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      //calculate the maximum distance (diagonal of the screen)
      const maxDistance = Math.sqrt(
        window.innerWidth ** 2 + window.innerHeight ** 2
      );

      //access the particle instance
      const particlesInstance = particlesRef.current;

      if (particlesInstance && particlesInstance.particles) {
        const particlesArray = particlesInstance.particles._array; // Access particles using their array

        particlesArray.forEach((particle) => {
          // Calculate the distance from the mouse to the particle
          const dx = mouseX - particle.position.x;
          const dy = mouseY - particle.position.y;

          const distance = Math.sqrt(dx * dx + dy * dy);

          // Gradually adjust opacity based on distance
          const opacity = 0.8 - distance / maxDistance; // Closer = more opaque
          particle.opacity.value = Math.max(opacity, 0); //ensure opacity is not below 0
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove); // Cleanup on unmount
    };
  }, []);

  //all particle data information
  const particlesLoaded = (container) => {
    particlesRef.current = container;
  };

  const getParticleCount = () => {
    const windowSize = window.innerWidth;
    if (windowSize > 1600) return 300;
    if (windowSize > 1300) return 275;
    if (windowSize > 1100) return 250;
    if (windowSize > 800) return 225;
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
            "rgb(88, 139, 139)", //dark cyan
            "rgb(90, 83, 121)", //violet
            "rgb(255, 255, 255)",
          ],
        },
        opacity: {
          value: { min: 0.5, max: 1 },
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
          speed: 0.5, //speed of particles
          direction: "none",
          random: true,
        },
        zLayers: -1,
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          resize: true,
        },
      },
      detectRetina: true,
    }),
    [windowSize]
  );

  if (init) {
    return (
      <>
        <div id="canvasTwo">
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={particleOptions}
          />
        </div>
      </>
    );
  }
  return <></>;
}
