import React from 'react';
import {useState, useEffect} from 'react'
import { TriplePhoto } from './TriplePhoto'
import carouselFiles from './carouselFiles'


export const Carousel = () => {
  console.log("in carousel");
  const [files, setFiles] = useState([]);
  const [fileNumber, setFileNumber] = useState(0);
  
  useEffect (()=>{setFiles(carouselFiles); console.log("fetchData")}, [])
 
  useEffect (() => {console.log("in useEffect");
    const id = setTimeout(() => moovForward(), 3000);
    console.log("after useEffect");
    console.log("time: ", id.match);
    return () => clearTimeout(id);
    
  }, [fileNumber]);

  const fileRowsize = files.length - 1;

  const moovBack = () => { fileNumber === 0 ? setFileNumber(fileRowsize) : setFileNumber(fileNumber-1); }
  const moovForward = () => { fileNumber === fileRowsize ? setFileNumber(0) : setFileNumber(fileNumber+1); }
  
    return (
      <>
      {console.log(fileNumber)}
        <div className="card border-0 text-white">
          <TriplePhoto file={files[fileNumber]}/>
          <div className="card-img-overlay d-flex align-items-center d-flex justify-content-between">
            <div>
              <h1><span className="carousel-control-prev-icon" onClick={() => moovBack()}></span></h1>
              </div>
            <div>
            <h1><span className="carousel-control-next-icon" onClick={() => moovForward()}></span></h1>
            </div>
          </div> 
        </div>
      </>
    );
  };