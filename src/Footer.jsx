import React from 'react';



export const Footer = () => {
    return (
        <div className="container-fluid  bg-light mt-6">
            <div className="row mt-6">
                <div className="col-md-3 col-lg-4 d-none d-md-block text-right mr-6">
                    <img src="http://localhost:3000/photo/iphone-newsletter-en.png" alt=""/>
                </div>
                <div className="col-md-9 col-lg-8 text-left ">
                   <h1>Be parts of us!</h1>
                   <span>Subscribe to our exclusive newsletter and benefit from individual offers, the latest fashion news and styling tips. Join the NEW YORKER crew now!</span>
                    <div className="row">
                        <div className="col-10">
                            <div className="row">
                                <div className="col-8">
                                    <input type="email" className="form-control" placeholder="Your e-mail address"/>
                                </div>
                                <div className="col-4">
                                    <button type="button" className="btn btn-secondary">SUBSCRIBE</button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                           
                        </div>
                    </div>
                </div>

            </div>
            
        </div>

    );
  };