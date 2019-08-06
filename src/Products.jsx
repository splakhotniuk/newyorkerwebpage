import React from 'react';
import { NavbarProducts } from './NavbarProducts'
import { Filters } from './Filters'
import { ProductCard } from './ProductCard'

export const Products = () => {
    const product = [
        {file: "11e3b879a9250ad6a2d2f567ce22ec78.png", price: "100грн"},
        {file: "11e3b879a9250ad6a2d2f567ce22ec78.png", price: "200грн"},
        {file: "11e3b879a9250ad6a2d2f567ce22ec78.png", price: "300грн"},
        {file: "11e3b879a9250ad6a2d2f567ce22ec78.png", price: "400грн"},
        {file: "11e3b879a9250ad6a2d2f567ce22ec78.png", price: "500грн"},
        {file: "11e3b879a9250ad6a2d2f567ce22ec78.png", price: "600грн"},
        {file: "11e3b879a9250ad6a2d2f567ce22ec78.png", price: "700грн"},
        {file: "11e3b879a9250ad6a2d2f567ce22ec78.png", price: "800грн"},
        {file: "11e3b879a9250ad6a2d2f567ce22ec78.png", price: "900грн"}
    ]

    return (
        <div className="page container-fluid">
            <NavbarProducts/>
            <div className="row">
                <div className="col-3">
                    <Filters/>
                </div> 
                <div className="col-9">
                    <div className="row">
                        {
                            product.map(product => <ProductCard file="11e3b879a9250ad6a2d2f567ce22ec78.png" price={product.price} key={product.price}/>)
                        }
                    </div>
                </div>           
            </div>
        </div>
    );
  };