import React, {
  useCallback,
  useState,
  useEffect,
  useMemo,
  useRef,
} from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function BackGround() {
  const [init, setInit] = useState(false);
  const particlesRef = useRef(null);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  //start particle engine
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
        const opacity = 0.5 - distance / maxDistance; // Closer = more opaque
        particle.opacity.value = Math.max(opacity, 0); //ensure opacity is not below 0

        //   const maxRadius = 250; //Max radius for the opacity of linked particles
        //   if (distance < maxRadius) {
        //     // Only set opacity for particles within the radius of the mouse
        //     particlesInstance._options.particles.links.opacity = 0.8;
        //   } else {
        //     particlesInstance._options.particles.links.opacity = 0; // Set opacity to 0 outside the radius
        //   }
      });
    }
  };

  //all particle data information
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
          enable: true, //links particles together
          distance: 100, //distance threshold for connecting particles
          color: "rgb(81, 162, 233)",
          opacity: 0,
          width: 1,
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
        </div>
      </>
    );
  }
  return <></>;
}
