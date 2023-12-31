import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
      const { resData } = props;

      const { 
            cloudinaryImageId,
            name,
            cuisines,
            avgRating,
            maxDeliveryTime,
            costForTwo
      
      } = resData?.data;

      return (
            <div className="res-card">
                  <img
                        className="res-logo"
                        alt="res-logo"
                        src={CDN_URL + cloudinaryImageId}
                  />
                  <h3>{name}</h3>
                  <h4>{cuisines.join(", ")}</h4>
                  <h4>Rating - {avgRating} ⭐</h4>
                  <h4>Delivery Time - {maxDeliveryTime} min</h4>
                  <h4>₹{costForTwo / 100} FOR TWO</h4>
            </div>
      )
}

export default RestaurantCard;