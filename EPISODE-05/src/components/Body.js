import ResturantCard from "./Restaurant";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  let [restaurantList, setRestaurantList] = useState(resList);

  return (
    <div id="body">
        <div id="filter">
            <button id="filter-btn" onClick={()=>{
                //filter logic
                const filteredRestaurantList = restaurantList.filter((restaurant)=>{
                    return restaurant.info.avgRating>4;
                })
                setRestaurantList(filteredRestaurantList)
            }}>Top-Rated-Restaurant</button>
        </div>
      <div id="restaurant-container">
        {restaurantList.map((restaurant) => {
          return <ResturantCard key={restaurant.info.id} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};
export default Body;