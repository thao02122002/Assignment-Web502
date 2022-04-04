import React from 'react'
// import 'react-slideshow-image/dist/styles.css'
// import { Slide } from "react-slideshow-image"
// import { Zoom } from 'react-slideshow-image'
// import { Zoom } from 'react-slideshow-image'

type Props = {}

const Banner = (props: Props) => {
  return (
    // <div className='py-4 px-4'>
    //   <img src='https://theme.hstatic.net/200000066044/1000820067/14/slider_1.jpg?v=98' width='100%'/>


    // </div>


    <div id="carouselExampleControls" className="carousel slide py-4 px-4" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://theme.hstatic.net/200000066044/1000820067/14/slider_1.jpg?v=98" className="d-block w-100" />
        </div>
        <div className="carousel-item">
          <img src="https://theme.hstatic.net/200000066044/1000820067/14/slider_2.jpg?v=100" className="d-block w-100"  />
        </div>
        <div className="carousel-item">
          <img src="https://theme.hstatic.net/200000066044/1000820067/14/slider_3.jpg?v=100" className="d-block w-100"  />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>

  )
}

export default Banner