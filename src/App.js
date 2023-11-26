
import './App.css';
import React from 'react';
import  MyNavbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import Products from './pages/Products/Products';
import { Route , Routes } from 'react-router-dom';
import ContactUs from './pages/contactUs/ContactUs'
import AboutUs from './pages/AboutUs/AboutUs';
import Reviews from './pages/Reviews/Reviews';
function App() {
  return (
  <div>
<MyNavbar />
<Routes>
  <Route path="/" element={<Products />}  />
  <Route path="ContactUs" element={<ContactUs />}  />
  <Route path="AboutUs" element={<AboutUs />}  />
  <Route path="Reviews" element={<Reviews />}  />

</Routes>
<Footer />
  </div>
  );
}

export default App;
