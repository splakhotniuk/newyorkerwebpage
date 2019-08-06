import React from 'react';
import { SocialList } from "./SocialList";


export const SocialPanel = () => {
    return (
        <div className="container-fluid">
            <div className="col-12 text-center mt-6">
                <a href="https://www.instagram.com/newyorkeronline/">
                    <h1>WHATS NEW  <img src="http://localhost:3000/photo/social/ikons/social_feed_insta.png" alt="" className="img-fluid"/></h1>
                </a>
            </div>
            <div className="row no-gutters">
                <div className="col">
                    <a href="https://www.instagram.com/newyorkeronline/">
                        <img src="http://localhost:3000/photo/social/photo/513c85246e757159d23425e32bc304e1.jpg" alt="" className="img-fluid"/>
                    </a>
                </div>
                <div className="col">
                    <a href="https://www.instagram.com/newyorkeronline/">
                       <img src="http://localhost:3000/photo/social/photo/513c85246e757159d23425e32bc304e1.jpg" alt="" className="img-fluid"/>
                    </a>
                </div>
                <div className="col d-none d-sm-block">
                    <a href="https://www.instagram.com/newyorkeronline/">
                        <img src="http://localhost:3000/photo/social/photo/513c85246e757159d23425e32bc304e1.jpg" alt="" className="img-fluid"/>
                    </a>
                </div>
                <div className="col d-none d-md-block">
                    <a href="https://www.instagram.com/newyorkeronline/">
                        <img src="http://localhost:3000/photo/social/photo/513c85246e757159d23425e32bc304e1.jpg" alt="" className="img-fluid"/>
                    </a>
                </div>
                <div className="col d-none d-lg-block">
                    <a href="https://www.instagram.com/newyorkeronline/">
                        <img src="http://localhost:3000/photo/social/photo/513c85246e757159d23425e32bc304e1.jpg" alt="" className="img-fluid"/>
                    </a>
                </div>
                <div className="col d-none d-xl-block">
                    <a href="https://www.instagram.com/newyorkeronline/">
                        <img src="http://localhost:3000/photo/social/photo/513c85246e757159d23425e32bc304e1.jpg" alt="" className="img-fluid"/>
                    </a>
                </div>
            </div>

            <SocialList/>
        </div>
    );
  };