import React, { useEffect, useState } from "react";
import logo from "../assets/images/Panto.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import Cart from "./Cart";
import { useSelector } from "react-redux";
const ResponsiveNav = () => {
  const [showmenu, setShowmenu] = useState(false)
  const location = useLocation();
  const [openCart, setOpenCart] = useState(false);
  const sliceProductid = useSelector((state)=>state.cartProductid.value)
  const[scrollCss ,setScrollCss] = useState('absolute')
// ---------------- navbar items and path array 
  const menuPageItem = [

    {
      "pageName": "Home",
      "pagePath":"/"
    },

    {
      "pageName": "Shop",
      "pagePath":"/allProduct"
    },

    {
      "pageName": "Contact",
      "pagePath":"/contact"
    },
  ]



  useEffect(() => {
  
  const handleScroll = () => {
    if (window.scrollY > 300 || location.pathname !== '/') {
      setScrollCss('fixed bg-[#222831] shadow-lg');
    } else {
      setScrollCss('absolute');
    }
  };

  // Run it immediately on mount or route change
  handleScroll();

  window.addEventListener('scroll', handleScroll);

  return () => window.removeEventListener('scroll', handleScroll);
}, [location.pathname]);
  
  
  return (
    <>
      <nav className={`py-5 px-2 lg:hidden absolute w-full top-0 left-0 z-10 ${scrollCss}`}>
        <div className="container">
          <div className="menu_row  flex justify-between items-center">
            <div className="menu_logo w-[100px]">
              <img src={logo} alt="menu Logo" />
            </div>
            <div className="flex gap-5 relative">
              <div onClick={()=>setOpenCart(!openCart)} className="relative flex items-center space-x-2">
                <FiShoppingCart className="text-white text-xl cursor-pointer hover:text-gray-300 transition duration-300 ease-in-out" />
                <span className="absolute top-0 right-0 text-sm bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                  {sliceProductid.length}
                </span>
              </div>
              <button onClick={()=>setShowmenu(!showmenu)} className="w-[30px] h-[30px] rounded-[5px] border-2 border-white flex justify-center items-center text-xl text-white">
                <HiMenuAlt3 />
              </button>

              <div className={` ${showmenu? 'scale-100' : 'scale-0'} duration-[.4s] w-[200px] p-3 bg-white rounded-[5px] absolute top-[120%]  right-0`}>
                <ul className="flex  text-primary   flex-col gap-5 justify-center items-center text-lg font-normal">
                  {
                    menuPageItem.map((item) => (
                  <li className="cursor-pointer hover:text-gray-300 transition duration-300 ease-in-out">
                    <Link to={item.pagePath}>{item.pageName} </Link>
                  </li>
                      
                    ))
                  }
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
