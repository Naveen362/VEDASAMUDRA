import React from 'react';

const Footer = () => {
  return (
    <footer className="text-dark pt-5 pb-4 mt-5 border border-warning rounded-5 shadow" style={{backgroundColor:"#FFFDD0"}}>
      <div className="container">
        <div className="row">

          {/* About Us */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="text-warning">🪔 About Us</h5>
            <p className="small">
              Veda Samudra is your trusted source for eco-friendly Ganesh idols, puja kits, and festive essentials. We build spiritually themed, responsive websites using MERN stack.
            </p>
          </div>

          {/* Useful Links */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="text-warning">🔗 Useful Links</h5>
            <ul className="list-unstyled small">
              <li><a href="/" className="text-dark text-decoration-none">Home</a></li>
              <li><a href="/products" className="text-dark text-decoration-none">About</a></li>
              <li><a href="/" className="text-dark text-decoration-none">Products</a></li>
              <li><a href="/carts" className="text-dark text-decoration-none">Cart</a></li>
              <li><a href="/" className="text-dark text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="text-warning">📞 Contact Info</h5>
            <p className="small mb-1"><i className="fas fa-envelope me-2"></i> vedasamudraindia@gmail.com</p>
            {/* <p className="small mb-1"><i className="fas fa-phone me-2"></i> +91 **********</p> */}
            <p className="small"><i className="fas fa-map-marker-alt me-2"></i>Hyderabad, India</p>
          </div>

          {/* Contact Form */}
          <div className="col-md-3 col-sm-12 mb-4">
            <h5 className="text-warning">📬 Contact Us</h5>
            <form>
              <div className="mb-2">
                <input
                  type="email"
                  className="form-control form-control-md border-dark"
                  placeholder="Your Email"
                  required
                />
              </div>
               <div className="mb-2">
                <input
                  type="tel"
                  className="form-control form-control-md border-dark"
                  placeholder="Your Phone Number"
                  required
                />
              </div>
              <div className="mb-2">
                <textarea
                  className="form-control border-dark form-control-md"
                  placeholder="Your Message"
                  rows="3"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-sm btn-primary w-100">
                Send Message
              </button>
            </form>
          </div>

        </div>

        <hr className="border-secondary" />

        <div className="row">
          <div className="col text-center">
            <small className="text-muted">
              &copy; {new Date().getFullYear()} GaneshStore. All rights reserved.
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
