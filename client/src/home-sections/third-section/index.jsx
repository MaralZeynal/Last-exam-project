import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.scss";
import { Link } from "react-router-dom";

const ThirdSection = ({ wishlists, setWishlists }) => {
  const [flowers, setFlowers] = useState();
  const [toggle, setToggle] = useState(true);

  const getData = async () => {
    let res = await axios.get(`http://localhost:8080/products`);
    setFlowers(res.data);
  };
  useEffect(() => {
    getData();
  }, []);

  const handleSearch = (e) => {
    axios.get(`http://localhost:8080/products`).then((response) => {
      let searchData = response.data.filter((elem) =>
        elem.name
          .toLocaleLowerCase()
          .includes(e.target.value.toLocaleLowerCase())
      );
      setFlowers(searchData);
    });
  };

  const handleSort = () => {
    setToggle(!toggle);
    if (toggle) {
      let sortedPrice = flowers.sort((a, b) => a.price - b.price);
      setFlowers(sortedPrice);
    } else {
      getData();
    }
  };

  const handleDel = (_id) => {
    axios.delete(`http://localhost:8080/products/${_id}`).then(() => {
      axios
        .get(`http://localhost:8080/products`)
        .then((res) => setFlowers(res.data));
    });
  };



  const handleAddWishlist = (obj) => {
    console.log(obj);
    if (!wishlists.find((element) => element._id === obj._id)) {
      setWishlists([...wishlists, obj]);
    } else {
      alert("Product added!");
    }
    console.log(wishlists);
  };

  return (
    <div className="thirdSection">
      <img
        src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/background1.jpg"
        alt=""
        className="bg-img"
      />
      <div id="container">
        <div className="thirdSec">
          <div className="searchBox">
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => handleSearch(e)}
            />
            <button onClick={() => handleSort()}>Sort by price</button>
          </div>
          <div className="flowerBox">
            {flowers?.map((el) => {
              return (
                <div className="flowerCard">
                  <Link to={`/home-page/${el._id}`}>
                    <img src={el.imgUrl} alt="" />
                  </Link>
                  <h1>{el.name}</h1>
                  <p>${el.price}</p>
                  <button onClick={() => handleDel(el._id)}>Delete</button>
                  <button onClick={() => handleAddWishlist(el)}>
                    {!wishlists.find((elem) => elem._id === el._id)
                      ? "Add to wishlist"
                      : "Added"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
