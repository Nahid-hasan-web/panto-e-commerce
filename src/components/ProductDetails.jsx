import { useParams } from "react-router-dom";
import BreadCrumb from "./Common/BreadCrumb";
import allProducts from "../Db/Db";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const { productId, prodcutName } = useParams();
  const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    const foundProduct = allProducts.find((item) => item.id == productId);
    setProductInfo(foundProduct);
  }, [productId]);

  return (
    <section className="pt-24 bg-[#FAFAFA] min-h-screen">
      <BreadCrumb pageName="Product Details" productName={prodcutName} />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Product Card */}
        <div className="bg-white shadow-md rounded-3xl p-10 grid md:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className="bg-[#F5F5F5] p-6 rounded-2xl flex justify-center items-center">
            <img
              src={productInfo?.productImage}
              alt={productInfo?.productName}
              className="h-[320px] object-contain"
            />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-semibold text-[#1E1E1E] mb-4">
              {productInfo?.productName}
            </h1>
            <p className="text-xl text-[#FFA62F] font-semibold mb-4">
              ${productInfo?.productPrice}
            </p>

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="text-md font-medium text-[#333] mb-2">Available Colors</h3>
              <div className="flex gap-3">
                {productInfo?.availableColors?.map((color, idx) => (
                  <span
                    key={idx}
                    className="w-6 h-6 rounded-full border border-gray-300"
                    style={{ backgroundColor: color }}
                  ></span>
                ))}
              </div>
            </div>

            {/* Product Specs */}
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-6">
              <p><strong>Width:</strong> {productInfo?.specifications?.width}</p>
              <p><strong>Height:</strong> {productInfo?.specifications?.height}</p>
              <p><strong>Depth:</strong> {productInfo?.specifications?.depth}</p>
              <p><strong>Weight:</strong> {productInfo?.specifications?.weight}</p>
            </div>

            <button className="mt-4 px-6 py-3 bg-[#0D1B39] text-white rounded-xl text-sm font-medium hover:bg-[#FFA62F] hover:text-black transition">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product Info Sections */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {[
            { title: "Material", content: "Premium engineered wood and stainless steel base." },
            { title: "Delivery Info", content: "Ships within 5–7 working days with tracking." },
            { title: "Warranty & Return", content: "30-day return and 1-year product warranty." },
            { title: "Care Instructions", content: "Wipe gently with a soft cloth. Avoid moisture." },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-lg font-semibold text-[#0D1B39] mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
