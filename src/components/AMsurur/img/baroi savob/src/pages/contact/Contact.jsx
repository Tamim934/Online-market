import React from "react";
import "../../App.css";
import phoneicon from "../../assets/phoneicon.svg";
import mailicon from "../../assets/mailicon.svg";

const Contact = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />

      <div className="mx-auto w-[85%]">
        <span className="text-black dark:text-white">
          <b className="text-[#7F7F7F] font-normal">Home /</b> Contact
        </span>
      </div>

      <br />
      <br />
      <br />
      <br />

      <div className="m-auto w-[85%] flex flex-wrap items-center gap-[30px]">
        <div className="phoneandmail w-[340px] h-[457px] rounded-[4px] pt-[40px] pb-[51px] px-[35px] bg-white dark:bg-[#373737]">
          <div className="flex flex-col gap-[24px]">
            <div className="flex items-center gap-[16px]">
              <img src={phoneicon} alt="" />
              <span className="text-black dark:text-white text-[16px] font-medium leading-[24px]">
                Call To Us
              </span>
            </div>
            <div className="flex flex-col gap-[16px] pb-[32px]">
              <p className="text-black dark:text-white text-[14px] leading-[21px]">
                We are available 24/7, 7 days a week.
              </p>
              <p className=" text-black dark:text-white text-[14px] leading-[21px]">
                Phone: +8801611112222
              </p>
            </div>
            <hr />
          </div>
          <div className="flex flex-col gap-[24px] pt-[32px]">
            <div className="flex items-center gap-[16px]">
              <img src={mailicon} alt="" />
              <span className="text-black dark:text-white text-[16px] font-medium leading-[24px]">
                Write To US
              </span>
            </div>
            <div className="flex flex-col gap-[16px]">
              <p className="text-black dark:text-white text-[14px] leading-[21px]">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className=" text-black dark:text-white text-[14px] leading-[21px]">
                Emails: customer@exclusive.com
              </p>
              <p className=" text-black dark:text-white text-[14px] leading-[21px]">
                Emails: support@exclusive.com
              </p>
            </div>
          </div>
        </div>

        <div className="phoneandmail w-[300px] sm:w-[600px] lg:w-[800px] lg:h-[457px] rounded-[4px] py-[40px] pl-[31px] pr-[32px] bg-white dark:bg-[#373737]">
          <div className="flex flex-col gap-[32px]">
            <div className="flex flex-wrap items-center gap-[16px]">
              <input
                type="text"
                placeholder="Your Name*"
                className="w-[235px] h-[50px] rounded-[4px] bg-[#F5F5F5] dark:bg-[#474747] text-[#7A7A7A] text-[12px] font-medium py-[13px] px-[16px] outline-none"
              />
              <input
                type="email"
                placeholder="Your Email*"
                className="w-[235px] h-[50px] rounded-[4px] bg-[#F5F5F5] dark:bg-[#474747] text-[#7A7A7A] text-[12px] font-medium py-[13px] px-[16px] outline-none"
              />
              <input
                type="tel"
                placeholder="Your Phone*"
                className="w-[235px] h-[50px] rounded-[4px] bg-[#F5F5F5] dark:bg-[#474747] text-[#7A7A7A] text-[12px] font-medium py-[13px] px-[16px] outline-none"
              />
            </div>
            <div>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Your Massage"
                className="w-[235px] sm:w-[537px] lg:w-[737px] h-[207px] rounded-[4px] bg-[#F5F5F5] dark:bg-[#474747] text-[#7A7A7A] text-[12px] font-medium pt-[13px] pl-[16px] outline-none"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button className="w-[215px] h-[56px] rounded-[4px] bg-[#DB4444] text-white text-[16px] font-medium leading-[24px]">
                Send Massage
              </button>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Contact;
