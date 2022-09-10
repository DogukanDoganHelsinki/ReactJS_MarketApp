import Restaurants from "./Restaurants";
import datas from "../food.json";
import MenuItems from "./MenuItems";
import { useState, useEffect } from "react";

function Main() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState([]);
  const [total, setTotal] = useState(0);

  const handleSelectedRestaurant = (id) => {
    const choosenRestaurantVal = datas.find((data) => data.id === id);

    setSelectedRestaurant(choosenRestaurantVal);
  };

  useEffect(() => {
    setTotal(
      selectedMenu?.reduce((acc, item) => {
        return (
          acc +
          item.amount *
            selectedMenu.find((selectedMenu) => selectedMenu.id === item.id)
              .price
        );
      }, 0)
    );
  }, [selectedMenu]);

  return (
    <div className="main--container--div">
      <h3 className="main--question">Choose your restaurant</h3>
      <div className="main--restaurants">
        {datas.map((data) => (
          <Restaurants
            key={data.id}
            id={data.id}
            restaurantName={data.restaurant}
            restaurantImg={data.img}
            handleSelectedRestaurant={handleSelectedRestaurant}
            selectedRestaurant={selectedRestaurant}
          />
        ))}
      </div>

      <div className="main--menuitems">
        {selectedRestaurant !== null && (
          <h3 className="main--question">Choose your main dish</h3>
        )}
        <div className="main--menuitems--sub">
          {selectedRestaurant !== null &&
            selectedRestaurant?.foodItems.map((item) => (
              <MenuItems
                key={item.foodName}
                id={item.foodName}
                foodName={item.foodName}
                price={item.price}
                img={item.img}
                selectedMenu={selectedMenu}
                setSelectedMenu={setSelectedMenu}
              />
            ))}
        </div>
        <hr className="new5"></hr>
        <div className="total--div">
          {selectedMenu.length !== 0 && (
            <>
              <p className="total--p1">Total Amount of Your Basket</p>
              <i className="fa">&#xf291;</i>
              <span className="total--p2">${total}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Main;
