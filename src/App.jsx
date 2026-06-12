import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProjectModal from './components/ProjectModal';

// ==========================================
// CONFIGURAÇÕES DE ASSETS E LINKS
// ==========================================
// No seu projeto oficial, você pode descomentar os imports locais abaixo se preferir:
import mesa_gotas from './assets/mesa_gotas.png';
// import michele from './assets/michele.jpg';

// Imagem de background para a seção Hero (Mesa de Gotas)
const MESA_GOTAS_URL = mesa_gotas;

// Imagens abstratas e conceituais de portfólio (substitua por prints reais no futuro)
const PROJECT_1_URL = 'https://images.unsplash.com/photo-1502691876148-a84978e59fa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
const PROJECT_2_URL = 'https://images.unsplash.com/photo-1453749024858-4bda89bd9ed7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
const PROJECT_3_URL = 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';

// Dados estruturados dos seus projetos (modelo padronizado para o Modal)
const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Galeria Interativa',
    subtitle: 'Uma imersão visual no design fluido e minimalista.',
    category: 'Experimento Frontend',
    image: PROJECT_1_URL,
    technologies: ['React', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    summary: 'Aplicação responsiva construída para exercitar a lógica de layouts fluidos, animações de entrada elegantes e o gerenciamento inteligente de estados no ecossistema React.',
    challenge: 'O principal desafio foi criar transições que parecessem naturais tanto em telas de celulares menores quanto em monitores ultrawide, mantendo a performance de renderização alta.',
    solution: 'Utilização de componentes baseados no Tailwind CSS com larguras fluidas relativas e cálculos dinâmicos de renderização por meio de React hooks tradicionais.',
    codeSnippet: `// Exemplo de código do componente de transição fluida
const GalleryGrid = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((item) => (
        <Card key={item.id} className="transition-all duration-300 hover:scale-[1.02]">
          <Image src={item.url} alt={item.title} />
        </Card>
      ))}
    </div>
  );
};`,
    liveLink: '#',
    githubLink: 'https://github.com/micheleguims'
  },
  {
    id: 2,
    title: 'Visualizador de Dados',
    subtitle: 'Unindo análise de comportamento e tabelas estatísticas.',
    category: 'Estudo Comportamental',
    image: PROJECT_2_URL,
    technologies: ['JavaScript', 'HTML5', 'CSS Custom', 'Chart.js'],
    summary: 'Protótipo de dashboard projetado para receber e formatar tabelas analíticas brutas sobre o comportamento de usuários, gerando gráficos de linha limpos e de fácil interpretação.',
    challenge: 'A manipulação de arrays complexos com muitos dados biológicos ou estatísticos pode desacelerar a renderização da tela principal se não for feita de forma assíncrona.',
    solution: 'Filtros em memória que dividem o processamento dos dados estruturados antes de alimentar os gráficos vetoriais do Canvas.',
    codeSnippet: `// Estruturação e ordenação assíncrona dos dados
const processChartData = async (rawData) => {
  const filtered = rawData.filter(d => d.value > 0);
  return filtered.map(item => ({
    label: item.timestamp,
    value: item.score
  }));
};`,
    liveLink: '#',
    githubLink: 'https://github.com/micheleguims'
  },
  {
    id: 3,
    title: 'Diário Digital',
    subtitle: 'O elo de ligação entre a biologia e a tecnologia.',
    category: 'Jardim de Estudo',
    image: PROJECT_3_URL,
    technologies: ['HTML', 'JavaScript', 'CSS Grid', 'Markdown'],
    summary: 'Um sistema de anotações e fichamentos pessoais focado em estudos de neurociência e codificação, facilitando as revisões periódicas através de um layout estritamente minimalista.',
    challenge: 'Criar um editor de notas de leitura que fosse totalmente amigável à escrita rápida e suportasse estilizações de texto simples sem depender de bibliotecas externas pesadas.',
    solution: 'Uso de expressões regulares básicas para conversão direta de Markdown nativo em tags HTML limpas dentro de áreas de conteúdo editável.',
    codeSnippet: `// Conversor básico de Markdown para visualização rápida
function simpleMarkdown(text) {
  return text
    .replace(/\\*\\*(.*?)\\*\\*/g, '<strong>$1</strong>')
    .replace(/\\*(.*?)\\*/g, '<em>$1</em>')
    .replace(/#(.*)/g, '<h2>$1</h2>');
}`,
    liveLink: '#',
    githubLink: 'https://github.com/micheleguims'
  }
];

// ==========================================
// COMPONENTES DE ÍCONES (SVG INLINE)
// ==========================================
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

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
                style={{ backgroundImage: `url(${MESA_GOTAS_URL})` }}
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
          <span className="inline-block font-light mt-2">Feito com ♥ no Jardim Digital</span>
        </p>
      </footer>
    </div>
  );
}

export default App;