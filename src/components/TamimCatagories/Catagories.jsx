import React, { useState } from 'react'

const Catagories = () => {
 const [selectedDiv, setSelectedDiv] = useState(null);
  return (
    <div className='mt-[100px] dark:text-white'>
     <div className='flex gap-[10px] items-center ml-[390px] max2:ml-[300px] max3:ml-[0] max3:justify-center'>
<button className='bg-[#DB4444] h-[40px] w-[20px] rounded-[4px]'></button>
<h1 className='text-[#DB4444] font-medium'>Categories</h1>

     </div>
<div className='flex justify-around mt-[50px] max:flex-wrap'>
 <h1 className='text-[30px] font-medium'>Browse By Category</h1>
 <div className='flex gap-[5px]'>
 <img className=' cursor-pointer' src="/src/components/TamimCatagories/catagoriesimages/Fill With Left Arrow.png" alt="" />
 <img className=' cursor-pointer' src="/src/components/TamimCatagories/catagoriesimages/Fill with Right Arrow.png" alt="" />
 </div>
</div>
<div className='flex justify-center gap-[40px] mt-[100px] max:flex-wrap'>
      <div 
        className={`w-[170px] h-[145px] rounded-[4px] border-[1px] border-solid cursor-pointer  ${selectedDiv === 'phone' ? 'bg-[#DB4444] text-white' : 'border-[#0000004D]'}`} 
        onClick={() => setSelectedDiv('phone')}
      >
        <div className='flex justify-center items-center mt-[20px]'>
          <img src={selectedDiv === 'phone' ? "/src/components/TamimCatagories/catagoriesimages/Category-CellPhone (1).png" : "/src/components/TamimCatagories/catagoriesimages/phone.png"} alt="" />
        </div>
        <h1 className='text-center mt-[10px]'>Phones</h1>
      </div>

      <div 
        className={`w-[170px] h-[145px] rounded-[4px] border-[1px] border-solid cursor-pointer  ${selectedDiv === 'computer' ? 'bg-[#DB4444] text-white' : 'border-[#0000004D]'}`} 
        onClick={() => setSelectedDiv('computer')}
      >
        <div className='flex justify-center items-center mt-[20px]'>
          <img src={selectedDiv === 'computer' ? "/src/components/TamimCatagories/catagoriesimages/Category-Computer (1).png" : "/src/components/TamimCatagories/catagoriesimages/Category-Computer.png"} alt="" />
        </div>
        <h1 className='text-center mt-[10px]'>Computers</h1>
      </div>

      <div 
        className={`w-[170px] h-[145px] rounded-[4px] border-[1px] border-solid cursor-pointer  ${selectedDiv === 'smartwatch' ? 'bg-[#DB4444] text-white' : 'border-[#0000004D]'}`} 
        onClick={() => setSelectedDiv('smartwatch')}
      >
        <div className='flex justify-center items-center mt-[20px]'>
          <img src={selectedDiv === 'smartwatch' ? "/src/components/TamimCatagories/catagoriesimages/Category-SmartWatch (1).png" : "/src/components/TamimCatagories/catagoriesimages/Category-SmartWatch.png"} alt="" />
        </div>
        <h1 className='text-center mt-[10px]'>SmartWatch</h1>
      </div>

      <div 
        className={`w-[170px] h-[145px] rounded-[4px] border-[1px] border-solid cursor-pointer  ${selectedDiv === 'camera' ? 'bg-[#DB4444] text-white' : 'border-[#0000004D]'}`} 
        onClick={() => setSelectedDiv('camera')}
      >
        <div className='flex justify-center items-center mt-[20px]'>
          <img src={selectedDiv === 'camera' ? "/src/components/TamimCatagories/catagoriesimages/Category-Camera.png" : "/src/components/TamimCatagories/catagoriesimages/camera.png"} alt="" />
        </div>
        <h1 className='text-center mt-[10px]'>Camera</h1>
      </div>

      <div 
        className={`w-[170px] h-[145px] rounded-[4px] border-[1px] border-solid cursor-pointer  ${selectedDiv === 'headphones' ? 'bg-[#DB4444] text-white' : 'border-[#0000004D]'}`} 
        onClick={() => setSelectedDiv('headphones')}
      >
        <div className='flex justify-center items-center mt-[20px]'>
          <img src={selectedDiv === 'headphones' ? "/src/components/TamimCatagories/catagoriesimages/Category-Headphone (1).png" : "/src/components/TamimCatagories/catagoriesimages/Category-Headphone.png"} alt="" />
        </div>
        <h1 className='text-center mt-[10px]'>HeadPhones</h1>
      </div>

      <div 
        className={`w-[170px] h-[145px] rounded-[4px] border-[1px] border-solid cursor-pointer  ${selectedDiv === 'gaming' ? 'bg-[#DB4444] text-white' : 'border-[#0000004D]'}`} 
        onClick={() => setSelectedDiv('gaming')}
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