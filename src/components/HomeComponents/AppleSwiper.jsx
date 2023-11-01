import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import apple from '../../assets/homeImg/apple.png'
import applePhone from '../../assets/homeImg/phoneApple.png'

export default function SwipeApple() {
    return (
        <div className='bg-black'>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: true
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <div className="text-[#000]">
                    <SwiperSlide>
                        <div className="py-[16px] pl-[34px] md:pl-[64px] md:flex justify-between items-center">
                            <div className="text-[#fff] mb-[40px] md:mb-0">
                                <div className="mb-[20px] flex gap-[24px]">
                                    <img src={apple} alt="" />
                                    <p className='text-[#FAFAFA]'>iPhone 14 Series</p>
                                </div>
                                <h2 className='mb-[20px] text-[32px] md:text-[48px] font-[600]'>Up to 10% <br /> off Voucher</h2>
                                <p className='text-[#FAFAFA]'>Shop Now</p>
                            </div>
                            <div className="">
                                <img src={applePhone} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="py-[16px] pl-[34px] md:pl-[64px] md:flex justify-between items-center">
                            <div className="text-[#fff] mb-[40px] md:mb-0">
                                <div className="mb-[20px] flex gap-[24px]">
                                    <img src={apple} alt="" />
                                    <p className='text-[#FAFAFA]'>iPhone 14 Series</p>
                                </div>
                                <h2 className='mb-[20px] text-[32px] md:text-[48px]'>Up to 10% <br /> off Voucher</h2>
                                <p className='text-[#FAFAFA]'>Shop Now</p>
                            </div>
                            <div className="">
                                <img src={applePhone} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="py-[16px] pl-[34px] md:pl-[64px] md:flex justify-between items-center">
                            <div className="text-[#fff] mb-[40px] md:mb-0">
                                <div className="mb-[20px] flex gap-[24px]">
                                    <img src={apple} alt="" />
                                    <p className='text-[#FAFAFA]'>iPhone 14 Series</p>
                                </div>
                                <h2 className='mb-[20px] text-[32px] md:text-[48px]'>Up to 10% <br /> off Voucher</h2>
                                <p className='text-[#FAFAFA]'>Shop Now</p>
                            </div>
                            <div className="">
                                <img src={applePhone} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    
                    
                </div>
            </Swiper>
        </div>
    );
}
