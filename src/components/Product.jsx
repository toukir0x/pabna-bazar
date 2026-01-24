import React from "react";
import { Badge } from "lucide-react";




const Product = ({ ...product}) => {
  // function openModal(product) {
  //   // setSelectedProduct(product);
  //   // setIsModalOpen(true);
  // }

  let discount = 
    Math.round(
      ((product.originalPrice - product.price) /
        product.originalPrice) *
      100,);
  return (
    <>
      <section className="text-black text-center py-6 flex flex-col justify-center">
        {/* show product */}

        <div className=" flex flex-wrap gap-6 justify-center ">
          <div className="product   inline-block p-6 shadow-xl shadow-gray-400 border border-gray-300 rounded-2xl">
            <div className="relative">
              <div
                className="absolute top-2 left-2 z-10"
                variant={
                  product.badge === "On Sale" ? "destructive" : "secondary"
                }
                //   variant={
                //     product.badge === "On Sale" ? "destructive" : "secondary"
                //   }
              >
                {product.badge}
              </div>
                {(discount > 0)&&(
                <div className="absolute top-2 right-2 ">
                  <div className="h-12 w-12 rounded-full  text-destructive-foreground flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl text-red-700 font-bold leading-none">
                        {discount}%
                      </div>
                      <div className="text-[20px] text-amber-800 leading-none">OFF</div>
                    </div>
                  </div>
                </div>
              )}
              <img
                // src="src/assets/image/ashwagandha-powder-package.jpg"
                src={`src/assets/image${product.image}`}
                alt=""
                className="w-xs round max-h-80 rounded-xl"
                onClick={() => {
                  // openModal(product);

                }}
              />
            </div>
            <div className="details pt-4 text-left space-y-2">
              <h3 className="text-xl">{product.name}</h3>
              <h1 className="text-2xl font-semibold">
                <span>৳ </span>
                {product.price}
              </h1>
              <button className="bg-amber-600! w-full text-white text-xl! font-medium!">
                Quick Add
              </button>
            </div>
          </div>
        </div>
        
      </section>
    </>
  );
};

export default Product;
