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
          {/* Route for the home page */}
          <Route path="/" element={<Home />} />

          {/* Route for the about page */}
          <Route path="/about" element={<About />} />

          {/* Route for the menu page */}
          <Route path="/menu" element={<Menu />} />

          {/* Route for the blogs page */}
          <Route path="/blogs" element={<Blogs />} />

          {/* Route for the blog details page */}
          <Route path="/blogs/:blogId" element={<BlogDetails />} />

          {/* Route for the contact page */}
          <Route path="/contact" element={<Contact />} />

          {/* Route for the cart page */}
          <Route path="/cart" element={<CartPage />} />

          {/* Optional: 404 Not Found page */}
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
