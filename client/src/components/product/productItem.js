import React from "react";
import  "./productItem.css";
import PrimaryBtn from "../buttons/primary/primary";
import HeartBtn from "../buttons/rounded/rounded";
const productItem = (props) => {
  return (
    <div className="productItem">
      {props.isNew ? (
        <div className="stick_new">
          <p>New</p>
        </div>
      ) : null}
      {props.isBestSeller ? (
        <div className="stick_bs">
          <p>Best seller</p>
        </div>
      ) : null}

      <div className="image_side">
        <img src={require(`../../assets/images/products/${props.src}`)} />
      </div>
      <div className="details_side">
        <p className="product_detail">{props.detail}</p>
        <p className="product_price">{props.price}</p>
        <PrimaryBtn className=" more_btn" title="Ətraflı" />
        <HeartBtn />
      </div>
    </div>
  );
};

export default productItem;
