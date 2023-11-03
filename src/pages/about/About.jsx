import React from 'react'

const About = () => {
  return (
    <div>
 <div>
            <div className=' xs:hidden sm:block  w-[80%]   ml-[10%] mt-[60px]'>
            <p><span className=' text-gray-700'>Home</span> / My Account</p>
            </div>
            <div className='  md:flex-nowrap  md:flex justify-between xs:flex-wrap   xs:ml-[5%]  w-[90%] sm:ml-[10%]'>
             <div>
                <p className=' text-[50px] font-[600] xs:mt-[80px] sm:mt-[200px]' >Our Story</p>
                <p className=' sm:w-[525px]  mt-[40px] text-left '>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
             <p className=' sm:w-[500px] mt-[40px] text-left'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
             </div>
             <div className=' xs:mt-[10px] sm:mt-0'>
              <img className=' sm:w-[95%] sm:m-auto ' src="src/components/Safisrc/Side Image.png" alt="" />
             </div>
            </div>

      <div className=' xs:flex-wrap gap-[20px] mt-[140px] flex justify-center w-[80%] ml-[10%]'>
        
        <div id='border1' className='  px-[40px] py-[20px] rounded-[5px] '>
            <div className=' flex justify-center'>
            <img src="src/components/Safisrc/Services (3).png" alt="" />
            </div>
             <p className=' text-center text-[35px] mt-[15px] font-[600]'> 10.5k </p>
             <p className=' text-center'>Sallers active our site</p>
        </div>
        <div id='border1' className=' bg-[#DB4444] text-white  px-[40px] py-[20px] rounded-[5px] '>
            <div className=' flex justify-center'>
            <img src="src/components/Safisrc/Services (4).png" alt="" />
            </div>
             <p className=' text-center text-[35px] mt-[15px] font-[600]'>33k </p>
             <p className=' text-center'>Mopnthly Produduct Sale</p>
        </div>
        <div id='border1' className='  px-[40px] py-[20px] rounded-[5px] '>
            <div className=' flex justify-center'>
            <img src="src/components/Safisrc/Services (5).png" alt="" />
            </div>
             <p className=' text-center text-[35px] mt-[15px] font-[600]'>45.5k</p>
             <p className=' text-center'>Customer active in our site</p>
        </div>
        <div id='border1' className='  px-[40px] py-[20px] rounded-[5px] '>
            <div className=' flex justify-center'>
            <img src="src/components/Safisrc/Services (6).png" alt="" />
            </div>
             <p className=' text-center text-[35px] mt-[15px] font-[600]'>25k</p>
             <p className=' text-center'>Anual gross sale in our site</p>
        </div>
      </div>
    
         
         <div className='  xs:flex-wrap gap-[30px] flex justify-center mt-[100px] w-[80%] ml-[10%]'>
             <div>
              <img src="src/components/Safisrc/Frame 874.png" alt="" />
              <p className=' text-[24px] mt-[10px] font-[600]'>Tom Cruise</p>
              <p className=' mt-[5px]'>Founder & Chairman</p>
              <img className='  mt-[5px]' src="src/components/Safisrc/Frame 877.png" alt="" />
             </div>
             <div>
              <img src="src/components/Safisrc/Frame 875.png" alt="" />
              <p className=' text-[24px] mt-[10px] font-[600]'>Emma Watson</p>
              <p className=' mt-[5px]'>Managing Director</p>
              <img className='  mt-[5px]' src="src/components/Safisrc/Frame 877.png" alt="" />
             </div>
             <div>
              <img src="src/components/Safisrc/Frame 876.png" alt="" />
              <p className=' text-[24px] mt-[10px] font-[600]'>Will Smith</p>
              <p className=' mt-[5px]'>Product Designer</p>
              <img className='  mt-[5px]' src="src/components/Safisrc/Frame 877.png" alt="" />
             </div>
         </div>
            
         <div className=' xs:flex-wrap flex w-[70%] justify-center gap-[80px] ml-[15%]  mt-[200px]' >
<div>
  <div className=' flex  justify-center'>
  <img src="src/components/Safisrc/Services.png" alt="" />

  </div>
  <p className=' text-center  font-[600] text-[18px]  mt-[25px]'>FREE AND FAST DELIVERY</p>
  <p className=' w-[300px]   mt-[10px] text-gray-700'>Free delivery for all orders over $140</p>
</div>
<div>
  <div className=' flex  justify-center'>
  <img src="src/components/Safisrc/Services (1).png" alt="" />

  </div>
  <p className=' text-center  font-[600] text-[18px]  mt-[25px]'>24/7 CUSTOMER SERVICE</p>
  <p className='  w-[250px]  mt-[10px] text-gray-700'>Friendly 24/7 customer support</p>
</div>
<div>
  <div className=' flex  justify-center'>
  <img src="src/components/Safisrc/Services (2).png" alt="" />

  </div>
  <p className=' text-center  font-[600] text-[18px]  mt-[25px]'>MONEY BACK GUARANTEE</p>
  <p className='  w-[260px]  mt-[10px] text-gray-700'>We reurn money within 30 days</p>
</div>
    </div>


          </div>

    </div>
  )
}

export default About