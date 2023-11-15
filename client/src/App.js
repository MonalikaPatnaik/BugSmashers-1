import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact"
import ExploreProducts from "./pages/ExploreProducts";
import OpenStore from "./pages/OpenStore";
import CreateItem from "./pages/CreateItem";


// import SingleBlog from "./pages/SingleBlog
import Wishlist from "./pages/Wishlist";

import UserProfile from "./components/UserProfile"
import Forgotpassword from "./pages/Forgotpassword";

import SingleBlog from "./pages/SingleBlog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import TermAndCondition from "./pages/TermAndCondition";
import SingleProduct from "./pages/SingleProduct";
import Checkout from "./pages/Checkout";
import Blog from "./pages/Blogs"
import SpecialProduct from "./components/SpecialProduct";
import Landing from "./pages/Landing";

import CreateStore from "./pages/CreateStore";
import Chat from "./pages/Chat";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/home" index element={<Landing/>}/>
        
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="/shops/:keyword" element={<SpecialProduct/>}/>
            <Route path="/shops/:location" element={<SpecialProduct/>}/>
            <Route path="chatScreen" element={<Chat/>}/>

            <Route path="contact" element={<Contact/>}/>
            <Route path="openStore" element={<OpenStore/>}/>


            <Route path="items/:id" element={<ExploreProducts />} />
            <Route path="product/:id" element={<SingleProduct />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="blog/:id" element={<SingleBlog />} />
           
           <Route path="createItems"element={<CreateItem/>}></Route>
            
            <Route path="checkout" element={<Checkout />} />
            
            <Route path="wishlist" element={<Wishlist />} />
           
            <Route path="forgot-password" element={<Forgotpassword />} />
          
            <Route path="createStore" element={<CreateStore/>} />
            <Route path="account" element={<UserProfile/>} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="refund-policy" element={<RefundPolicy />} />
            <Route path="shipping-policy" element={<ShippingPolicy />} />
            <Route path="term-conditions" element={<TermAndCondition />} />

            <Route path="blog/:id" element={<SingleBlog />} />


          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
