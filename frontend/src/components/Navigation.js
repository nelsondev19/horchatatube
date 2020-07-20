import React from "react";
import horchataIcon from "../imagenes/horchata.png";

function Navigation() {
  return (
    <nav>
      <div>
        <img src={horchataIcon} alt="" height="50px" width="50px" />
      </div>
      <div>
        <h3 className="horchata-tube">HorchataTube</h3>
      </div>
    </nav>
  );
}

export default Navigation;
