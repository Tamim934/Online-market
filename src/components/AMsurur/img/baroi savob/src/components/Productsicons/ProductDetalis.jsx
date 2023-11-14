import React, { useState } from 'react'
import HoverRating from '../Rating';
import { IconButton } from '@mui/material';
import { useSSR } from 'react-i18next';

const ProductDetalis = () => {
    const [buttonn, setButtonn] = useState(false)
    const [buttonn1, setButtonn1] = useState(false);
    const [buttonn2, setButtonn2] = useState(false);
    const [buttonn3, setButtonn3] = useState(false);
    return (
      <div className="dark:text-[white] py-[50px]">
        <div className="w-[80%] m-auto">
          <h1>
            <span className="text-[gray]">Account /</span>
            <span className="text-[gray]"> Gaming /</span>
            <span className=" font-medium"> Havic HV G-92 Gamepad</span>
          </h1>
          <div className="w-[100%] flex flex-wrap justify-center items-center gap-[5%] py-[40px]">
            <div className="xl:w-[55%] w-[80%] flex gap-[30px] items-center">
              <div className="w-[24%] xs:hidden sm:block">
                <img
                  className="py-[20px]"
                  src="src/components/Productsicons/Frame 895.svg"
                  alt=""
                />
                <img
                  className="pb-[20px]"
                  src="src/components/Productsicons/Frame 896.svg"
                  alt=""
                />
                <img
                  className="pb-[20px]"
                  src="src/components/Productsicons/Frame 897.svg"
                  alt=""
                />
                <img
                  className="pb-[20px]"
                  src="src/components/Productsicons/Frame 919.svg"
                  alt=""
                />
              </div>
              <div className="w-[72%]">
                <img src="src/components/Productsicons/Frame 894.svg" alt="" />
              </div>
            </div>
            <div className="xl:w-[40%] w-[80%] py-[20px]">
              <h1 className="text-[34px] font-serif">Havic HV G-92 Gamepad</h1>
              <div className="flex items-center gap-[16px] py-[10px]">
                <HoverRating />
                <h1 className="text-[gray]">
                  (150 Reviews) <span className="pl-[10px]">|</span>
                </h1>
                <h1 className="text-[#00FF66]">In Stock</h1>
              </div>
              <h1 className="text-[26px]">$192.00</h1>
              <p className="py-[10px] font-serif border-b-[2px]">
                PlayStation 5 Controller Skin High quality vinyl with air
                channel adhesive for easy bubble free install & mess free
                removal Pressure sensitive.
              </p>
              <div className="flex items-center gap-[10px] py-[10px] border-[#333333]">
                <h1 className="text-[25px] font-serif">Size:</h1>
                <h1 className="border-[1px] px-[7px] font-normal rounded-[4px] border-[gray] hover:bg-[#DB4444] hover:text-[white]">
                  xs
                </h1>
                <h1 className="border-[1px] px-[7px] font-normal rounded-[4px] border-[gray] hover:bg-[#DB4444] hover:text-[white]">
                  s
                </h1>
                <h1 className="border-[1px] px-[7px] font-normal rounded-[4px] border-[gray] hover:bg-[#DB4444] hover:text-[white]">
                  m
                </h1>
                <h1 className="border-[1px] px-[7px] font-normal rounded-[4px] border-[gray] hover:bg-[#DB4444] hover:text-[white]">
                  L
                </h1>
                <h1 className="border-[1px] px-[7px] font-normal rounded-[4px] border-[gray] hover:bg-[#DB4444] hover:text-[white]">
                  xl
                </h1>
              </div>
              <div className="flex justify-around">
                <div className="flex rounded-[4px] items-center">
                  <h1 className="border-[1px] px-[11px] py-[5px] font-medium border-[gray] hover:bg-[#DB4444] rounded-tl-[4px] rounded-bl-[4px]">
                    -
                  </h1>
                  <h1 className="border-[1px] px-[31px] py-[5px] font-medium border-[gray] hover:bg-[#DB4444]">
                    2
                  </h1>
                  <h1 className="border-[1px] px-[11px] py-[5px] font-medium border-[gray] hover:bg-[#DB4444] rounded-tr-[4px] rounded-br-[4px]">
                    +
                  </h1>
                </div>
                <div className="flex gap-[10px] items-center">
                  <button className="hover:bg-[#DB4444] bg-[green] text-[white] py-[9px] rounded-[5px] px-[30px] ">
                    Buy Now
                  </button>
                  <IconButton>
                    <img
                      src="src/components/Productsicons/Frame 904.svg"
                      alt=""
                    />
                  </IconButton>
                </div>
              </div>
              <div className="py-[40px]">
                <div className="flex items-center gap-[16px] border-[2px] border-[#3b3b3b] rounded-tl-[9px] rounded-tr-[9px] py-[25px] px-[25px]">
                  <img
                    src="src/components/Productsicons/icon-delivery.svg"
                    alt=""
                  />
                  <div className="">
                    <h1 className="font-medium">Free Delivery</h1>
                    <p>Enter your postal code for Delivery Availability</p>
                  </div>
                </div>
                <div className="flex items-center gap-[16px] border-[2px] border-[#3b3b3b] rounded-bl-[9px] rounded-br-[9px] py-[25px] px-[25px]">
                  <img
                    src="src/components/Productsicons/Icon-return.svg"
                    alt=""
                  />
                  <div className="">
                    <h1 className="font-medium">Return Delivery</h1>
                    <p>Free 30 Days Delivery Returns. Details</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[80%] m-auto">
          <div className="flex items-center gap-[7px] py-[10px]">
            <h1 className="w-[20px] h-[40px] rounded-[4px] bg-[#DB4444]"></h1>
            <h1 className="text-[#DB4444] font-medium">Our Products</h1>
          </div>
          <div className="flex justify-between">
            <h1 className="text-[26px] font-medium">Explore Our Products</h1>
            <div className="flex items-center gap-[4px]">
              <img src="src/Productsicons/Fill With Left Arrow.svg" alt="" />
              <img src="src/Productsicons/Fill with Right Arrow.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="w-[80%] m-auto flex flex-wrap justify-center gap-[30px] pt-[29px]">
          <div
            className="xs:w-[75%] sm:w-[50%] md:w-[40%] lg:w-[28%] xl:w-[23%]"
            onMouseLeave={() => setButtonn(false)}
            onMouseOver={() => setButtonn(true)}
          >
            <div className="">
              <div className="bg-[#F5F5F5] h-[240px] pt-[35px]">
                <div className="flex justify-end py-[15px] px-[20px] ">
                  <img
                    src="src/components/Productsicons/g92-2-500x500 1.svg"
                    alt=""
                  />
                  <div className="pl-[25px]">
                    <img
                      className="pb-[10px]"
                      src="src/components/Productsicons/Fill Heart.svg"
                      alt=""
                    />
                    <img
                      src="src/components/Productsicons/Fill Eye.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              {buttonn ? (
                <button className="text-center  cursor-pointer text-[19px] font-serif text-[#F5F5F5] hover:bg-[black] w-[100%] h-[50px] bg-black">
                  Add To Cart
                </button>
              ) : null}
            </div>
            <div className=" py-[15px]">
              <h1 className="text-[17px] font-serif">Breed Dry Dog Food</h1>
              <h1 className="py-[8px] font-medium">
                <span className="text-[#DB4444]">$160 </span>
                <span
                  className="text-[gray]"
                  style={{ textDecoration: "line-through" }}
                >
                  $170
                </span>
              </h1>
              <div className="flex gap-[5px]">
                <HoverRating />
                <h1>(35)</h1>
              </div>
            </div>
          </div>
          <div
            className="xs:w-[75%] sm:w-[50%] md:w-[40%] lg:w-[28%] xl:w-[23%]"
            onMouseLeave={() => setButtonn1(false)}
            onMouseOver={() => setButtonn1(true)}
          >
            <div className="">
              <div className="bg-[#F5F5F5] h-[240px] pt-[35px]">
                <div className="flex justify-end py-[15px] px-[20px] ">
                  <img
                    className="w-[64%]"
                    src="src/components/Productsicons/ak-900-01-500x500 1.svg"
                    alt=""
                  />
                  <div className="pl-[25px]">
                    <img
                      className="pb-[10px]"
                      src="src/components/Productsicons/Fill Heart.svg"
                      alt=""
                    />
                    <img
                      src="src/components/Productsicons/Fill Eye.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              {buttonn1 ? (
                <button className="text-center  cursor-pointer text-[19px] font-serif text-[#F5F5F5] hover:bg-[black] w-[100%] h-[50px] bg-black">
                  Add To Cart
                </button>
              ) : null}
            </div>
            <div className=" py-[15px]">
              <h1 className="text-[17px] font-serif">CANON EOS DSLR Camera</h1>
              <h1 className="py-[8px] font-medium">
                <span className="text-[#DB4444]">$960 </span>
                <span
                  className="text-[gray]"
                  style={{ textDecoration: "line-through" }}
                >
                  $1160
                </span>
              </h1>
              <div className="flex gap-[5px]">
                <HoverRating />
                <h1>(95)</h1>
              </div>
            </div>
          </div>
          <div
            className="xs:w-[75%] sm:w-[50%] md:w-[40%] lg:w-[28%] xl:w-[23%]"
            onMouseLeave={() => setButtonn2(false)}
            onMouseOver={() => setButtonn2(true)}
          >
            <div className="">
              <div className="bg-[#F5F5F5] h-[240px] pt-[35px]">
                <div className="flex justify-end py-[15px] px-[20px] ">
                  <img
                    className="w-[74%]"
                    src="src/components/Productsicons/Frame 613.svg"
                    alt=""
                  />
                  <div className="pl-[25px]">
                    <img
                      className="pb-[10px]"
                      src="src/components/Productsicons/Fill Heart.svg"
                      alt=""
                    />
                    <img
                      src="src/components/Productsicons/Fill Eye.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              {buttonn2 ? (
                <button className="text-center  cursor-pointer text-[19px] font-serif text-[#F5F5F5] hover:bg-[black] w-[100%] h-[50px] bg-black">
                  Add To Cart
                </button>
              ) : null}
            </div>
            <div className=" py-[15px]">
              <h1 className="text-[17px] font-serif">ASUS FHD Gaming Laptop</h1>
              <h1 className="py-[8px] font-medium">
                <span className="text-[#DB4444]">$370 </span>
                <span
                  className="text-[gray]"
                  style={{ textDecoration: "line-through" }}
                >
                  $400
                </span>
              </h1>
              <div className="flex gap-[5px]">
                <HoverRating />
                <h1>(325)</h1>
              </div>
            </div>
          </div>
          <div
            className="xs:w-[75%] sm:w-[50%] md:w-[40%] lg:w-[28%] xl:w-[23%]"
            onMouseLeave={() => {
              setButtonn3(false);
            }}
            onMouseOver={() => {
              setButtonn3(true);
            }}
          >
            <div className="">
              <div className="bg-[#F5F5F5] h-[240px] pt-[35px]">
                <div className="flex justify-end py-[15px] px-[20px] ">
                  <img
                    className="w-[80%]"
                    src="src/components/Productsicons/gammaxx-l240-argb-1-500x500 1.svg"
                    alt=""
                  />
                  <div className="pl-[25px]">
                    <img
                      className="pb-[10px]"
                      src="src/components/Productsicons/Fill Heart.svg"
                      alt=""
                    />
                    <img
                      src="src/components/Productsicons/Fill Eye.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              {buttonn3 ? (
                <button className="text-center  cursor-pointer text-[19px] font-serif text-[#F5F5F5] hover:bg-[black] w-[100%] h-[50px] bg-black">
                  Add To Cart
                </button>
              ) : null}
            </div>
            <div className=" py-[15px]">
              <h1 className="text-[17px] font-serif">Curology Product Set </h1>
              <h1 className="py-[8px] font-medium">
                <span className="text-[#DB4444]">$120 </span>
                <span
                  className="text-[gray]"
                  style={{ textDecoration: "line-through" }}
                >
                  {" "}
                  $160
                </span>
              </h1>
              <div className="flex gap-[5px]">
                <HoverRating />
                <h1>(145)</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ProductDetalis