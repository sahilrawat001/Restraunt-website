import React from 'react'

export const Navbar = ( {filterItem , menuList} ) => {
    return (
        <>
               <nav className="navbar">
        <div className="btn-groukp">
        {
            menuList.map( ( props)=>{
                return (
                    <button className="btn-group__item" 
                    onClick={()=> filterItem(props)  }> 
                    {props}
                     </button>

                )
            }  )
        }

           
         </div>
      </nav> 
        </>
    )
}
export default Navbar;
