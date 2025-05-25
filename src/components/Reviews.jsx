import React from "react";
import SingelReviewCard from "./Common/SingelReviewCard";
import CommonHead from "./Common/CommonHead";

import reviwer1 from "../assets/images/reviewImage1.png";
import reviwer2 from "../assets/images/review2.png";
import reviwer3 from "../assets/images/review3.png";
const Reviews = () => {
  return (
    <>
      <section id="review" className="pt-[60px] lg:pt-[240px] lg:pb-[214px] px-4">
        <div className="container">
          <div className="review head flex flex-col gap-3 items-center mb-[49px]">
            <CommonHead commonHeadh2={'Testimonials'} commonHeadp={'Our Client Reviews'} />
          </div>
          <div className="flex justify-center flex-wrap gap-5">
          <SingelReviewCard reviewImage={reviwer1} reviewPlace={'Pedagang Asongan'} reviewName={'Bang Upin'}  reviewText={'“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“'}   />
          <SingelReviewCard reviewImage={reviwer2} reviewPlace={'Ibu Rumah Tangga'} reviewName={'Ibuk Sukijan'}  reviewText={'“Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat '}   />
          <SingelReviewCard reviewImage={reviwer3} reviewPlace={'Karyawan Swasta'} reviewName={'Mpok Ina'}  reviewText={'“Sangat terjangkau untuk kantong saya yang tidak terlalu banyak“'}   />

          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
