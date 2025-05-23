import React from 'react';
import { CgArrowLongRight } from "react-icons/cg";
import { Link } from 'react-router-dom';


const WhyChoosingUs = () => {
  const cards = [
    {
      title: 'Luxury facilities',
      description: 'The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities.',
    },
    {
      title: 'Affordable Price',
      description: 'You can get a workspace of the highest quality at an affordable price and still enjoy the facilities that are only here.',
    },
    {
      title: 'Many Choices',
      description: 'We provide many unique workspace choices so that you can choose the workspace to your liking.',
    },
  ];

    return (
      <section id='why choose us' className='lg:pt-[90px] pt-[60px] px-4'>
            <div className="container">

    <div className="flex flex-wrap  lg:justify-center gap-10 lg:gap-[100px]  lg:items-center ">

        <h2 className=" w-full text-[42px]  font-medium  text-[#1E1E1E] lg:w-[265px]">Why Choosing Us</h2>
 

      <div className="w-2/3 flex flex-wrap  justify-between ">
        {cards.map((card, index) => (
            <div className='mb-5' key={index} >
            <h3 className="text-2xl font-medium text-[#1E1E1E] mb-[14px]">{card.title}</h3>
            <p className="text-[14px] font-poppins font-normal text-[#1E1E1E] leading-[185%] w-[284px]">{card.description}</p>
            <Link to={'#'} className="flex items-center  mt-5 text-[#E58411] hover:text-[#E58411] cursor-pointer gap-5">
            More Info
              <CgArrowLongRight  />
            </Link>
          </div>
        ))}
      </div>
    </div>
        </div>
  </section>
  );
};

export default WhyChoosingUs;
