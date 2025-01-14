import React, { useContext } from 'react';
import { FaRegStar, FaStar } from "react-icons/fa";
import { IoIosRemove, IoMdAdd } from "react-icons/io";
import { StoreContext } from '../../context/StoreContext';
import "./FoodItem.css";

function FoodItem({id,name,price,description,image,rating}) {

  const{cartItems,addToCart,removeFromCart} = useContext(StoreContext);

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i}>
          {i <= rating ? <FaStar className="filled-star" /> : <FaRegStar className="empty-star" />}
        </span>
      );
    }
    return stars;
  };

  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img src={image} alt="food-item" className='food-item-image' />
        
        {!cartItems[id]
        ?<IoMdAdd className='add' onClick={()=>addToCart(id)}/>
        :<div className='food-item-counter'>
          <IoIosRemove onClick={()=>removeFromCart(id)}/>
          <p>{cartItems[id]}</p>
          <IoMdAdd onClick={()=>addToCart(id)}/>
        </div>
          
        }
      
      </div>
      <div className='food-item-info'>
        <div className="food-item-name-rating">
            <p>{name}</p>
            <div className="food-item-stars">{renderStars()}</div>
        </div>
            <p className="food-item-desc">{description}</p>
            <p className='food-item-price'>${price}</p>
      </div>
    </div>
  )
}

export default FoodItem
