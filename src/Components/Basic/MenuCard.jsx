import React from "react";

const MenuCard=( {menuData})=>{
    console.log(menuData);
    return(
        <>
      { menuData.map((curElement)=>{
        const {id,name,category,description,price,image}=curElement;
            return( 
                <> 
                <div className="card-container" key={id}>
    <div className="card">
        <div className="card-body">
            <span className="card-number card-circle subtle">
                {id}
            </span>
             <span className="card-author subtle">{category}</span>
             <h2 className="card-title"> {name}</h2>
             <span className="subtle card-description"> {description}</span>
              <div className="card-read"> {price}</div>
              
        </div>
        <img src={image}
        alt="images"  className="card-media"/>
        <span className="subtle card-tag">Order Now</span>
                   </div>

 </div>
       </> );
    }  
     ) }  </>); }; 

export default MenuCard;