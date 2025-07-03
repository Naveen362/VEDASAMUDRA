// src/components/CartItemsDemo.js
import React from 'react';
import SingleAddToCart from './SingleAddToCart';
import { useSelector } from 'react-redux';

const CartItemsDemo = () => {
  const { cartItems, totalPrice } = useSelector((state) => state.cart);

  return (
    <div className="container my-5">
      <h3 className="text-center text-danger fw-bold mb-4">🛒 Your Cart</h3>

      <div className="card p-3 shadow-sm rounded-2 bg-light">
        {/* Render all cart items */}
        {cartItems.length>0 ?cartItems.map((item, index) => (
          <SingleAddToCart key={index} dat={item} />
        )):<h1 className='text-center' >NO CART ITEMS YET</h1>}

        {/* Total */}
        <hr />
        { cartItems.length>0 &&
        <div>
        <div className="text-end">
          <h5 className="text-primary">Total: ₹{totalPrice}</h5>
        </div>
        <div className='d-flex justify-content-center'> 
      <button className='btn btn-success mt-3 w-100'>PROCEED TO PAYMENT</button>
      </div></div>
        }
        {/* <div className='d-flex justify-content-center'> 
      <button className='btn btn-success mt-3 w-100'>PROCEED TO PAYMENT</button>
      </div> */}
      </div>
      
    </div>
  );
};

export default CartItemsDemo;


// import React, { useEffect, useState } from 'react';
// import SingleAddToCart from './SingleAddToCart';
// import { useDispatch, useSelector } from 'react-redux'
// const data=[{
//     image: "./picture1.jpg",
//     title: "Traditional Modak (12 pcs)",
//     description: "Freshly made jaggery-coconut modaks, Bappa’s favorite!",
//     price: 299,
//   },
//   {
//     image: "./picture3.jpg",
//     title: "Eco-Friendly Ganesh Idol",
//     description: "Made from natural clay, perfect for Ganesh Chaturthi visarjan.",
//     price: 499,
//   },
//   {
//     image: "./picture2.jpg",
//     title: "Complete Ganesh Puja Kit",
//     description: "Includes durva, modak, agarbatti, diya, and more.",
//     price: 799,
//   }];

// const CartItemsDemo = () => {
//   const [s,add]=useState([]);
//   const [t,setT]=useState(0);
//   useEffect(()=>{
//      add(JSON.parse(localStorage.getItem('cartItems')) ||[]);
//      setT(JSON.parse(localStorage.getItem('totalP'))||0);
//   },[])
//   const {cartItems,totalPrice}=useSelector((state)=>state.cart);

//   console.log(cartItems)
//   return (
//     <div className="container my-5">
//       <h3 className="text-center text-danger fw-bold mb-4">🛒 Your Cart</h3>

//       <div className="card p-3 shadow-sm rounded-2 bg-light">

//         {/* Item 1 */}
//         {s.map((ele,ind)=>{
//           return <SingleAddToCart key={ind} dat={ele}/>
//         })}
//         {/* Total */}
//         <hr />
//         <div className="text-end">
//           <h5 className="text-primary">Total: ₹{t}</h5>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartItemsDemo;
// //{/* <div className="d-flex align-items-center justify-content-between border-bottom py-3">
//           <div className="d-flex align-items-center">
//             <img
//               src="./picture1.jpg"
//               alt="Ganesh Idol"
//               style={{ width: '60px', height: '60px', objectFit: 'cover' }}
//               className="me-3 border rounded bg-white p-1"
//             />
//             <div>
//               <h6 className="mb-1 fw-bold">Eco-Friendly Ganesh Idol</h6>
//               <small className="text-muted">₹499 × 1</small>
//             </div>
//           </div>
//           <span className="badge bg-success fs-6">₹499</span>
//         </div>

//         {/* Item 2 */}
//         <div className="d-flex align-items-center justify-content-between border-bottom py-3">
//           <div className="d-flex align-items-center">
//             <img
//               src="./picture3.jpg"
//               alt="Puja Kit"
//               style={{ width: '60px', height: '60px', objectFit: 'cover' }}
//               className="me-3 border rounded bg-white p-1"
//             />
//             <div>
//               <h6 className="mb-1 fw-bold">Complete Puja Kit</h6>
//               <small className="text-muted">₹799 × 2</small>
//             </div>
//           </div>
//           <span className="badge bg-success fs-6">₹1598</span>
//         </div>

//         {/* Item 3 */}
//         <div className="d-flex align-items-center justify-content-between py-3">
//           <div className="d-flex align-items-center">
//             <img
//               src="./picture2.jpg"
//               alt="Modak"
//               style={{ width: '60px', height: '60px', objectFit: 'cover' }}
//               className="me-3 border rounded bg-white p-1"
//             />
//             <div>
//               <h6 className="mb-1 fw-bold">Sweet Modaks (12 pcs)</h6>
//               <small className="text-muted">₹299 × 1</small>
//             </div>
//           </div>
//           <span className="badge bg-success fs-6">₹299</span>
//         </div> */}
