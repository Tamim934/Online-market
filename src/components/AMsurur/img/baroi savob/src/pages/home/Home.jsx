import React, { useEffect } from "react";
import ProductDetalis from "../../components/Productsicons/ProductDetalis";
import axios from "axios";
import "../../App.css";
// import Burger from './components/Burger'
import AOS from "aos";
import "aos/dist/aos.css";

// import { useTranslation } from "react-i18next";
// import { IconButton } from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";
import SwipeApple from "../../components/HomeComponents/AppleSwiper";

//img
import toRight from "../../assets/homeImg/toRight.png";
import toLeft from "../../assets/homeImg/toLeft.png";
import phoneCategory from "../../assets/homeImg/phoneCategory.svg";
import computersCategory from "../../assets/homeImg/ComputerCategory.svg";
import watchCategory from "../../assets/homeImg/WatchCategory.svg";
import cameraCategory from "../../assets/homeImg/CameraCategory.svg";
import headPhoneCategory from "../../assets/homeImg/HeadphoneCategory.svg";
import gamingCategory from "../../assets/homeImg/GamepadCategory.svg";
import jasket from "../../assets/homeImg/Jasket.svg";
import bagGucci from "../../assets/homeImg/bagGucci.svg";
import speakers from "../../assets/homeImg/Speakers.svg";
import shelf from "../../assets/homeImg/shelf.svg";
import speakerBig from "../../assets/homeImg/speakerBig.svg";
import SwiperProduct from "../../components/HomeComponents/SwiperProduct";
import Button240px from "../../components/HomeComponents/Button240px";
import CategoryCard from "../../components/HomeComponents/CategoryCard";
import ProductCard from "../../components/HomeComponents/ProductCard";
import Catagories from "../../components/TamimCatagories/Catagories";
import { useDispatch, useSelector } from "react-redux";
import { GetProducts } from "../../reducers/onlineShop";
import AmsCard from "../../components/AMsurur/AmsCard";
// import store from "../../store/store.jsx";
const Home = () => {
  const todos = useSelector((store) => store.onlineShop.Products);
  console.log(todos);
  const dispatch = useDispatch();
  // async function getData() {
  //   try {
  //     const { data } = await axios.get(Api);
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // // }

  useEffect(() => {
    dispatch(GetProducts());
  }, [dispatch]);
  return (
    <div className="dark:text-white">
      {/* <ProductDetalis /> */}
      <div className="dark:text-[#fff]">
        <div className="w-[90%] md:w-[85%] mx-auto py-[40px]">
          <div className="md:flex justify-between items-center mb-[70px] md:mb-[140px]">
            <div className="">
              <h3 className="font-[600] mb-[16px]">Woman’s Fashion</h3>
              <h3 className="font-[600] mb-[16px]">Men’s Fashion</h3>
              <h3 className="font-[600] mb-[16px]">Electronics</h3>
              <h3 className="font-[600] mb-[16px]">Home & Lifestyle</h3>
              <h3 className="font-[600] mb-[16px]">Medicine</h3>
              <h3 className="font-[600] mb-[16px]">Sports & Outdoor</h3>
              <h3 className="font-[600] mb-[16px]">Baby’s & Toys</h3>
              <h3 className="font-[600] mb-[16px]">Groceries & Pets</h3>
              <h3 className="font-[600] mb-[16px]">Health & Beauty</h3>
            </div>
            <div className="md:w-[70%]">
              <SwipeApple />
            </div>
          </div>
          <div className="md:flex justify-between items-end mb-[40px]">
            <div className="flex items-end md:w-[50%] justify-between">
              <div className="">
                <div className="flex gap-[16px] items-center mb-[20px]">
                  <div className="bg-[#DB4444] w-[20px] h-[40px] rounded-[4px]"></div>
                  <p className="text-[#DB4444] font-[600]">Today’s</p>
                </div>
                <h2 className="text-[32px] md:text-[48px] font-[600]">
                  Flash Sales
                </h2>
              </div>
              <div className="flex gap-[16px]">
                <div className="">
                  <p className="font-[600] text-[12px]">Days</p>
                  <h2 className="font-[600] text-[32px]">
                    {new Date().getDate()}
                  </h2>
                </div>
                <div className="">
                  <p className="font-[600] text-[12px]">Hours</p>
                  <h2 className="font-[600] text-[32px]">
                    {new Date().getHours()}
                  </h2>
                </div>
                <div className="">
                  <p className="font-[600] text-[12px]">Minutes</p>
                  <h2 className="font-[600] text-[32px]">
                    {new Date().getMinutes()}
                  </h2>
                </div>
                <div className="">
                  <p className="font-[600] text-[12px]">Seconds</p>
                  <h2 className="font-[600] text-[32px]">
                    {new Date().getSeconds()}
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[8px]">
              <img src={toLeft} alt="" />
              <img src={toRight} alt="" />
            </div>
          </div>
          <div className="">
            <SwiperProduct />
          </div>
          <div className="flex justify-center my-[60px]">
            <Button240px text={"View All Products"} />
          </div>

          <hr className="border-[1px]" />
          <div className="my-[70px]">
            <div className="md:flex justify-between items-end mb-[60px]">
              <div className="flex items-end md:w-[50%] justify-between">
                <div className="">
                  <div className="flex gap-[16px] items-center mb-[20px]">
                    <div className="bg-[#DB4444] w-[20px] h-[40px] rounded-[4px]"></div>
                    <p className="text-[#DB4444] font-[600]">Categories</p>
                  </div>
                  <h2 className="text-[32px] md:text-[48px] font-[600]">
                    Browse By Category
                  </h2>
                </div>
              </div>
              <div className="flex items-center gap-[8px]">
                <img src={toLeft} alt="" />
                <img src={toRight} alt="" />
              </div>
            </div>
            <div className="sm:flex justify-between flex-wrap">
              {/* <CategoryCard image={phoneCategory} text={'Phones'} />
            <CategoryCard image={computersCategory} text={'Phones'} />
            <CategoryCard image={watchCategory} text={'Phones'} />
            <CategoryCard image={cameraCategory} text={'Phones'} />
            <CategoryCard image={headPhoneCategory} text={'Phones'} />
            <CategoryCard image={gamingCategory} text={'Phones'} /> */}
              <Catagories />
            </div>
          </div>
          <hr className="border-[1px]" />
          <div className="my-[70px]">
            <AmsCard />
          </div>
          <div className="py-[30px] md:py-[70px] bg-black font-[600] px-[56px] md:flex flex-wrap  justify-between my-[40px]">
            <div className="">
              <p className="text-[#00FF66] mb-[32px]">Categories</p>
              <h2 className="text-[30px] md:text-[48px] font-[600] text-[#fff] mb-[32px]">
                Enhance Your <br /> Music Experience
              </h2>
              <div className="flex gap-[16px] dark:text-black mb-[40px]">
                <div className="rounded-[50%] bg-[#fff] py-[15px] w-[62px] h-[62px]">
                  <h2 className="font-[800] text-[11px] text-center">
                    {new Date().getDate()}
                  </h2>
                  <p className="font-[600] text-[11px] text-center">Days</p>
                </div>
                <div className="rounded-[50%] bg-[#fff] py-[15px] w-[62px] h-[62px]">
                  <h2 className="font-[800] text-[11px] text-center">
                    {new Date().getHours()}
                  </h2>
                  <p className="font-[600] text-[11px] text-center">Hours</p>
                </div>
                <div className="rounded-[50%] bg-[#fff] py-[15px] w-[62px] h-[62px]">
                  <h2 className="font-[800] text-[11px] text-center">
                    {new Date().getMinutes()}
                  </h2>
                  <p className="font-[600] text-[11px] text-center">Minutes</p>
                </div>
                <div className="rounded-[50%] bg-[#fff] text-center py-[12px] w-[62px] h-[62px]">
                  <h2 className="font-[800] text-[11px] text-center">
                    {new Date().getSeconds()}
                  </h2>
                  <p className="font-[600] text-[11px] text-center">Seconds</p>
                </div>
              </div>
              <button className="w-[159px] h-[56px] bg-[#00FF66] rounded-[4px] text-[#fff] border-none">
                Buy Now!
              </button>
            </div>
            <img src={speakerBig} alt="" />
          </div>
          <div className="md:flex justify-between items-end mb-[60px]">
            <div className="flex items-end md:w-[50%] justify-between">
              <div className="">
                <div className="flex gap-[16px] items-center mb-[20px]">
                  <div className="bg-[#DB4444] w-[20px] h-[40px] rounded-[4px]"></div>
                  <p className="text-[#DB4444] font-[600]">Our Products</p>
                </div>
                <h2 className="text-[32px] md:text-[48px] font-[600]">
                  Explore Our Products
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-[8px]">
              <img src={toLeft} alt="" />
              <img src={toRight} alt="" />
            </div>
          </div>
          <div className="">
            {/* <ProductCard img={jasket} name={"The north coat"} price={"$260"} />
            <ProductCard
              img={bagGucci}
              name={"Gucci duffle bag"}
              price={"$960"}
            />
            <ProductCard
              img={speakers}
              name={"RGB liquid CPU Cooler"}
              price={"$160"}
            />
            <ProductCard img={shelf} name={"Small BookSelf"} price={"$360"} />
            <ProductCard img={shelf} name={"Small BookSelf"} price={"$360"} />
            <ProductCard img={jasket} name={"The north coat"} price={"$260"} />
            <ProductCard
              img={bagGucci}
              name={"Gucci duffle bag"}
              price={"$960"}
            />
            <ProductCard
              img={speakers}
              name={"RGB liquid CPU Cooler"}
              price={"$160"}
            /> */}
            <SwiperProduct />
            <SwiperProduct />
          </div>
          <div className="flex justify-center my-[60px]">
            <Button240px text={"View All Products"} />
          </div>
          <div className="">
            <div className="">
              <div className="flex gap-[16px] items-center mb-[20px]">
                <div className="bg-[#DB4444] w-[20px] h-[40px] rounded-[4px]"></div>
                <p className="text-[#DB4444] font-[600]">Featured</p>
              </div>
              <h2 className="text-[32px] md:text-[48px] font-[600]">
                New Arrival
              </h2>
            </div>
          </div>
          <div className="">
            <div className="bg-[url(./assets/playStation.svg)] bg-cover "></div>
            <div className="">
              <div className="">{/*  */}</div>
              <div className="">
                <div className="">{/*  */}</div>
                <div className="">{/*  */}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
