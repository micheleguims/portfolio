import './App.css'
import React, { useState } from 'react';

// Para ícones, vamos usar SVGs inline para manter tudo em um único arquivo.
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);


// Componente principal da sua aplicação
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className="app-container">
        {/* --- Navegação --- */}
        <nav className="navbar">
          <div className="nav-content">
            <h1 className="nav-brand">Michele Guimarães Massari</h1>
            <div className="nav-links">
              <a href="#sobre">Sobre</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#contato" className="contact-button">Contato</a>
            </div>
            <div className="menu-button">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </nav>

        {/* --- Menu Mobile --- */}
        {isMenuOpen && (
            <div className="mobile-menu">
                <a href="#sobre" onClick={() => setIsMenuOpen(false)}>Sobre</a>
                <a href="#portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
                <a href="#contato" onClick={() => setIsMenuOpen(false)}>Contato</a>
            </div>
        )}

        {/* --- Seção Principal (Hero) --- */}
        <header className="hero">
          <div className="hero-bg" style={{ backgroundImage: "url('src/assets/mesa_gotas.png')" }}></div>
          <div className="hero-content">
            <h2 className="hero-title">
              Meu Jardim Digital
            </h2>
            <p className="hero-subtitle">
             Reunindo meus projetos de programação neste site.
            </p>
            <a href="#sobre" className="hero-button">
              Saiba Mais
            </a>
          </div>
        </header>

        {/* --- Seção Sobre --- */}
        <section id="sobre" className="about-section">
          <div className="about-grid">
            <div>
              <img 
                src="src/assets/michele.jpg" 
                alt="Retrato de Michele Guimarães Massari olhando por uma janela com uma praia ao fundo em um dia nublado. *Amo dias cinzas!*" 
                className="about-image"
              />
            </div>
            <div>
              <h3 className="about-tag">Sobre Mim</h3>
              <h4 className="about-title">
                Uma jornada de criatividade, descobertas e dedicação.
              </h4>
              <p className="about-text">
                Não tenho medo em dizer que possuo múltiplos interesses. Foram eles que me trouxeram até aqui. Na minha face bióloga, amo estudar o comportamento, a evolução da vida e, por isso, me especializei em neurociências. Considero que sou uma pessoa com uma mente pulsante e bastante criativa. 💡 Ah! Eu também sou um pouco artista, mas isso fica para outra história...
              </p>
              <p className="about-text">
                Esse é meu espaço, - em constante construção - para mostrar um pouquinho do que eu faço e o que aprendo a cada dia. Aqui será possível vivenciar um pouco dos meus interesses e estudos focados na área tecnológica, que é o que mais traz mais inspiração atualmente. Amo os desafios que a tecnologia traz, e a cada dia me sinto mais motivada a aprender e criar coisas novas. O resultado disso, você poderá ver aqui.
              </p>
               <p className="about-text">
                Esse site está sendo criado como uma ferramenta de aprendizado, então, se você encontrar algo estranho ou que não funcione, por favor, me avise! Estou aberta a sugestões e críticas construtivas. Vamos crescer juntos!
              </p>
            </div>
          </div>
        </section>

        {/* --- Footer --- */}
        <footer className="footer">
          <p>
            <a href="https://micheleguims.github.io/portfolio/">Portfólio de Michele G Massari </a>
            &copy; 2025 by <a href="https://github.com/micheleguims">Michele Guarany Guimarães Massari </a>
            is licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a>
            <img className='footer-license' src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" />
            <img className='footer-license' src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="" />
            <img className='footer-license' src="https://mirrors.creativecommons.org/presskit/icons/nc.svg" alt="" />
            <img className='footer-license' src="https://mirrors.creativecommons.org/presskit/icons/sa.svg" alt="" /><br />
          Feito com ♥
          </p>
        </footer>
      </div>
    </>
  )
}

export default App
