import React from 'react';
import { Link } from "react-router-dom";


export const BrandList = () => {
    return (
        <div className="brandlist d-flex justify-content-center align-items-center mt-1">
            <div className="d-none d-lg-block">
                <Link to="" className="col-1 text-white">AMISU</Link>
                <Link to="" className="col-1 text-white">FBSister</Link>
                <Link to="" className="col-1 text-white">Censored</Link>
                <Link to="" className="col-1 text-white">SMOG</Link>
                <Link to="" className="col-1 text-white">FMBN</Link>
            </div>
        </div>

    );
  };