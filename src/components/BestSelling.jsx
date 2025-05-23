import React, { useEffect, useState } from "react";
import SingelProduct from "./SingelProduct";
import allProducts from "../Db/Db";
import { BsFillStarFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { cartPorduct } from "../slices/cartproductSlice";

const BestSelling = () => {
  // ----------------- all custom hooks and states -----------------
  const [Products, setProducts] = useState(allProducts)
  const [navsButtonactive, setNavsActive] = React.useState("left-[6px]");
  const [selligProduct , setSellingProduct] = useState('Chair')
  const dispatch = useDispatch()
  // ----------------- all custom functions -----------------
  useEffect(() => {
    const filterProducts = allProducts.filter((item)=>{
      return item.productCategory == selligProduct
    })
    setProducts(filterProducts)
  },[selligProduct])


  const testfun = (productid) => {
    let exisitProduct = JSON.parse(localStorage.getItem('cartProductId'))
    let productArr = exisitProduct ? exisitProduct : []

    productArr.push(productid)

    localStorage.setItem( 'cartProductId' , JSON.stringify( productArr))
    dispatch(cartPorduct(productArr))
  }
  

  return (
    <>
      <section id="bestSelling" className="py-[50px] bg-[#F7F7F7] mt-[101px]">
        <div className="container">
          <h2 className="text-[42px] font-medium font-poppins text-[#1E1E1E] text-center">
            Best Selling Product
          </h2>
{/* ---------------------- navbs and tabls buttons  */}
          <div className="w-[354px] rounded-[44px] bg-[#EEEEEE] p-[6px] h-[57px] mx-auto mt-[21px] mb-[80px] flex justify-between relative ">
            <div             
              className={`w-[84px] h-[45px] bg-[#FFFFFF] rounded-[32px] absolute top-[6px] ${navsButtonactive} duration-[.4s]`}
            ></div>
            <button
              onClick={() =>{ setNavsActive("left-[6px]") , setSellingProduct('Chair')}}
              className="px-[15px] py-[7px] text-lg font-normal font-poppins text-[#1E1E1E] z-[1] "
            >
              Chair
            </button>
            <button
              onClick={() =>{ setNavsActive("left-[92px]") , setSellingProduct('Bed')}}
              className="px-[15px] py-[7px] text-lg font-normal font-poppins text-[#1E1E1E] z-[1] "
            >
              Beds
            </button>
            <button
              onClick={() =>{ setNavsActive("left-[179px]") , setSellingProduct('Chair')}}
              className="px-[15px] py-[7px] text-lg font-normal font-poppins text-[#1E1E1E] z-[1] "
            >
              Sofa
            </button>
            <button
              onClick={() =>{ setNavsActive("left-[265px]") , setSellingProduct('Chair')}}
              className="px-[15px] py-[7px] text-lg font-normal font-poppins text-[#1E1E1E] z-[1] "
            >
              Lamp
            </button>
          </div>
      
          <div className="allProducts flex flex-wrap  lg:gap-5  justify-center mt-10 ">
            {
              Products.map((item) => (
                item.isBestSeller === true &&
                <SingelProduct activeCart={()=>testfun(item.id)} productImages={item.productImage} productCat={item.productCategory} productname={item.productName} productPrice={item.productPrice}  key={item.id} />
              ))
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default BestSelling;
