import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {StartPage} from './StartPage.jsx'
import { Header } from './Header.jsx'
import { Products } from "./Products.jsx"
import { ProductDetails } from "./ProductDetails.jsx"

function App() {
  return (
    
    <div className="container-fluid">

      
      <Router>
        
        <Header/>
          <Route path="/" exact component={StartPage}/>
          <Route path="/products/" exact component={Products}/>
          <Route path="/product/id/" exact component={ProductDetails}/>
          
      </Router>
      
      </div>
  );
}

export default App;
