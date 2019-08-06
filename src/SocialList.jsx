import React from 'react';

export const SocialList = () => {

    return (
        <div className="d-flex justify-content-center align-items-center mt-1">
            <div className="d-none d-lg-block">
                {
                    [   
                        "facebook-icon.png",
                        "instagram-icon.png",
                        "pinterest-icon.png",
                        "twitter-icon.png",
                        "youtube-icon.png"
                    ].map(file => (
                        <a href="https://www.instagram.com/newyorkeronline/" key={file}>
                            <img src={"http://localhost:3000/photo/social/ikons/" + file} alt="" className="img-fluid"/>
                        </a>))
                }
                
            </div>
        </div>

    );
  };