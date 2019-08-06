import React from 'react';



export const NavbarProducts = () => {
    return (
        <div className="page container-fluid border">
            <div className="row">
                <div className="col-sm-2 col-md-1">WEMAN</div>
                <div className="col-sm-2 col-md-1">MAN</div>
                <div className="d-none d-sm-block col-sm"></div>
                <div className="col-sm-1 ">
                    <img src="http://localhost:3000/photo/wishlist_heart_icon.svg" alt=""/>
                </div>
            </div>    
        </div>
    );
  };