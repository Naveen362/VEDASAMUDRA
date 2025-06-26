import React from "react";
import GaneshProductCard from "./SingeProduct";

const sampleProducts = [
  {
    image: "./picture3.jpg",
    title: "Eco-Friendly Ganesh Idol",
    description: "Made from natural clay, perfect for Ganesh Chaturthi visarjan.",
    price: 499,
  },
  {
    image: "./picture2.jpg",
    title: "Complete Ganesh Puja Kit",
    description: "Includes durva, modak, agarbatti, diya, and more.",
    price: 799,
  },
  {
    image: "./picture1.jpg",
    title: "Traditional Modak (12 pcs)",
    description: "Freshly made jaggery-coconut modaks, Bappa’s favorite!",
    price: 299,
  },
  {
    image: "./picture3.jpg",
    title: "Eco-Friendly Ganesh Idol",
    description: "Made from natural clay, perfect for Ganesh Chaturthi visarjan.",
    price: 499,
  },
  {
    image: "./picture2.jpg",
    title: "Complete Ganesh Puja Kit",
    description: "Includes durva, modak, agarbatti, diya, and more.",
    price: 799,
  },
  {
    image: "./picture1.jpg",
    title: "Traditional Modak (12 pcs)",
    description: "Freshly made jaggery-coconut modaks, Bappa’s favorite!",
    price: 299,
  },
  {
    image: "./picture3.jpg",
    title: "Eco-Friendly Ganesh Idol",
    description: "Made from natural clay, perfect for Ganesh Chaturthi visarjan.",
    price: 499,
  },
  {
    image: "./picture2.jpg",
    title: "Complete Ganesh Puja Kit",
    description: "Includes durva, modak, agarbatti, diya, and more.",
    price: 799,
  },
  {
    image: "./picture1.jpg",
    title: "Traditional Modak (12 pcs)",
    description: "Freshly made jaggery-coconut modaks, Bappa’s favorite!",
    price: 299,
  },
  {
    image: "./picture3.jpg",
    title: "Eco-Friendly Ganesh Idol",
    description: "Made from natural clay, perfect for Ganesh Chaturthi visarjan.",
    price: 499,
  },
  {
    image: "./picture2.jpg",
    title: "Complete Ganesh Puja Kit",
    description: "Includes durva, modak, agarbatti, diya, and more.",
    price: 799,
  },
  {
    image: "./picture1.jpg",
    title: "Traditional Modak (12 pcs)",
    description: "Freshly made jaggery-coconut modaks, Bappa’s favorite!",
    price: 299,
  },
  {
    image: "./picture3.jpg",
    title: "Eco-Friendly Ganesh Idol",
    description: "Made from natural clay, perfect for Ganesh Chaturthi visarjan.",
    price: 499,
  },
  {
    image: "./picture2.jpg",
    title: "Complete Ganesh Puja Kit",
    description: "Includes durva, modak, agarbatti, diya, and more.",
    price: 799,
  },
  {
    image: "./picture1.jpg",
    title: "Traditional Modak (12 pcs)",
    description: "Freshly made jaggery-coconut modaks, Bappa’s favorite!",
    price: 299,
  },
  {
    image: "./picture3.jpg",
    title: "Eco-Friendly Ganesh Idol",
    description: "Made from natural clay, perfect for Ganesh Chaturthi visarjan.",
    price: 499,
  },
  {
    image: "./picture2.jpg",
    title: "Complete Ganesh Puja Kit",
    description: "Includes durva, modak, agarbatti, diya, and more.",
    price: 799,
  },
  {
    image: "./picture1.jpg",
    title: "Traditional Modak (12 pcs)",
    description: "Freshly made jaggery-coconut modaks, Bappa’s favorite!",
    price: 299,
  },
  {
    image: "./picture3.jpg",
    title: "Eco-Friendly Ganesh Idol",
    description: "Made from natural clay, perfect for Ganesh Chaturthi visarjan.",
    price: 499,
  },
  {
    image: "./picture2.jpg",
    title: "Complete Ganesh Puja Kit",
    description: "Includes durva, modak, agarbatti, diya, and more.",
    price: 799,
  },
  
  
];

const GaneshStore =() => {
  return (
    <div className="container my-5">
      <h2 className="text-center text-danger mb-4 fw-bold">
        🕉️ Veda Samudra Divine Store
      </h2>
      <div className="row">
        {sampleProducts.map((product, index) => (
          <GaneshProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default GaneshStore;
