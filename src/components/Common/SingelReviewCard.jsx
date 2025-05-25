import React from "react";
import sape1 from "../../assets/images/sape1.png";
import reviwebg from "../../assets/images/reviewImagebg.png";
import { IoStar } from "react-icons/io5";

const SingelReviewCard = ({reviewImage , reviewName , reviewText , reviewPlace}) => {
  return (
    <div className="lg:w-[370px] h-[476px] rounded-[18px] overflow-hidden flex justify-center items-end p-[18px]" style={{background:`url(${reviwebg})` , backgroundRepeat:'no-repeat' , backgroundPosition:"center" , backgroundSize:"cover"}}>
      <div className=" relative w-[334px] h-[239px] rounded-[18px]  ">
        <div className="w-full  absolute top-0 left-0  Z-[-3] ">

        <img
          className="h-[240px]"
          src={sape1}
          alt="sape1"
          />
          </div>
        <div className="card_profile w-[80px] h-[100px] rounded-full  absolute top-[-4px] translate-x-[-50%] left-[50%]  z-[1] ">
          <img src={reviewImage} className="w-[100px]" alt="reviewer image" />
        </div>
        <div className="review_text absolute w-full z-[10] mt-[90px]">
          <h2 className="text-[18px] font-medium font-poppins text-primary text-center  ">{reviewName}</h2>
          <p className="text-[12px] font-poppins font-normal text-[#1E1E1E] text-center mb-[10px]">
          {reviewPlace}
          </p>
          <p className="text-[14px] font-poppins font-normal text-primary text-center w-[252px] m-auto">
          {reviewText}
          </p>
          <ul className="flex justify-center text-secendary">
            <li><IoStar/></li>
            <li><IoStar/></li>
            <li><IoStar/></li>
            <li><IoStar/></li>
            <li><IoStar/></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingelReviewCard;
