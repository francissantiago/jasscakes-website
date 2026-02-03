import { useState } from 'react';
import { useCartStore } from '@/store/useCartStore';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { appData } from '@/data/mockData';
import { Trash2, Minus, Plus, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { items, removeItem, updateQuantity, getTotal, clearCart } = useCartStore();
  const [customerName, setCustomerName] = useState('');

  const handleCheckout = () => {
    if (!customerName.trim()) {
      alert('Por favor, informe seu nome para continuar.');
      return;
    }
    
    const total = getTotal();
    
    const message = `Olá! Gostaria de fazer um pedido:

*Pedido Jass Cakes*
--------------------------------
${items.map(item => `*${item.productName}*
Qtd: ${item.quantity}
Valor: R$ ${(item.price * item.quantity).toFixed(2)}
${item.customizations && item.customizations.length > 0 ? `${item.customizations.join('\n')}` : ''}`).join('\n\n')}
--------------------------------
*Total: R$ ${total.toFixed(2)}*

Cliente: ${customerName}
Data: ${new Date().toLocaleDateString()}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${appData.configuration.site_phone}?text=${encodedMessage}`, '_blank');
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto py-16 px-4 text-center">
        <div className="mb-6 flex justify-center">
            <div className="bg-[#FFF0F5] p-6 rounded-full">
                <MessageCircle className="h-12 w-12 text-[#FFB6C1]" />
            </div>
        </div>
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Seu carrinho está vazio</h1>
        <p className="text-gray-500 mb-8">Que tal adicionar algumas delícias?</p>
        <Link to="/produtos">
          <Button size="lg" className="bg-[#FFB6C1] hover:bg-[#FFA0B0] text-white cursor-pointer">
            Ver Cardápio
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-[#FFB6C1] font-poppins">Seu Pedido</h1>
      
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <Card key={item.id} className="overflow-hidden border-l-4 border-l-[#FFD700]">
              <CardContent className="p-4 sm:p-6 flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-800">{item.productName}</h3>
                  {item.customizations && item.customizations.length > 0 && (
                    <div className="mt-2 text-sm text-gray-500 space-y-1">
                      {item.customizations.map((custom, idx) => (
                        <p key={idx}>• {custom}</p>
                      ))}
                    </div>
                  )}
                  <p className="mt-2 font-bold text-[#FFB6C1]">R$ {item.price.toFixed(2)} unit.</p>
                </div>
                
                <div className="flex flex-col sm:items-end gap-4 justify-between">
                   <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-red-400 hover:text-red-600 hover:bg-red-50 self-end sm:self-auto cursor-pointer"
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                  
                  <div className="flex items-center border rounded-full">
                    <Button variant="ghost" size="icon" onClick={() => updateQuantity(item.id, item.quantity - 1)} className="h-8 w-8 rounded-l-full cursor-pointer">
                        <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                    <Button variant="ghost" size="icon" onClick={() => updateQuantity(item.id, item.quantity + 1)} className="h-8 w-8 rounded-r-full cursor-pointer">
                        <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          
          <Button variant="ghost" onClick={clearCart} className="text-red-500 hover:text-red-600 hover:bg-red-50 cursor-pointer">
            Limpar Carrinho
          </Button>
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <Card className="sticky top-24">
            <CardContent className="p-6 space-y-6">
              <h2 className="text-xl font-bold text-gray-800">Resumo</h2>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="font-medium">R$ {getTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-[#FFB6C1] pt-4 border-t">
                  <span>Total</span>
                  <span>R$ {getTotal().toFixed(2)}</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Seu Nome *</label>
                <input 
                  type="text" 
                  className="w-full p-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FFB6C1]"
                  placeholder="Digite seu nome completo"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                />
              </div>
              
              <Button className="w-full h-12 text-base bg-[#25D366] hover:bg-[#128C7E] text-white cursor-pointer" onClick={handleCheckout}>
                <MessageCircle className="mr-2 h-5 w-5" />
                Enviar Pedido no WhatsApp
              </Button>
              
              <p className="text-xs text-center text-gray-400">
                Ao clicar, você será redirecionado para o WhatsApp com os detalhes do seu pedido.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
