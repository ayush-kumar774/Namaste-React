import restaurantList from "../utils/restraurantList";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
      return (
            <div className="body">
                  <div className="Search">Search</div>
                  <div className="res-container">
                        {
                              restaurantList.map(restaurant => 
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