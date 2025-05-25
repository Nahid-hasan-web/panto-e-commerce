import { useParams } from "react-router-dom";
import BreadCrumb from "./Common/BreadCrumb";
import allProducts from "../Db/Db";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const { productId, prodcutName } = useParams();
  const [productInfo, setProductInfo] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const foundProduct = allProducts.find((item) => item.id == productId);
    setProductInfo(foundProduct);

    // Filter related products from same category
    if (foundProduct) {
      const filtered = allProducts.filter(
        (item) =>
          item.productCategory === foundProduct.productCategory &&
          item.id != foundProduct.id
      );
      setRelatedProducts(filtered);
    }
  }, [productId]);

  return (
    <section className="pt-24 bg-[#FAFAFA] min-h-screen">
      <BreadCrumb pageName="Product Details" productName={prodcutName} />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Product Section */}
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
              <h3 className="text-md font-medium text-[#333] mb-2">
                Available Colors
              </h3>
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
              <p>
                <strong>Width:</strong> {productInfo?.specifications?.width}
              </p>
              <p>
                <strong>Height:</strong> {productInfo?.specifications?.height}
              </p>
              <p>
                <strong>Depth:</strong> {productInfo?.specifications?.depth}
              </p>
              <p>
                <strong>Weight:</strong> {productInfo?.specifications?.weight}
              </p>
            </div>

            <button className="mt-4 px-6 py-3 bg-[#0D1B39] text-white rounded-xl text-sm font-medium hover:bg-[#FFA62F] hover:text-black transition">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Info Sections */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {productInfo?.productDetails.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-lg font-semibold text-[#0D1B39] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.content}</p>
            </div>
          ))}
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-semibold text-[#0D1B39] mb-6">
              Related Products
            </h2>
            <div className="flex gap-6 overflow-x-auto pb-4">
              {relatedProducts.map((item) => (
                <div
                  key={item.id}
                  className="min-w-[200px] bg-white rounded-xl shadow p-4"
                >
                  <img
                    src={item.productImage}
                    alt={item.productName}
                    className="h-[150px] w-full object-contain mb-4"
                  />
                  <h4 className="text-md font-semibold text-[#333] mb-1">
                    {item.productName}
                  </h4>
                  <p className="text-sm text-[#FFA62F] font-medium">
                    ${item.productPrice}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Testimonials */}
        <div className="mt-24">
          <h2 className="text-2xl font-semibold text-[#0D1B39] mb-6">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, idx) => (
              <div key={idx} className="bg-white shadow rounded-xl p-6">
                <p className="text-gray-600 text-sm mb-4">
                  "Absolutely loved the quality and design. Perfect match for my
                  home interior!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-300" />
                  <div>
                    <p className="text-sm font-medium text-[#0D1B39]">
                      Customer {idx + 1}
                    </p>
                    <p className="text-xs text-gray-500">Verified Buyer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
