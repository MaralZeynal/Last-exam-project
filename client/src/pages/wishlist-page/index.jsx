import React from "react";
import "./index.scss";

const WishlistPage = ({ wishlists, setWishlists }) => {
  console.log(wishlists);
  return (
    <div id="container">
      <div className="wishlistPage">
        <h1>Wishlist</h1>
        <div className="listBox">
          {/* {console.log(wishlists)} */}
          {wishlists?.map((el) => {
            return (
              <div className="list">
                <div>
                  <h3>{el.name}</h3>
                  <h3>{el.price}</h3>
                </div>
                <div>
                  <img src={el.imgUrl} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
