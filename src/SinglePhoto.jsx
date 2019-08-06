import React from 'react';
import { Link } from "react-router-dom";


export const SinglePhoto = (props) => {
    return (
        <div className="col-sm-6 col-lg-4 mt-2 pad1">
            <Link to="/swimwear/">
                <img src={`http://localhost:3000/photo/single/${props.file}`} alt="" className="img-fluid"/>
            </Link>
        </div>
    );
  };