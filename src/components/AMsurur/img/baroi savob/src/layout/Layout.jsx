import React, { useEffect } from "react";
import "../App.css";
import { Link, Outlet, useLocation } from "react-router-dom";
import Switcher from "../components/Switcher";
import Burger from "../components/Burger";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import searchicon from "../assets/searchicon.svg";
import notificationicon from "../assets/notificationicon.svg";
import carticon from "../assets/carticon.svg";
import usericon from "../assets/usericon.svg";
import airplaneicon from "../assets/airplaneicon.svg";
import qrcode from "../assets/qrcode.svg";
import googleplay from "../assets/googleplay.svg";
import appstore from "../assets/appstore.svg";
import facebookicon from "../assets/facebookicon.svg";
import twittericon from "../assets/twittericon.svg";
import instagramicon from "../assets/instagramicon.svg";
import linkedinicon from "../assets/linkedinicon.svg";

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    AOS.init();
  }, []);

  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const active = localStorage.getItem("i18nextLng");

  return (
    <div>
      <div className="navbar m-auto overflow-x-hidden">
        <div className="bg-black">
          <div className="m-auto w-[85%] h-[48px] flex items-center justify-between sm:justify-center gap-[231px]">
            <p
              className="text-[#FAFAFA] text-[14px]"
              data-aos="fade-up"
              data-aos-duration="1250"
            >
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!   <b className="underline font-semibold">ShopNow</b>
            </p>
            <ul className="hidden lg:flex lg:gap-[8px] xl:absolute xl:right-[136px]">
              <li
                className="text-[16px] font-medium cursor-pointer"
                style={{ color: active == "en" ? "lime" : "lightgray" }}
                onClick={() => changeLanguage("en")}
                data-aos="fade-left"
                data-aos-duration="1250"
              >
                EN
              </li>
              <li
                className="text-[16px] font-medium cursor-pointer"
                style={{ color: active == "ru" ? "lime" : "lightgray" }}
                onClick={() => changeLanguage("ru")}
                data-aos="fade-left"
                data-aos-duration="1250"
              >
                RU
              </li>
            </ul>
          </div>
        </div>

        <br />
        <br />

        <div className="m-auto w-[85%] flex items-center  justify-between">
          <div>
            <h1
              className="text-black text-[24px] font-bold  leading-[24px] tracking-[0.72px]"
              data-aos="fade-right"
              data-aos-duration="1250"
            >
              Exclusive
            </h1>
          </div>
          <ul className="hidden xl:flex xl:gap-[48px] xl:text-[16px] xl:leading-[24px] text-black">
            <Link to="/">
              <li
                style={{
                  textDecoration: pathname == "/" ? "underline" : "none",
                }}
                className="cursor-pointer"
                data-aos="fade-down"
                data-aos-duration="1250"
              >
                Home
              </li>
            </Link>
            <Link to="contact">
              <li
                style={{
                  textDecoration: pathname == "/contact" ? "underline" : "none",
                }}
                className="cursor-pointer"
                data-aos="fade-down"
                data-aos-duration="1250"
              >
                Contact
              </li>
            </Link>
            <Link to="about">
              <li
                style={{
                  textDecoration: pathname == "/about" ? "underline" : "none",
                }}
                className="cursor-pointer"
                data-aos="fade-down"
                data-aos-duration="1250"
              >
                About
              </li>
            </Link>
            <Link to="signup">
              <li
                style={{
                  textDecoration: pathname == "/signup" ? "underline" : "none",
                }}
                className="cursor-pointer"
                data-aos="fade-down"
                data-aos-duration="1250"
              >
                Sign Up
              </li>
            </Link>
          </ul>
          <div className="flex items-center gap-[24px]">
            <input
              type="search"
              name=""
              id=""
              placeholder="What are you looking for?"
              className="w-[243px] h-[38px] rounded-[4px] bg-[#F5F5F5] text-[#7A7A7A] text-[12px] font-medium py-[7px] pl-[20px] pr-[12px] outline-none"
              data-aos="fade-left"
              data-aos-duration="1250"
            />
            <div className="flex items-center gap-[16px]">
              <Link to="wishlist">
                <img
                  src={notificationicon}
                  alt=""
                  data-aos="fade-left"
                  data-aos-duration="1250"
                />
              </Link>
              <Link to="cart">
                <img
                  src={carticon}
                  alt=""
                  data-aos="fade-left"
                  data-aos-duration="1250"
                />
              </Link>
              <Link to="account">
                <img
                  src={usericon}
                  alt=""
                  data-aos="fade-left"
                  data-aos-duration="1250"
                />
              </Link>
            </div>
            <div
              className="hidden lg:block"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <Switcher />
            </div>
            <div
              className="block lg:hidden"
              data-aos="zoom-in"
              data-aos-duration="1250"
            >
              <Burger />
            </div>
          </div>
        </div>

        <br />

        <hr data-aos="zoom-in" data-aos-duration="1250" />
      </div>
      <div className="dark:bg-[#272727]">
        <Outlet />
      </div>
      <div className="footer m-auto overflow-x-hidden">
        <div className="bg-black m-auto">
          <br />
          <br />
          <br />

          <div className="m-auto w-[85%] flex flex-col items-center gap-[48px] sm:flex-row sm:gap-0  sm:justify-between">
            <div
              className="flex flex-col gap-[24px]"
              data-aos="zoom-out-right"
              data-aos-duration="1250"
            >
              <h1 className="text-white text-[24px] font-bold leading-[24px] tracking-[0.72px]">
                Exclusive
              </h1>
              <h4 className="text-white text-[20px] font-medium leading-[28px]">
                Subscribe
              </h4>
              <div className="flex flex-col gap-[16px]">
                <p className="text-white text-[16px] leading-[24px] font-light">
                  Get 10% off your first order
                </p>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter your email"
                  className="w-[217px] h-[48px] rounded-[4px] bg-inherit text-[#7A7A7A] text-[12px] font-medium py-[12px] pl-[16px] border-[1.5px] border-white outline-none"
                />
              </div>
            </div>

            <div
              className="hidden xl:flex flex-col gap-[24px]"
              data-aos="zoom-in-right"
              data-aos-duration="1250"
            >
              <h4 className="text-white text-[20px] font-medium leading-[28px]">
                Support
              </h4>
              <div className="flex flex-col gap-[16px]">
                <p className="text-white text-[16px] leading-[24px] font-light">
                  111 Bijoy sarani, Dhaka,
                  <br />
                  DH 1515, Bangladesh.
                </p>
                <p className="text-white text-[16px] leading-[24px] font-light">
                  exclusive@gmail.com
                </p>
                <p className="text-white text-[16px] leading-[24px] font-light">
                  +88015-88888-9999
                </p>
              </div>
            </div>

            <div
              className="hidden md:flex flex-col gap-[24px]"
              data-aos="zoom-out-down"
              data-aos-duration="1250"
            >
              <h4 className="text-white text-[20px] font-medium leading-[28px]">
                Account
              </h4>
              <div className="flex flex-col gap-[16px]">
                <p className="text-white text-[16px] leading-[24px] font-light">
                  My Account
                </p>
                <p className="text-white text-[16px] leading-[24px] font-light">
                  Login / Register
                </p>
                <p className="text-white text-[16px] leading-[24px] font-light">
                  Cart
                </p>
                <p className="text-white text-[16px] leading-[24px] font-light">
                  Wishlist
                </p>
                <p className="text-white text-[16px] leading-[24px] font-light">
                  Shop
                </p>
              </div>
            </div>

            <div
              className="hidden xl:flex flex-col gap-[24px]"
              data-aos="zoom-in-left"
              data-aos-duration="1250"
            >
              <h4 className="text-white text-[20px] font-medium leading-[28px]">
                Quick Link
              </h4>
              <div className="flex flex-col gap-[16px]">
                <p className="text-white text-[16px] leading-[24px] font-light">
                  Privacy Policy
                </p>
                <p className="text-white text-[16px] leading-[24px] font-light">
                  Terms Of Use
                </p>
                <p className="text-white text-[16px] leading-[24px] font-light">
                  FAQ
                </p>
                <p className="text-white text-[16px] leading-[24px] font-light">
                  Contact
                </p>
              </div>
            </div>

            <div
              className="flex flex-col items-start gap-[24px]"
              data-aos="zoom-out-left"
              data-aos-duration="1250"
            >
              <h4 className="text-white text-[20px] font-medium leading-[28px]">
                Download App
              </h4>
              <div className="flex flex-col gap-[8px]">
                <p className="text-[#AFAFAF] text-[12px] font-medium leading-[18px]">
                  Save $3 with App New User Only
                </p>
                <div className="flex items-center gap-[8px]">
                  <div>
                    <img src={qrcode} alt="" />
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <img src={googleplay} alt="" />
                    <img src={appstore} alt="" />
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center gap-[24px]">
                <img src={facebookicon} alt="" />
                <img src={twittericon} alt="" />
                <img src={instagramicon} alt="" />
                <img src={linkedinicon} alt="" />
              </div>
            </div>
          </div>

          <br />
          <br />
          <br />

          <hr data-aos="zoom-in" data-aos-duration="1250" />

          <div className="h-[64px] flex justify-center items-center">
            <p
              className="text-[#3D3D3D]"
              data-aos="flip-down"
              data-aos-duration="1250"
            >
              © Copyright Rimel 2022. All right reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
