import React from 'react';
import OurProductsCard from './OurProductsCard';
import product from '../assets/images/product-1.png';
import product1 from '../assets/images/product-4.png';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

const OurProducts = () => {
  const dispatch = useDispatch();
  return (
    <div className="my-4 p-6 rounded-lg  bg-white">
      <h1 className="text-center font-bold text-3xl text-[#224F34] roboto-slab-item">Our Products</h1>
      <div className="flex justify-center gap-4 py-4">
        <p className="bg-green-200 px-3 py-1 rounded-full">SALE</p>
        <p className="bg-red-200 px-3 py-1 rounded-full">HOT</p>
        <p className="bg-blue-200 px-3 py-1 rounded-full">NEW ARRIVALS</p>
        <p className="uppercase bg-yellow-200 px-3 py-1 rounded-full ">Accessories</p>
      </div>

      {/* Product Cards Container */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-6">
        {/* Add product cards here */}
        <OurProductsCard
          img= {product}
          title='Product 1'
          description='Description of Product 1 goes here.'
          price='100'
  
        />
        <OurProductsCard
          img={product1}
          title='Product 2'
          description='Description of Product 2 goes here.'
          price='200'
        />
        <OurProductsCard
           img={product1}
          title='Product 3'
          description='Description of Product 3 goes here.'
          price='$300'
        />
        <OurProductsCard
          img={product1}
          title='Product 4'
          description='Description of Product 4 goes here.'
          price='$400'
        />
        <OurProductsCard
          img={product1}
          title='Product 5'
          description='Description of Product 5 goes here.'
          price='$500'
        />
        <OurProductsCard
          img={product1}
          title='Product 5'
          description='Description of Product 5 goes here.'
          price='$500'
        />
        <OurProductsCard
          img={product1}
          title='Product 5'
          description='Description of Product 5 goes here.'
          price='$500'
        />
        <OurProductsCard
          img={product1}
          title='Product 5'
          description='Description of Product 5 goes here.'
          price='$500'
        />
      </div>
    </div>
  );
}

export default OurProducts;