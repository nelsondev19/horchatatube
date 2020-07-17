import React, { Fragment } from "react";

function CardsRight() {
  return (
    <Fragment>
      <div>
          <h4>A continuación</h4>
          <div className="grid-cards-videos" style={{backgroundColor: '#cae8f0', margin: '5px'}}>
            <div>
              <video muted loop id="myVideo">
                <source src="https://res.cloudinary.cnelsonweb/video/u373/video_sr49yw.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
            <div className="title-card-video">
              <h4>Energized</h4>
              <b>58,904 vistas</b>
            </div>
          </div>
        </div>
    </Fragment>
  );
}

export default CardsRight;
