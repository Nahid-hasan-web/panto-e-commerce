import React from "react";
import CommonHead from "./Common/CommonHead";
import exprienceImage from "../assets/images/expprienceImage.png";
import { Link } from "react-router-dom";
import { HiArrowLongRight } from "react-icons/hi2";

const Experience = () => {
  return (
    <>
      <section id="Experience" className="lg:pt-[323px] pt-[60px] px-4 relative">
        <div className="container">
          <div className="flex justify-end">
            <div>
              <div className="head lg:w-[476px]">
                <CommonHead
                  commonHeadp={"experiences"}
                  commonHeadh2={"we provide you the best experience"}
                />
              </div>
              <p className="text-[14px] lg:text-lg font-normal font-poppins text-primary w-full lg:w-[556px] my-[20px]">
                You don’t have to worry about the result because all of these
                interiors are made by people who are professionals in their
                fields with an elegant and lucurious style and with premium
                quality materials
              </p>
              <Link
                to={"#"}
                className="flex gap-2 items-center text-[14px] font-normal font-poppins text-secendary"
              >
                More Info <HiArrowLongRight />
              </Link>
            </div>
          </div>
        </div>
        <div className="exprienceImage lg:absolute top-[240px] left-0">
          <img src={exprienceImage} alt="exprience" />
        </div>
      </section>
    </>
  );
};

export default Experience;
