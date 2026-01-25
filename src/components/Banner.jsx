import React from "react";
import { Phone } from "lucide-react";

const Banner = () => {
  return (
    <>
      <section className="bg-amber-600 text-white ">
        <div className=" px-6  md:py-8  py-10 md:px-8 lg:px-28 flex justify-between gap-20 flex-col  md:flex-row items-center">
          <div className="space-y-6  xl:space-y-16 py-3">
            <div className="inline-block">
              <span className="text- font-semibold bg-amber-100/30 backdrop-blur-sm   z-50 px-4 py-2 rounded-full">
                100% Organic & Natural
              </span>
            </div>

            <h3 className="text-2xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Premium Quality Organic Honey
            </h3>

            <p className="text-lg md:text-xl text-primary-foreground/90 text-pretty">
              Experience the pure taste of nature with our certified organic
              products. Sourced directly from trusted farms.
            </p>

            <div className="flex flex-wrap gap-8 items-center pt-4">
              <button
                size="lg"
                variant="secondary"
                className="text-base text-black outline hover:bg-white! hover:text-amber-500"
              >
                Shop Now
              </button>
              <div className="flex items-center gap-2 text-primary-foreground">
                <Phone className="h-5 w-5" />
                <span className="font-medium">09642922922</span>
              </div>
            </div>
          </div>
          <div className="">
            <div className="relative ">
              <img
                src="src/assets/image/organic-honey-bottles-product-photography.jpg"
                alt="Organic Honey Products"
                className="w-full h-auto  "
              />
            </div>
            {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-background/10 rounded-full blur-3xl"></div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
