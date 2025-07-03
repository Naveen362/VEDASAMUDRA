import React from 'react'
import { useDispatch } from 'react-redux';
import { removeFromCart } from './Redux/CartSlice';
import { toast } from 'react-toastify';
const SingleAddToCart = ({dat}) => {
    const {id,title,image,price,quantity}=dat;
    const a=price*quantity;
    const dispatch=useDispatch();
  return (
    <div className='border-bottom my-1'>
        <div className="d-flex align-items-center justify-content-between py-3">
          <div className="d-flex align-items-center">
            <img
              src={image}
              alt="Ganesh Idol"
              style={{ width: '60px', height: '60px', objectFit: 'cover' }}
              className="me-3 border rounded bg-white p-1"
            />
            <div>
              <h6 className="mb-1 fw-bold">{title}</h6>
              <small className="text-muted">₹{price} × {quantity ||1}</small>
            </div>
          </div>
          <span className="badge bg-success fs-6">₹{a}</span>
        </div>
           <div className="d-flex align-items-center">
          <button className='mx-auto btn btn-danger my-2 w-50' onClick={()=>{dispatch(removeFromCart(id));toast.error("Removed From 🛒Cart")}}>Remove from 🛒Cart</button>
</div>
    </div>
  )
}

export default SingleAddToCart