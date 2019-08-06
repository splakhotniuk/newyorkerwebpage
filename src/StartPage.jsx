import React from 'react';
import { Carousel } from './Carousel'
import { BrandList } from './BrandList'
import { TriplePhoto } from './TriplePhoto'
import { SinglePhoto } from './SinglePhoto';
import { SocialPanel } from './SocialPanel';
import { Footer } from './Footer';

export const StartPage = () => {
    return (
        <div className="page container-fluid border">
            <Carousel/>
            <BrandList/>
            <TriplePhoto file="3b3b3eae85499a70e9b34fb89dcebf02.jpg"/>
            <TriplePhoto file="0860b07884913a0e8ce3b3993e5bc717.jpg"/>
            <TriplePhoto file="e849bb08e6a39233f765fb26697aafb5.jpg"/>
            <TriplePhoto file="70ef4b009612375b1c16c7485c502681.jpg"/>
            <div className="row">
                {
                    [
                        "2b6d3860fe80aa2d793fc2282b33547f.jpg",
                        "7bccb8b8a3e22b8030badb40d6f4fb2a.jpg",
                        "513c85246e757159d23425e32bc304e1.jpg",
                        "d08d0f29f1879142acbbe61c61297424.jpg",
                        "e80d8e2c71a3d85dabe0b1df4457c123.jpg"
                    ].map(file => <SinglePhoto file={file} key={file}/>)
                }
            </div>
            <SocialPanel/>
            <Footer/>
        </div>
    );
  };