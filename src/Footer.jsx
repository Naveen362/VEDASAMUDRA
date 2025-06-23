import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">

          {/* About */}
          <div className="col-md-4 col-sm-12 mb-4">
            <h5>About Us</h5>
            <p>
              We build responsive, scalable, and elegant websites using modern technologies like MERN Stack.
            </p>
          </div>

          {/* Useful Links */}
          <div className="col-md-4 col-sm-6 mb-4">
            <h5>Useful Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light">Home</a></li>
              <li><a href="/about" className="text-light">About</a></li>
              <li><a href="/services" className="text-light">Services</a></li>
              <li><a href="/contact" className="text-light">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 col-sm-6 mb-4">
            <h5>Contact</h5>
            <p><i className="mr-2 fas fa-envelope"></i> support@yourdomain.com</p>
            <p><i className="mr-2 fas fa-phone"></i> +91 98765 43210</p>
            <p><i className="mr-2 fas fa-map-marker-alt"></i> Machilipatnam, India</p>
          </div>

        </div>

        <hr className="border-light" />

        <div className="row">
          <div className="col text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
