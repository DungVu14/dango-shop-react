import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Route, Routes } from 'react-router-dom';
import Footer from '../../shared/footer';
import Header from '../../shared/header';
import HeaderResponsive from '../../shared/header-responsive';
import BlogDetail from '../blog-detail';
import Blogs from '../blogs';
import Cart from '../cart';
import Checkout from '../checkout';
import Helps from '../helps';
import Intro from '../intro';
import Main from '../main';
import ProductDetai from '../product-detail';
import Products from '../products';
import Rules from '../rules';
import Security from '../security';
import Terms from '../terms';
import Transport from '../transport';
import User from '../user';
import './style.css';

function Home() {
  const isTablet = useMediaQuery({ query: '(max-width: 835px)' });

  return (
    <div>
      {isTablet ? <HeaderResponsive /> : <Header />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetai />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/security" element={<Security />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="/helps/*" element={<Helps />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/user/*" element={<User />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Home;