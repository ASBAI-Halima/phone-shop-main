import React from 'react';
import Hero from './Hero';
import Collection from './Collection';
import ProductsList from './ProductsList';
import FacilitySection from './FacilitySection';
import Reviews from './Reviews';
import PhonesNews from './PhonesNews'
import NewsLetter from "./NewsLetter";
import Footer from './Footer';

const Index =() =>{
  //const { products, reviews , loading, error } = useContext(ProductsContext);
  
  // console.log('loading'+loading)
  //  console.log("products from list " + products);
  //  console.log("reviews from list " + reviews);
  
  return (
    <>
        <Hero/>
        <Collection/>
        <ProductsList />
        <FacilitySection/>
        <Reviews/>
        <PhonesNews/>
        <NewsLetter/>
        <Footer/>
      
    </>
  )
}

export default Index;
