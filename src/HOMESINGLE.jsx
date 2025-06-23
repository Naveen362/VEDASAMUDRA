import React from 'react'
import { Link } from 'react-router-dom'
import picture1 from "./assets/picture1.jpg";
import picture2 from "./assets/picture2.jpeg";
import picture3 from "./assets/picture3.jpeg";
import picture4 from "./assets/picture5.jpeg";
import picture5 from "./assets/pic.jpg";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useOutletContext } from "react-router-dom";
import Footer from './Footer';
import GaneshStore from './products/Products';
const pictures = ["./picture4.webp","./picture3.jpg","./picture1.jpg","./picture2.jpg"];

const HOMESINGLE = () => {
  // const { user } = useOutletContext();
  return (
    <div>
      
      {/* <div className="bg-light m-5 text-center p-5 rounded-5 shadow mt-5">
        <h1 className="display-4 fw-bold">Find Your Great Things</h1>
        <p className="lead text-muted">
          Search products for sale and rent across India 
          <i className="bi-geo-alt-fill ms-1" />
          with <h1><b><i>VEDA SAMUDRA🕉️</i></b></h1>
        </p>
        <Link to="/agents">
          <button className="btn btn-primary px-4 py-2 mt-3">
            🧺Explore Listings
          </button>
        </Link>
      </div> */}

      <div className="container my-5">
        <div className="row align-items-center">
          {/* Images Section */}
          <div className="col-12 col-lg-6 mb-4 mb-lg-0">
            <div
              className="d-flex gap-3 overflow-auto border rounded-5 shadow"
              style={{
                whiteSpace: 'nowrap',
                width: "100%",
                height: "650px",
                scrollSnapType: 'x mandatory',
              }}
            >
              <style>
                {`
                  div::-webkit-scrollbar {
                    display: none;
                  }
                `}
              </style>
              {pictures.map((pict, ind) => (
                <img
                  key={ind}
                  src={pict}
                  className="img-fluid rounded"
                  style={{
                    height: '650px',
                    objectFit: 'cover',
                    minWidth: '360px',
                  }}
                />
              ))}
            </div>
          </div>

          {/* About Section */}
          {/* About Section */}
<div className="col-12 col-lg-6">
  <div className="p-4 rounded-4 bg-warning bg-opacity-10 shadow-sm">
    <h2 className="text-center mb-4 fw-bold text-danger">
      <i className="bi bi-flower1 me-2" /> About Veda Samudra Services
    </h2>
    <p className="text-muted text-center mb-4">
      Welcome to our divine portal dedicated to Lord Ganesha — the remover of obstacles and the harbinger of good fortune. 
      We offer all puja samagri and spiritual guidance to help devotees connect with Bappa.
    </p>

    <ul className="list-group rounded-4">
      {[
        { icon: '🕉️', title: 'Daily Ganesh Aarti', desc: 'Join our live or recorded aartis every morning and evening.' },
        { icon: '🪔', title: 'Puja Essentials', desc: 'Get authentic puja items including modaks, durva grass, and red flowers.' },
        { icon: '📿', title: 'Online Pooja Booking', desc: 'Book personalized Ganesha pujas and rituals performed by qualified priests.' },
        { icon: '🙏', title: 'Ganesh Chaturthi Specials', desc: 'Celebrate Ganesh Utsav with eco-friendly idols and guided ceremonies.' },
        { icon: '📜', title: 'Spiritual Learnings', desc: 'Read about Ganesha stories, mantras, and teachings from scriptures.' },
        { icon: '🛍️', title: 'Temple Store', desc: 'Shop blessed idols, malas, and spiritual merchandise.' },
        { icon: '📱', title: 'Devotee Connect App', desc: 'Stay connected with our mobile app — daily quotes, bhajans & reminders.' },
        { icon: '⏰', title: '24/7 Devotee Support', desc: 'Reach us anytime for puja-related queries and temple services.' },
      ].map((item, idx) => (
        <li
          key={idx}
          className={`list-group-item d-flex align-items-start ${
            idx % 2 === 0 ? 'bg-white' : 'bg-light'
          } border-0 border-bottom border-warning`}
        >
          <span className="me-3 fs-4">{item.icon}</span>
          <div>
            <strong className="text-dark">{item.title}:</strong>{' '}
            <span className="text-secondary">{item.desc}</span>
          </div>
        </li>
      ))}
    </ul>
  </div>
</div>

        </div>
      </div>

      {/* Why Choose Us Section */}
      {/* <div className="container mt-5">
        <h2 className="mb-4">Why Choose Us?</h2>
        <div className="row text-center">
          <div className="col-md-4 shadow rounded-4 p-4">
           📜
            <h5 className="mt-3">Verified Listings</h5>
            <p>All properties are verified to ensure 100% authenticity and quality.</p>
          </div>
          <div className="col-md-4 shadow rounded-4 p-4">
            <i className="bi-people-fill fs-1 text-primary"></i>
            <h5 className="mt-3">Expert Agents</h5>
            <p>Professional agents to help you find your dream home quickly.</p>
          </div>
          <div className="col-md-4 shadow rounded-4 p-4">
            <i className="bi-cash-coin fs-1 text-primary"></i>
            <h5 className="mt-3">Affordable Pricing</h5>
            <p>We offer properties that suit every budget and lifestyle.</p>
          </div>
        </div>
      </div> */}
      <GaneshStore/>
      <Footer/>
      
    </div>
  )
}

export default HOMESINGLE;
