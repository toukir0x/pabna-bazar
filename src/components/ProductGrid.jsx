import React from 'react'
import Product from './Product';
import Products from '../assets/Products.json';
import ProductModal from "./ProductModal";

const ProductGrid = ({ selectedCategory }) => {
    const filteredProducts = selectedCategory === "all" ? Products : (Products.filter(product => product.category === selectedCategory));
  return (
    <>
      <div className=" p-8 text-center">
        <h1 className="font-bold text-3xl p-4">
          {selectedCategory.toUpperCase()}
        </h1>

        {filteredProducts.length > 0 ? (
          <>
            <p>
              <span>{filteredProducts.length}</span> products available
            </p>

            <div className=" flex flex-wrap gap-6 justify-center ">
              {filteredProducts.map((product) => (
                <Product
                  key={product.id}
                //   name={product.name}
                //   price={product.price}
                //   src={product.image}
                //   badge={product.badge}
                //   discount={Math.round(
                //     ((product.originalPrice - product.price) /
                //       product.originalPrice) *
                //       100,
                      //   )}
                    {...product}
                />
              ))}
            </div>
            {/* <div className="relative">
              <ProductModal />
            </div> */}
          </>
        ) : (
          <p>No products available in this category</p>
        )}
      </div>
    </>
  );
}

export default ProductGrid