import React from "react";

const GaneshProductCard = ({ product }) => {
  const { image, title, price, description } = product;

  return (
    <div className="col-md-3 col-sm-6 mb-4">
      <div className="card h-100 w-100 shadow-sm rounded-4 border-warning">
        <img
          src={image}
          className="card-img-top rounded-4"
          alt={title}
          style={{height: "230px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title text-center text-danger fw-bold">{title}</h5>
          <p className="card-text text-muted small text-center">{description}</p>
          <h6 className="text-center text-success mb-3">₹{price}</h6>
          <div className="d-flex justify-content-center">
            <button className="btn btn-outline-primary btn-sm px-4">
              🛒 Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GaneshProductCard;
