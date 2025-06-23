import React from 'react';

const OrderStatus = () => {
  const order = {
    orderId: 'ORD123456',
    date: 'June 23, 2025',
    status: 'Shipped',
    steps: ['Confirmed', 'Packed', 'Shipped', 'Out for Delivery', 'Delivered'],
    currentStep: 2,
    product: {
      title: 'Eco-Friendly Ganesh Idol',
      price: 499,
      quantity: 1,
      image: './picture1.jpg',
    },
  };

  return (
    <div className="container my-5">
      <h2 className="text-center text-danger fw-bold mb-4">🕉️ Order Status</h2>

      <div className="card shadow-sm border-0 rounded-4 p-4">
        {/* Order Info */}
        <div className="mb-4">
          <h5 className="text-primary fw-bold">Order ID: {order.orderId}</h5>
          <p className="text-muted mb-0">Order Date: {order.date}</p>
          <p className="text-muted">Status: <span className="text-success fw-semibold">{order.status}</span></p>
        </div>

        {/* Product */}
        <div className="d-flex align-items-center mb-4">
          <img
            src={order.product.image}
            alt={order.product.title}
            style={{ width: '100px', height: '100px', objectFit: 'contain' }}
            className="me-4 border rounded-3 p-2 bg-light"
          />
          <div>
            <h6 className="mb-1 text-dark">{order.product.title}</h6>
            <p className="mb-0 text-muted">Price: ₹{order.product.price}</p>
            <p className="mb-0 text-muted">Qty: {order.product.quantity}</p>
          </div>
        </div>

        {/* Order Progress Steps */}
        <div className="mb-3">
          <h6 className="text-secondary fw-bold mb-3">Tracking Progress:</h6>
          <div className="d-flex flex-wrap">
            {order.steps.map((step, index) => (
              <div
                key={index}
                className={`text-center flex-fill position-relative ${
                  index <= order.currentStep ? 'text-success fw-bold' : 'text-muted'
                }`}
              >
                <div className="mb-1">
                  <span
                    className={`badge rounded-pill ${
                      index <= order.currentStep ? 'bg-success' : 'bg-secondary'
                    }`}
                  >
                    {index + 1}
                  </span>
                </div>
                <small>{step}</small>
                {index !== order.steps.length - 1 && (
                  <div
                    className={`position-absolute top-50 start-50 translate-middle-y w-100 border-bottom ${
                      index < order.currentStep ? 'border-success' : 'border-secondary'
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-4">
          <button className="btn btn-outline-danger">🧾 View Invoice</button>
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;
