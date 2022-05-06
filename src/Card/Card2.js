import React from "react";
import "./Card2.css";
import thankyou from "../Media/thankyou.svg";

const Card2 = () => {
  return (
    <div className="bc1">
      <div className="card1 container-fluid" id="show">
        <div className="last">
          <img src={thankyou} alt="thankyou" />
        </div>
        <br />
        <div className="star1 text-center">
          <p>You selected 4 out of 5</p>
        </div>
        <div className="title1">
          <h2 className="par">Thank you!</h2>
        </div>
        <br />
        <div className="body1 col-xs-12 text-center">
          <p>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card2;
