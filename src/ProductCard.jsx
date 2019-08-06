import React from 'react';
import { Link } from "react-router-dom";

export const ProductCard = (props) => {
    return (
        <div className="col-6 col-md-3 text-center mt-5">
            <div>
                <Link to="/product/id/"><img src={"http://localhost:3000/photo/" + props.file} alt=""/></Link>
            </div>
            <div>
                {props.price}
            </div>
        </div>
    );
  };