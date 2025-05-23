import React from "react";
import bannerImg3 from "../assets/images/bannerImg3.png";
import { IoSearchOutline } from "react-icons/io5";

const Banner = () => {
  return (
    <>
      <section
        className=" w-full h-[100vh] pt-[161px]  relative px-1  "
        style={{
          background: `url(${bannerImg3} ) `,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="banner_text">
            <h1 className="text-[35px] lg:text-[80px] font-poppins font-semibold text-[#fff] text-center  capitalize">
              Make your interior more minimalistic & modern
            </h1>
            <h2 className="  lg:w-[544px] lg:text-xl text-lg font-poppins font-normal text-[#fff]  text-center mx-auto mt-[11px] mb-[48px]">
              Turn your room with panto into a lot more minimalist and modern
              with ease and speed
            </h2>
            <div
              className="srcBar  max-w-[366px] h-[56px] flex justify-between items-center pl-5  rounded-[42px]  border-[1px] border-[#ffffff99]
                      bg-[rgba(255,255,255,0.15)] mx-auto pr-2 "
            >
              <input
                type="text"
                placeholder="Search furniture"
                className=" w-[200px] text-[18px] font-poppins font-normal text-[#fff] outline-none placeholder:text-white"
              />
              <button className="w-10 h-10 rounded-full flex justify-center items-center bg-[#E58411] text-lg text-white active:scale-[1.1] hover:bg-white hover:text-black duration-[.4s] ">
                <IoSearchOutline />
              </button>
            </div>
          </div>
              </div>
              <button className="option_button  invisible lg:visible  w-[56px] h-[56px] rounded-full border-[1px] flex justify-center items-center bg-[rgba(255,255,255,0.20)] border-[#ffffff99] absolute top-[70%] left-[13%]" >
                   <span className="w-[18px] h-[18px] rounded-full bg-white inner_circle"></span>
              </button>
      </section>
    </>
  );
};

export default Banner;
