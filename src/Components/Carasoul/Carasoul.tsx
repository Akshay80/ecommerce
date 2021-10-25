import React from "react";
import './carasoul.css';

export const Carasoul:React.FC = () => {
    return (
        <div className="container-fluid p-0">
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://d-themes.com/wordpress/riode/beauty/wp-content/uploads/sites/82/2021/01/slide-1.jpg" className="d-block w-100" style={{objectFit: "cover"}} alt="..." />
      
      <div>
          <h4 className="bannerItem">
          New Arrival 
          </h4>
     </div>
          <div>
            <h2 className="bannerItems">
                Organic Cosmetics <br/>That Provide<br/>Youth and Beauty
                </h2>
          </div>
          <div className="shopBtn">
          <button type="button" className="btn btn-dark fw-bold">Shop Now &#8594;</button>
          </div>

    </div>
    <div className="carousel-item">
      <img src="https://d-themes.com/wordpress/riode/beauty/wp-content/uploads/sites/82/2021/01/slide-2.jpg" className="d-block w-100" alt="..." />
    
      <div>
          <h4 className="bannerRightItem">
          Best Seller 
          </h4>
     </div>
          <div>
            <h2 className="bannerRightItems">
                The Best Cosmetics<br/>for Your Hair and Skin
                </h2>
          </div>
          <div className="shopRightBtn">
          <button type="button" className="btn btn-dark fw-bold">Shop Now &#8594;</button>
          </div>
    
    
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
    )
}