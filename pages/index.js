import React from 'react';
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = () => {
  return (
    <>
      <HeroBanner />
      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>A great Range of Speakers</p>
      </div>
      <div className='products-container'>
        {['Product 1', 'Product 2'].map((product) => product)}
      </div>
      <FooterBanner />
    </>
  );
};

export default Home;
