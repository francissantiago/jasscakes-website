export interface PriceTableItem {
  tamanho_aro: number;
  preco: number;
}

export interface ProductItem {
  // Bolos
  tamanho_aro?: number;
  capacidade_aproximada?: string;
  peso_aproximado?: string;
  
  // Generic
  preco: number;
  
  // Acrescimos/Coberturas
  acrescimo?: string;
  cobertura?: string;
  tabela_valores?: PriceTableItem[];
  
  // Doces
  doce?: string;
  quantidade?: number;
  
  // Mini Cupcakes / Tags
  preco_recheado?: number;
}

export interface ProductCategory {
  name: string;
  description: string;
  items: ProductItem[];
}

export interface SiteConfiguration {
  site_name: string;
  site_phone: number;
  site_instagram: string;
  our_structure: string;
  how_works: Record<string, string>;
}

export interface AppData {
  configuration: SiteConfiguration;
  products: ProductCategory[];
}

export interface CartItem {
  id: string;
  productId: string; // Category name for now or unique ID if we generate one
  productName: string; // e.g. "Bolo Aro 15" or "Brigadeiro"
  quantity: number;
  price: number;
  // Details
  description?: string;
  customizations?: string[];
}
