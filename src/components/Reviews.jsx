import React from "react";
import SingelReviewCard from "./Common/SingelReviewCard";
import CommonHead from "./Common/CommonHead";

const Reviews = () => {
  return (
    <>
      <section id="review" className="pt-[60px] lg:pt-[240px] lg:pb-[214px] px-4">
        <div className="container">
          <div className="review head flex flex-col gap-3 items-center mb-[49px]">
            <CommonHead commonHeadh2={'Testimonials'} commonHeadp={'Our Client Reviews'} />
          </div>
          <SingelReviewCard />
        </div>
      </section>
    </>
  );
};

export default Reviews;
