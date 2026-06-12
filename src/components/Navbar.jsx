import React from 'react';

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
);

export default function Navbar({ activeSection, navigateTo, isMenuOpen, setIsMenuOpen }) {
  return (
    <nav className="sticky top-0 z-50 bg-[#f8f8f8]/90 backdrop-blur-md border-b border-gray-100">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-5">
        <button 
          onClick={() => navigateTo('portfolio')} 
          className="text-left text-xs md:text-sm font-extralight tracking-[0.25em] uppercase text-gray-800 hover:text-[#c49a6c] transition-colors"
        >
          Michele Guimarães Massari
        </button>
        
        {/* Menu de Navegação Desktop */}
        <div className="hidden md:flex items-center gap-10">
          <button 
            onClick={() => navigateTo('portfolio')} 
            className={`font-['Inter',sans-serif] text-[11px] font-light tracking-[0.2em] uppercase transition-all duration-300 ${activeSection === 'portfolio' ? 'text-[#c49a6c] font-medium' : 'hover:text-[#c49a6c] text-gray-500'}`}
          >
            Projetos
          </button>
          <button 
            onClick={() => navigateTo('sobre')} 
            className={`font-['Inter',sans-serif] text-[11px] font-light tracking-[0.2em] uppercase transition-all duration-300 ${activeSection === 'sobre' ? 'text-[#c49a6c] font-medium' : 'hover:text-[#c49a6c] text-gray-500'}`}
          >
            Sobre
          </button>
          <button 
            onClick={() => navigateTo('contato')} 
            className={`font-['Inter',sans-serif] text-[11px] font-light tracking-[0.2em] uppercase transition-all duration-300 ${activeSection === 'contato' ? 'text-[#c49a6c] font-medium' : 'hover:text-[#c49a6c] text-gray-500'}`}
          >
            Contato
          </button>
        </div>
        
        {/* Botão de Toggle Mobile */}
        <div className="block md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-700"
            aria-label="Alternar Menu"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </nav>
  );
}