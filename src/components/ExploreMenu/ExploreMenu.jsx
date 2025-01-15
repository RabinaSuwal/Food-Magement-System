import React from 'react'
import { menu_list } from '../../assets/assets'
import "./ExploreMenu.css"

function ExploreMenu({category, setCategory}) {
  return (
    <div className='container'>
        <div className='explore-menu' id='explore-menu'>
        <h1>Explore our Menu</h1>
        <p className='explore-menu-text'>Choose from a diverse menu</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                        <img src={item.menu_image} alt="menu-list"
                            style={{height:'100px', width:'100px', borderRadius:"50%"}}
                            className={category===item.menu_name?"active":""}
                        />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr/>
    </div>
    </div>
  )
}

export default ExploreMenu
