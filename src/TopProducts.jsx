import React, { useEffect, useState } from 'react';

const images = ["https://wallpapercave.com/wp/wp9480333.jpg", "https://th.bing.com/th/id/OIP.1Upi_-z0LbY34ik3XSbeNwHaEK?w=322&h=181&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"];

const TopProducts = () => {
  const [image, setImage] = useState(0);

  useEffect(() => {
    const setter = setInterval(() => {
      setImage((prev) => (prev + 1) % images.length);
    }, 4000);

    // Clean up interval on component unmount
    return () => clearInterval(setter);
  }, []); // Only run once on mount

  return (
    <div className='container bg-white p-3' style={{borderRadius:"3%"}}>
      <h1 className='mb-4 mt-2 text-danger' style={{fontFamily:"italic"}}><i className="bi bi-flower1 me-2" />  Our Top Selling Products🪔</h1>
      <h5 className='my-4' style={{fontFamily:" 'Courier New', Courier, monospace"}}>Welcome to our divine portal dedicated to Lord Ganesha — the remover of obstacles and the harbinger of good fortune. We offer all puja samagri and spiritual guidance to help devotees connect with Bappa.</h5>
      <div>
        <img
          style={{borderRadius:"20px 5px",objectFit:"fill"}}
          src={images[image]}
          alt={`product-${image}`}
          width="100%"
          height="480px"
        />
      </div>
    </div>
  );
};

export default TopProducts;
