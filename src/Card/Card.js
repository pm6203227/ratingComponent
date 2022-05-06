import React from "react";
import "./Card.css";
import star from "../Media/star.svg";
import Card2 from "./Card2";

const Card = () => {
  return (
    <div className="bc container-fluid">
      <div className="card container-fluid" id="hide">
        <div className="star">
          <img className="imstar" src={star} alt="Star" />
        </div>
        <br />
        <div className="title">
          <h2>How did we do?</h2>
        </div>
        <br />
        <div className="body col-xs-12">
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </div>
        <br />
        <br />
        <div className="row row-fluid">
          <div className="rate col-md-2.4">
            <p className="number">1</p>
          </div>
          <div className="rate col-md-2.4">
            <p className="number">2</p>
          </div>
          <div className="rate col-md-2.4">
            <p className="number">3</p>
          </div>
          <div className="rate col-md-2.4">
            <p className="number">4</p>
          </div>
          <div className="rate col-md-2.4">
            <p className="number">5</p>
          </div>
        </div>
        <br />
        <br />
        <div className="d-grid gap-2">
          <button onClick={ocultar} className="b btn btn-block" type="button">
            SUBMIT
          </button>
        </div>
      </div>
      <Card2 />
    </div>
  );
};

export default Card;

function ocultar() {
  document.getElementById("hide").style.display = "none";
  document.getElementById("show").style.display = "block";
}
