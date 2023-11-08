import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes,Navigate  } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import About from './pages/About.jsx';
// import Analytics from './pages/Analytics.jsx';
// import Comment from './pages/Comment.jsx';
import ProductForm from './pages/ProductForm.jsx';
import ProductList from './pages/ProductList.jsx';
import Header from './components/Header';
import ModifyProduct from './pages/ModifyProduct';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} /> */}
          <Route path="/product" element={<ProductForm />} />
          <Route path="/productdetail" element={<ProductList />} />
          <Route path="/editproducts" element={<ModifyProduct />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;