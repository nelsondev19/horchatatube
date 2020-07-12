import React,{ Fragment } from "react";
import './index.css'
import ReproductorVideo from "../../Components/Reproductor/ReproductorVideo";
import CardsRight from "../../Components/Reproductor/CardsRight";
function ReproductorView() {
  return (
    <Fragment>
        <div className="grid-display">
        <ReproductorVideo/>
        <CardsRight/>
      </div>
    </Fragment>
  );
}

export default ReproductorView;