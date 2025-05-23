import React from 'react';
import { FaPlus } from "react-icons/fa6";
import { BsFillStarFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
const  SingleProduct = ({productImages , productCat , productname , productPrice , activeCart }) => {

  return (
      <div className="w-[268px]   rounded-xl  overflow-hidden shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)]">
          <div className='singel_productImage overflow-hidden group h-[267px]'>
      <img
        src={productImages}
        alt="Product"
          className="w-full group-hover:scale-[1.2] duration-[1s]"
        />
        </div>
      <div className="p-4 w-full bg-white">
        <p className="text-[17px] font-regular text-[#8D8D8D] mb-2">{productCat}</p>
        <h2 className="text-[21px] font-semibold text-[#0D1B39] mb-2">
        {productname}
        </h2>
        <div className="flex items-center gap-1 mb-3">
          <ul className='flex gap-[5px] text-[#F6B76F]'>
            <li><BsFillStarFill/></li>
            <li><BsFillStarFill/></li>
            <li><BsFillStarFill/></li>
            <li><BsFillStarFill/></li>
            <li><BsFillStarFill/></li>
          </ul>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[21px] font-semibold text-[#0D1B39]">{productPrice}</p>
          <button onClick={activeCart} className="w-[49px] h-[49px] bg-[#0D1B39] rounded-full  hover:scale-[1.1]  duration-[.5s] flex items-center justify-center text-white">
            <FaPlus  />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;