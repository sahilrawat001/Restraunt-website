import React ,{useState} from "react";
import "./Style.css";
import MenuCard from "./MenuCard";
import Menu from "./MenuApi.jsx";
import Navbar from "./Navbar";


 const uniqueList =[ ...new Set(
 Menu.map( (curElement)=>{
   return curElement.category;
 }  )
 ),"All",

];


const Restraunt =()=>{
    const [menuData, setMenuData] =useState(Menu);
    const [menuList, setMenuList] =useState(uniqueList);
    const filterItem=(category)=>{

      if(category==="All")
      {
        setMenuData(Menu);
        return ;
      }
      const updatedList = Menu.filter((curElement)=>{
        return curElement.category===category;
      }    );
      setMenuData(updatedList);
    };
    return (
        <>
       <Navbar filterItem={filterItem } menuList={menuList} />
 
      <MenuCard menuData={menuData} /> 

     
        </>
    );
};
export default Restraunt;