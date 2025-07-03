import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useNavigate, useNavigation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import axios from 'axios';
import { useSelector } from 'react-redux';
const RealEstateNavbar = () => {
  const [user,setuser]=useState({});
  const naviagate=useNavigate();
  const navigation = useNavigation(); // Track navigation state
  // useEffect(()=>{
  //   const data=axios.get("https://realestatebackend-5fuh.onrender.com/api/auth/home",{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`||"notfound"}}).then((res)=>{
  //             setuser(res.data.userdetails);console.log(res.data);
  //             localStorage.setItem('user',JSON.stringify(res.data.userdetails)); 
  //   }).catch((err)=>{toast.error(err.message);naviagate("/login")})
  // },[])
  // const localdel=()=>{
  //   try{
  //     setTimeout(()=>
  //     confirmAlert({
  //       title: 'Conform to logout🏡',
  //       message: 'Are you sure want to logout?',
  //       buttons: [
  //         {
  //           label: 'Yes',
  //           onClick: () => {
  //             toast.success("Logout Done!");
  //             localStorage.removeItem('token');
  //             naviagate("/login");
              
  //           }
  //         },
  //         {
  //           label: 'No',
  //           onClick: () => {
  //             toast.info("Cancelled logout!");
  //           }
  //         }
  //       ]
  //     }),500)
    
  //   // toast.success('Logged Out successfully!')
  //   }
  //   catch (err){
  //     toast.error('Submission failed. Please try again.');
  //   }
  // }
  const {totalQuantity}=useSelector((state)=>state.cart)
  return (
    <div className='position-relative'>
      <nav className="navbar fixed-top navbar-expand-lg  px-4 py-3 shadow-lg" style={{ backgroundColor: '#FFFDD0',color:"black" }}>
        <NavLink to="/" style={{marginLeft:"20px"}} className="navbar-brand text-decoration-none">
          <img src={"./ganesh.jpg"} style={{objectFit:"fill",borderRadius:"20px 10px"}} width={180} height={60}/>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto list-unstyled d-flex gap-4 mb-0">
            {/* Navigation Links */}
            {/* <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link text-decoration-none ${isActive ? 'text-primary fw-bold' : 'text-light'}`
                }
              >
                Home
              </NavLink>
            </li> */}
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `nav-link text-decoration-none ${isActive ? 'text-primary fw-bold' : 'text-dark'}`
                }
              >
              Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/bulkorders"
                className={({ isActive }) =>
                  `nav-link text-decoration-none ${isActive ?'text-primary fw-bold' : 'text-dark'}`
                }
              >
               Bulk orders
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to="/orderstatus"
                className={({ isActive }) =>
                  `nav-link text-decoration-none ${isActive ? 'text-primary fw-bold' : 'text-light'}`
                }
              >
               Order status
              </NavLink>
            </li> */}
            
          </ul>
          
        </div>
       <NavLink className={({ isActive }) =>
                  `nav-link text-decoration-none ${isActive ? 'text-primary fw-bold' : 'text-dark'}`
                } to="/carts"> <div style={{position:"relative"}}><h4 style={{position:"absolute",top:"-15px",right:"-5px",width:"25px",height:"25px",backgroundColor:"blue",color:"white",borderRadius:"50%"}} className='text-center'>{totalQuantity}</h4><button style={{width:"fit-content",border:"2px solid white",borderRadius:"20%",marginLeft:"10px",fontSize:"25px"}}>🛒</button></div></NavLink>
          
      </nav>

      {/* Route Loading Spinner */}
      {navigation.state === "loading" ? (
        <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '80vh' }}>
          <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="text-center mt-3 text-muted">Loading content, please wait...</div>
        </div>
      ) : (
        <div className="shadow mt-5 pt-5 p-3">
              {/* <h1>Welcome, {user.name}😊</h1> */}
          {/* Render the child route's content */}
          <Outlet/>
        </div>
      )}
    </div>
  );
};

export default RealEstateNavbar;
