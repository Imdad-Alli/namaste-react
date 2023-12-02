import ResturantCard from "./Restaurant";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState([]);


  useEffect(() => {
    //fetching data
    fetchData();
  }, []);



  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.952083&lng=77.7079919&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    setRestaurantList(
      json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredList(
      json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
    );
    // console.log(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
  };

//   if (restaurantList.length===0) {
//     return <Shimmer/>
// }
  
  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div id="body">
      <div id="filter">
        <div className="search-div">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //filter the restaurantList
              //searchText
              // console.log(searchText);
              const filteredRestaurantList = restaurantList.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredList(filteredRestaurantList);
            }}
          >
            search
          </button>
        </div>
        <button
          id="filter-btn"
          onClick={() => {
            //filter logic
            const filteredRestaurantList = restaurantList.filter(
              (restaurant) => {
                return restaurant.info.avgRating > 4;
              }
            );
            setRestaurantList(filteredRestaurantList);
          }}
        >
          Top-Rated-Restaurant
        </button>
      </div>
      <div id="restaurant-container">
        {filteredList.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              <ResturantCard resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
