import React from "react";
import CardA from "./AComponents/CardA";
import coat from "../AMsurur//img/672462_ZAH9D_5626_002_100_0000_Light-The-North-Face-x-Gucci-coat 1.svg";
import like from "../Amsurur/img/Fill Heart.svg";
import eye from "../AMsurur/img/Fill Eye.svg";
import stars from "../AMsurur/img/Five star.svg";
import bag from "../AMsurur/img/547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1.svg";
import cooler from "../AMsurur/img/gammaxx-l240-argb-1-500x500 1.svg";
import polka from "../AMsurur/img/sam-moghadam-khamseh-L_7MQsHl_aU-unsplash 1.svg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const AmsCard = () => {
  return (
    <div className="py-20 w-[90%] mx-auto">
      <div className="top mb-10">
        <div className="mb-8">
          <span className="py-2 mr-5 px-2.5 rounded bg-[#DB4444]"></span>
          <span className="text-[#DB4444] font-semibold">This Month</span>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-4xl font-semibold">Best Selling Products</p>
          <button className="bg-[#DB4444] md:px-12  md:w-[20%] sm:w-[30%] px-5 w-[45%] rounded-[4px] text-[#FAFAFA] py-4">
            View All
          </button>
        </div>
      </div>
      <div className="md:grid hidden  xl:grid-cols-4 md:grid-cols-2 xL:gap-0 gap-28 ">
        <CardA
          img1={like}
          img2={eye}
          img3={coat}
          img4={stars}
          p1="The north coat"
          span1="$260"
          span2="$360"
        />
        <CardA
          img1={like}
          img2={eye}
          img3={bag}
          img4={stars}
          p1="Gucci duffle bag"
          span1="$960"
          span2="$1160"
        />
        <CardA
          img1={like}
          img2={eye}
          img3={cooler}
          img4={stars}
          p1="RGB liquid CPU Cooler"
          span1="$160"
          span2="$170"
        />
        <CardA
          img1={like}
          img2={eye}
          img3={polka}
          img4={stars}
          p1="Small BookSelf"
          span1="$360"
          //   span2="$360"
        />
      </div>
      <div className="w-[270px] md:hidden block mx-auto">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          //   pagination={{
          //     clickable: true,
          //   }}
          //   navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
            <CardA
              img1={like}
              img2={eye}
              img3={coat}
              img4={stars}
              p1="The north coat"
              span1="$260"
              span2="$360"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <CardA
              img1={like}
              img2={eye}
              img3={bag}
              img4={stars}
              p1="Gucci duffle bag"
              span1="$960"
              span2="$1160"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <CardA
              img1={like}
              img2={eye}
              img3={cooler}
              img4={stars}
              p1="RGB liquid CPU Cooler"
              span1="$160"
              span2="$170"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <CardA
              img1={like}
              img2={eye}
              img3={polka}
              img4={stars}
              p1="Small BookSelf"
              span1="$360"
              //   span2="$360"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <CardA
              img1={like}
              img2={eye}
              img3={polka}
              img4={stars}
              p1="Small BookSelf"
              span1="$360"
              //   span2="$360"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <CardA
              img1={like}
              img2={eye}
              img3={polka}
              img4={stars}
              p1="Small BookSelf"
              span1="$360"
              //   span2="$360"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <CardA
              img1={like}
              img2={eye}
              img3={polka}
              img4={stars}
              p1="Small BookSelf"
              span1="$360"
              //   span2="$360"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default AmsCard;
