import React, { useState } from "react";
// import Button from "../Button";
import './products.css';
import { useEffect } from "react";

export interface Rating{
rate: number,
count: number
}
export interface Products {
  id: number
  price: number
  description: string
  image: string
  category?: string
  title?: string
  rating?: Rating
  amount?: number
}

interface Props {
    category:string
}


export const ProductList: React.FC<Props> = ({category}) => {
    const [product, setProduct] = useState<Products[]>([]);
    
    function getProducts() {
        let url:string
        if(category){
            url = `https://fakestoreapi.com/products/category/${category}`
        }
        else {
            url = "https://fakestoreapi.com/products"
        }
        fetch(url)
            .then(res => res.json())
            .then(res => {
                setProduct(res)
            })
    }

    useEffect(() => {
        getProducts();
    }, [category])

    

    return (
        <>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12">
                        <h2 className="mt-4 mb-4 text-center">Our Products</h2>
                    </div>
                    {product.map(items =>
                        <div className="col-md-6 col-lg-4">
                            <div className="card-box" style={{height:"700px"}}>
                                <div className="card-thumbnail">
                                    <img src={items.image} className="img-fluid" alt="" />
                                </div>
                                <h3><a href="javascript:void(0)" className="mt-2 text-danger">{items.title}</a></h3>
                                <p className="text-secondary">{items.description.slice(0, 400)}</p>
                                <p className="text-secondary fw-bold">${items.price}</p>
                                <a href="#" className="btn btn-sm btn-danger float-right">Read more &#8594;</a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};
