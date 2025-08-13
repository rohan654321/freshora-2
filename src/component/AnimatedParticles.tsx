'use client';

import React, { useState, useEffect, useMemo } from 'react';

// Arrays of your star and bubble images
const starImages = ['/images/stars-01.png', '/images/stars-02.png', '/images/stars-03.png', '/images/stars-04.png', '/images/stars-05.png'];
const bubbleImages = ['/images/bubbles-01.png', '/images/bubbles-02.png', '/images/bubbles-03.png', '/images/bubbles-04.png', '/images/bubbles-05.png', '/images/bubbles-06.png', '/images/bubbles-07.png', '/images/bubbles-08.png', '/images/bubbles-09.png', '/images/bubbles-10.png', '/images/bubbles-11.png'];

const AnimatedParticles = () => {
    // FIX: State to prevent rendering on the server
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // This effect runs only on the client, after the initial render
        setIsMounted(true);
    }, []);

    // Generate a memoized list of particles to prevent re-calculation on every render
    const particles = useMemo(() => Array.from({ length: 25 }).map((_, i) => {
        const isStar = Math.random() > 0.6; // More bubbles than stars
        const imageArray = isStar ? starImages : bubbleImages;
        const src = imageArray[Math.floor(Math.random() * imageArray.length)];
        const size = Math.random() * (isStar ? 40 : 80) + 20; // Stars are smaller

        return {
            id: i,
            src: src,
            alt: isStar ? 'star' : 'bubble',
            style: {
                '--size': `${size}px`,
                '--left-start': `${Math.random() * 100}%`,
                '--left-end': `${Math.random() * 100}%`,
                '--delay': `${Math.random() * 20}s`,
                '--duration': `${Math.random() * 20 + 15}s`,
            } as React.CSSProperties
        };
    }), []); // Empty dependency array ensures this runs only once

    // FIX: Return null if the component is not yet mounted on the client
    if (!isMounted) {
        return null;
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10" aria-hidden="true">
            {particles.map(p => (
                <img
                    key={p.id}
                    src={p.src}
                    alt={p.alt}
                    className="particle"
                    style={p.style}
                />
            ))}
        </div>
    );
};

export default AnimatedParticles;
