import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Catagories = () => {
  const navigate = useNavigate();
  const [selectedDiv, setSelectedDiv] = useState(null);
  const handleCategoryClick = (id) => {
    navigate(`/catagorepage`, { state: { id } });
  };
  return (
    <div className=' dark:text-white'>
     
      
      <div className='flex justify-center gap-[40px] mt-[100px] max:flex-wrap dark:text-[#000]'>
        <div
          className={`w-[170px] h-[145px] rounded-[4px] border-[1px] border-solid cursor-pointer   ${selectedDiv === 'phone' ? 'bg-[#DB4444] text-white' : 'border-[#0000004D] dark:bg-[#fff]'}`}
          onClick={() => handleCategoryClick(1)} 
        >
          <div className='flex justify-center items-center mt-[20px]'>
            <img src={selectedDiv === 'phone' ? "/src/components/TamimCatagories/catagoriesimages/Category-CellPhone (1).png" : "/src/components/TamimCatagories/catagoriesimages/phone.png"} alt="" />
          </div>
          <h1 className='text-center mt-[10px]'>Phones</h1>
        </div>

        <div
          className={`w-[170px] h-[145px] rounded-[4px] border-[1px] border-solid cursor-pointer  ${selectedDiv === 'computer' ? 'bg-[#DB4444] text-white' : 'border-[#0000004D] dark:bg-[#fff]'}`}
          onClick={() => handleCategoryClick(2)} 
        >
          <div className='flex justify-center items-center mt-[20px]'>
            <img src={selectedDiv === 'computer' ? "/src/components/TamimCatagories/catagoriesimages/Category-Computer (1).png" : "/src/components/TamimCatagories/catagoriesimages/Category-Computer.png"} alt=""
             />
          </div>
          <h1 className='text-center mt-[10px]'>Computers</h1>
        </div>

        <div
          className={`w-[170px] h-[145px] rounded-[4px] border-[1px] border-solid cursor-pointer  ${selectedDiv === 'smartwatch' ? 'bg-[#DB4444] text-white' : 'border-[#0000004D] dark:bg-[#fff]'}`}
          onClick={() => handleCategoryClick(3)} 
        >
          <div className='flex justify-center items-center mt-[20px]'>
            <img src={selectedDiv === 'smartwatch' ? "/src/components/TamimCatagories/catagoriesimages/Category-SmartWatch (1).png" : "/src/components/TamimCatagories/catagoriesimages/Category-SmartWatch.png"} alt="" />
          </div>
          <h1 className='text-center mt-[10px]'>SmartWatch</h1>
        </div>

        <div
          className={`w-[170px] h-[145px] rounded-[4px] border-[1px] border-solid cursor-pointer  ${selectedDiv === 'camera' ? 'bg-[#DB4444] text-white' : 'border-[#0000004D] dark:bg-[#fff]'}`}
          onClick={() => handleCategoryClick(4)} 
        >
          <div className='flex justify-center items-center mt-[20px]'>
            <img src={selectedDiv === 'camera' ? "/src/components/TamimCatagories/catagoriesimages/Category-Camera.png" : "/src/components/TamimCatagories/catagoriesimages/camera.png"} alt="" />
          </div>
          <h1 className='text-center mt-[10px]'>Camera</h1>
        </div>

        <div
          className={`w-[170px] h-[145px] rounded-[4px] border-[1px] border-solid cursor-pointer  ${selectedDiv === 'headphones' ? 'bg-[#DB4444] text-white' : 'border-[#0000004D] dark:bg-[#fff]'}`}
          onClick={() => handleCategoryClick(5)} 
        >
          <div className='flex justify-center items-center mt-[20px]'>
            <img src={selectedDiv === 'headphones' ? "/src/components/TamimCatagories/catagoriesimages/Category-Headphone (1).png" : "/src/components/TamimCatagories/catagoriesimages/Category-Headphone.png"} alt="" />
          </div>
          <h1 className='text-center mt-[10px]'>HeadPhones</h1>
        </div>

        <div
          className={`w-[170px] h-[145px] rounded-[4px] border-[1px] border-solid cursor-pointer  ${selectedDiv === 'gaming' ? 'bg-[#DB4444] text-white' : 'border-[#0000004D] dark:bg-[#fff]'}`}
          onClick={() => handleCategoryClick(6)} 
        >
          <div className='flex justify-center items-center mt-[20px]'>
            <img src={selectedDiv === 'gaming' ? "/src/components/TamimCatagories/catagoriesimages/Category-Gamepad (1).png" : "/src/components/TamimCatagories/catagoriesimages/Category-Gamepad.png"} alt="" />
          </div>
          <h1 className='text-center mt-[10px]'>Gaming</h1>
        </div>
      </div>

    </div>
  )
}

export default Catagories