<<<<<<< HEAD
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const CartList = () => {
  const navigate = useNavigate()

  const [cart, setCart] = useState({});
  const [product, setProduct] = useState({});

  useEffect(() => {
    const product = JSON.parse(localStorage.getItem('product'));
    console.log('Product:', product);

    setCart(JSON.parse(localStorage.getItem('cart')));
    setProduct(product);
    
  }, []);


 console.log(product)
console.log(cart)




=======
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../HomeComponents/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { GetCart } from "../../../reducers/onlineShop";
const CartList = () => {
  const cartObj = useSelector((store) => store.onlineShop.cartObj);
  console.log(cartObj);

  console.log(cartObj);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetCart());
  }, [dispatch]);
  const navigate = useNavigate();
  const [products, setProducts] = useState([
    {
      name: "LCD Monitor",
      price: 650,
      image: "/src/assets/Cartimages/Monitor-Cart-Small.png",
      quantity: 2,
    },
    {
      name: "H1 Gamepad",
      price: 800,
      image: "/src/assets/Cartimages/Gamepad-Cart-Small.png",
      quantity: 3,
    },
  ]);
>>>>>>> 5acc7f17bce63067daf2890e62511e057e743df3

  const [total, setTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    let subTotal = 0;
<<<<<<< HEAD
    Object.values(cart).forEach(product => {
   
      // Remove the dollar sign from product.price and convert to a number
      const price = Number(product.price.replace('$', ''));
      const quantity = Number(product.quantity);

      if (!isNaN(price) && !isNaN(quantity)) {
        total += price * quantity;
        subTotal += price * quantity;
      }
    
=======
    products.forEach((product) => {
      total += product.price * product.quantity;
      subTotal += product.price * product.quantity;
>>>>>>> 5acc7f17bce63067daf2890e62511e057e743df3
    });
    setTotal(total);
    setSubTotal(subTotal);
  }, [cart]);
  
  
  const handleQuantityChange = (index, event) => {
    const newCart = {...cart};
    const product = Object.values(newCart)[index];
    product.quantity = Number(event.target.value);
    console.log(product.quantity)
    setCart(newCart);
  };


  const handleRemove = (name) => {
    const newCart = {...cart};
    delete newCart[name];
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
    console.log('Updated cart:', newCart);
  };
  
  
  
  return (
<<<<<<< HEAD
    <div className=' pt-[50px]'>


    <div className='mt-[00px] ml-[350px] max2:ml-[100px] max3:ml-[0] max3:text-center gap-[5px] dark:text-white'>
      <h1 className='text-[gray]'>Home <span className='text-[10px]'>/</span><span className='text-[black] dark:text-white'> Cart</span></h1>
    </div>
    <div className='grid grid-cols-5 gap-[40px] mt-[100px] items-center w-[80%] mx-auto max:flex-wrap justify-center ml-[320px] max3:ml-[0] dark:text-white' >
      <h1 className='max600:text-[13px]'>Product</h1>
      <h1 className='max600:text-[13px]'>Price</h1>
      <h1 className='max600:text-[13px]'>Quantity</h1>
      <h1 className='max600:text-[13px]'>Subtotal</h1>
    <h1 className='max600:text-[13px]'>Delete</h1>
      {Object.values(cart).map((product, index) =>  (
        <React.Fragment key={index}>
          <div className='flex gap-[25px] items-center max:flex-wrap dark:text-white max:flex-wrap ' >
            <img src={product.img} alt="" className='self-start object-cover w-12 h-12' />
            <h1 className='max600:text-[13px]'>{product.name}</h1>
          </div>
          <h1 className='dark:text-white max600:text-[10px]'>{product.price}</h1>
          <input type="number" value={product.quantity} onChange={(e) => handleQuantityChange(index, e)} className='w-[72px] max600:w-[50px] h-[42px] border-[1.5px] border-solid border-[#00000066] dark:bg-[#272727] pl-[25px] rounded-[4px]' />
          <h1 className='max600:text-[13px]'>
  <del>{product.price}</del> 
  {` ${(0.6 * Number(product.price.replace('$', ''))).toFixed(2)}`}
</h1>

          <button onClick={() => handleRemove(product.name)} className='mr-[300px] max600:text-[13px]'>Remove</button>
        </React.Fragment>
        
      ))}


    </div>
    
    
    
    
    <div className='flex justify-around mt-[100px] max:flex-wrap gap-[10px] dark:text-white '>
      <button className='w-[218px] h-[56px] rounded-[4px] border-[1px] border-solid border-[#00000080] dark:border-[white]' onClick={()=>navigate("/")}>Return To Shop</button>
      <button className='w-[218px] h-[56px] rounded-[4px] border-[1px] border-solid border-[#00000080] dark:border-[white]'>Update Cart</button>
    </div>
    
    <div className='flex gap-[20px] mt-[100px] ml-[360px] max:flex-wrap max3:ml-[0] max3:justify-center'>
      <input type="text" className='w-[250px] h-[56px]  border-[1px] border-solid border-[#000000] pl-[20px]' placeholder='Coupon Code'  />
      <button className='w-[180px] h-[56px] bg-[#DB4444] text-white rounded-[4px]'>Apply Coupon</button>
    </div>
    
    
    <div className='flex justify-end mr-[340px] mt-[-100px] max2:justify-center max:m-[0] max2:pl-[20px] max2:mt-[100px] dark:text-white '>
      <div className='w-[450px]  max600:w-[350px] max6:w-[320px] h-[380px] border-[1px] border-solid border-[#000000] dark:border-[white] rounded-[4px] pl-[30px] '>
    <h1 className='text-[20px] font-medium mt-[20px]'>Cart Total</h1>
    <div className='flex gap-[230px] max600:gap-[200px] max6:gap-[180px] pt-[20px]'>
      <h1>Subtotal:</h1>
      <h1 className='max600:text-[13px]'>
    <del>${subTotal.toFixed(2)}</del> 
    {` $${(0.6 * subTotal).toFixed(2)}`}
  </h1>
    </div>
    <div>
    <button className='h-[1px] w-[90%] border-[1px]  border-[#000000] dark:border-[white]'></button>
    </div>
    
    <div className='flex gap-[230px] max600:gap-[170px] pt-[20px]'>
      <h1>Shipping:</h1>
      <h1>Free</h1>
    </div>
    <div>
    <button className='h-[1px] w-[90%] border-[1px]  border-[#000000] dark:border-[white]'></button>
    </div>
    <div className='flex gap-[260px] max600:gap-[230px] max6:gap-[210px] pt-[20px]'>
      <h1>Total</h1>
      <h1 className='max600:text-[13px]'>
    <del>${total.toFixed(2)}</del> 
    {` $${(0.6 * total).toFixed(2)}`}
  </h1>
    </div>
    <div className='flex pl-[70px] pt-[20px]'>
    <button className='w-[260px] h-[56px] max600:w-[200px] bg-[#DB4444] text-white rounded-[4px]' onClick={() => navigate("/checkout")} >Procees to checkout</button>
    </div>
=======
    <div className=" w-[90%] mx-auto pt-[50px]">
      <div>
        {/* {cartObj.map((e, i) => {
          return (
            <div key={e.id}>
              <ProductCard
                // <img src={"http://localhost:3000/" + products[3]?.media[1]?.src} alt="s" />
                e={e}
                // img={"http://localhost:3000/" + cartObj[i]?.media[1]?.src}
                name={e?.name}
                price={e?.price}
              />
            </div>
          );
        })} */}
>>>>>>> 5acc7f17bce63067daf2890e62511e057e743df3
      </div>
      <div className="mt-[00px] ml-[350px] max2:ml-[100px] max3:ml-[0] max3:text-center gap-[5px] dark:text-white">
        <h1 className="text-[gray]">
          Home <span className="text-[10px]">/</span>
          <span className="text-[black] dark:text-white"> Cart</span>
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-[50px] mt-[100px] items-center w-[80%] mx-auto max:flex-wrap justify-center ml-[320px] max3:ml-[0] dark:text-white">
        <h1>Product</h1>
        <h1>Price</h1>
        <h1>Quantity</h1>
        <h1>Subtotal</h1>

        {products.map((product, index) => (
          <React.Fragment key={index}>
            <div className="flex gap-[25px] items-center max:flex-wrap dark:text-white">
              <img
                src={product.image}
                alt=""
                className="self-start object-cover"
              />
              <h1>{product.name}</h1>
            </div>
            <h1 className="dark:text-white">${product.price}</h1>
            <input
              type="number"
              value={product.quantity}
              onChange={(e) => handleQuantityChange(index, e)}
              className="w-[72px] h-[42px] border-[1.5px] border-solid border-[#00000066] dark:bg-[#272727] pl-[25px] rounded-[4px]"
            />
            <h1>${product.price * product.quantity}</h1>{" "}
            {/* Multiply price by quantity for subtotal */}
          </React.Fragment>
        ))}
      </div>

      <div className="flex justify-around mt-[100px] max:flex-wrap gap-[10px] dark:text-white ">
        <button className="w-[218px] h-[56px] rounded-[4px] border-[1px] border-solid border-[#00000080] dark:border-[white]">
          Return To Shop
        </button>
        <button className="w-[218px] h-[56px] rounded-[4px] border-[1px] border-solid border-[#00000080] dark:border-[white]">
          Update Cart
        </button>
      </div>

      <div className="flex gap-[20px] mt-[100px] ml-[360px] max:flex-wrap max3:ml-[0] max3:justify-center">
        <input
          type="text"
          className="w-[250px] h-[56px]  border-[1px] border-solid border-[#000000] pl-[20px]"
          placeholder="Coupon Code"
        />
        <button className="w-[180px] h-[56px] bg-[#DB4444] text-white rounded-[4px]">
          Apply Coupon
        </button>
      </div>

      <div className="flex justify-end mr-[340px] mt-[-100px] max2:justify-center max:m-[0] max2:pl-[20px] max2:mt-[100px] dark:text-white ">
        <div className="w-[450px]  max600:w-[350px] max6:w-[320px] h-[340px] border-[1px] border-solid border-[#000000] dark:border-[white] rounded-[4px] pl-[30px] ">
          <h1 className="text-[20px] font-medium mt-[20px]">Cart Total</h1>
          <div className="flex gap-[230px] max600:gap-[200px] max6:gap-[180px] pt-[20px]">
            <h1>Subtotal:</h1>
            <h1>${subTotal}</h1>
          </div>
          <div>
            <button className="h-[1px] w-[90%] border-[1px]  border-[#000000] dark:border-[white]"></button>
          </div>

          <div className="flex gap-[230px] max600:gap-[170px] pt-[20px]">
            <h1>Shipping:</h1>
            <h1>Free</h1>
          </div>
          <div>
            <button className="h-[1px] w-[90%] border-[1px]  border-[#000000] dark:border-[white]"></button>
          </div>
          <div className="flex gap-[260px] max600:gap-[230px] max6:gap-[210px] pt-[20px]">
            <h1>Total</h1>
            <h1>{total}</h1>
          </div>
          <div className="flex pl-[70px] pt-[20px]">
            <button
              className="w-[260px] h-[56px] max600:w-[200px] bg-[#DB4444] text-white rounded-[4px]"
              onClick={() => navigate("/checkout")}
            >
              Procees to checkout
            </button>
          </div>
        </div>
      </div>
      <div className="h-[100px] w-[100%] bg-white dark:bg-[#272727] "></div>
    </div>
  );
};

export default CartList;
