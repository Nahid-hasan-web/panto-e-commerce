import React, { useEffect, useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import allProducts from "../Db/Db";
import { useDispatch, useSelector } from "react-redux";
import { removeCartId } from "../slices/cartproductSlice";
import { Link } from "react-router-dom";

const Cart = ({ isOpen, closeCart }) => {
  const dispatch = useDispatch();
  const sliceProduct = useSelector((state) => state.cartProductid.value);
  const storedIds = sliceProduct || [];
  const [cartProducts, setCartProducts] = useState([]);
  // ------------------- get cart product 
  useEffect(() => {
    const cartProduct = allProducts.filter((item) =>
      storedIds.includes(item.id)
    );
    setCartProducts(cartProduct);
  }, [storedIds]);

  // ---------- delete cart  product
  const handelDelete = (productId) => {
    const nextIds = storedIds.filter((id) => id !== productId);
    dispatch(removeCartId(nextIds));
    localStorage.setItem("cartProductId", JSON.stringify(nextIds));
  };
  // -------------- total product 
  const totalSum = cartProducts.reduce(
    (acc, prod) => acc + Number(prod.productPrice) ,0
  );

  return (
    <>
      <div
        className={`md:w-[400px] w-full p-4 bg-white rounded-[5px]   fixed duration-[.4s] ${
          isOpen ? "top-20 right-0 md:right-20 opacity-[100] scale-100" : "top-30 right-20 opacity-0 scale-0"
        } `}
      >
        <div className="flex justify-between">
          <h2 className="text-[20px] font-medium font-poppins text-primary">
            Cart
          </h2>
          <button onClick={closeCart}>
            <CiCircleRemove className="text-2xl text-primary" />
          </button>
        </div>
        {/* ------------------ card singel items */}
        {cartProducts.length === 0 ? (
          <h1 className="text-xl font-abel  font-semibold text-center my-5">
            please add a product
          </h1>
        ) : (
          <div>
            {cartProducts.map((item) => (
              <div
                key={item.id}
                className="cartsingelItem  mt-5  flex  items-center justify-between"
              >
                <div className="productdetails flex items-center gap-5 ">
                  <div className="cartImage w-[60px] h-[60px] bg-gray-200 rounded-[5px] overflow-hidden ">
                    <img src={item.productImage} alt="product image" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold  font-poppins ">
                      {item.productName}
                    </h2>
                    <p>{item.productPrice}</p>
                  </div>
                </div>
                <button
                  onClick={() => handelDelete(item.id)}
                  className="text-xl text-red-600 active:scale-[1.1]"
                >
                  <RiDeleteBin5Line />
                </button>
              </div>
            ))}
            {/* ------------------- total */}
            <div className="price flex items-center justify-between mt-5 pt-5 border-t">
              <h2 className="text-[16px] font-semibold font-poppins text-primary">
                Total :
              </h2>
              <h2 className="text-[16px] font-semibold font-poppins text-primary">
                $ {totalSum} 
              </h2>
            </div>
            <Link to={'/checkout'} className="w-full inline-block text-center py-2 mt-5 bg-black rounded-[5px]  text-[16px] font-semibold font-poppins text-white hover:text-secendary duration-[.4s]">
              Check Out
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
