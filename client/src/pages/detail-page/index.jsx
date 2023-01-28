import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import "./index.scss";

const DetailPage = () => {
  const [detail, setDetail] = useState([]);
  const { _id } = useParams();
  const navigate = useNavigate();
  const getData = async () => {
    let res = await axios.get(`http://localhost:8080/products/${_id}`);
    setDetail(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (_id) => {
    axios.delete(`http://localhost:8080/products/${_id}`);
    navigate("/");
  };

  return (
    <div className="detailPage">
      <img
        src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/background1.jpg"
        alt=""
        className="bg-img"
      />
      <div id="container">
        <div className="detailBox">
          <div className="leftBox">
            <h1>{detail.name}</h1>
            <p>{detail.price}</p>
            <button onClick={() => handleDelete(detail._id)}>Delete</button>
            <button className="back-btn" onClick={() => navigate("/")}>
              Go Back
            </button>
          </div>
          <div className="rightBox">
            <img src={detail.imgUrl} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
