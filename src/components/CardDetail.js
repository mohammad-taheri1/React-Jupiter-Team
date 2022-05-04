import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Card.css";
import axios from "axios";

function CardDetail() {
  const [cardDetail, setCardDetail] = useState({});
  const location = useLocation();

  useEffect(() => {
    axios
      .get("")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    // <div className={isActive ? "container-card" : "container-card-inactive"}>
    <div>
      <div className="header-card">
        <label className="title-card">title</label>
      </div>
      <label className="text-card">
        {/* {text.length <= 102 ? text : `${text.substring(0, 102)} ...`} */}
        Description
      </label>
    </div>
  );
}

export default CardDetail;
