import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import Home from './pages/Home';
import { Suspense, lazy } from 'react';

// Lazy load other pages
const ProductList = lazy(() => import('./pages/ProductList'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Cart = lazy(() => import('./pages/Cart'));

function App() {
  return (
    <Suspense fallback={<div className="flex h-screen items-center justify-center text-[#FFB6C1]">Carregando...</div>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="produtos" element={<ProductList />} />
          <Route path="produto/:id" element={<ProductDetail />} />
          <Route path="carrinho" element={<Cart />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
