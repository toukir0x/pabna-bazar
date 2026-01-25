import React from 'react'
import "../App.css";
import Header from '../components/Header.jsx'
import Banner from '../components/Banner.jsx'
import ProductGrid from '../components/ProductGrid.jsx'
import Contract from '../components/Contract.jsx'
import Cart from './Cart.jsx'

const Home = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const [openCart, setOpenCart] = React.useState(false);
  return (
    <>
      <div className="relative">
        {openCart && <Cart setOpenCart={setOpenCart} />}
        <Header
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          setOpenCart={setOpenCart}
        />
        <Banner />
        <ProductGrid selectedCategory={selectedCategory} />
        <Contract />
      </div>
    </>
  );
}

export default Home