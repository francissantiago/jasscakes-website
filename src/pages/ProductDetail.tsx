import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { appData } from '@/data/mockData';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { useCartStore } from '@/store/useCartStore';
import { ArrowLeft, Check, Minus, Plus, ShoppingCart } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const addItem = useCartStore((state) => state.addItem);
  
  const [categoryName, itemIndexStr] = (id || '').split('-');
  const itemIndex = parseInt(itemIndexStr);
  
  const category = appData.products.find(p => p.name === categoryName);
  const product = category?.items[itemIndex];
  
  const [quantity, setQuantity] = useState(1);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [flavor, setFlavor] = useState('Baunilha');
  const [filling, setFilling] = useState('Ninho');
  const [observation, setObservation] = useState('');
  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  if (!product || !category) {
    return <div className="container py-8 text-center">Produto não encontrado</div>;
  }

  // Determine available addons if it's a cake
  const availableAddons = product.tamanho_aro ? appData.products
    .find(c => c.name === 'acrescimos')
    ?.items.map(addon => {
      const priceEntry = addon.tabela_valores?.find(v => v.tamanho_aro === product.tamanho_aro);
      return priceEntry ? { name: addon.acrescimo || 'Acréscimo', price: priceEntry.preco } : null;
    })
    .filter(Boolean) as { name: string, price: number }[] 
    : [];

  let basePrice = product.preco || 0;
  
  // If product has table values (like acrescimos/coberturas), price depends on selected size
  if (product.tabela_valores && selectedSize) {
    const sizeEntry = product.tabela_valores.find(v => v.tamanho_aro === selectedSize);
    if (sizeEntry) {
      basePrice = sizeEntry.preco;
    }
  }

  const addonsPrice = selectedAddons.reduce((acc, addonName) => {
    const addon = availableAddons.find(a => a.name === addonName);
    return acc + (addon?.price || 0);
  }, 0);
  
  const totalPrice = (basePrice + addonsPrice) * quantity;

  const handleAddToCart = () => {
    if (product.tabela_valores && !selectedSize) {
        alert("Por favor, selecione um tamanho de aro.");
        return;
    }

    const customizations = [];
    if (categoryName === 'bolos') {
        customizations.push(`Massa: ${flavor}`);
        customizations.push(`Recheio: ${filling}`);
    }
    if (selectedSize && product.tabela_valores) {
        customizations.push(`Tamanho Aro: ${selectedSize}`);
    }
    if (selectedAddons.length > 0) {
        customizations.push(`Acréscimos: ${selectedAddons.join(', ')}`);
    }
    if (observation) {
        customizations.push(`Obs: ${observation}`);
    }

    addItem({
      id: `${id}-${Date.now()}`,
      productId: categoryName,
      productName: product.acrescimo || product.cobertura || product.doce || (product.tamanho_aro ? `Bolo Aro ${product.tamanho_aro}` : (product.quantidade ? `${product.quantidade} unidades` : 'Produto')),
      quantity,
      price: basePrice + addonsPrice, // Unit price including addons
      customizations
    });
    
    navigate('/carrinho');
  };

  const toggleAddon = (name: string) => {
    if (selectedAddons.includes(name)) {
      setSelectedAddons(prev => prev.filter(a => a !== name));
    } else {
      setSelectedAddons(prev => [...prev, name]);
    }
  };

  const flavors = ['Baunilha', 'Cacau 50%'];
  const fillings = ['Ninho', 'Prestígio', 'Brigadeiro ao Leite', 'Brigadeiro Meio Amargo', 'Brigadeiro Branco', 'Nesquik'];

  const productName = product.acrescimo || product.cobertura || product.doce || (product.tamanho_aro ? `Bolo Aro ${product.tamanho_aro}` : `Opção ${itemIndex + 1}`);

  return (
    <div className="container mx-auto py-8 px-4">
      <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6 pl-0 hover:bg-transparent hover:text-[#FFB6C1] cursor-pointer">
        <ArrowLeft className="mr-2 h-4 w-4" /> Voltar
      </Button>
      
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Image Section */}
        <div className="space-y-4">
            <div className="aspect-square rounded-xl overflow-hidden bg-gray-100 border border-[#FFB6C1]/20">
                <img 
                    src={`https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=${categoryName}%20${productName}%20delicious%20studio&image_size=square`} 
                    alt={productName}
                    className="w-full h-full object-cover"
                />
            </div>
        </div>

        {/* Details Section */}
        <div className="space-y-6">
            <div>
                <Badge className="mb-2 uppercase tracking-wide bg-[#FFD700] text-black hover:bg-[#F0C800]">{categoryName}</Badge>
                <h1 className="text-3xl font-bold text-gray-900 mb-2 font-poppins">{productName}</h1>
                <p className="text-2xl font-bold text-[#FFB6C1]">
                    {basePrice > 0 ? `R$ ${basePrice.toFixed(2)}` : 'Sob consulta'}
                </p>
            </div>

            <div className="prose text-gray-500">
                <p>{product.capacidade_aproximada}</p>
                <p>{product.peso_aproximado}</p>
                {category.description && <p className="text-sm italic">{category.description}</p>}
            </div>

            {/* Size Selector for items with Table Values (like Acrescimos/Coberturas) */}
            {product.tabela_valores && (
              <div className="space-y-4 border-t border-b py-6 border-gray-100">
                <h3 className="font-medium mb-3">Escolha o Tamanho do Aro:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.tabela_valores.map((val) => (
                    <Button
                      key={val.tamanho_aro}
                      variant={selectedSize === val.tamanho_aro ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedSize(val.tamanho_aro)}
                      className="cursor-pointer"
                    >
                      {selectedSize === val.tamanho_aro && <Check className="mr-1 h-3 w-3" />}
                      Aro {val.tamanho_aro} (R$ {val.preco.toFixed(2)})
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Customizations for Cakes */}
            {categoryName === 'bolos' && (
                <div className="space-y-6 border-t border-b py-6 border-gray-100">
                    {/* Flavors */}
                    <div>
                        <h3 className="font-medium mb-3">Escolha a Massa:</h3>
                        <div className="flex flex-wrap gap-2">
                            {flavors.map(f => (
                                <Button 
                                    key={f} 
                                    variant={flavor === f ? 'default' : 'outline'}
                                    size="sm"
                                    onClick={() => setFlavor(f)}
                                    className="cursor-pointer"
                                >
                                    {flavor === f && <Check className="mr-1 h-3 w-3" />}
                                    {f}
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Fillings */}
                    <div>
                        <h3 className="font-medium mb-3">Escolha o Recheio:</h3>
                        <div className="flex flex-wrap gap-2">
                            {fillings.map(f => (
                                <Button 
                                    key={f} 
                                    variant={filling === f ? 'default' : 'outline'}
                                    size="sm"
                                    onClick={() => setFilling(f)}
                                    className="cursor-pointer"
                                >
                                    {filling === f && <Check className="mr-1 h-3 w-3" />}
                                    {f}
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Addons */}
                    {availableAddons.length > 0 && (
                        <div>
                             <h3 className="font-medium mb-3">Acréscimos (Opcional):</h3>
                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {availableAddons.map(addon => (
                                    <div 
                                        key={addon.name}
                                        className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-colors ${selectedAddons.includes(addon.name) ? 'border-[#FFB6C1] bg-[#FFF0F5]' : 'border-gray-200 hover:border-[#FFB6C1]'}`}
                                        onClick={() => toggleAddon(addon.name)}
                                    >
                                        <span className="text-sm font-medium">{addon.name}</span>
                                        <span className="text-sm text-gray-500">+ R$ {addon.price.toFixed(2)}</span>
                                    </div>
                                ))}
                             </div>
                        </div>
                    )}
                </div>
            )}

            {/* Observations */}
            <div>
                <label className="block text-sm font-medium mb-2">Observações:</label>
                <textarea 
                    className="w-full min-h-[100px] p-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FFB6C1]"
                    placeholder="Alguma restrição ou pedido especial?"
                    value={observation}
                    onChange={(e) => setObservation(e.target.value)}
                />
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <div className="flex items-center border rounded-full w-fit">
                    <Button variant="ghost" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="rounded-l-full cursor-pointer">
                        <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center font-medium">{quantity}</span>
                    <Button variant="ghost" size="icon" onClick={() => setQuantity(quantity + 1)} className="rounded-r-full cursor-pointer">
                        <Plus className="h-4 w-4" />
                    </Button>
                </div>
                
                <Button className="flex-1 h-12 text-base cursor-pointer" onClick={handleAddToCart}>
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Adicionar • R$ {totalPrice.toFixed(2)}
                </Button>
            </div>
        </div>
      </div>
    </div>
  );
}
