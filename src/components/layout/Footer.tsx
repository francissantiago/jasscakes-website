import { Instagram, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-[#F5F5F5] mt-auto">
      <div className="container mx-auto py-8 px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold text-[#FFB6C1] mb-2">Jass Cakes Confeitaria</h3>
          <p className="text-sm text-gray-500">Transformando açúcar em arte.</p>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="https://instagram.com/jasscakesbh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-[#E1306C]">
            <Instagram className="h-5 w-5" />
            <span className="text-sm">@jasscakesbh</span>
          </a>
          <a href="https://wa.me/5531983622642" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-[#25D366]">
            <Phone className="h-5 w-5" />
            <span className="text-sm">(31) 98362-2642</span>
          </a>
        </div>
        
        <div className="text-center md:text-right text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Jass Cakes.</p>
          <p>Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
