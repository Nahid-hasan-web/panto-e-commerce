import React, { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { IoIosRemove } from "react-icons/io";
import { ImBin } from "react-icons/im";
import { useSelector } from "react-redux";
import allProducts from "../Db/Db";

const CheckoutPage = () => {
  // ---------------- form data state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    nameError: 'border-gray-200',
    emailError: 'border-gray-200',
    phoneError: 'border-gray-200',
    addressError: 'border-gray-200',
  });

  // ================= cart product state
  const sliceCartProductId = useSelector((state) => state.cartProductid.value);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const filtered = allProducts
      .filter((item) => sliceCartProductId.includes(item.id))
      .map((item) => ({ ...item, quantity: 1 }));
    setCartProducts(filtered);
  }, [sliceCartProductId]);

  // =============== handlers for qty change and removal
  const incrementQty = (id) =>
    setCartProducts((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );

  const decrementQty = (id) =>
    setCartProducts((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );

  const handleRemove = (id) =>
    setCartProducts((prev) => prev.filter((item) => item.id !== id));

  // =================== total price
  const totalPrice = cartProducts.reduce(
    (acc, prod) => acc + prod.productPrice * prod.quantity,
    0
  );
  const deliveryFee = 40;

  // =================== handle order function
  const handleOrder = (e) => {
    e.preventDefault();
    const { name, email, phone, address } = formData;
    if (!name) setFormData((prev) => ({ ...prev, nameError: 'border-red-500' }));
    if (!email) setFormData((prev) => ({ ...prev, emailError: 'border-red-500' }));
    if (!phone) setFormData((prev) => ({ ...prev, phoneError: 'border-red-500' }));
    if (!address) setFormData((prev) => ({ ...prev, addressError: 'border-red-500' }));
    // add further submission logic here
  };

  return (
<section className="py-[80px] md:py-[120px] lg:py-[200px]">
      <div className="container px-4 md:px-8">
        <div className="chekcoutRow flex flex-col lg:flex-row justify-between gap-10">
          {/* Order Summary */}
          <div className="w-full lg:w-[700px] lg:pl-[50px]">
            <h2 className="text-xl font-medium text-black mb-6 md:mb-10">Order Summary</h2>
            {cartProducts.map((item) => (
              <div
                key={item.id}
                className="singel_product flex flex-col sm:flex-row items-center justify-between mt-5 gap-4 sm:gap-0"
              >
                <div className="productImage w-[60px] h-[60px] bg-gray-200 rounded-[5px] overflow-hidden flex-shrink-0">
                  <img src={item.productImage} alt={item.productName} className="w-full h-full object-cover" />
                </div>
                <h1 className="text-lg font-normal font-poppins text-center sm:text-left">{item.productName}</h1>
                <div className="quentity_selector flex items-center gap-2">
                  <button
                    onClick={() => decrementQty(item.id)}
                    className="text-xl"
                  >
                    <IoIosRemove />
                  </button>
                  <h2 className="w-[30px] h-[30px] bg-gray-100 text-lg flex justify-center items-center">
                    {item.quantity}
                  </h2>
                  <button
                    onClick={() => incrementQty(item.id)}
                    className="text-xl"
                  >
                    <FiPlus />
                  </button>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="ml-4 sm:ml-[50px] text-red-400 text-xl"
                  >
                    <ImBin />
                  </button>
                </div>
                <h2 className="text-xl font-normal font-poppins text-center sm:text-right">
                  $ {item.productPrice * item.quantity}
                </h2>
              </div>
            ))}
            <div className="border-t-2 border-gray-200 mt-5 pt-5">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-normal font-abel">Total</h2>
                <h2 className="text-lg font-normal font-abel">${totalPrice}</h2>
              </div>
              <div className="flex justify-between items-center mt-5">
                <h2 className="text-lg font-normal font-abel">Delivery Fee</h2>
                <h2 className="text-lg font-normal font-abel">${deliveryFee}</h2>
              </div>
            </div>
            <div className="border-t-2 border-gray-200 mt-5 pt-5 flex justify-between items-center">
              <h2 className="text-xl font-normal font-abel">To pay</h2>
              <h2 className="text-xl font-bold font-abel">
                ${totalPrice + deliveryFee}
              </h2>
            </div>
          </div>

          {/* User Infos */}
          <div className="w-full max-w-[500px] mx-auto">
            <h2 className="text-xl font-medium text-black mb-6 md:mb-10">Delivery Address</h2>
            <form>
              <label className="text-lg font-normal font-abel mt-5 inline-block">
                Name
              </label>
              <br />
              <input
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    name: e.target.value,
                    nameError: 'border-gray-200',
                  }))
                }
                placeholder="Your Name"
                className={`text-[15px] font-normal font-abel text-gray-600 outline-none border-b py-2 w-full ${formData.nameError}`}
                type="text"
              />
              <br />
              <label className="text-lg font-normal font-abel mt-5 inline-block">
                Email
              </label>
              <br />
              <input
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    email: e.target.value,
                    emailError: 'border-gray-200',
                  }))
                }
                placeholder="demo@gmail.com"
                className={`text-[15px] font-normal font-abel text-gray-600 outline-none border-b py-2 w-full ${formData.emailError}`}
                type="text"
              />
              <br />
              <label className="text-lg font-normal font-abel mt-5 inline-block">
                Phone
              </label>
              <br />
              <input
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    phone: e.target.value,
                    phoneError: 'border-gray-200',
                  }))
                }
                placeholder="01xxxxxxxxx"
                className={`text-[15px] font-normal font-abel text-gray-600 outline-none border-b py-2 w-full ${formData.phoneError}`}
                type="text"
              />
              <br />

              <label className="text-lg font-normal font-abel mt-5 inline-block">
                Address
              </label>
              <br />
              <textarea
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    address: e.target.value,
                    addressError: 'border-gray-200',
                  }))
                }
                placeholder="Delivery Address"
                className={`text-[15px] font-normal font-abel text-gray-600 outline-none border-b py-2 w-full ${formData.addressError}`}
              />
              <br />
              <button
                onClick={handleOrder}
                className="active:scale-[1.1] bg-black text-lg font-normal text-white w-full mt-5 py-2 rounded-lg"
              >
                Confirm Order
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
