import React, { useState } from 'react';
import SingelReviewCard from './Common/SingelReviewCard';
import SingleProduct from './SingelProduct';
import allProducts from '../Db/Db';
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { cartPorduct } from '../slices/cartproductSlice';
import { useNavigate } from 'react-router-dom';


const AllProductCards = () => {
  // --------------- pagination state and functions ---------------
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // You've already set this in your component

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = allProducts.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(allProducts.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  // ---------------------- add to cart button -------------------
  const dispatch = useDispatch()
  const hanelAddTocart = (prodcutId) => {
    let myArr = JSON.parse(localStorage.getItem('cartProductId')) || [];

    myArr.push(prodcutId)

    localStorage.setItem('cartProductId', JSON.stringify(myArr))
    dispatch(cartPorduct(myArr))
  }
  // --------------------
   const navigate = useNavigate()
    const productDetails = (productid, productName) => {
    navigate(`/productDetails/${productid}/${productName}`);
  };
  return (
    <>
      <section id='AllProductCards' className='pt-10 w-full'>
        <div className='flex gap-5 flex-wrap justify-center'>
          {currentProducts.map((item) => (
            <SingleProduct
              activeCart={() => hanelAddTocart(item.id)}
              details={()=>productDetails(item.id , item.productName)}
              key={item.id} // Assuming each product has a unique 'id'
              productImages={item.productImage}
              productname={item.productName}
              productPrice={item.productPrice}
            />
          ))}
        </div>

        {/* Pagination controls */}
        {totalPages > 1 && (
          <nav className="py-4">
            <ul className="flex list-none p-0 justify-center">
              {currentPage > 1 && (
                <li className="mr-2">
                  <button
                    onClick={() => paginate(currentPage - 1)}
                    className="bg-white text-gray-700 duration-[.4s] border border-gray-300 p-2  rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-secendary focus:ring-opacity-50"
                  >
                    <MdOutlineArrowBackIos/>
                  </button>
                </li>
              )}

              {pageNumbers.map(number => (
                <li key={number} className={`mr-2 ${currentPage === number ? 'bg-secendary text-white' : 'bg-white text-gray-700 border-gray-300'} rounded-md`}>
                  <button
                    onClick={() => paginate(number)}
                    className={`py-2 px-3 duration-[.4s] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-opacity-50 w-full block text-center ${currentPage === number ? '' : ''}`}
                  >
                    {number}
                  </button>
                </li>
              ))}

              {currentPage < totalPages && (
                <li className="mr-2">
                  <button
                    onClick={() => paginate(currentPage + 1)}
                    className="bg-white text-gray-700 border duration-[.4s] border-gray-300 p-2  rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-secendary focus:ring-opacity-50"
                  >
                    <MdArrowForwardIos/>
                  </button>
                </li>
              )}
            </ul>
          </nav>
        )}
      </section>
    </>
  );
};

export default AllProductCards;