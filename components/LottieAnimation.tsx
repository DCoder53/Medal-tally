"use client";
import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";


interface LottieAnimationProps {
  animationData: any;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ animationData }) => {
  const animationContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (animationContainerRef.current) {
      const animation = Lottie.loadAnimation({
        container: animationContainerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData,
      });

      return () => animation.destroy();
    }
  }, [animationData]);

  return <div ref={animationContainerRef} />;
};

export default LottieAnimation;