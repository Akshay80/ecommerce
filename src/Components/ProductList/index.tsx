import React, { useState } from "react";
import "./products.css";
import { useEffect } from "react";

interface Ratings {
  rate: number;
  count: number;
}
export interface Rating {
  rate: number;
  count: number;
}

export interface Products {
  id: number;
  price: number;
  description: string;
  image: string;
  category?: string;
  title?: string;
  rating?: Rating;
  amount?: number;
}
interface CartProducts {
  id: string;
  price: number;
  description: string;
  image: string;
  category?: string;
  title?: string;
  rating?: Ratings;
}

interface Props {
  category: string;
}

export const ProductList: React.FC<Props> = ({ category }) => {
  const [product, setProduct] = useState<Products[]>([]);
  const [cartItem, setCart] = useState<CartProducts | undefined>(undefined);

  function getProducts() {
    let url: string;
    if (category) {
      url = `https://fakestoreapi.com/products/category/${category}`;
    } else {
      url = "https://fakestoreapi.com/products";
    }
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setProduct(res);
      });
  }

  useEffect(() => {
    getProducts();
  }, [category]);

  function getID(id: number) {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setCart(res);
      });
  }

  type NewType = React.MouseEvent<HTMLElement>;

  return (
    <>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12">
            <h2 className="mt-4 mb-4 text-center">Our Products</h2>
          </div>

          {product.map((items, index) => (
            <div className="col-md-6 col-lg-4">
              <div className="card-box">
                <div className="card-thumbnail">
                  <img src={items.image} className="img-fluid" alt="" />
                </div>
                <h3>
                  <a href="/" className="mt-2 text-success">
                    {items.title}
                  </a>
                </h3>
                <p className="text-secondary">{items.description}</p>
                <p className="text-secondary fw-bold">Price: ${items.price}</p>
                <div className="text-center">
                  <a
                    href="/"
                    className="btn btn-sm btn-success text-center border-none me-3"
                  >
                    Add to Cart <i className="fa fa-shopping-cart"></i>
                  </a>

                  <button
                    className="btn btn-sm btn-primary text-center"
                    data-bs-toggle="modal"
                    data-bs-target="#mymodal"
                    onClick={(event: NewType) => {
                      getID(items.id);
                    }}
                  >
                    Quick View <i className="fa fa-eye"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="modal fade"
        id="mymodal"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <img
                src={cartItem?.image}
                alt="cart_item"
                width="150px"
                height="150px"
              />
              <br />
              {cartItem?.title}
              <br />
              {cartItem?.price}
              <br />
              {cartItem?.description}
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
