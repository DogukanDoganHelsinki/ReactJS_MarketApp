import React from "react";
import cour from "../images/cour.jpg";
import award from "../images/award.png";

function Header() {
  return (
    <div className="container--header--div">
      <div className="header--div">
        <img className="header--img--award" src={award} alt="award" />

        <div className="header--mid--div">
          <h2 className="header--title1">Dodo's Restaurant</h2>

          <h4 className="header--title3">At your door in 30mins</h4>
        </div>

        <img className="header--img" src={cour} alt="Dr.Dogan" />
      </div>
      <div className="header--line">
        <hr className="new5"></hr>
      </div>
    </div>
  );
}

export default Header;
