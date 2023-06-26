import React, { useEffect, useState } from "react";
import Star from "../Images/star.png";
import User from "../Images/User.png";
import "../Styles/review.css";
import axios from "axios";

function Review() {
  const [arr, setarr] = useState([]);

  useEffect(async () => {
    try {
      const data = await axios.get("/api/v1/review");
      setarr(data.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const styles = {
    color: 'white'
  };

  return (
    <div className="reviewImg">
      <div className="reviewCard">
        <div className="h1Box">
          <h1 className="h1" style={styles} >REVIEWS</h1>
          <div className="line"></div>
        </div>
        <div className="rDetail">
          {
            arr.map((ele, key) => (
              <div className="rCard" key={key}>
                <div className="rimage">
                  <img alt="" src={User} className="img"/>
                </div>
                <div className="rheader">
                  <h3 className="rh3">{ele.user}</h3>
                </div>
                <div className="rsummary">
                  <p className="para">{ele.description}</p>
                </div>
                <div>
                  <h4>Plan Name : {ele.plan}</h4>
                </div>
                <div className="frate">
                  {Array.from(Array(parseInt(ele.rating)).keys()).map((ele, key) => (
                    <img alt="" src={Star} className="img" />
                  ))}
                </div>
                <div>
                  <h4>Date : {ele.createdAt.slice(0, 10)}</h4>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Review;
