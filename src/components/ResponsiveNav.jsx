import React, { useState } from "react";
import logo from "../assets/images/Panto.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import Cart from "./Cart";
const ResponsiveNav = () => {
  const [showmenu, setShowmenu] = useState(false)
  const [openCart, setOpenCart] = useState(false);
  return (
    <>
      <nav className="py-5 px-2 lg:hidden absolute w-full top-0 left-0 z-10">
        <div className="container">
          <div className="menu_row  flex justify-between items-center">
            <div className="menu_logo w-[100px]">
              <img src={logo} alt="menu Logo" />
            </div>
            <div className="flex gap-5 relative">
              <div onClick={()=>setOpenCart(!openCart)} className="relative flex items-center space-x-2">
                <FiShoppingCart className="text-white text-xl cursor-pointer hover:text-gray-300 transition duration-300 ease-in-out" />
                <span className="absolute top-0 right-0 text-sm bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </div>
              <button onClick={()=>setShowmenu(!showmenu)} className="w-[30px] h-[30px] rounded-[5px] border-2 border-white flex justify-center items-center text-xl text-white">
                <HiMenuAlt3 />
              </button>

              <div className={` ${showmenu? 'scale-100' : 'scale-0'} duration-[.4s] w-[200px] p-3 bg-white rounded-[5px] absolute top-[120%]  right-0`}>
                <ul className="flex  text-primary   flex-col gap-5 justify-center items-center text-lg font-normal">
                  <li className="cursor-pointer hover:text-gray-300 transition duration-300 ease-in-out">
                    <Link to="/furniture">Furniture </Link>
                  </li>
                  <li className="cursor-pointer hover:text-gray-300 transition duration-300 ease-in-out">
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li className="cursor-pointer hover:text-gray-300 transition duration-300 ease-in-out">
                    <Link to="/about">About Us</Link>
                  </li>
                  <li className="cursor-pointer hover:text-gray-300 transition duration-300 ease-in-out">
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
          <Cart closeCart={()=>setOpenCart(!openCart)} isOpen={openCart} />
      </nav>
    </>
  );
};

export default ResponsiveNav;
