import React, { useRef, useEffect } from 'react';
import './scss/components/_canvas-particles.scss';

const CanvasParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Configuration
    const PARTICLE_COUNT = 200;    // Total number of particles
    const PARTICLE_SIZE = 1;       // Each particle is 1px
    const MAX_SPEED = 0.3;         // Particle speed (pixels per frame)


    const canvas = canvasRef.current;
    if (!canvas) return; 
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Define a helper to get random Y with your distribution:
    // - 0% in the top 20%
    // - 10% in the 20–40%
    // - 90% in the 40–100%
    function getRandomY() {
      const r = Math.random();
      if (r < 0.1) {
        const minY = 0.2 * canvas.height;
        const maxY = 0.4 * canvas.height;
        return minY + Math.random() * (maxY - minY);
      } else {
        const minY = 0.4 * canvas.height;
        const maxY = canvas.height;
        return minY + Math.random() * (maxY - minY);
      }
    }

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = getRandomY();
        this.vx = (Math.random() - 0.5) * MAX_SPEED;
        this.vy = (Math.random() - 0.5) * MAX_SPEED;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        const dynamicColor = getComputedStyle(document.getElementById('root'))
        .getPropertyValue('--particle-colour')
        .trim();
        ctx.fillStyle = dynamicColor
        ctx.fillRect(this.x, this.y, PARTICLE_SIZE, PARTICLE_SIZE);
      }
    }
    const particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle());
    }

    let animationId;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationId = requestAnimationFrame(animate);
    }
    animate();
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} id="particleCanvas" />;
};

export default CanvasParticles;
