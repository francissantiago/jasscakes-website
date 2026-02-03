import { Link } from 'react-router-dom';
import { ShoppingCart, Menu } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useCartStore } from '@/store/useCartStore';
import { useState } from 'react';

export function Header() {
  const cartItems = useCartStore((state) => state.items);
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-[#FFB6C1] font-sans">Jass Cakes</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link to="/" className="transition-colors hover:text-[#FFB6C1]">Início</Link>
          <Link to="/produtos" className="transition-colors hover:text-[#FFB6C1]">Cardápio</Link>
          <Link to="/carrinho" className="transition-colors hover:text-[#FFB6C1]">Carrinho</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/carrinho">
            <Button variant="ghost" size="icon" className="relative cursor-pointer">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#FFD700] text-[10px] font-bold text-black">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t p-4 bg-white">
           <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-sm font-medium hover:text-[#FFB6C1]" onClick={() => setIsMenuOpen(false)}>Início</Link>
            <Link to="/produtos" className="text-sm font-medium hover:text-[#FFB6C1]" onClick={() => setIsMenuOpen(false)}>Cardápio</Link>
            <Link to="/carrinho" className="text-sm font-medium hover:text-[#FFB6C1]" onClick={() => setIsMenuOpen(false)}>Carrinho</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
