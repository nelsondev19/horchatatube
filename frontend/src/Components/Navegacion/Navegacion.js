import React from 'react';
import horchataLogo from "./horchata.png";
import "./navegacion.css";

function Navegacion() {
  return (
    <nav>
        <div>
          <img src={horchataLogo} alt="" srcSet height="50px" width="50px" />
        </div>
        <div>
          <h3 className="horchata-tube">HorchataTube</h3>
        </div>
      </nav>
  );
}

export default Navegacion;
