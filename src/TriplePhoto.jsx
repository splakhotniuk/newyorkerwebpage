import React from 'react';
import { Link } from "react-router-dom";


export const TriplePhoto = (props) => {
    return (
        <div className="container-fluid d-flex justify-content-center mt-2">
            <div className="row">
                <div className="col-12">
                    <Link to="/swimwear/">
                        <img src={`http://localhost:3000/photo/${props.file}`} alt="" className="img-fluid"/>
                    </Link>
                </div>
            </div>
            
        </div>

    );
  };