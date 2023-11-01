import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

  const naviagte = useNavigate()

  return (
    <div>

      <br /><br /><br /><br />

      <div className='m-auto w-[85%]'>
        <span className='text-black dark:text-white'><b className='text-[#7F7F7F] font-normal'>Home /</b> 404 Error</span>
      </div>

      <br /><br /><br /><br /><br /><br />

      <div className='m-auto w-[85%] flex flex-col justify-center gap-[80px]'>
        <div className='flex flex-col justify-center gap-[40px]'>
          <h1 className='text-black dark:text-white text-[110px] font-medium leading-[115px] tracking-[3.3px] text-center'>404 Not Found</h1>
          <p className='text-black dark:text-white text-[16px] leading-[24px] text-center'>Your visited page not found. You may go home page.</p>
        </div>
        <div className='flex justify-center'>
          <button onClick={() => naviagte("/")} className='w-[254px] h-[56px] rounded-[4px] bg-[#DB4444] text-white text-[16px] font-medium leading-[24px]'>Back to home page</button>
        </div>
      </div>

      <br /><br /><br /><br /><br /><br />

    </div>
  )
}

export default NotFound