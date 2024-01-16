import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";
import CartPage from "./pages/CartPage";
import ScrollToTop from "react-scroll-to-top";
import { FaArrowTurnUp } from "react-icons/fa6";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:blogId" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
      </Layout>
      <ScrollToTop
        smooth
        style={{
          backgroundColor: '#eab308',
          color: '#fff',
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          fontSize: '24px',
          borderRadius: '50%',
          padding: '5px',
        }}
        component={<FaArrowTurnUp />}
        className="z-20"
      />
    </Router>
  );
};

export default App;
