import React, { useState } from 'react';

const BulkOrders = () => {
  const [bulkOrders, setBulkOrders] = useState([
    {
      id: 'BULK001',
      name: 'Ganesh Chaturthi Kit - Mumbai',
      quantity: 50,
      status: 'Processing',
      date: 'June 20, 2025',
    },
    {
      id: 'BULK002',
      name: 'Clay Ganesha Idols - School Event',
      quantity: 100,
      status: 'Delivered',
      date: 'June 10, 2025',
    },
  ]);

  return (
    <div className="container my-5">
      <h2 className="text-center text-danger fw-bold mb-4">
        🙏 Bulk Order Services
      </h2>

      {/* Bulk Order Form */}
      <div className="card p-4 mb-5 shadow-sm rounded-4 bg-light">
        <h5 className="mb-3 fw-bold text-primary">Request a Bulk Order</h5>
        <form>
          <div className="row g-3">
            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="Your Name" required />
            </div>
            <div className="col-md-6">
              <input type="email" className="form-control" placeholder="Email Address" required />
            </div>
            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="Organization / Event Name" />
            </div>
            <div className="col-md-3">
              <input type="number" className="form-control" placeholder="Quantity" required />
            </div>
            <div className="col-md-3">
              <select className="form-control">
                <option>Choose Item</option>
                <option>Ganesh Idols</option>
                <option>Puja Kits</option>
                <option>Modaks</option>
                <option>Other Items</option>
              </select>
            </div>
            <div className="col-12">
              <textarea className="form-control" placeholder="Special Requirements (optional)" rows="3"></textarea>
            </div>
            <div className="col-12 text-end">
              <button type="submit" className="btn btn-warning px-4">📩 Submit Request</button>
            </div>
          </div>
        </form>
      </div>

      {/* Bulk Order List */}
      <div className="card shadow-sm rounded-4 p-4">
        <h5 className="mb-4 fw-bold text-primary">Your Bulk Orders</h5>
        <div className="table-responsive">
          <table className="table table-bordered align-middle text-center">
            <thead className="table-warning">
              <tr>
                <th>Order ID</th>
                <th>Order Name</th>
                <th>Quantity</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {bulkOrders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.name}</td>
                  <td>{order.quantity}</td>
                  <td>
                    <span
                      className={`badge ${
                        order.status === 'Delivered'
                          ? 'bg-success'
                          : order.status === 'Processing'
                          ? 'bg-info'
                          : 'bg-secondary'
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td>{order.date}</td>
                </tr>
              ))}
              {bulkOrders.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-muted">
                    No bulk orders placed yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BulkOrders;
