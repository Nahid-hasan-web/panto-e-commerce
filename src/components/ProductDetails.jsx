import { useParams, useSearchParams } from "react-router-dom";
import BreadCrumb from "./Common/BreadCrumb";
import allProducts from "../Db/Db";
import { useEffect, useState } from "react";
const ProductDetails = () => {
  // ------------------- getting product info
  const productParamsinfo = useParams();
  const currentProductData = allProducts.filter((item) => {
    return item.id == productParamsinfo.productId;
  });
  const [prodcutInfo, setProductInfo] = useState();
  useEffect(() => {
    currentProductData.map((item) => {
      setProductInfo(item);
    });
  }, []);

  console.log(prodcutInfo?.availableColors);
  return (
    <>
      <section id="productDetails" className="pt-[80px]">
        <BreadCrumb
          pageName={"Products Details"}
          productName={productParamsinfo.prodcutName}
        />
        <div className="container">
          {/* ------------- product font view */}
          <div className="flex flex-wrap gap-[60px]  mt-20 lg:pl-[200px]">
            <div className="w-[300px] h-[300px] bg-gray-100 overflow-hidden">
              <img src={prodcutInfo?.productImage} alt="productImage" />
            </div>
            <div className="productText">
              <h2 className="text-2xl font-medium text-black">
                {prodcutInfo?.productName}
              </h2>
              <h3 className="text-lg font-semibold text-primary mt-5">
                Price :{" "}
                <span className="font-normal">
                  {prodcutInfo?.productPrice}$
                </span>
              </h3>
              <h3 className="text-[16px] font-semibold text-primary mt-5">
                Size :{" "}
                <span className="font-normal">
                  w-{prodcutInfo?.specifications?.width} , h-
                  {prodcutInfo?.specifications?.height} , depth-
                  {prodcutInfo?.specifications?.depth} , weight-
                  {prodcutInfo?.specifications?.weight}
                </span>
              </h3>
              <h3 className="text-lg font-semibold text-primary mt-5">
                Colors :
              </h3>
              <div className="flex items-center gap-3 mt-5">
                {prodcutInfo?.availableColors.map((item) => {
                  return (
                    <button
                      style={{ backgroundColor: item }}
                      className="w-[20px] h-[20px] rounded-full relative"
                    ></button>
                  );
                })}
              </div>
              <button className="w-[150px] h-[35px] bg-black text-[16px] font-normal text-white mt-5 rounded-lg active:scale-[1.1]">
                Add to cart
              </button>
            </div>
          </div>
          <div className="  my-10 lg:pl-[200px]  ">
            {/* ---------------- singel product title  */}
            <div className="flex gap-10 flex-wrap py-5 border-b border-gray-200">
              <h2 className=" w-[250px] text-lg  font-poppins  font-medium text-primary">
                Material
              </h2>
              <p className="text-[13px] font-poppins font-normal text-pretty ">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, saepe.
              </p>
            </div>
            {/* ---------------- singel product title  */}
            <div className="flex gap-10 flex-wrap py-5 border-b border-gray-200">
              <h2 className=" w-[250px] text-lg  font-poppins  font-medium text-primary">
                Material
              </h2>
              <p className="text-[13px] font-poppins font-normal text-pretty ">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, saepe.
              </p>
            </div>
            {/* ---------------- singel product title  */}
            <div className="flex gap-10 flex-wrap py-5 border-b border-gray-200">
              <h2 className=" w-[250px] text-lg  font-poppins  font-medium text-primary">
                Material
              </h2>
              <p className="text-[13px] font-poppins font-normal text-pretty ">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, saepe.
              </p>
            </div>
            {/* ---------------- singel product title  */}
            <div className="flex gap-10 flex-wrap py-5 border-b border-gray-200">
              <h2 className=" w-[250px] text-lg  font-poppins  font-medium text-primary">
                Material
              </h2>
              <p className="text-[13px] font-poppins font-normal text-pretty ">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, saepe.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
