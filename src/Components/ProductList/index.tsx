import React, { useState } from "react";
import * as ProductPage from "./productstyled";
import cardImage from "../../assets/Images/product.jpg";
// import Button from "../Button";
import './products.css';
import { useEffect } from "react";

interface Rating{
rate: number,
count: number
}
interface Products {
  id: string
  price: number
  description: string
  image: string
  category?: string
  title?: string
  rating?: Rating
}

export const ProductList: React.FC = () => {
  const [product, setProduct] = useState<Products[]>([]);

function getProducts() {
   fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(res => {
          // return res as Products[]
          console.log(res);
          
          setProduct(res)
  })
}

useEffect(() => {
  getProducts();
},[])

console.log("Products: ", product);

  return (
      <>
    <div className="container mb-5">
    <div className="row">
        <div className="col-12">
            <h2 className="mt-4 mb-4 text-center">Our Products</h2>
        </div>

        {product.map( items => 
 <div className="col-md-6 col-lg-4">
       
 <div className="card-box">
     <div className="card-thumbnail">
         <img src={items.image} className="img-fluid" alt=""/>
     </div>
     <h3><a href="javascript:void(0)" className="mt-2 text-danger">{items.title}</a></h3>
     <p className="text-secondary">{items.description}</p>
     <p className="text-secondary fw-bold">${items.price}</p>
     <a href="#" className="btn btn-sm btn-danger float-right">Read more &#8594;</a>
 </div>
</div>
        )}
       

        {/* <div className="col-md-6 col-lg-4">
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
        </div> */}
    </div>
</div>








    </>
  );
};
