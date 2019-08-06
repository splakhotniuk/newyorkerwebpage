import React from 'react';
import { Link } from "react-router-dom";


export const Header = () => {
    return (
      <div className="container-fluid fixed-top bg-white">
        <div className="row">
            <div className="col-2 text-left">
                <Link to="/" className="text-danger">NEwYorkeR</Link>
            </div>
            <div className="col-3">------</div>
            <div className="col-7 d-none d-lg-block">
                <div className="row">
                    <div className="col-2"><Link to="/products/">PRODUCTS</Link></div>
                    <div className="col-2"><Link to="/">LIFESTYLE</Link></div>
                    <div className="col-2"><Link to="/">STORES</Link></div>
                    <div className="col-2"><Link to="/">JOBS</Link></div>
                    <div className="col-2"><Link to="/">UA</Link></div>
                    <div className="col-2"><Link to="/">Login</Link></div>
                </div>
            </div>
        </div>
      </div>
    );
  };