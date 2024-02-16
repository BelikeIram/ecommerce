import React from 'react'
import {TShirts, Top, Model, Sweater, Clothes} from '../../assets/index'

const HeroComp = () => {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
    <div className="carousel-item active">
    <img src={Clothes} className="object-fit-cover d-block w-100" alt="swaters" style={{height : "80vh"}}/>
  </div>
    <div className="carousel-item">
      <img src={TShirts} className="object-fit-cover d-block w-100" alt="t-shirt" style={{height : "80vh"}}/>
    </div>
    <div className="carousel-item">
      <img src={Top} className="object-fit-cover d-block w-100" alt="top" style={{height : "80vh"}}/>
    </div>
    <div className="carousel-item">
      <img src={Model} className="object-fit-cover d-block w-100" alt="model" style={{height : "80vh"}}/>
    </div>
  </div>
</div>
  )
}

export default HeroComp