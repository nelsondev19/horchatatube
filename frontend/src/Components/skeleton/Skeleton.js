import React, { Fragment } from "react";
import Navegacion from "../Navegacion/Navegacion";
import "./index.css";
function Skeleton() {
  return (
    <Fragment>
      <Navegacion />
      <div className="grid-display">
        <div>
          <video autoPlay muted loop id="myVideo" />
        </div>
        <div>
          <h4>A continuación</h4>
          <div className="grid-cards-videos">
            <div>
              <video muted loop id="myVideo" />
            </div>
            <div>
              <h4 className="title-skeleton">skeleton</h4>
              <h4 className="description-skeleton">skeleton</h4>
            </div>
          </div>
          <div className="grid-cards-videos">
            <div>
              <video muted loop id="myVideo" />
            </div>
            <div>
              <h4 className="title-skeleton">skeleton</h4>
              <h4 className="description-skeleton">skeleton</h4>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Skeleton;
