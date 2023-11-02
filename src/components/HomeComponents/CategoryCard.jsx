import React from 'react'

const CategoryCard = ({image, text}) => {
  return (
    <div className='mx-auto w-[65%] sm:w-[45%] md:w-[30%] dark:text-[#000] lg:w-[15%] py-[25px] rounded-[4px] border-[1px] border-[rgba(0, 0, 0, 0.30)] mb-[20px] dark:bg-[#fff] dark:hover:bg-[#DB4444] hover:bg-[#DB4444] hover:text-[#fff]'>
        <img className='mx-auto mb-[16px]' src={image} alt="" />
        <p className='text-center'>{text}</p>
    </div>
  )
}

export default CategoryCard