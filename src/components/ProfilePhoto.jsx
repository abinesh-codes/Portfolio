import React, { useState } from 'react';

// Import the photo
import photo from '../assets/abinesh.png';

export default function ProfilePhoto({ size = 320, style = {} }) {
  const [imgError, setImgError] = useState(false);

  if (photo && !imgError) {
    return (
      <img
        src={photo}
        alt="Abinesh R"
        onError={() => setImgError(true)}
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', ...style }}
      />
    );
  }

  // Fallback SVG avatar
  return (
    <svg viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', ...style }}>
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f0f1a" />
          <stop offset="100%" stopColor="#1a1a2e" />
        </linearGradient>
        <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6c63ff" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      <rect width="320" height="320" fill="url(#bgGrad)" />
      <circle cx="160" cy="120" r="65" fill="url(#avatarGrad)" opacity="0.9" />
      <ellipse cx="160" cy="300" rx="110" ry="80" fill="url(#avatarGrad)" opacity="0.8" />
      <text x="160" y="135" textAnchor="middle" fill="white" fontSize="52" fontFamily="Syne, sans-serif" fontWeight="700">AR</text>
    </svg>
  );
}
