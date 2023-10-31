import React from "react";
import HoverRating from "./Rating";
import "../../src/App.css"

const Products = () => {
  return (
    <div className="w-[80%] m-auto">
      <div className="">
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
      <div className="flex flex-wrap justify-center gap-[30px] pt-[29px]">
        <div className="xs:w-[75%] sm:w-[50%] md:w-[40%] lg:w-[28%] xl:w-[23%] ">
          <div className="bg-[#F5F5F5] h-[300px] pt-[35px]">
            <div className="flex justify-end py-[15px] px-[20px] ">
              <img
                src="src/components/Productsicons/71RdoeXxtrL 1.svg"
                alt=""
              />
              <div className="pl-[25px]">
                <img
                  className="pb-[10px]"
                  src="src/components/Productsicons/Fill Heart.svg"
                  alt=""
                />
                <img src="src/components/Productsicons/Fill Eye.svg" alt="" />
              </div>
            </div>
            <h1 className="text-center cursor-pointer w-[100%] py-[10px] text-[19px] font-serif text-[#F5F5F5] hover:bg-[black] hover:text-[white]">
              Add To Cart
            </h1>
          </div>
          <div className=" py-[15px]">
            <h1 className="text-[17px] font-serif">Breed Dry Dog Food</h1>
            <div className="flex gap-[5px]">
              <h1 className="text-[20px] text-[#DB4444]">$100</h1>
              <HoverRating />
              <h1>(35)</h1>
            </div>
          </div>
        </div>
        <div className="xs:w-[75%] sm:w-[50%] md:w-[40%] lg:w-[28%] xl:w-[23%] ">
          <div className="bg-[#F5F5F5] h-[300px] pt-[35px]">
            <div className="flex justify-end py-[15px] px-[20px] ">
              <img
                className="w-[64%]"
                src="src/components/Productsicons/eos-250d-03-500x500 1.svg"
                alt=""
              />
              <div className="pl-[25px]">
                <img
                  className="pb-[10px]"
                  src="src/components/Productsicons/Fill Heart.svg"
                  alt=""
                />
                <img src="src/components/Productsicons/Fill Eye.svg" alt="" />
              </div>
            </div>
            <h1 className="text-center cursor-pointer w-[100%] py-[10px] text-[19px] font-serif text-[#F5F5F5] hover:bg-[black] hover:text-[white]">
              Add To Cart
            </h1>
          </div>
          <div className=" py-[15px]">
            <h1 className="text-[17px] font-serif">CANON EOS DSLR Camera</h1>
            <div className="flex gap-[5px]">
              <h1 className="text-[20px] text-[#DB4444]">$360</h1>
              <HoverRating />
              <h1>(95)</h1>
            </div>
          </div>
        </div>
        <div className="xs:w-[75%] sm:w-[50%] md:w-[40%] lg:w-[28%] xl:w-[23%] ">
          <div className="bg-[#F5F5F5] h-[300px] pt-[35px]">
            <div className="flex justify-end py-[15px] px-[20px] ">
              <img
                className="w-[74%]"
                src="src/components/Productsicons/Frame 604.svg"
                alt=""
              />
              <div className="pl-[25px]">
                <img
                  className="pb-[10px]"
                  src="src/components/Productsicons/Fill Heart.svg"
                  alt=""
                />
                <img src="src/components/Productsicons/Fill Eye.svg" alt="" />
              </div>
            </div>
            <h1 className="text-center cursor-pointer w-[100%] py-[10px] text-[19px] font-serif text-[#F5F5F5] hover:bg-[black] hover:text-[white]">
              Add To Cart
            </h1>
          </div>
          <div className=" py-[15px]">
            <h1 className="text-[17px] font-serif">ASUS FHD Gaming Laptop</h1>
            <div className="flex gap-[5px]">
              <h1 className="text-[20px] text-[#DB4444]">$700</h1>
              <HoverRating />
              <h1>(325)</h1>
            </div>
          </div>
        </div>
        <div className="xs:w-[75%] sm:w-[50%] md:w-[40%] lg:w-[28%] xl:w-[23%] ">
          <div className="bg-[#F5F5F5] h-[300px] pt-[35px]">
            <div className="flex justify-end py-[15px] px-[20px] ">
              <img
                className="w-[80%]"
                src="src/components/Productsicons/curology-j7pKVQrTUsM-unsplash 1.svg"
                alt=""
              />
              <div className="pl-[25px]">
                <img
                  className="pb-[10px]"
                  src="src/components/Productsicons/Fill Heart.svg"
                  alt=""
                />
                <img src="src/components/Productsicons/Fill Eye.svg" alt="" />
              </div>
            </div>
            <h1 className="text-center cursor-pointer w-[100%] py-[10px] text-[19px] font-serif text-[#F5F5F5] hover:bg-[black] hover:text-[white]">
              Add To Cart
            </h1>
          </div>
          <div className=" py-[15px]">
            <h1 className="text-[17px] font-serif">Curology Product Set </h1>
            <div className="flex gap-[5px]">
              <h1 className="text-[20px] text-[#DB4444]">$500</h1>
              <HoverRating />
              <h1>(145)</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-[30px] pt-[29px] justify-center">
        <div className="xs:w-[75%] sm:w-[50%] md:w-[40%] lg:w-[28%] xl:w-[23%]">
          <div className="bg-[#F5F5F5] h-[300px] pt-[35px]">
            <div className="flex justify-end py-[15px] px-[20px] ">
              <img src="src/components/Productsicons/Frame 608.svg" alt="" />
              <div className="pl-[25px]">
                <img
                  className="pb-[10px]"
                  src="src/components/Productsicons/Fill Heart.svg"
                  alt=""
                />
                <img src="src/components/Productsicons/Fill Eye.svg" alt="" />
              </div>
            </div>
            <h1 className="text-center cursor-pointer w-[100%] py-[10px] text-[19px] font-serif text-[#F5F5F5] hover:bg-[black] hover:text-[white]">
              Add To Cart
            </h1>
          </div>
          <div className=" py-[15px]">
            <h1 className="text-[17px] font-serif">Kids Electric Car</h1>
            <div className="flex gap-[5px]">
              <h1 className="text-[20px] text-[#DB4444]">$960</h1>
              <HoverRating />
              <h1>(65)</h1>
            </div>
          </div>
        </div>
        <div className="xs:w-[75%] sm:w-[50%] md:w-[40%] lg:w-[28%] xl:w-[23%]">
          <div className="bg-[#F5F5F5] h-[300px] pt-[35px]">
            <div className="flex justify-end py-[15px] px-[20px] ">
              <img
                className="w-[77%]"
                src="src/components/Productsicons/Frame 608 (1).svg"
                alt=""
              />
              <div className="pl-[25px]">
                <img
                  className="pb-[10px]"
                  src="src/components/Productsicons/Fill Heart.svg"
                  alt=""
                />
                <img src="src/components/Productsicons/Fill Eye.svg" alt="" />
              </div>
            </div>
            <h1 className="text-center cursor-pointer w-[100%] py-[10px] text-[19px] font-serif text-[#F5F5F5] hover:bg-[black] hover:text-[white]">
              Add To Cart
            </h1>
          </div>
          <div className=" py-[15px]">
            <h1 className="text-[17px] font-serif">Jr. Zoom Soccer Cleats</h1>
            <div className="flex gap-[5px]">
              <h1 className="text-[20px] text-[#DB4444]">$1160</h1>
              <HoverRating />
              <h1>(35)</h1>
            </div>
          </div>
        </div>
        <div className="xs:w-[75%] sm:w-[50%] md:w-[40%] lg:w-[28%] xl:w-[23%] ">
          <div className="bg-[#F5F5F5] h-[300px] pt-[35px]">
            <div className="flex justify-end py-[15px] px-[20px] ">
              <img
                className="w-[90%]"
                src="src/components/Productsicons/GP11_PRD3 1.svg"
                alt=""
              />
              <div className="pl-[25px]">
                <img
                  className="pb-[10px]"
                  src="src/components/Productsicons/Fill Heart.svg"
                  alt=""
                />
                <img src="src/components/Productsicons/Fill Eye.svg" alt="" />
              </div>
            </div>
            <h1 className="text-center cursor-pointer w-[100%] py-[10px] mt-[20px] text-[19px] font-serif text-[#F5F5F5] hover:bg-[black] hover:text-[white]">
              Add To Cart
            </h1>
          </div>
          <div className=" py-[15px]">
            <h1 className="text-[17px] font-serif">GP11 Shooter USB Gamepad</h1>
            <div className="flex gap-[5px]">
              <h1 className="text-[20px] text-[#DB4444]">$660</h1>
              <HoverRating />
              <h1>(55)</h1>
            </div>
          </div>
        </div>
        <div className="xs:w-[75%] sm:w-[50%] md:w-[40%] lg:w-[28%] xl:w-[23%]">
          <div className="bg-[#F5F5F5] h-[300px] pt-[35px]">
            <div className="flex justify-end py-[15px] px-[20px] ">
              <img
                className="w-[80%]"
                src="src/components/Productsicons/Frame 608 (2).svg"
                alt=""
              />
              <div className="pl-[25px]">
                <img
                  className="pb-[10px]"
                  src="src/components/Productsicons/Fill Heart.svg"
                  alt=""
                />
                <img src="src/components/Productsicons/Fill Eye.svg" alt="" />
              </div>
            </div>
            <h1 className="text-center cursor-pointer w-[100%] py-[10px] text-[19px] font-serif text-[#F5F5F5] hover:bg-[black] hover:text-[white]">
              Add To Cart
            </h1>
          </div>
          <div className=" py-[15px]">
            <h1 className="text-[17px] font-serif">Quilted Satin Jacket</h1>
            <div className="flex gap-[5px]">
              <h1 className="text-[20px] text-[#DB4444]">$660</h1>
              <HoverRating />
              <h1>(55)</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-[50px] flex-wap ">
        <button className="bg-[#DB4444] hover:bg-[#DB1111] px-[50px] py-[10px] text-[20px] text-[white] font-serif rounded-[6px]">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default Products;
