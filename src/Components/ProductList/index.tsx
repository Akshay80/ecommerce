import React from "react";
import * as ProductPage from "./productstyled";
import cardImage from "../../assets/Images/product.jpg";
// import Button from "../Button";
import './products.css';

export const ProductList: React.FC = () => {
  return (
      <>
      {/* First Row */}
    {/* <div className="container mt-5">
        <div className="row">
            <div className="col">
            <ProductPage.Wrapper >
      <div className="card" style={{ width: "18rem" }}>
        <ProductPage.Image src={cardImage}></ProductPage.Image>
        <div className="card-body">
          <h5 className="card-title">Price: $109</h5>
          <p className="card-text">Description: The Description </p>
          <Button
            text="click me"
            className="btn btn-primary productBtn"
          ></Button>
        </div>
      </div>
    </ProductPage.Wrapper>
            </div>


            <div className="col">
            <ProductPage.Wrapper >
      <div className="card" style={{ width: "18rem" }}>
        <ProductPage.Image src={cardImage}></ProductPage.Image>
        <div className="card-body">
          <h5 className="card-title">Price: $109</h5>
          <p className="card-text">Description: The Description </p>
          <Button
            text="click me"
            className="btn btn-primary productBtn"
          ></Button>
        </div>
      </div>
    </ProductPage.Wrapper>
            </div>



            <div className="col">
            <ProductPage.Wrapper >
      <div className="card" style={{ width: "18rem" }}>
        <ProductPage.Image src={cardImage}></ProductPage.Image>
        <div className="card-body">
          <h5 className="card-title">Price: $109</h5>
          <p className="card-text">Description: The Description </p>
          <Button
            text="click me"
            className="btn btn-primary productBtn"
          ></Button>
        </div>
      </div>
    </ProductPage.Wrapper>
            </div>
        </div>
    </div> */}
    <div className="container mb-5">
    <div className="row">
        <div className="col-12">
            <h2 className="mt-4 mb-4 text-center">Our Products</h2>
        </div>
        <div className="col-md-6 col-lg-4">
       
            <div className="card-box">
                <div className="card-thumbnail">
                    <img src={cardImage} className="img-fluid" alt=""/>
                </div>
                <h3><a href="#" className="mt-2 text-danger">Shoes</a></h3>
                <p className="text-secondary">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                <p className="text-secondary fw-bold">$26.00</p>
                <a href="#" className="btn btn-sm btn-danger float-right">Read more &#8594;</a>
            </div>
        </div>

        <div className="col-md-6 col-lg-4">
            <div className="card-box">
                <div className="card-thumbnail">
                    <img src={cardImage} className="img-fluid" alt=""/>
                </div>
                <h3><a href="#" className="mt-2 text-danger">Jeans</a></h3>
                <p className="text-secondary">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                <p className="text-secondary fw-bold">$281.17</p>
                <a href="#" className="btn btn-sm btn-danger float-right">Read more &#8594;</a>
            </div>
        </div>

        <div className="col-md-6 col-lg-4">
            <div className="card-box">
                <div className="card-thumbnail">
                    <img src={cardImage} className="img-fluid" alt=""/>
                </div>
                <h3><a href="#" className="mt-2 text-danger">T-shirts</a></h3>
                <p className="text-secondary">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                <p className="text-secondary fw-bold">$100.25</p>
                <a href="#" className="btn btn-sm btn-danger float-right">Read more &#8594;</a>
            </div>
        </div>

        <div className="col-md-6 col-lg-4">
            <div className="card-box">
                <div className="card-thumbnail">
                    <img src={cardImage} className="img-fluid" alt=""/>
                </div>
                <h3><a href="#" className="mt-2 text-danger">Electronics</a></h3>
                <p className="text-secondary">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                <p className="text-secondary fw-bold">$5.00</p>
                <a href="#" className="btn btn-sm btn-danger float-right">Read more &#8594;</a>
            </div>
        </div>

        <div className="col-md-6 col-lg-4">
       
            <div className="card-box">
                <div className="card-thumbnail">
                    <img src={cardImage} className="img-fluid" alt=""/>
                </div>
                <h3><a href="#" className="mt-2 text-danger">Accessories</a></h3>
                <p className="text-secondary">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                <p className="text-secondary fw-bold">$92.29</p>
                <a href="#" className="btn btn-sm btn-danger float-right">Read more &#8594;</a>
            </div>
        </div>

        <div className="col-md-6 col-lg-4">
        
            <div className="card-box">
                <div className="card-thumbnail">
                    <img src={cardImage} className="img-fluid" alt=""/>
                </div>
                <h3><a href="#" className="mt-2 text-danger">Glasses</a></h3>
                <p className="text-secondary">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                <p className="text-secondary fw-bold">$490.00</p>
                <a href="#" className="btn btn-sm btn-danger float-right">Read more &#8594;</a>
            </div>
        </div>
    </div>
</div>








    </>
  );
};
