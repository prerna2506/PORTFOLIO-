"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // Total frames: 120 (0 to 119)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, 119]);

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    for (let i = 0; i <= 119; i++) {
      const img = new Image();
      const paddedIndex = i.toString().padStart(3, "0");
      img.src = `/sequence/frame_${paddedIndex}_delay-0.066s.webp`;
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  // Draw initial frame
  useEffect(() => {
    if (images.length > 0 && canvasRef.current) {
      if (images[0].complete) {
        renderFrame(0);
      } else {
        images[0].onload = () => {
          renderFrame(0);
        };
      }
    }
  }, [images]);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    renderFrame(Math.round(latest));
  });

  const renderFrame = (index: number) => {
    if (!canvasRef.current || !images[index]) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    const img = images[index];
    if (!img.complete) return;

    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;
    
    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const resizeCanvas = () => {
      // Setup canvas size taking device pixel ratio into account for sharpness
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      const ctx = canvas.getContext('2d');
      if (ctx) {
          ctx.scale(1, 1);
      }
      renderFrame(Math.round(frameIndex.get()));
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, [images]);

  return (
    <div ref={containerRef} className="h-[500vh] relative bg-[#121212] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex justify-center items-center">
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </div>
    </div>
  );
}
