"use client";

import React from 'react';

interface ResponsiveImageProps {
    src: string;
    alt: string;
    sizes?: string;
    className?: string;
    aspectRatio?: '16/9' | '4/3' | '1/1';
}

const ResponsiveImage = ({
    src,
    alt,
    sizes = "100vw",
    className = "",
    aspectRatio = "16/9"
}: ResponsiveImageProps) => {

    // Generate srcset for different sizes
    // This assumes the images are available at these URLs/params or handled by an image loader if dynamic.
    // The spec provided this simple implementation.
    const generateSrcSet = (baseSrc: string) => {
        const sizes = [640, 768, 1024, 1280, 1536, 1920];
        // If baseSrc is a local path, appending ?w= might strictly require an image loader or service (like Cloudinary/Vercel Blob)
        // However, following the spec exactly.
        return sizes
            .map(size => `${baseSrc}?w=${size} ${size}w`)
            .join(', ');
    };

    // Choose aspect ratio style
    let aspectClass = "";
    if (aspectRatio === '16/9') aspectClass = "aspect-16-9";
    else if (aspectRatio === '4/3') aspectClass = "aspect-4-3";
    else if (aspectRatio === '1/1') aspectClass = "aspect-1-1";

    return (
        <div className={`relative overflow-hidden ${aspectClass} ${className}`}>
            <img
                src={src}
                srcSet={generateSrcSet(src)}
                sizes={sizes}
                alt={alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
            />
        </div>
    );
};

export default ResponsiveImage;
