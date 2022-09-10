import React from "react";

function Restaurants({
  id,
  restaurantName,
  restaurantImg,
  handleSelectedRestaurant,
  selectedRestaurant,
}) {
  return (
    <div id="restaurants" className="restaurants--container--div">
      <td className="restaurants--td">
        <img
          className="restaurants--img"
          src={restaurantImg}
          alt=""
          onClick={() => handleSelectedRestaurant(id)}
        />
        <p
          className="restaurants--p"
          onClick={() => handleSelectedRestaurant(id)}
        >
          {restaurantName}
        </p>
      </td>
    </div>
  );
}

export default Restaurants;
