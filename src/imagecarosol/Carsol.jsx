import React, { useEffect, useRef, useState } from 'react';

const ImageCarousel = ({ pictures }) => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % pictures.length;
        const scrollContainer = scrollRef.current;

        scrollContainer.scrollTo({
          left: nextIndex * 360, // Adjust according to image width
          behavior: 'smooth',
        });

        return nextIndex;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [pictures.length]);

  return (
    <div className="col-12 col-lg-6 mb-4 mb-lg-0">
      {/* Style tag to hide scrollbar */}
      <style>
        {`
          .carousel-container::-webkit-scrollbar {
            display: none;
          }
          .carousel-container {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;     /* Firefox */
          }
          .carousel-img {
            scroll-snap-align: center;
          }
        `}
      </style>

      <div
        ref={scrollRef}
        className="carousel-container d-flex gap-3 overflow-auto border rounded-5 shadow"
        style={{
          whiteSpace: 'nowrap',
          width: "100%",
          height: "650px",
          scrollSnapType: 'x mandatory',
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch',
          padding: '10px',
        }}
      >
        {pictures.map((pict, ind) => (
          <img
            key={ind}
            src={pict}
            className="img-fluid rounded carousel-img"
            style={{
              height: '630px',
              objectFit: 'cover',
              minWidth: '360px',
              flex: '0 0 auto',
            }}
            alt={`Slide ${ind + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
