import React from "react";

const Product = () => {
 
  return (
    <>
      <section className="text-black text-center py-6 flex flex-col justify-center">
        <div className=" p-8">
          <h1 className="font-bold text-3xl p-4">ALL PRODUCTS</h1>
          <p>
            <span>12</span> products available
          </p>
        </div>
        {/* show product */}

        <div className=" flex flex-wrap gap-6 justify-center ">
          {Array.from({ length: 10 }).map(() => (
            <div className="product   inline-block p-6 shadow-xl shadow-gray-400 border border-gray-300 rounded-2xl">
              <div className="relative">
                <div
                  className="absolute top-2 left-2 z-10"
                //   variant={
                //     product.badge === "On Sale" ? "destructive" : "secondary"
                //   }
                >on sale
                  {/* {product.badge} */}
                </div>

                <div className="absolute top-2 right-2 ">
                  <div className="h-12 w-12 rounded-full  text-destructive-foreground flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-md text-red-700 font-bold leading-none">
                        10%
                      </div>
                      <div className="text-[10px] leading-none">OFF</div>
                    </div>
                  </div>
                </div>
                <img
                  src="src/assets/image/ashwagandha-powder-package.jpg"
                  alt=""
                  className="w-xs round rounded-xl"
                />
              </div>
              <div className="details pt-4 text-left space-y-2">
                <h3 className="text-xl">Ashwagandha</h3>
                <h1 className="text-2xl font-semibold">
                  <span>৳ </span>1200
                </h1>
                <button className="bg-amber-600! w-full text-white text-xl! font-medium!">
                  Quick Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Product;
