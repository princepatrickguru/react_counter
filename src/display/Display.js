import React from 'react'
import './Display.css';

const Display = ({type, count}) => {
    if(type==="p"){
       return(
        <div className="display">
            <p>
                <p>Counter</p>
                <p>{count}</p>
            </p>
        </div>
       );
    }
    if(type==="h1"){
       return(
        <div className="display">
            <h1>
                <p>Counter</p>
                <p>{count}</p>
            </h1>
        </div>
       );
    }
    if(type==="h2"){
       return(
        <div className="display">
            <h2>
                <p>Counter</p>
                <p>{count}</p>
            </h2>
        </div>
       );
    }
    if(type==="h3"){
       return(
        <div className="display">
            <h3>
                <p>Counter</p>
                <p>{count}</p>
            </h3>
        </div>
       );
    }
    if(type==="h4"){
       return(
        <div className="display">
            <h4>
                <p>Counter</p>
                <p>{count}</p>
            </h4>
        </div>
       );
    }
    if(type==="h5"){
       return(
        <div className="display">
            <h5>
                <p>Counter</p>
                <p>{count}</p>
            </h5>
        </div>
       );
    }
    if(type==="h6"){
       return(
        <div className="display">
            <h6>
                <p>Counter</p>
                <p>{count}</p>
            </h6>
        </div>
       );
    }

 return(
        <div className="display">
            <span>
                <p>Counter</p>
                <p>{count}</p>
            </span>
        </div>
       );
}

export default Display
