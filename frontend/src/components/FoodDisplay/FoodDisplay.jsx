import React, {useContext} from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {

    const {food_list,loading} = useContext(StoreContext)

  return (
    <div className = 'food-display' id = 'food-display'>
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
          {loading ? (
                      <div className="loader">Loading... Please select a food option to fetch backend - can take a minute for initial request</div> // Display loader when fetching data
                  ) : (
            food_list.map((item,index)=>{
              if (category==="All" || category===item.category){
                return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
              }
              })
            )}
        </div>
    </div>
  )
}

export default FoodDisplay
