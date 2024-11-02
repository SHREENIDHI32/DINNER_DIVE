import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/storeContext'; 
import Fooditem from '../Fooditem/Fooditem';

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);

    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes near you!</h2>
            <div className='food-display-list'>
                {food_list.map((item, index) => {
                    // Making category comparison case-insensitive
                    if (category === "All" || category.toLowerCase() === item.category.toLowerCase()) {
                        return (
                            <Fooditem
                                key={index}
                                id={item._id}
                                name={item.name}
                                description={item.description}
                                price={item.price}
                                image={item.image}
                            />
                        );
                    }
                    return null; // Ensure map returns a valid element
                })}
            </div>
        </div>
    );
};

export default FoodDisplay;
