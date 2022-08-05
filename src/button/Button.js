import React from 'react';
import './Button.css';

const Button = ({onClick, type, radius, children}) => {
    let typeClass;
    if(type === "success"){ typeClass="success" }
    else if(type === "info"){ typeClass="info" }
    else if(type === "danger"){ typeClass="danger" }
    else{ typeClass="default" }
 
    const btncls = [typeClass, radius];

    return (
    <div>
      <button 
      onClick={onClick} 
      className={btncls.join(" ")}
      >{ children }</button>
    </div>
  );
}

export default Button
