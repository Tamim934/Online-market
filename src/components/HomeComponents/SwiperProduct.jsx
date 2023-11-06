import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";
// img
import jostic from "../../assets/homeImg/jostic.svg";

import keyBoard from "../../assets/homeImg/keyboard.svg";
import TV from "../../assets/homeImg/TV.svg";
import chair from "../../assets/homeImg/chair.svg";
import Rating from "./Rating";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { GetProducts } from "../../reducers/onlineShop";
// const Api = "http://localhost:3000/products";
// const PostImagesApi = "http://localhost:3000/products/?media";

export default function SwiperProduct() {
  const Products = useSelector((store) => store.onlineShop.Products);
  console.log(Products);
  // console.log(Products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetProducts());
  }, [dispatch]);
  return (
    <div className="w-[]">
      <Swiper
        // slidesPerView={4}
        // slidesPerView={1}
        // spaceBetween={10}
        // centeredSlides={false}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        // spaceBetween={10}
        grabCursor={true}
        // pagination={{
        //     clickable: false,
        // }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {Products.map((e, i) => {
          console.log(e?.media?.map((e) => e.src));
          return (
            <div key={e?.id} className="">
              <SwiperSlide>
                <ProductCard
                  // <img src={"http://localhost:3000/" + products[3]?.media[1]?.src} alt="s" />
                  e={e}
                  img={"http://localhost:3000/" + Products[i]?.media[0]?.src}
                  name={e?.name}
                  price={e?.price}
                />
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
}
