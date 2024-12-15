// src/components/Product.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/productSlice";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product.items);

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");

  useEffect(() => {
    const foundProduct = products.find(
      (product) => product.id === parseInt(id)
    );
    if (foundProduct) {
      setProductData(foundProduct);
      setImage(foundProduct.img);
    }
  }, [id, products]);

  const handleAddToCart = () => {
    if (productData) {
      dispatch(addToCart({ id: productData.id }));
      toast.success(`${productData.title} added to cart!`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    }
  };

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:flex-row flex-col">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:h-auto justify-between">
            <img
              src={image}
              alt={productData.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
          </div>
        </div>
        {/* Product Details */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.title}</h1>
          <p className="mt-5 text-3xl font-medium">
            ${productData.price.toFixed(2)}
          </p>
          <p className="mt-5 text-gray-500">{productData.description}</p>
          <button
            onClick={handleAddToCart}
            className="bg-[#8075b6] text-white px-8 py-3 text-sm active:bg-gray-700 mt-4"
          >
            ADD TO CART
          </button>
        </div>
      </div>
      {/* Additional Details */}
      <div className="mt-20">
        <h2 className="font-bold">Description</h2>
        <p>{productData.description}</p>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Product;
