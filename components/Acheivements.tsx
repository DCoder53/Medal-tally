'use client'
import { useEffect, useRef, useState } from "react";

const GoldImage = (
  <img 
    src="/victory/bronze.svg" 
    alt="Gold Medal" 
    width="100" 
    height="100" 
  />
);

const SilverImage = (
  <img 
    src="/victory/gold.svg" 
    alt="Silver Medal" 
    width="100" 
    height="100" 
  />
);

const BronzeImage = (
  <img 
    src="/victory/silver.svg" 
    alt="Bronze Medal" 
    width="100" 
    height="100" 
  />
);

const ChampImage = (
  <img 
    src="/victory/world medalist.svg" 
    alt="Champion Medal" 
    width="100" 
    height="100" 
  />
);

const WorldMedalistImage = (
  <img 
    src="/victory/world-archery-champion.svg" 
    alt="World Archery Champion" 
    width="100" 
    height="100" 
  />
);
const OlympicLogoImage = (
  <img 
    src="/victory/olympics-logo.svg" 
    alt="World Archery Champion" 
    width="100" 
    height="100" 
  />
);

  
// Achievements array with pre-defined SVGs
const achievements = [
  {
    image: GoldImage
  },
  {
    image: SilverImage
  },
  {
    image: BronzeImage
  },
  {
    image: WorldMedalistImage
  },
  {
    image: ChampImage
  },
  {
    image: OlympicLogoImage
  },
];

export default function Component() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollSpeed, setScrollSpeed] = useState(1);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
  
    // Clone images for seamless infinite scroll
    const cloneImages = () => {
      const items = Array.from(container.children);
      items.forEach(item => {
        const clone = item.cloneNode(true);
        container.appendChild(clone);
      });
      items.reverse().forEach(item => {
        const clone = item.cloneNode(true);
        container.insertBefore(clone, container.firstChild);
      });
    };
  
    cloneImages();
  
    // Set scroll to middle
    container.scrollLeft = container.scrollWidth / 2 - container.clientWidth / 2;
  
    let animationFrameId: number;
    let currentScrollSpeed = scrollSpeed; // Local variable to manage the speed
  
    const smoothScroll = () => {
      if (currentScrollSpeed !== 0) {
        container.scrollLeft += currentScrollSpeed;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft >= maxScrollLeft) {
          container.scrollLeft = container.scrollLeft - maxScrollLeft / 2;
        }
      }
      animationFrameId = requestAnimationFrame(smoothScroll);
    };
  
    animationFrameId = requestAnimationFrame(smoothScroll);
  
    // Mouse enter: Stop scrolling by setting speed to 0
    const handleMouseEnter = () => {
      currentScrollSpeed = 0; // This will pause the scrolling
    };
  
    // Mouse leave: Resume scrolling by restoring speed
    const handleMouseLeave = () => {
      currentScrollSpeed = scrollSpeed; // Restores the speed after mouse leaves
    };
  
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
  
    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [scrollSpeed]);
  

  const Achievement = ({ svg }: { svg: JSX.Element }) => (
    <div className="flex flex-col items-center justify-center text-center px-4 min-w-[250px] max-h-full">
      <div className="transition-transform duration-300 ease-in-out hover:scale-95 hover:opacity-50 cursor-pointer mb-2">
        {svg}
      </div>
    </div>
  );

  return (
    <div className="flex items-center p-6 shadow-lg rounded-lg max-w-5xl mx-auto m-5 bg-white">
      <div className="w-full max-w-screen-xl mx-auto p-2 relative overflow-hidden rounded-lg">
        <div ref={containerRef} className="flex items-center justify-center overflow-x-hidden">
          {achievements.concat(achievements).map((achievement, index) => (
            <Achievement key={index} svg={achievement.image} />
          ))}
        </div>
      </div>
    </div>
  );
}
