import { FiShoppingCart } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import Cart from "./Cart";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  // ---------------
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
      "pageName": "About Us",
      "pagePath":"/"
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
    <nav id="main_menu" className={`w-full ${scrollCss} duration-[1s]  top-0 left-0 z-50 hidden lg:block py-5 `}>
      <div className="container">
        <div className="flex justify-between items-center  px-2 ">
          <Link to={'/'} className="text-white text-2xl font-bold">Panto</Link>
          <ul className="flex space-x-8 text-white text-lg font-normal">
            {
              menuPageItem.map((item, i) => (
              <li key={i} className="cursor-pointer hover:text-gray-300 transition duration-300 ease-in-out">
                <Link to={item.pagePath}>{item.pageName} </Link>
              </li>

              ))
            }
          </ul>
          <div onClick={()=>setOpenCart(!openCart)} className="relative flex items-center space-x-2">
            <FiShoppingCart className="text-white text-xl cursor-pointer hover:text-gray-300 transition duration-300 ease-in-out" />
            <span className="absolute top-[-15px] right-0 text-sm bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
              {sliceProductid.length}
            </span>
          </div>
          <Cart closeCart={()=>setOpenCart(!openCart)} isOpen={openCart} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
