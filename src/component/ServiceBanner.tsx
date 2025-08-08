'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BannerSection = () => {
  return (
    <section className="relative h-[350px] md:h-[420px] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/modern-office-laundry.png"
        alt="Services Banner"
        fill
        className="object-cover"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content Wrapper - Aligned to Left */}
      <div className="absolute inset-0 flex flex-col items-start justify-center text-white px-8 md:px-20 z-10">
        {/* Breadcrumb Buttons */}
        <div className="flex items-center gap-3 mb-4">
          <Link
            href="/"
            className="px-4 py-1 rounded-md text-sm hover:bg-white/20 transition border-none"
          >
            Home
          </Link>
          <span className="text-gray-300">/</span>
          <Link
            href="/services"
            className="px-4 py-1 rounded-md text-sm hover:bg-white/20 transition border-none"
          >
            Services
          </Link>
        </div>
        
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold">Services</h1>
      </div>
      
      {/* Animated Bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Bubble 1 */}
        <div className="bubble bubble-1">
          <div className="bubble-inner"></div>
        </div>
        
        {/* Bubble 2 */}
        <div className="bubble bubble-2">
          <div className="bubble-inner"></div>
        </div>
        
        {/* Bubble 3 */}
        <div className="bubble bubble-3">
          <div className="bubble-inner"></div>
        </div>
        
        {/* Bubble 4 */}
        <div className="bubble bubble-4">
          <div className="bubble-inner"></div>
        </div>
        
        {/* Bubble 5 */}
        <div className="bubble bubble-5">
          <div className="bubble-inner"></div>
        </div>
        
        {/* Bubble 6 */}
        <div className="bubble bubble-6">
          <div className="bubble-inner"></div>
        </div>
      </div>
      
      <style jsx>{`
  .bubble {
    position: absolute;
    bottom: -60px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    animation: bubbleRise 6s infinite linear;
  }
  
.bubble-inner {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, 
    rgba(255, 255, 255, 1), 
    rgba(173, 216, 230, 1), 
    rgba(135, 206, 235, 1)
  );
  border: 2px solid rgba(255, 255, 255, 1);
  box-shadow: 
    inset 0 0 8px rgba(255, 255, 255, 0.8),
    0 0 10px rgba(135, 206, 235, 0.6),
    0 0 15px rgba(173, 216, 230, 0.5);
  opacity: 0.9;
}

  
  .bubble-1 {
    left: 10%;
    width: 35px;
    height: 35px;
    animation-delay: 0s;
    animation-duration: 5s;
  }
  
  .bubble-2 {
    left: 25%;
    width: 45px;
    height: 45px;
    animation-delay: 1.5s;
    animation-duration: 6.5s;
  }
  
  .bubble-3 {
    left: 45%;
    width: 30px;
    height: 30px;
    animation-delay: 3s;
    animation-duration: 5.5s;
  }
  
  .bubble-4 {
    left: 65%;
    width: 50px;
    height: 50px;
    animation-delay: 0.8s;
    animation-duration: 7s;
  }
  
  .bubble-5 {
    left: 80%;
    width: 38px;
    height: 38px;
    animation-delay: 2.2s;
    animation-duration: 6s;
  }
  
  .bubble-6 {
    left: 90%;
    width: 42px;
    height: 42px;
    animation-delay: 4s;
    animation-duration: 5.8s;
  }
  
  @keyframes bubbleRise {
    0% {
      transform: translateY(0) scale(1);
      opacity: 0;
    }
    
    10% {
      opacity: 0.9;
    }
    
    50% {
      transform: translateY(-200px) scale(1.1);
      opacity: 0.95;
    }
    
    85% {
      transform: translateY(-380px) scale(1.2);
      opacity: 0.9;
    }
    
    95% {
      transform: translateY(-420px) scale(1.5);
      opacity: 0.7;
    }
    
    100% {
      transform: translateY(-450px) scale(2);
      opacity: 0;
    }
  }
  
  /* Additional floating animation for subtle movement */
  .bubble:nth-child(odd) {
    animation-name: bubbleRiseFloat;
  }
  
  @keyframes bubbleRiseFloat {
    0% {
      transform: translateY(0) translateX(0) scale(1);
      opacity: 0;
    }
    
    10% {
      opacity: 0.9;
    }
    
    25% {
      transform: translateY(-100px) translateX(10px) scale(1.05);
      opacity: 0.95;
    }
    
    50% {
      transform: translateY(-200px) translateX(-5px) scale(1.1);
      opacity: 0.95;
    }
    
    75% {
      transform: translateY(-300px) translateX(8px) scale(1.15);
      opacity: 0.9;
    }
    
    85% {
      transform: translateY(-380px) translateX(-3px) scale(1.2);
      opacity: 0.9;
    }
    
    95% {
      transform: translateY(-420px) translateX(5px) scale(1.5);
      opacity: 0.7;
    }
    
    100% {
      transform: translateY(-450px) translateX(0) scale(2);
      opacity: 0;
    }
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .bubble {
      width: 30px;
      height: 30px;
    }
    
    .bubble-2, .bubble-4 {
      width: 35px;
      height: 35px;
    }
    
    .bubble-6 {
      display: none;
    }
  }
`}</style>
    </section>
  );
};

export default BannerSection;
