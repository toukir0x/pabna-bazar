import React from 'react'
import "../App.css";
import Header from '../components/Header.jsx'
import Banner from '../components/Banner.jsx'
import Product from '../components/Product.jsx'
import Contract from '../components/Contract.jsx'
import ProductModal from '../components/ProductModal.jsx'

const Home = () => {
  return (
    <>
      
      <Header />
      <Banner />
      <Product />
      <Contract />
      <ProductModal />
    </>
  );
}

export default Home