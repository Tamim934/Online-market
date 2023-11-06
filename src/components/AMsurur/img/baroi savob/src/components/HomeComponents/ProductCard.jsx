import React, { useEffect, useState } from "react";
import heart from "../../assets/homeImg/heart.png";
import eyes from "../../assets/homeImg/eyes.png";
import jostic from "../../assets/homeImg/jostic.svg";
import keyBoard from "../../assets/homeImg/keyboard.svg";
import TV from "../../assets/homeImg/TV.svg";
import chair from "../../assets/homeImg/chair.svg";
import Rating from "./Rating";
import RatingStar from "./Rating";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, GetCart } from "../../reducers/onlineShop";

const ProductCard = ({ img, name, price, e }) => {
  const [buttonBuy, setButtonBuy] = useState(false);
  const cartObj = useSelector((store) => store.onlineShop.cartObj);

  // console.log(cartObj);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetCart());
  }, [dispatch]);

  return (
    <div
      className="mx-auto w-[100%]  mb-[30px]"
      onMouseLeave={() => setButtonBuy(false)}
      onMouseEnter={() => setButtonBuy(true)}
      onChange={(e) => setButtonBuy(e.target)}
    >
      <div
        className="bg-[#F5F5F5] rounded-[4px] mb-[16px] overflow-hidden h-[300px] flex flex-col "
        style={{ justifyContent: buttonBuy ? "space-between" : "start" }}
      >
        <div className="flex justify-between items-center">
          <div className="bg-[#DB4444] w-[55px] h-[26px] text-[#fff] flex items-center m-[12px]">
            <p>-40%</p>
          </div>
          <div className="text-center grid">
            <img
              className="m-[12px] inline justify-self-center"
              src={heart}
              alt=""
            />
            <img
              src={eyes}
              className=" mr-[0px] inline justify-self-center"
              alt=""
            />
          </div>
        </div>
        <div className="relative">
          <img
            src={img}
            className="mx-auto w-[100px] h-[150px]  object-cover m-auto"
            // style={{ height: buttonBuy ? "83%" : "90%" }}
            alt=""
          />
        </div>
        {buttonBuy ? (
          <button
            onClick={() => {
              dispatch(AddToCart(e));
            }}
            className="w-[100%] h-[41px] text-[#fff] bg-black "
          >
            Add To Cart
          </button>
        ) : null}
      </div>
      <div className="">
        <h3 className="mb-[8px] font-[500]">{name}</h3>
        <div className="mb-[8px] flex gap-[12px]">
          <p className="text-[#DB4444] font-[500]">
            {price == null || price == "" ? Date.now() % 1000 : price}
          </p>
          <p className="opacity-[0.5] line-through">$1160</p>
        </div>
        <RatingStar />
      </div>
    </div>
  );
};

export default ProductCard;
