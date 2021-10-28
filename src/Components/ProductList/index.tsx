import React, { useState } from "react";
import "./products.css";
import { useEffect } from "react";
import Rate from "@material-ui/lab/Rating";
import CircularProgress from "@material-ui/core/CircularProgress";

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
  const [loading, setLoading] = useState(false);

  function getProducts() {
    let url: string;
    if (category) {
      url = `https://fakestoreapi.com/products/category/${category}`;
    } else {
      url = "https://fakestoreapi.com/products";
    }
    setLoading(true);
    setTimeout(() => {
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          setProduct(res);
        });
      setLoading(false);
    }, 1000);
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
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="card-box">
                <div className="card-thumbnail">
                  <img src={items.image} className="img-fluid" alt="" />
                </div>
                <h3>
                  <a href="/" className="mt-2 text-success">
                    {items.title}
                  </a>
                </h3>
                <p
                  className="text-secondary fw-bold mt-3"
                  style={{ fontSize: 24 }}
                >
                  ${items.price}
                </p>
                <div className="text-center">
                  <button className="btn btn-sm btn-success text-center outline-none me-3">
                    Add to Cart <i className="fa fa-shopping-cart"></i>
                  </button>

                  <button
                    className="btn btn-sm btn-primary text-center outline-none"
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
      <div className="text-center mb-5">
        {loading && <CircularProgress color="primary"></CircularProgress>}
      </div>

      <div
        className="modal fade"
        id="mymodal"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
                style={{
                  marginLeft: "auto",
                  border: "none",
                  backgroundColor: "transparent",
                  fontSize: 30,
                }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 text-center">
                    <img
                      src={cartItem?.image}
                      alt="cart_item"
                      width="200px"
                      height="200px"
                    />
                  </div>

                  <div className="col-md-6">
                    <div className="title">{cartItem?.title}</div>
                    <div className="category mt-2">
                      CATEGORIES: {cartItem?.category}
                    </div>
                    <div className="price mt-2">${cartItem?.price}</div>
                    <div className="d-inline-flex">
                      <Rate name="read-only" value={4} readOnly />{" "}
                      <span className="count mt-1">
                        ( {cartItem?.rating?.count} Reviews )
                      </span>
                    </div>

                    <div className="description mt-3">
                      {cartItem?.description}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer border-0">
              <button className="btn btn-sm btn-success text-center border-0 outline-none me-3">
                Add to Cart <i className="fa fa-shopping-cart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
