import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import styled from "styled-components";
import {
  AboutPage,
  AuthWrapper,
  CartPage,
  CheckoutPage,
  ErrorPage,
  HomePage,
  PrivateRoute,
  ProductsPage,
  SingleProductPage,
} from "./pages";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />

      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/about" element={<AboutPage />} />

        <Route exact path="/cart" element={<CartPage />} />

        <Route exact path="/products" element={<ProductsPage />} />

        <Route
          exact
          path="/products/:id"
          children={SingleProductPage}
          element={<SingleProductPage />}
        />
        <Route exact path="/checkout" element={<CheckoutPage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
