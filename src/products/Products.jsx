import React from "react";
import GaneshProductCard from "./SingeProduct";
import { addToCart } from "../Redux/CartSlice";
import { useDispatch, useSelector } from 'react-redux';
const sampleProducts = [
  {
    id:3,
    image: "./picture3.jpg",
    title: "Eco-Friendly Ganesh Idol",
    description: "Made from natural clay, perfect for Ganesh Chaturthi visarjan.",
    price: 499,
  },
  {
    id:2,
    image: "./picture2.jpg",
    title: "Complete Ganesh Puja Kit",
    description: "Includes durva, modak, agarbatti, diya, and more.",
    price: 799,
  },
  {
    id:1,
    image: "./picture1.jpg",
    title: "Traditional Modak (12 pcs)",
    description: "Freshly made jaggery-coconut modaks, Bappa’s favorite!",
    price: 299,
  },
  {
    id:3,
    image: "./picture3.jpg",
    title: "Eco-Friendly Ganesh Idol",
    description: "Made from natural clay, perfect for Ganesh Chaturthi visarjan.",
    price: 499,
  },
  {
    id:2,
    image: "./picture2.jpg",
    title: "Complete Ganesh Puja Kit",
    description: "Includes durva, modak, agarbatti, diya, and more.",
    price: 799,
  },
  {
    id:1,
    image: "./picture1.jpg",
    title: "Traditional Modak (12 pcs)",
    description: "Freshly made jaggery-coconut modaks, Bappa’s favorite!",
    price: 299,
  },
  {
    id:3,
    image: "./picture3.jpg",
    title: "Eco-Friendly Ganesh Idol",
    description: "Made from natural clay, perfect for Ganesh Chaturthi visarjan.",
    price: 499,
  },
  {
    id:2,
    image: "./picture2.jpg",
    title: "Complete Ganesh Puja Kit",
    description: "Includes durva, modak, agarbatti, diya, and more.",
    price: 799,
  },
  {
    id:1,
    image: "./picture1.jpg",
    title: "Traditional Modak (12 pcs)",
    description: "Freshly made jaggery-coconut modaks, Bappa’s favorite!",
    price: 299,
  },
  {
    id:3,
    image: "./picture3.jpg",
    title: "Eco-Friendly Ganesh Idol",
    description: "Made from natural clay, perfect for Ganesh Chaturthi visarjan.",
    price: 499,
  },
  {
    id:2,
    image: "./picture2.jpg",
    title: "Complete Ganesh Puja Kit",
    description: "Includes durva, modak, agarbatti, diya, and more.",
    price: 799,
  },
  {
    id:1,
    image: "./picture1.jpg",
    title: "Traditional Modak (12 pcs)",
    description: "Freshly made jaggery-coconut modaks, Bappa’s favorite!",
    price: 299,
  },
  {
    id:3,
    image: "./picture3.jpg",
    title: "Eco-Friendly Ganesh Idol",
    description: "Made from natural clay, perfect for Ganesh Chaturthi visarjan.",
    price: 499,
  },
  {
    id:2,
    image: "./picture2.jpg",
    title: "Complete Ganesh Puja Kit",
    description: "Includes durva, modak, agarbatti, diya, and more.",
    price: 799,
  },
  {
    id:1,
    image: "./picture1.jpg",
    title: "Traditional Modak (12 pcs)",
    description: "Freshly made jaggery-coconut modaks, Bappa’s favorite!",
    price: 299,
  },
  {
    id:3,
    image: "./picture3.jpg",
    title: "Eco-Friendly Ganesh Idol",
    description: "Made from natural clay, perfect for Ganesh Chaturthi visarjan.",
    price: 499,
  },
  {
    id:2,
    image: "./picture2.jpg",
    title: "Complete Ganesh Puja Kit",
    description: "Includes durva, modak, agarbatti, diya, and more.",
    price: 799,
  },
  {
    id:1,
    image: "./picture1.jpg",
    title: "Traditional Modak (12 pcs)",
    description: "Freshly made jaggery-coconut modaks, Bappa’s favorite!",
    price: 299,
  },
  {
    id:3,
    image: "./picture3.jpg",
    title: "Eco-Friendly Ganesh Idol",
    description: "Made from natural clay, perfect for Ganesh Chaturthi visarjan.",
    price: 499,
  },
  {
    id:2,
    image: "./picture2.jpg",
    title: "Complete Ganesh Puja Kit",
    description: "Includes durva, modak, agarbatti, diya, and more.",
    price: 799,
  },
  
  
];

const GaneshStore =() => {
  const dispatch=useDispatch();
  return (
    <div className="container my-5">
      <h1 className="text-center text-danger mb-4 fw-bold">
        <i className="bi bi-flower1 me-2" />  Veda Samudra Divine Store
      </h1>
      <div className="row">
        {sampleProducts.map((product, index) => (
          <GaneshProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default GaneshStore;
