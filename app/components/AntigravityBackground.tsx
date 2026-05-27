'use client';

import React, { useEffect, useRef } from 'react';

export default function AntigravityBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      baseSpeedX: number;
      baseSpeedY: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;
      swaySpeed: number;
      angle: number;
      parallaxFactor: number;
      offsetX: number;
      offsetY: number;
    }> = [];
    
    const maxParticles = 40; // Fewer, finer particles for a clean look
    const colors = [
      'rgba(12, 12, 20, ',    // Fine Charcoal Dust
      'rgba(144, 235, 0, ',   // Neon Lime Spark
      'rgba(180, 180, 195, '  // Faint Grey Speckle
    ];

    const mouse = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
      ease: 0.08
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = (randomY = false) => {
      const size = Math.random() * 2 + 1.0; // Ultra-fine, subtle embers
      const speedY = -(Math.random() * 0.3 + 0.1); // Slow drift
      const speedX = (Math.random() * 0.2 - 0.1);

      return {
        x: Math.random() * canvas.width,
        y: randomY ? Math.random() * canvas.height : canvas.height + 20,
        size,
        baseSpeedX: speedX,
        baseSpeedY: speedY,
        speedX,
        speedY,
        opacity: Math.random() * 0.25 + 0.05, // Lower opacity to stay clean
        color: colors[Math.floor(Math.random() * colors.length)],
        swaySpeed: Math.random() * 0.01 + 0.003,
        angle: Math.random() * Math.PI * 2,
        parallaxFactor: Math.random() * 0.03 + 0.01,
        offsetX: 0,
        offsetY: 0
      };
    };

    const init = () => {
      resizeCanvas();
      particles = [];
      for (let i = 0; i < maxParticles; i++) {
        particles.push(createParticle(true));
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX - window.innerWidth / 2);
      mouse.targetY = (e.clientY - window.innerHeight / 2);
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      mouse.x += (mouse.targetX - mouse.x) * mouse.ease;
      mouse.y += (mouse.targetY - mouse.y) * mouse.ease;

      particles.forEach((p, idx) => {
        p.angle += p.swaySpeed;
        p.speedX = p.baseSpeedX + Math.sin(p.angle) * 0.08;
        p.y += p.speedY;
        p.x += p.speedX;

        p.offsetX += (-mouse.x * p.parallaxFactor - p.offsetX) * 0.1;
        p.offsetY += (-mouse.y * p.parallaxFactor - p.offsetY) * 0.1;

        const finalX = p.x + p.offsetX;
        const finalY = p.y + p.offsetY;

        ctx.beginPath();
        ctx.arc(finalX, finalY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + p.opacity + ')';
        ctx.fill();

        if (p.y < -30 || p.x < -30 || p.x > canvas.width + 30) {
          particles[idx] = createParticle(false);
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    init();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas id="antigravity-canvas" ref={canvasRef} />;
}
