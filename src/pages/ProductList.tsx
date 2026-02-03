import { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { appData } from '@/data/mockData';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ProductItem } from '@/types';

export default function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'todos';

  const categories = ['todos', ...appData.products.map(p => p.name)];

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'todos') {
      return appData.products;
    }
    return appData.products.filter(p => p.name.toLowerCase() === activeCategory.toLowerCase());
  }, [activeCategory]);

  // Helper to get image for product (random or placeholder based on category)
  const getProductImage = (categoryName: string, index: number) => {
    // Logic to return an image URL based on category
    if (categoryName.toLowerCase() === 'bolos') return `https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=decorated%20cake%20flavor%20${index}%20studio&image_size=square`;
    if (categoryName.toLowerCase() === 'doces') return `https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=brigadeiro%20gourmet%20sweet%20${index}&image_size=square`;
    if (categoryName.toLowerCase() === 'cupcakes') return `https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=cupcake%20decorated%20${index}&image_size=square`;
    return `https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=confectionery%20item%20${index}&image_size=square`;
  };

  const formatPrice = (item: ProductItem) => {
    if (item.preco) return `R$ ${item.preco.toFixed(2)}`;
    if (item.tabela_valores && item.tabela_valores.length > 0) return `A partir de R$ ${item.tabela_valores[0].preco.toFixed(2)}`;
    return "Sob consulta";
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-[#FFB6C1] font-poppins">Nosso Cardápio</h1>
      
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={activeCategory === cat ? 'default' : 'outline'}
            onClick={() => setSearchParams({ category: cat })}
            className="capitalize cursor-pointer"
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="space-y-12">
        {filteredProducts.map((category) => (
          <div key={category.name}>
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-l-4 border-[#FFD700] pl-4 capitalize">
              {category.name}
            </h2>
            <p className="text-gray-500 mb-6 pl-4">{category.description}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, index) => (
                <Link to={`/produto/${category.name}-${index}`} key={index}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden border-transparent hover:border-[#FFB6C1]">
                    <div className="aspect-square overflow-hidden bg-gray-100">
                      <img 
                        src={getProductImage(category.name, index)} 
                        alt={item.acrescimo || item.cobertura || item.doce || `Produto ${index}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">
                        {item.acrescimo || item.cobertura || item.doce || (item.tamanho_aro ? `Bolo Aro ${item.tamanho_aro}` : `Opção ${index + 1}`)}
                      </CardTitle>
                      {item.capacidade_aproximada && (
                        <p className="text-sm text-gray-500">{item.capacidade_aproximada}</p>
                      )}
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                         {item.peso_aproximado && <Badge variant="secondary">{item.peso_aproximado}</Badge>}
                         {item.quantidade && <Badge variant="outline">{item.quantidade} un</Badge>}
                      </div>
                    </CardContent>
                    <CardFooter className="justify-between items-center">
                      <span className="text-lg font-bold text-[#FFB6C1]">{formatPrice(item)}</span>
                      <Button size="sm">Ver Detalhes</Button>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
