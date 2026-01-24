import React from 'react'
import "../App.css";
import Header from '../components/Header.jsx'
import Banner from '../components/Banner.jsx'
import ProductGrid from '../components/ProductGrid.jsx'
import Contract from '../components/Contract.jsx'
import ProductModal from '../components/ProductModal.jsx'

const Home = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  return (
    <>
    
      
      <Header selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <Banner />
      <ProductGrid selectedCategory={ selectedCategory} />
      <Contract />
      {/* <ProductModal /> */}
    </>
  );
}

export default Home