import React from "react";
import gamepad from "./img/Gamepad-Cart-Small.svg";
import monitor from "./img/Monitor-Cart-Small.svg";
import TextField from "@mui/material/TextField";

import banks from "./img/Frame 834.svg";
import { bgcolor } from "@mui/system";
const Checkout = () => {
  return (
    <div className="my-14   lg:mx-0 mx-auto">
      <div className="w-[90%] mx-auto">
        <p className="text-gray-400 text-xs">
          Account  /  My Account  /  Product  /  View Cart  /{" "}
          <span className="text-[#000000]">  CheckOut</span>
        </p>
      </div>
      <div className="w-[90%] mt-16 mx-auto">
        <p className="text-4xl">Billing Details</p>
        <div className="grid lg:grid-cols-2 justify-center grid-cols-1  mx-auto">
          <div className="grid gap-8 mt-5">
            <TextField
              sx={{ bgcolor: "#F5F5F5", height: "55px", width: "80%" }}
              id="outlined-basic"
              label="First Name*"
              variant="outlined"
            />

            <TextField
              sx={{ bgcolor: "#F5F5F5", height: "55px", width: "80%" }}
              id="outlined-basic"
              label="Last name*"
              variant="outlined"
            />
            <TextField
              sx={{ bgcolor: "#F5F5F5", height: "55px", width: "80%" }}
              id="outlined-basic"
              label="Street address"
              variant="outlined"
            />
            <TextField
              sx={{ bgcolor: "#F5F5F5", height: "55px", width: "80%" }}
              id="outlined-basic"
              label="Street address"
              variant="outlined"
            />
            <TextField
              sx={{ bgcolor: "#F5F5F5", height: "55px", width: "80%" }}
              id="outlined-basic"
              label="Phone number"
              variant="outlined"
            />
            <span className="flex items-center gap-5">
              <input type="checkbox" />
              <p>Save this information for faster check-out next time</p>
            </span>
          </div>
          <div className="lg:w-[70%] w-[95%] mt-16 lg:mt-10 mx-auto">
            <div className="flex w-[85%] mr-auto mb-5 items-center justify-between">
              <span className="flex gap-8 items-center">
                {" "}
                <img src={gamepad} alt="" />
                <p>H1 Gamepad</p>
              </span>
              <span>$650</span>
            </div>
            <div className="flex w-[85%] mr-auto items-center justify-between">
              <span className="flex gap-8 items-center">
                {" "}
                <img src={monitor} alt="" />
                <p>LCD Monitor</p>
              </span>
              <span>$1100</span>
            </div>
            <div className="w-[85%] mr-auto flex justify-between mt-10 border-b-2 pb-3">
              <span>Subtotal: </span>
              <span> $1750</span>
            </div>
            <div className="w-[85%] mr-auto flex justify-between mt-5 border-b-2 pb-3">
              <span>Shipping: </span>
              <span> Free</span>
            </div>
            <div className="w-[85%] mr-auto flex justify-between mt-5 pb-3">
              <span>Total: </span>
              <span> $1750</span>
            </div>
            <div className="w-[85%] flex justify-between mt-5 mr-auto">
              <span className="flex gap-5 ">
                <input type="radio" className="w-5 " />
                <span className="self-center">Bank</span>
              </span>
              <img src={banks} alt="" />
            </div>
            <div className="w-[85%] mr-auto mt-5">
              <span className="flex gap-5 ">
                <input type="radio" className="w-5 " />
                <span className="self-center">Cash on delivery</span>
              </span>
            </div>
            <div className="mt-5 grid grid-cols-[1.7fr,1fr] gap-5">
              <input
                type="text"
                placeholder="Coupon Code"
                className="border outline-none h-14 pl-5 rounded-md border-black "
              />
              <button className="bg-[#DB4444] h-14 text-white rounded-md">
                Apply Coupon
              </button>
            </div>
            <button className="mt-5 w-[40%] bg-[#DB4444] h-14 text-white rounded-md">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
