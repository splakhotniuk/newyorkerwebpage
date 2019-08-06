import React from 'react';
import {useState, useEffect} from 'react'
import { TriplePhoto } from './TriplePhoto'


export const Carousel = () => {
  const files = ["e944266fc437014fa2964891d276b090.jpg", "e849bb08e6a39233f765fb26697aafb5.jpg", "0860b07884913a0e8ce3b3993e5bc717.jpg"]

  const [fileNumber, setFileNumber] = useState(0);

  useEffect (() => {
    setTimeout(() => { fileNumber !== 2? setFileNumber(fileNumber+1) : setFileNumber(0);
    }, 3000);
  });

    return (
      <div className="d-flex justify-content-center">
          <TriplePhoto file={files[fileNumber]}/>
      </div>

    );
  };