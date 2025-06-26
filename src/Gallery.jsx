import React from 'react'
const images=["./picture1.jpg","./picture2.jpg","./picture3.jpg","./picture4.webp"]
const Gallery = () => {
    // <div className="col-md-3 col-sm-6 mb-4">
     // <div className="card h-100 w-100 shadow-sm rounded-4 border-warning"></div>
  return (
    <div className='mt-5 container p-5 bg-white border shadow-lg rounded-5' style={{backgroundColor:""}}><h1 className='mb-5 mt-3 text-danger'><i className="bi bi-flower1 me-2 " />Gallery</h1>
    <div className='d-flex flex-wrap gap-5 justify-content-evenly align-items-center'>
     {images.map((ele)=>{
        return <img  className='mb-4card shadow-sm rounded-4 border-danger' src={ele} width={"200px"} height={"200px"}/>
     })}
    </div>
    </div>

  )
}

export default Gallery