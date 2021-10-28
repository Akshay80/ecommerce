import React, { useState } from "react";
import "./products.css";
import { useEffect } from "react";
import { useQuery } from 'react-query';
import { Grid } from "@material-ui/core";
import Item from "../../Pages/CartContainer/Item/Item";

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
  category: string;
  title: string;
  rating: Rating;
  amount: number;
}
export interface CartProducts {
  id: number;
  price: number;
  description: string;
  image: string;
  category: string;
  title: string;
  rating: Ratings;
  amount: number;
}

export interface Props {
  category: string;
  items?: Products;

}

export const ProductList: React.FC<Props> = ({ category}) => {
  const [product, setProduct] = useState<Products[]>([]);
  const [cartItem, setCart] = useState([] as CartProducts[]);

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


  const handleAddToCart = (clickedItem: Products) => {
    setCart(prev => {
      // 1. Is the item already added in the cart?
      const isItemInCart = prev.find(item => item.id === clickedItem.id);
      if (isItemInCart) {
        return prev.map(item =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      // First time the item is added
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  
  const handleRemoveFromCart = (id: number) => {
    setCart(prev =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as Products[])
    );
  };

  type NewType = React.MouseEvent<HTMLElement>;

  return (
    <>
    <Grid container spacing={3}>
        {product?.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
      {/* <div className="container mb-5">
        <div className="row">
          <div className="col-12">
            <h2 className="mt-4 mb-4 text-center">Our Products</h2>
          </div>

          {product.map((items) => (
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
                  <button
                    className="btn btn-sm btn-success text-center border-none me-3"
                    // onClick={() => handleAddToCart(items)} 
                    >
                    Add to Cart <i className="fa fa-shopping-cart"></i>
                  </button>

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
      </div> */}

      {/* <div
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
      </div> */}
    </>
  );
};
