import React from 'react'
import Product from './Product';
import Products from '../assets/Products.json';
import ProductModal from "./ProductModal";

const ProductGrid = ({ selectedCategory }) => {
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const filteredProducts = selectedCategory === "all" ? Products : (Products.filter(product => product.category === selectedCategory));
  // if (isModalOpen) {
  //   return(
  //     <ProductModal selectedProduct={selectedProduct} setIsModalOpen={setIsModalOpen} />
  //   )
  // }
    return (
      <>
       {(isModalOpen)&&(
      <ProductModal selectedProduct={selectedProduct} setIsModalOpen={setIsModalOpen} />
        )}

      {/* show product grid   */}
      <div className={`p-8 text-center {isModalOpen ? "fixed!" : ""}`}>
        <h1 className="font-bold text-3xl p-4">
          {selectedCategory.toUpperCase()}
        </h1>

        {filteredProducts.length > 0 ? (
          <>
            <p>
              <span>{filteredProducts.length}</span> products available
              </p>

            <div className=" flex flex-wrap gap-6 justify-center transition-all duration-300 ">
              {filteredProducts.map((product) => (
                <Product
                  key={product.id}
                    product={product} setSelectedProduct={setSelectedProduct} setIsModalOpen={setIsModalOpen}
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