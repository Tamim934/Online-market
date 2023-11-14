import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@mui/material';


const Catagorepage = () => {
  
  const location = useLocation();
  const id = location.state.id;
  const [categories, setcategories] = useState(null);
  const [loading, setLoading] = useState(true);
  const api=`http://localhost:3000/api/categories/${id}`;
const navigate=useNavigate()
  const getData = async () => {
    try {
      const { data } = await axios.get(api);
      console.log(data)
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData().then(data => {
      setcategories(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; 
  }
  const handleCategoryClick = (product) => {
    localStorage.setItem('product', JSON.stringify(product));
    navigate(`/cart`);
  };
  





  
  return (
    <div className="flex flex-col items-center justify-center dark:text-white p-4">
      {categories ? (
        
        <>
        
        <div className='flex flex-wrap justify-center gap-[100px]'>
    <div className='shadow-lg p-4 m-4 rounded-lg flex flex-col items-center text-center'>
        <h1 className="text-4xl font-bold mb-2">{categories.name}</h1>
        <div className="w-64 h-64 relative mb-4 rounded-lg overflow-hidden">
              <img className="absolute inset-0 w-full h-full object-contain" src={"http://localhost:3000/" + categories.img} alt={categories.name} />
            </div>
        <p className="text-lg mb-2 w-[400px] max600:w-[300px] max7:text-[13px]">{categories.description}</p>
        <p className="text-xl font-bold mb-4">Price: ${categories.price}</p>
        <h1 style={{animation: 'blink 1s infinite'}}>Out of Stock - Only One Left!</h1>
        <Button variant="contained" color="primary" onClick={() =>  handleCategoryClick(categories)}>
            Buy Now
        </Button>
    </div>
    <div className='shadow-lg p-4 m-4 rounded-lg flex flex-col items-center text-center'>
        <h1 className="text-4xl font-bold mb-2">{categories.name1}</h1>
        <div className="w-64 h-64 relative mb-4 rounded-lg overflow-hidden">
              <img className="absolute inset-0 w-full h-full object-contain" src={"http://localhost:3000/" + categories.img1} alt={categories.name1} />
            </div>
        <p className="text-lg mb-2 w-[400px] max600:w-[300px] max7:text-[13px]">{categories.description1}</p>
        <p className="text-xl font-bold mb-4">Price: ${categories.price1}</p>
        {/* <h1 style={{animation: 'blink 1s infinite'}}>Out of Stock - Only One Left!</h1> */}
        <Button variant="contained" color="primary" onClick={() =>  handleCategoryClick(categories.id)} >
            Buy Now
        </Button>
    </div>

    <div className='shadow-lg p-4 m-4 rounded-lg flex flex-col items-center text-center'>
        <h1 className="text-4xl font-bold mb-2">{categories.name2}</h1>

        <div className="w-64 h-64 relative mb-4 rounded-lg overflow-hidden">
         <img className="w-64 h-64 object-cover mb-4 rounded-lg" src={"http://localhost:3000/" + categories.img2} alt={categories.name2} />
            </div>
        
        <p className="text-lg mb-2 w-[400px] max600:w-[300px] max7:text-[13px]">{categories.description2}</p>
        <p className="text-xl font-bold mb-4">Price: ${categories.price2}</p>
        <h1 style={{animation: 'blink 1s infinite'}}>Out of Stock - Only One Left!</h1>
        <Button variant="contained" color="primary" onClick={() =>  handleCategoryClick(categories.id)} >
            Buy Now
        </Button>
    </div>


    <div className='shadow-lg p-4 m-4 rounded-lg flex flex-col items-center text-center'>
        <h1 className="text-4xl font-bold mb-2">{categories.name4}</h1>
        <div className="w-64 h-64 relative mb-4 rounded-lg overflow-hidden">
         <img className="w-64 h-64 object-cover mb-4 rounded-lg " src={"http://localhost:3000/" + categories.img4} alt={categories.name4} />
            </div>
        
        <p className="text-lg mb-2 w-[400px] max600:w-[300px] max7:text-[13px]">{categories.description4}</p>
        <p className="text-xl font-bold mb-4">Price: ${categories.price4}</p>
        {/* <h1 style={{animation: 'blink 1s infinite'}}>Out of Stock - Only One Left!</h1> */}
        <Button variant="contained" color="primary" onClick={() =>  handleCategoryClick(categories.id)} >
            Buy Now
        </Button>
    </div>
    <div className='shadow-lg p-4 m-4 rounded-lg flex flex-col items-center text-center'>
        <h1 className="text-4xl font-bold mb-2">{categories.name5}</h1>
        <div className="w-64 h-64 relative mb-4 rounded-lg overflow-hidden">
         <img className="w-64 h-64 object-cover mb-4 rounded-lg " src={"http://localhost:3000/" + categories.img5} alt={categories.name5} />
         </div>
        
        <p className="text-lg mb-2 w-[400px] max600:w-[300px] max7:text-[13px]">{categories.description5}</p>
        <p className="text-xl font-bold mb-4">Price: ${categories.price5}</p>
        <h1 style={{animation: 'blink 1s infinite'}}>Out of Stock - Only One Left!</h1>
        <Button variant="contained" color="primary" onClick={() =>  handleCategoryClick(categories.id)} >
            Buy Now
        </Button>
    </div>

    <div className='shadow-lg p-4 m-4 rounded-lg flex flex-col items-center text-center'>
        <h1 className="text-4xl font-bold mb-2">{categories.name6}</h1>
        <div className="w-64 h-64 relative mb-4 rounded-lg overflow-hidden">
          <img className="w-64 h-64 object-cover mb-4 rounded-lg " src={"http://localhost:3000/" + categories.img6} alt={categories.name6} />
            </div>
       
        <p className="text-lg mb-2 w-[400px] max600:w-[300px] max7:text-[13px]">{categories.description6}</p>
        <p className="text-xl font-bold mb-4">Price: ${categories.price6}</p>
        {/* <h1 style={{animation: 'blink 1s infinite'}}>Out of Stock - Only One Left!</h1> */}
        <Button variant="contained" color="primary" onClick={() =>  handleCategoryClick(categories.id)} >
            Buy Now
        </Button>
    </div>

    <div className='shadow-lg p-4 m-4 rounded-lg flex flex-col items-center text-center'>
        <h1 className="text-4xl font-bold mb-2">{categories.name7}</h1>
        <div className="w-64 h-64 relative mb-4 rounded-lg overflow-hidden">
         <img className="w-64 h-64 object-cover mb-4 rounded-lg " src={"http://localhost:3000/" + categories.img7} alt={categories.name7} />
            </div>
        
        <p className="text-lg mb-2 w-[400px] max600:w-[300px] max7:text-[13px]">{categories.description7}</p>
        <p className="text-xl font-bold mb-4">Price: ${categories.price7}</p>
        {/* <h1 style={{animation: 'blink 1s infinite'}}>Out of Stock - Only One Left!</h1> */}
        <Button variant="contained" color="primary" onClick={() =>  handleCategoryClick(categories.id)} >
            Buy Now
        </Button>
    </div>

    <div className='shadow-lg p-4 m-4 rounded-lg flex flex-col items-center text-center'>
        <h1 className="text-4xl font-bold mb-2">{categories.name8}</h1>
        <div className="w-64 h-64 relative mb-4 rounded-lg overflow-hidden">
         <img className="w-64 h-64 object-cover mb-4 rounded-lg " src={"http://localhost:3000/" + categories.img8} alt={categories.name8} />
            </div>
        
        <p className="text-lg mb-2 w-[400px] max600:w-[300px] max7:text-[13px]">{categories.description8}</p>
        <p className="text-xl font-bold mb-4">Price: ${categories.price8}</p>
        <h1 style={{animation: 'blink 1s infinite'}}>Out of Stock - Only One Left!</h1>
        <Button variant="contained" color="primary" onClick={() =>  handleCategoryClick(categories.id)} >
            Buy Now
        </Button>
    </div>
</div>
          
        </>
      ) : (
        <p className="text-xl">No categories found</p>
      )}
    </div>
  );
}

export default Catagorepage;





