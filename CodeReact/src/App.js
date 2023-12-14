import './App.css';
import { Routes, Route } from 'react-router-dom';
import ShopPage from './pages/ShopPage';
import CartPage from './pages/CartPage';
import OrderManagementPage from './pages/dashboard/OrderManagementPage';
import ProductManagementPage from './pages/dashboard/ProductManagementPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<ShopPage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/dashboard/order-list' element={<OrderManagementPage />} />
        <Route path='/dashboard/product-list' element={<ProductManagementPage/>}/>
      </Routes>
    </>
  );
}

export default App;
