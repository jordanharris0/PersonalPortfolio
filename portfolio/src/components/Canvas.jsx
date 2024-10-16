import React, { useEffect, useRef, useState } from "react";

const Canvas = () => {
  const canvasRef = useRef(null);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const grabbedParticleRef = useRef(null); //particle reference
  const mousePosition = useRef({ x: 0, y: 0 });
  const [particleSpeed, setParticleSpeed] = useState(0.2); //change particle speed HERE

  //update window size on resize
  useEffect(() => {
    const handleResize = () => setWindowSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //utility function to get particle count based on window size
  const getParticleCount = () => {
    if (windowSize > 1600) return 600;
    if (windowSize > 1300) return 575;
    if (windowSize > 1100) return 500;
    if (windowSize > 800) return 300;
    if (windowSize > 600) return 200;
    return 100;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    //set canvas dimentions to match screen size
    canvas.width = document.body.scrollWidth;
    canvas.height = window.innerHeight;
    canvas.style.display = "block";

    //array to hold particles
    let particles = [];
    const numParticles = getParticleCount();

    //reset grabbed particle reference on resize
    grabbedParticleRef.current = null;

    //array of colors -- add/change particle color here
    const colors = [
      "48, 102, 190", //blue
      "114, 189, 163", //green
      "255, 255, 255", //white
    ];
    const linkColor = ["114, 189, 163"]; //change links color HERE, can have single color
    //or add multiple via adding linkColor[Math.floor(Math.random() * linkColor.length)]; line 130

    //class to create a particle
    class Particle {
      constructor(x, y, vx, vy, radius, color) {
        this.x = x;
        this.y = y;
        this.vx = vx * particleSpeed;
        this.vy = vy * particleSpeed;
        this.radius = Math.random() * (3 - 1) + 1; //randomize radius between 0.3 and 2.5
        this.color = color;
        this.opacity = 1; //base particle opacity
      }

      //function to draw a particle
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
        ctx.fill();
      }

      //function to update a particle's position
      update() {
        this.x += this.vx;
        this.y += this.vy;

        //allow particles to float in and out of the screen
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }
    }

    //create initial particles
    for (let i = 0; i < numParticles; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const vx = -0.5 + Math.random();
      const vy = -0.5 + Math.random();
      const radius = Math.random() * 2;
      const color = colors[Math.floor(Math.random() * colors.length)];

      particles.push(new Particle(x, y, vx, vy, radius, color));
    }

    //calculate the maximum distance (diagonal of the screen)
    const maxDistance = Math.sqrt(
      window.innerWidth ** 2 + window.innerHeight ** 2
    );

    // animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // draw and update particles
      particles.forEach((particle) => {
        // calculate the distance from the mouse to the particle
        const dx = particle.x - mousePosition.current.x;
        const dy = particle.y - mousePosition.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // gradually adjust opacity based on distance
        const opacity = 0.8 - distance / maxDistance; // closer = more opaque -- change opacity of dots via distance
        particle.opacity = Math.max(opacity, 0); // ensure opacity is not below 0

        // link particles within mouse radius
        particles.forEach((otherParticle) => {
          if (particle === otherParticle) return;
          const linkDistance = Math.sqrt(
            (particle.x - otherParticle.x) ** 2 +
              (particle.y - otherParticle.y) ** 2
          );
          if (linkDistance < 75 && distance < 250) {
            // link if both particles are within radius
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(${linkColor}, ${particle.opacity})`;
            ctx.lineWidth = 0.8; //link thickness
            ctx.stroke();
          }
        });

        //handle grab effect for a single particle
        if (grabbedParticleRef.current === particle) {
          particle.x = mousePosition.current.x;
          particle.y = mousePosition.current.y;
          particles.forEach((otherParticle) => {
            if (particle === otherParticle) return;
            const grabDistance = Math.sqrt(
              (particle.x - otherParticle.x) ** 2 +
                (particle.y - otherParticle.y) ** 2
            );
            if (grabDistance < 50) {
              // Link if within grab distance
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = `rgba(255, 255, 255, ${particle.opacity})`; //change grab color just white for now
              ctx.lineWidth = 0.7;
              ctx.stroke();
            }
          });
        }

        particle.draw();
        particle.update();
      });

      requestAnimationFrame(animate);
    };

    //track the mouse postion
    // let mousePosition = { x: null, y: null };
    const handleMouseMove = (event) => {
      const boundingRect = canvasRef.current.getBoundingClientRect();
      mousePosition.current.x = event.clientX - boundingRect.left;
      mousePosition.current.y = event.clientY - boundingRect.top;

      //grab one particle when the mouse moves into window
      if (!grabbedParticleRef.current && particles.length > 0) {
        grabbedParticleRef.current = particles[0];
      }
    };
    window.addEventListener("mousemove", handleMouseMove);

    //start the animation
    animate();

    //cleanup function
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [windowSize]);

  return <canvas id="canvasOne" ref={canvasRef} />;
};

export default Canvas;
