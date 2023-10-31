import React from "react";

const CardA = ({ img1, img2, img3, img4, p1, span1, span2 }) => {
  return (
    <div className=" md:h-[250px] md:w-[270px] h-[350px] w-[370px]  justify-self-center">
      <div className="bg-[#F5F5F5] grid relative  h-[250px] w-[270px]  py-3 rounded">
        <div className="justify-self-end   pr-5">
          <img src={img1} className="mb-2 w-[100%]" alt="" />
          <img src={img2} alt="" />
        </div>
        <div className="pb-6 absolute py-16 justify-self-center self-center">
          <img src={img3} alt="" />
        </div>
      </div>
      <div className="mt-3">
        <p className="font-semibold">{p1} </p>
        <p className="font-semibold flex gap-3 py-1.5">
          <span className="text-[#DB4444]">{span1}</span>
          <span className="text-gray-500">
            <s>{span2}</s>
          </span>
        </p>
        <span className="flex items-center gap-1">
          <img src={img4} alt="" />
          <span className="text-gray-500 text-xs font-bold">(65)</span>
        </span>
      </div>
    </div>
  );
};

export default CardA;
