import React from "react";
import Header from "../common/header/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../home/Home";
import Footer from "../common/footer/Footer";
import About from "../about/About";
import Blog from "../blog/Blog";
import Services from "../services/Services";
import Contact from "../contact/Contact";

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/projects" component={Blog} />
        <Route exact path="/contact" component={Contact} />
        <Footer />
      </Router>
    </>
  );
};

export default Pages;
