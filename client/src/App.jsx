import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Men from './pages/Men';
import Women from './pages/Women';
import Kids from './pages/Kids';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import DetailPage from './components/DetailPage';
import Registration from './pages/Registration';
import AppLayout from './components/AppLayout';
import { ToastContainer } from 'react-toastify';
import AdminLayout from './pages/admin/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import AddProduct from './pages/admin/AddProduct';
import ListProducts from './pages/admin/ListProducts';
import UpdateProduct from './pages/admin/UpdateProduct';
// import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const isAdmin = useLocation().pathname.includes("admin");
  return (
    <>
      <ToastContainer position='top-right' />
      {!isAdmin && <Navbar />}
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="kids" element={<Kids />} />
          <Route path="cart" element={<Cart />} />
          <Route path="product/:productId" element={<DetailPage />} />
        </Route>
        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='add-product' element={<AddProduct />} />
          <Route path='all-products' element={<ListProducts />} />
          <Route path='update-product/:id' element={<UpdateProduct />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>

    </>
  );
};

export default App;
