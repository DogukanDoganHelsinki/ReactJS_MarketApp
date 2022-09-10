import React from "react";

function MenuItems({
  selectedMenu,
  setSelectedMenu,
  handleSelectedMenu,
  id,
  price,
  foodName,
  img,
}) {
  const menuItem = selectedMenu.find((item) => item.foodName === id);

  const addMenu = () => {
    const checkMenuArray = selectedMenu.find((item) => item.foodName === id);

    if (checkMenuArray) {
      checkMenuArray.amount += 1;

      setSelectedMenu([
        ...selectedMenu.filter((item) => item.foodName !== id),
        checkMenuArray,
      ]);
    } else {
      setSelectedMenu([
        ...selectedMenu,
        {
          amount: 1,
          foodName: foodName,
          price: price,
        },
      ]);
    }
  };

  const removeMenu = () => {
    const currentSelectedMenu = selectedMenu.find(
      (item) => item.foodName === id
    );
    const selectedMenuWithoutCurrent = selectedMenu.filter(
      (item) => item.foodName !== id
    );
    currentSelectedMenu.amount -= 1;
    if (currentSelectedMenu.amount === 0) {
      setSelectedMenu([...selectedMenuWithoutCurrent]);
    } else {
      setSelectedMenu([...selectedMenuWithoutCurrent, currentSelectedMenu]);
    }
  };

  return (
    <div className="menuitems">
      <div>
        <img className="menuitems--img" src={img} alt="burger" />
        <p className="menuitems--foodname">{foodName}</p>
        <p className="menuitems--price">${price}</p>
        <div className="menuitems--btn--div">
          <button
            disabled={!menuItem}
            className="menuitems--btn--decrement"
            onClick={removeMenu}
          >
            Remove
          </button>
          <span className="menuitems--amount">
            {(menuItem && menuItem.amount) || 0}
          </span>
          <button className="menuitems--btn-increment" onClick={addMenu}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuItems;
