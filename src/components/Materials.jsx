import React from "react";
import CommonHead from "./Common/CommonHead";
import { Link } from "react-router-dom";
import { HiArrowLongRight } from "react-icons/hi2";
import materials from '../assets/images/materials.png'
const Materials = () => {
  return (
    <section id="materials" className="pt-[60px] lg:pt-[364px] relative px-4">
      <div className="container">
        <div className="materials_text">
          <div className="lg:w-[476px]">
            <CommonHead
              commonHeadp={"Materials"}
              commonHeadh2={"Very serious materials for making furniture"}
            />
          </div>
          <p className=" text-[14px] lg:text-lg font-normal font-poppins text-primary w-full lg:w-[556px] mt-[20px] mb-[30px]">
            Because panto was very serious about designing furniture for our
            environment, using a very expensive and famous capital but at a
            relatively low price
          </p>
          <Link
            to={"#"}
            className="flex gap-2 items-center text-[14px] font-normal font-poppins text-secendary"
          >
            More Info <HiArrowLongRight />
          </Link>
        </div>
          </div>
          <div className=" mt-10 lg:absolute   top-[240px] right-0">
              <img src={materials} alt="" />
          </div>
    </section>
  );
};

export default Materials;
