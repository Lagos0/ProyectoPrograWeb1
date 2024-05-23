import React from "react";
import Allproducts from "../../Componentes/Allproducts/Allproducts";
import Productnew from "../../Componentes/Allproducts/Productnew";
import Header from "../../Componentes/Header/Header";
import Footer from "../../Componentes/Footer/Footer";

const Homepage = ({ allProductsData, addToCart, productnewdata }) => {
  return (
    <>
      <Header />
      <Allproducts allProductsData={allProductsData} addToCart={addToCart} />
      
      <Productnew productnewdata={productnewdata} />
      <Footer/>
    </>
  );
};

export default Homepage;

