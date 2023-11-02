import React, { useState } from 'react'
import heart from '../../assets/homeImg/heart.png'
import eyes from '../../assets/homeImg/eyes.png'
import jostic from '../../assets/homeImg/jostic.svg'
import keyBoard from '../../assets/homeImg/keyboard.svg'
import TV from '../../assets/homeImg/TV.svg'
import chair from '../../assets/homeImg/chair.svg'
import Rating from './Rating'
import RatingStar from './Rating'


const ProductCard = ({ img, name, price }) => {

    const [buttonBuy, setButtonBuy] = useState(false)

    return (
        <div className='mx-auto sm:w-[47%] md:w-[31%] lg:w-[270px] mb-[30px]' onMouseLeave={() => setButtonBuy(false)} onMouseEnter={() => setButtonBuy(true)} onChange={(e) => setButtonBuy(e.target)}>
            <div className="bg-[#F5F5F5] rounded-[4px] mb-[16px] overflow-hidden h-[270px] flex flex-col " style={{justifyContent: buttonBuy? 'space-between': 'start'}}>
                <div className="flex justify-between items-center">
                    <div className="bg-[#DB4444] w-[55px] h-[26px] text-[#fff] flex items-center m-[12px]">
                        <p>-40%</p>
                    </div>
                    <img className='m-[12px]' src={heart} alt="" />
                </div>
                <div className="">
                    <img src={img} className='mx-auto object-cover m-auto' style={{ height: buttonBuy ? '83%' : '90%'}} alt="" />
                    <img src={eyes} className='absolute top-[50px] right-3 md:right-11' alt="" />
                </div>
                {
                    buttonBuy ?
                        <button className='w-[100%] h-[41px] text-[#fff] bg-black '>Add To Cart</button>
                        :
                        null
                }
            </div>
            <div className="">
                <h3 className='mb-[8px] font-[500]'>{name}</h3>
                <div className="mb-[8px] flex gap-[12px]">
                    <p className='text-[#DB4444] font-[500]'>{price}</p>
                    <p className='opacity-[0.5] line-through'>$1160</p>
                </div>
                <RatingStar />
            </div>

        </div>
    )
}

export default ProductCard