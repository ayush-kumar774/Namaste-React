import { useState } from "react";
import restaurantList from "../utils/restraurantList";
import RestaurantCard from "./RestaurantCard";

// React Variable (State Variable)

// Normal JS variable
// let listOfRestaruants = [];


// Normal JS Variable
let listOfRestrauntJS = [
      {
            type: "restaurant",
            data: {
                  type: "F",
                  id: "410476",
                  name: "The Brooklyn Creamery - Healthy Ice Cream",
                  cloudinaryImageId: "ldtibwymvzehvmdwl8la",
                  cuisines: ["Desserts", "Ice Cream", "Healthy Food"],
                  tags: [],
                  costForTwo: 20000,
                  costForTwoString: "₹200 FOR TWO",
                  deliveryTime: 31,
                  minDeliveryTime: 30,
                  maxDeliveryTime: 40,
                  avgRating: "4.3",
            }
      },
      {
            type: "restaurant",
            data: {
                  type: "F",
                  id: "81094",
                  name: "Richie Rich Juices & Shakes",
                  cloudinaryImageId: "nyp7yrzwc1dc2xqfkydk",
                  cuisines: ["Ice Cream"],
                  tags: [],
                  costForTwo: 25000,
                  deliveryTime: 30,
                  minDeliveryTime: 30,
                  maxDeliveryTime: 40,
                  avgRating: "4.4",
            }
      }
]

const Body = () => {
      // React Variable (State Variable)
      const [listOfRestraunt, setListOfRestraunt] = useState(restaurantList) ;


      return (
            <div className="body">
                  <div className="filter">
                        <button className="filter-btn" onClick={() => 
                              {
                                    filteredRestraunt = listOfRestraunt.filter(
                                          (res) => res.data.avgRating >= 4.0
                                    );
                                    setListOfRestraunt(filteredRestraunt);
                              }
                        }>
                              Top Rated 🔥
                        </button>
                  </div>
                  <div className="res-container">
                        {
                              listOfRestraunt.map(restaurant => 
                                    <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
                              )
                        }
                  </div>
            </div>
      )
}

const styleCard = {
      backgroundColor: "red",
};

export default Body;