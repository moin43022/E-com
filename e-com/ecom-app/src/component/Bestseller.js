import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Bestseller() {
  const videoRefs = useRef([]);

  const handleMouseEnter = (index) => {
    videoRefs.current[index].play();
  };

  const handleMouseLeave = (index) => {
    videoRefs.current[index].pause();
  };

  return (
    <div>
      <div className='seller-first-heading'>
        <h2>Best</h2>
        <h2>Sellers</h2>
      </div>

      <div className="seller-video-box">
        {[
          { src: "Watch-video.mp4", label: "Smartwatches", value: "Round Smartwatches" },
          { src: "Earbuds-video.mp4", label: "Earbuds", value: "Airbuds" },
          { src: "Headphone-video.mp4", label: "Headphones", value: "Gaming Headphones" },
          { src: "Neckband-video.mp4", label: "Neckbands", value: "Neckbands" },
          { src: "Speaker-video.mp4", label: "Speakers", value: "Speakers" }
        ].map((item, index) => (
          <Link to="/buds"
            key={index}
            onClick={() => localStorage.setItem("citem", item.value)}
            style={{ cursor: "pointer" }}
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={item.src}
              muted
              loop
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            />
            <h4 style={{ textAlign: 'center' }}>{item.label}</h4>
          </Link>
        ))}
      </div>
    </div>
  );
}
