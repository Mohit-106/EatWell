import React, { useEffect, useState } from "react";
import "../Styles/plan.css";
import Tick from "../Images/check-mark.png";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

function Plans() {
  const [arr, arrset] = useState([]);
  const history = useHistory(); 
  useEffect(async () => {
    try {
      const data = await axios.get("/api/v1/plan");
      console.log(data.data);
      arrset(data.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handlePayment = (plan) => {
    history.push(`/payment?planName=${plan.name}&planPrice=${plan.price}`);
};

  return (
    <div className="allplansCard">
      <div className="h1Box">
        <h1 className="h1">START EATING HEALTHY TODAY</h1>
        <div className="line"></div>
      </div>
      <div className="allplanDetails">
        <div className="planDetails">
          {arr.map((ele, key) => (
            <div className="apCard" key={key}>
              <h3 className="h3">{ele.name}</h3>
              <div className="pCard1">
                <div className="priceBox">
                  <div className="price">Rs {ele.price}</div>
                  <div className="duration">/month</div>
                </div>
                <p className="point">That’s only 2₹ per meal</p>
              </div>

              <div className="pCard2">
                <div className="ppoints">
                  <img src={Tick} alt="" className="img" />
                  <p className="point">{ele.duration} meal every day</p>
                </div>
                <div className="ppoints">
                  <img src={Tick} alt="" className="img" />
                  <p className="point">{ele.discount} discount available.</p>
                </div>
                <div className="ppoints">
                  <img src={Tick} alt="" className="img" />
                  <p className="point">{ele.averageRating} rated meal.</p>
                </div>
              </div>
              <div className="plan-btns">
                <button className="btn" onClick={() => handlePayment(ele)}>
                  Buy
                </button>
                <button className="btn">
                  {" "}
                  <Link to={`/planDetail/${ele._id}`}>Review</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Plans;
