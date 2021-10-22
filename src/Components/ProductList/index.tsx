import React, { } from 'react'
import * as ProductPage from './productstyled'
import cardImage from '../../assets/Images/product.jpg'
import Button from '../Button'



export const ProductList: React.FC = () => {

    return (
        <ProductPage.Wrapper className="container-fluid">
            <div className="card" style={{ width: "18rem" }}>
                <ProductPage.Image src={cardImage}></ProductPage.Image>
                <div className="card-body">
                    <h5 className="card-title">Price</h5>
                    <p className="card-text">Description:</p>
                    <Button text="click me" className="btn btn-primary productBtn"></Button>
                </div>
            </div>
        </ProductPage.Wrapper>
    )
}