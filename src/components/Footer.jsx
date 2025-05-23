import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../assets/images/footerLogo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-[#F7F7F7] px-4 py-12">
      <div className="container mx-auto flex flex-wrap justify-between ">
        <div>
          <img src={logo} alt="Logo" className="mb-4" />
          <p className="text-primary  font-normal text-[15px] font-poppins w-[293px]">
            The advantage of hiring a workspace with us is that gives you
            comfortable service and all-around facilities.
          </p>
        </div>
        <div className="footermenues flex flex-wrap gap-5 mt-10 lg:gap-[110px]">
          <div>
            <h4 className="text-secendary text-[17px] font-dm-sans mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              <li className="text-primary text-[17px] font-poppins">
                <Link to={'#'}>
                Email Marketing
                </Link>
              </li>
              <li className="text-primary text-[17px] font-poppins">
                <Link to={'#'}>
                Campaigns
                </Link>
              </li>
              <li className="text-primary text-[17px] font-poppins">
                <Link to={'#'}>
                Branding
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-secendary text-[17px] font-dm-sans mb-4">
              Furniture
            </h4>
            <ul className="space-y-2">
              <li className="text-primary text-[17px] font-poppins"> <Link to={'#'}> Beds </Link></li>
              <li className="text-primary text-[17px] font-poppins"> <Link to={'#'}> Chair </Link></li>
              <li className="text-primary text-[17px] font-poppins"> <Link to={'#'}> All </Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-secendary text-[17px] font-dm-sans mb-4">
              Follow Us
            </h4>
            <ul className="space-y-2">
              <li className="text-primary text-[17px] font-poppins flex items-center gap-2">
                <Link className="flex items-center gap-4" to={'#'}>
                <FaFacebookF /> Facebook
                </Link>
              </li>
              <li className="text-primary text-[17px] font-poppins flex items-center gap-2">
                <Link className="flex items-center gap-4" to={'#'}>
                <FaTwitter /> Twitter
                </Link>
              </li>
              <li className="text-primary text-[17px] font-poppins flex items-center gap-2">
                <Link className="flex items-center gap-4" to={'#'}>
                <FaInstagram /> Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-12 flex justify-between text-primary text-[15px] font-poppins">
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
