import React from 'react'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    
    const navigate = useNavigate()

  return (
    <div>
        <button onClick={() => navigate("checkout")} className='bg-slate-500 text-white font-medium'>☻ MuhammadSurur ☻</button>
    </div>
  )
}

export default Cart