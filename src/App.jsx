import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./page/Home";
import About from "./page/About";
import Menu from "./page/Menu";
import Reviews from "./page/Reviews";
import Blogs from "./page/Blogs";
import Contact from "./page/Contact";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Route for the home page */}
          <Route path="/" element={<Home />} />

          {/* Route for the about page */}
          <Route path="/about" element={<About />} />

          {/* Route for the about page */}
          <Route path="/menu" element={<Menu />} />

          {/* Route for the reviews page */}
          <Route path="/reviews" element={<Reviews />} />

          {/* Route for the blogs page */}
          <Route path="/blogs" element={<Blogs />} />

          {/* Route for the contact page */}
          <Route path="/contact" element={<Contact />} />

          {/* Optional: 404 Not Found page */}
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
