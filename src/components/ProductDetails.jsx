import BreadCrumb from "./Common/BreadCrumb";
const ProductDetails = () => {
  // ------------------ slick slider

  return (
    <>
      <section id="productDetails" className="pt-[80px]">
        <BreadCrumb pageName={"Products Details"} />
        <div className="container">
          {/* ------------- product font view */}
          <div className="flex flex-wrap gap-[60px]  mt-20 lg:pl-[200px]">
            <div className="w-[300px] h-[300px] bg-gray-100 overflow-hidden">
              <img src="sdf" alt="productImage" />
            </div>
            <div className="productText">
              <h2 className="text-2xl font-medium text-black">Product Name</h2>
              <h3 className="text-lg font-semibold text-primary mt-5">
                Price : <span className="font-normal">800$</span>
              </h3>
              <h3 className="text-lg font-semibold text-primary mt-5">
                Size : <span className="font-normal">w-30m x h-10m</span>
              </h3>
              <h3 className="text-lg font-semibold text-primary mt-5">
                Colors :
              </h3>
              <div className="flex items-center gap-3 mt-5">
                <button className="w-[20px] h-[20px] bg-blue-500 rounded-full relative"></button>
                <button className="w-[20px] h-[20px] bg-orange-500 rounded-full relative"></button>
                <button className="w-[20px] h-[20px] bg-green-500 rounded-full relative"></button>
              </div>
              <button className="w-[150px] h-[35px] bg-black text-[16px] font-normal text-white mt-5 rounded-lg active:scale-[1.1]">
                Add to cart
              </button>
            </div>
                  </div>
                  <div className="  my-10 lg:pl-[200px]  ">
                      {/* ---------------- singel product title  */}
                      <div className="flex gap-10 flex-wrap py-5 border-b border-gray-200">
                          <h2 className=" w-[250px] text-lg  font-poppins  font-medium text-primary">Material</h2>
                          <p className="text-[13px] font-poppins font-normal text-pretty "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, saepe.</p>
                      </div>
                      {/* ---------------- singel product title  */}
                      <div className="flex gap-10 flex-wrap py-5 border-b border-gray-200">
                          <h2 className=" w-[250px] text-lg  font-poppins  font-medium text-primary">Material</h2>
                          <p className="text-[13px] font-poppins font-normal text-pretty "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, saepe.</p>
                      </div>f
                      {/* ---------------- singel product title  */}
                      <div className="flex gap-10 flex-wrap py-5 border-b border-gray-200">
                          <h2 className=" w-[250px] text-lg  font-poppins  font-medium text-primary">Material</h2>
                          <p className="text-[13px] font-poppins font-normal text-pretty "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, saepe.</p>
                      </div>
                      {/* ---------------- singel product title  */}
                      <div className="flex gap-10 flex-wrap py-5 border-b border-gray-200">
                          <h2 className=" w-[250px] text-lg  font-poppins  font-medium text-primary">Material</h2>
                          <p className="text-[13px] font-poppins font-normal text-pretty "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, saepe.</p>
                      </div>
                  </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
