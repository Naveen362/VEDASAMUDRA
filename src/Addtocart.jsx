import React from 'react';

const CartItemsDemo = () => {
  return (
    <div className="container my-5">
      <h3 className="text-center text-danger fw-bold mb-4">🛒 Your Cart</h3>

      <div className="card p-4 shadow-sm rounded-4 bg-light">

        {/* Item 1 */}
        <div className="d-flex align-items-center justify-content-between border-bottom py-3">
          <div className="d-flex align-items-center">
            <img
              src="./picture1.jpg"
              alt="Ganesh Idol"
              style={{ width: '60px', height: '60px', objectFit: 'cover' }}
              className="me-3 border rounded bg-white p-1"
            />
            <div>
              <h6 className="mb-1 fw-bold">Eco-Friendly Ganesh Idol</h6>
              <small className="text-muted">₹499 × 1</small>
            </div>
          </div>
          <span className="badge bg-success fs-6">₹499</span>
        </div>

        {/* Item 2 */}
        <div className="d-flex align-items-center justify-content-between border-bottom py-3">
          <div className="d-flex align-items-center">
            <img
              src="./picture3.jpg"
              alt="Puja Kit"
              style={{ width: '60px', height: '60px', objectFit: 'cover' }}
              className="me-3 border rounded bg-white p-1"
            />
            <div>
              <h6 className="mb-1 fw-bold">Complete Puja Kit</h6>
              <small className="text-muted">₹799 × 2</small>
            </div>
          </div>
          <span className="badge bg-success fs-6">₹1598</span>
        </div>

        {/* Item 3 */}
        <div className="d-flex align-items-center justify-content-between py-3">
          <div className="d-flex align-items-center">
            <img
              src="./picture2.jpg"
              alt="Modak"
              style={{ width: '60px', height: '60px', objectFit: 'cover' }}
              className="me-3 border rounded bg-white p-1"
            />
            <div>
              <h6 className="mb-1 fw-bold">Sweet Modaks (12 pcs)</h6>
              <small className="text-muted">₹299 × 1</small>
            </div>
          </div>
          <span className="badge bg-success fs-6">₹299</span>
        </div>

        {/* Total */}
        <hr />
        <div className="text-end">
          <h5 className="text-primary">Total: ₹2396</h5>
        </div>
      </div>
    </div>
  );
};

export default CartItemsDemo;
