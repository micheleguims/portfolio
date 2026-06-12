import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProjectModal from './components/ProjectModal';
import { PROJECTS_DATA } from './data'; './data/projectsData';
import { MenuIcon, CloseIcon, LinkedInIcon, GitHubIcon, MailIcon } from './components/Icons';

// ==========================================
// CONFIGURAÇÕES DE ASSETS E LINKS
// ==========================================
// No seu projeto oficial, você pode descomentar os imports locais abaixo se preferir:
import mesa_gotas from './assets/mesa_gotas.png';
import michele from './assets/michele.jpg';

// ==========================================
// COMPONENTE PRINCIPAL (APP)
// ==========================================
function App() {
  const [activeSection, setActiveSection] = useState('portfolio'); // 'portfolio' | 'sobre' | 'contato'
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const navigateTo = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#f8f8f8] text-[#333333] min-h-screen font-['Playfair_Display',serif] flex flex-col justify-between selection:bg-[#c49a6c]/20">
      
      <div>
        {/* Navbar Consolidada */}
        <Navbar 
          activeSection={activeSection} 
          navigateTo={navigateTo} 
          isMenuOpen={isMenuOpen} 
          setIsMenuOpen={setIsMenuOpen} 
        />

        {/* Menu Mobile Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-[#f8f8f8] z-[100] flex flex-col items-center justify-center gap-10 text-xl md:hidden">
            <button 
              onClick={() => setIsMenuOpen(false)} 
              className="absolute top-6 right-6 p-3 hover:bg-gray-100 rounded-full text-gray-600 transition-colors"
            >
              <CloseIcon />
            </button>
            <button 
              onClick={() => navigateTo('portfolio')} 
              className="font-['Inter',sans-serif] font-light tracking-[0.2em] uppercase hover:text-[#c49a6c] transition-colors"
            >
              Projetos
            </button>
            <button 
              onClick={() => navigateTo('sobre')} 
              className="font-['Inter',sans-serif] font-light tracking-[0.2em] uppercase hover:text-[#c49a6c] transition-colors"
            >
              Sobre
            </button>
            <button 
              onClick={() => navigateTo('contato')} 
              className="font-['Inter',sans-serif] font-light tracking-[0.2em] uppercase hover:text-[#c49a6c] transition-colors"
            >
              Contato
            </button>
          </div>
        )}

        {/* ==========================================
            1. PÁGINA INICIAL / PORTFÓLIO (DEFAULT)
            ========================================== */}
        {activeSection === 'portfolio' && (
          <>
            {/* Seção Hero de Boas-vindas */}
            <header className="relative h-[60vh] flex items-center justify-center text-center px-4 overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center brightness-95" 
                style={{ backgroundImage: `url(${mesa_gotas})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-b from-[#f8f8f8]/30 via-transparent to-[#f8f8f8]/70"></div>
              
              <div className="relative z-10 bg-white/75 p-8 md:p-14 rounded-2xl shadow-xl max-w-2xl backdrop-blur-md mx-4 border border-white/40">
                <h2 className="text-2xl md:text-4xl font-extralight tracking-[0.2em] uppercase text-gray-900 leading-relaxed font-serif">
                  Meu Jardim Digital
                </h2>
                <div className="w-16 h-[1px] bg-[#c49a6c] mx-auto my-5"></div>
                <p className="text-xs md:text-sm max-w-md mx-auto font-['Inter',sans-serif] font-light tracking-wide text-gray-700 leading-relaxed">
                  Espaço reservado para cultivar aprendizados, documentar ideias e reunir meus projetos de programação em evolução constante.
                </p>
              </div>
            </header>

            {/* Galeria de Projetos Recentes */}
            <section className="py-20 px-6 bg-white">
              <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-xl mx-auto mb-16">
                  <span className="font-['Inter',sans-serif] text-xs font-semibold uppercase tracking-[0.3em] text-[#c49a6c]">
                    Galeria
                  </span>
                  <h3 className="mt-3 text-3xl md:text-4xl font-extralight tracking-[0.15em] text-gray-900 font-serif uppercase">
                    Projetos Recentes
                  </h3>
                  <div className="w-12 h-[1px] bg-[#c49a6c] mx-auto mt-4"></div>
                </div>

                {/* Grade Dinâmica de Projetos */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {PROJECTS_DATA.map((project) => (
                    <div 
                      key={project.id} 
                      onClick={() => setSelectedProject(project)} 
                      className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md hover:border-gray-200 transition-all duration-300 cursor-pointer"
                    >
                      <div className="h-56 overflow-hidden relative">
                        <div className="absolute inset-0 bg-[#c49a6c]/5 group-hover:bg-[#c49a6c]/0 transition-all duration-300 z-10"></div>
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" 
                        />
                      </div>
                      <div className="p-8">
                        <span className="text-[10px] tracking-[0.2em] font-['Inter',sans-serif] font-semibold text-[#c49a6c] uppercase">
                          {project.category}
                        </span>
                        <h4 className="font-serif font-extralight text-xl text-gray-800 tracking-wider mt-2 group-hover:text-[#c49a6c] transition-colors">
                          {project.title}
                        </h4>
                        <p className="font-['Inter',sans-serif] font-light text-xs text-gray-500 mt-3 line-clamp-2 leading-relaxed">
                          {project.summary}
                        </p>
                        <div className="mt-6 pt-6 border-t border-gray-50 flex justify-between items-center">
                          <span className="font-['Inter',sans-serif] text-[11px] text-gray-400 font-light">
                            {project.technologies.slice(0, 2).join(' • ')}
                          </span>
                          <span className="text-xs font-['Inter',sans-serif] text-[#c49a6c] group-hover:underline flex items-center gap-1">
                            Detalhes 
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {/* ==========================================
            2. PÁGINA SOBRE MIM (APENAS SOB DEMANDA)
            ========================================== */}
        {activeSection === 'sobre' && (
          <section className="py-24 px-6 bg-white animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
              
              {/* Moldura de Placeholder Elegante com MGM */}
              <div className="relative flex items-center justify-center bg-[#fcfbfa] border border-[#f0ede6] rounded-xl p-8 aspect-[4/5] shadow-sm overflow-hidden">
                <div className="absolute inset-4 border border-dashed border-[#e6dfd5] rounded-lg"></div>
                <div className="relative z-10 text-center px-4">
                  <div className="w-20 h-20 rounded-full border border-[#c49a6c]/30 mx-auto flex items-center justify-center mb-6">
                    <span className="text-2xl font-serif font-extralight tracking-widest text-[#c49a6c]">MGM</span>
                  </div>
                  <h5 className="font-serif font-extralight tracking-[0.2em] text-[#c49a6c] uppercase text-sm mb-2">Retrato de Apresentação</h5>
                  <p className="font-['Inter',sans-serif] font-light text-xs text-gray-400 max-w-[240px] mx-auto leading-relaxed">
                    (Esta imagem está oculta temporariamente. Edite o código para apontar para o seu arquivo de foto original)
                  </p>
                </div>
                <div className="absolute bottom-6 left-6 text-[10px] font-['Inter',sans-serif] text-gray-300 tracking-[0.3em] uppercase">
                  Michele G. Massari
                </div>
              </div>

              <div>
                <span className="font-['Inter',sans-serif] text-xs font-semibold uppercase tracking-[0.3em] text-[#c49a6c]">
                  Trajetória
                </span>
                <h3 className="mt-3 text-3xl md:text-4xl font-extralight tracking-[0.1em] text-gray-900 font-serif leading-tight">
                  Criatividade, ciência e dedicação à tecnologia.
                </h3>
                <div className="w-12 h-[1px] bg-[#c49a6c]/60 my-6"></div>
                
                <div className="space-y-5 font-['Inter',sans-serif] font-light text-sm text-gray-600 leading-relaxed">
                  <p>
                    Não tenho medo em dizer que possuo múltiplos interesses. Foram eles que me trouxeram até aqui. Na minha face bióloga, amo estudar o comportamento, a evolução da vida e, por isso, me especializei em neurociências. Considero que sou uma pessoa com uma mente pulsante e bastante criativa. 💡 Ah! Eu também sou um pouco artista, mas isso fica para outra história...
                  </p>
                  <p>
                    Esse é meu espaço, em constante construção, para mostrar um pouquinho do que eu faço e o que aprendo a cada dia. Aqui será possível vivenciar um pouco dos meus interesses e estudos focados na área tecnológica, que é o que mais traz inspiração atualmente. Amo os desafios que a tecnologia traz, e a cada dia me sinto mais motivada a aprender e criar coisas novas.
                  </p>
                  <p>
                    Esse site está sendo criado como uma ferramenta de aprendizado, então, se você encontrar algo estranho ou que não funcione, por favor, me avise! Estou aberta a sugestões e críticas construtivas. Vamos crescer juntos!
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ==========================================
            3. PÁGINA DE CONTATO (APENAS SOB DEMANDA)
            ========================================== */}
        {activeSection === 'contato' && (
          <section className="py-24 px-6 bg-white animate-fade-in">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                
                {/* Informações e Redes Sociais */}
                <div>
                  <span className="font-['Inter',sans-serif] text-xs font-semibold uppercase tracking-[0.3em] text-[#c49a6c]">
                    Conexões
                  </span>
                  <h3 className="mt-3 text-3xl md:text-4xl font-extralight tracking-[0.15em] text-gray-900 font-serif uppercase">
                    Fale Comigo
                  </h3>
                  <div className="w-12 h-[1px] bg-[#c49a6c] my-6"></div>
                  
                  <p className="font-['Inter',sans-serif] font-light text-sm text-gray-600 leading-relaxed mb-8">
                    Tem sugestões, feedbacks sobre o meu código em desenvolvimento ou apenas deseja trocar uma ideia sobre neurociência e programação? Deixe sua mensagem e vamos construir pontes!
                  </p>

                  <div className="space-y-4 font-['Inter',sans-serif] font-light text-sm">
                    {/* E-mail */}
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#c49a6c]">
                        <MailIcon />
                      </div>
                      <div>
                        <h5 className="font-semibold text-xs tracking-wider uppercase text-gray-450">E-mail</h5>
                        <a href="mailto:micheleguims@gmail.com" className="text-gray-700 hover:text-[#c49a6c] transition-colors">micheleguims@gmail.com</a>
                      </div>
                    </div>

                    {/* GitHub */}
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#c49a6c]">
                        <GitHubIcon />
                      </div>
                      <div>
                        <h5 className="font-semibold text-xs tracking-wider uppercase text-gray-450">GitHub</h5>
                        <a href="https://github.com/micheleguims" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#c49a6c] transition-colors">github.com/micheleguims</a>
                      </div>
                    </div>

                    {/* LinkedIn */}
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#c49a6c]">
                        <LinkedInIcon />
                      </div>
                      <div>
                        <h5 className="font-semibold text-xs tracking-wider uppercase text-gray-450">LinkedIn</h5>
                        <a href="https://linkedin.com/in/michelegmassari" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#c49a6c] transition-colors">linkedin.com/in/michelegmassari</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Formulário Estilizado */}
                <div className="bg-[#fcfbfa] border border-[#f0ede6] p-8 md:p-10 rounded-xl shadow-sm">
                  {formSubmitted ? (
                    <div className="h-full flex flex-col items-center justify-center text-center py-12">
                      <div className="w-16 h-16 bg-[#c49a6c]/10 rounded-full flex items-center justify-center text-[#c49a6c] mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                      <h4 className="font-serif font-extralight text-xl text-gray-900 tracking-wider">Mensagem Enviada!</h4>
                      <p className="font-['Inter',sans-serif] font-light text-xs text-gray-500 mt-2 leading-relaxed">
                        Obrigada pelo contato. Em breve responderei no seu e-mail.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6 font-['Inter',sans-serif]">
                      <div>
                        <label className="block text-xs font-medium uppercase tracking-wider text-gray-500 mb-2">Seu Nome</label>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Nome Completo" 
                          className="w-full bg-white border border-[#e5dfd3] rounded-lg px-4 py-3 text-sm font-light text-gray-700 placeholder-gray-300 focus:outline-none focus:border-[#c49a6c] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium uppercase tracking-wider text-gray-500 mb-2">Seu E-mail</label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="nome@exemplo.com" 
                          className="w-full bg-white border border-[#e5dfd3] rounded-lg px-4 py-3 text-sm font-light text-gray-700 placeholder-gray-300 focus:outline-none focus:border-[#c49a6c] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium uppercase tracking-wider text-gray-500 mb-2">Mensagem</label>
                        <textarea 
                          rows="4" 
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          placeholder="Escreva sobre o que você deseja conversar..." 
                          className="w-full bg-white border border-[#e5dfd3] rounded-lg px-4 py-3 text-sm font-light text-gray-700 placeholder-gray-300 focus:outline-none focus:border-[#c49a6c] transition-all resize-none"
                        ></textarea>
                      </div>
                      <button 
                        type="submit" 
                        className="w-full bg-[#c49a6c] hover:bg-[#b88e61] text-white text-xs font-medium tracking-widest uppercase py-3.5 px-6 rounded-lg transition-all shadow-sm hover:shadow-md"
                      >
                        Enviar Mensagem
                      </button>
                    </form>
                  )}
                </div>

              </div>
            </div>
          </section>
        )}
      </div>

      {/* Modal Padronizado */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      {/* Rodapé Clean */}
      <footer className="text-center py-12 px-6 bg-[#f8f8f8] border-t border-gray-100">
        <p className="font-['Inter',sans-serif] text-[11px] text-gray-400 max-w-3xl mx-auto leading-loose tracking-wide">
          <a href="https://micheleguims.github.io/portfolio/" className="text-[#c49a6c] hover:underline hover:text-[#b88e61] transition-colors">Portfólio de Michele G Massari </a>
          &copy; 2025 by <a href="https://github.com/micheleguims" className="text-[#c49a6c] hover:underline hover:text-[#b88e61] transition-colors">Michele Guarany Guimarães Massari </a>
          is licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" className="text-[#c49a6c] hover:underline hover:text-[#b88e61] transition-colors">CC BY-NC-SA 4.0</a>
          
          <span className="inline-flex items-center align-middle ml-2 gap-1 opacity-70">
            <img className='h-3.5 w-3.5' src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="CC" />
            <img className='h-3.5 w-3.5' src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="BY" />
            <img className='h-3.5 w-3.5' src="https://mirrors.creativecommons.org/presskit/icons/nc.svg" alt="NC" />
            <img className='h-3.5 w-3.5' src="https://mirrors.creativecommons.org/presskit/icons/sa.svg" alt="SA" />
          </span>
          <br />

          {/* Links e Redes Sociais */}
          <span className="flex justify-center gap-4 mt-4 mb-2">
            <a href="https://linkedin.com/in/michelegmassari" target="_blank" rel="noopener noreferrer" className="hover:text-[#c49a6c] transition-colors inline-flex items-center gap-1">
              <LinkedInIcon /> LinkedIn
            </a>
            <span className="text-gray-300">|</span>
            <a href="https://github.com/micheleguims" target="_blank" rel="noopener noreferrer" className="hover:text-[#c49a6c] transition-colors inline-flex items-center gap-1">
              <GitHubIcon /> GitHub
            </a>
          </span>
          <span className="inline-block font-light mt-2">Feito com ♥</span>
        </p>
      </footer>
    </div>
  );
}

export default App;