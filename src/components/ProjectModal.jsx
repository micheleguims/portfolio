import React from 'react';

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
);

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[200] overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-10">
      <div className="bg-[#f8f8f8] rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative border border-gray-100">
        <button onClick={onClose} className="absolute top-4 right-4 z-10 bg-white/80 p-2.5 rounded-full shadow-md text-gray-600 hover:text-black transition-all">
          <CloseIcon />
        </button>

        <div className="relative h-64 md:h-80 w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#f8f8f8] via-[#f8f8f8]/20 to-black/35 z-10"></div>
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute bottom-6 left-6 md:left-10 z-20">
            <span className="text-[10px] tracking-[0.2em] font-['Inter',sans-serif] font-semibold text-[#c49a6c] uppercase bg-white/90 px-3 py-1 rounded-full">
              {project.category}
            </span>
            <h3 className="font-serif font-extralight text-3xl md:text-4xl text-gray-950 tracking-wider mt-3">
              {project.title}
            </h3>
            <p className="font-['Inter',sans-serif] font-light text-xs md:text-sm text-gray-700 mt-1">{project.subtitle}</p>
          </div>
        </div>

        <div className="p-6 md:p-10 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h4 className="font-serif font-semibold text-lg text-gray-800">Sobre o Projeto</h4>
                <p className="font-['Inter',sans-serif] font-light text-sm text-gray-600 leading-relaxed mt-2">{project.summary}</p>
              </div>
              <div>
                <h4 className="font-serif font-semibold text-base text-gray-800">O Desafio</h4>
                <p className="font-['Inter',sans-serif] font-light text-xs text-gray-500 leading-relaxed mt-2">{project.challenge}</p>
              </div>
              <div>
                <h4 className="font-serif font-semibold text-base text-gray-800">A Solução</h4>
                <p className="font-['Inter',sans-serif] font-light text-xs text-gray-500 leading-relaxed mt-2">{project.solution}</p>
              </div>
            </div>

            <div className="bg-[#fcfbfa] border border-[#f0ede6] p-6 rounded-xl space-y-6 h-fit">
              <div>
                <h5 className="font-['Inter',sans-serif] text-[10px] font-semibold tracking-widest text-[#c49a6c] uppercase">Tecnologias</h5>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-white border border-gray-100 text-xs text-gray-600 font-['Inter',sans-serif] font-light px-2.5 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="bg-[#c49a6c] text-white font-['Inter',sans-serif] text-xs font-semibold tracking-widest uppercase text-center py-3 px-4 rounded-lg hover:bg-[#b88e61] transition-colors">
                  Ver Código Fonte
                </a>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div className="bg-gray-100/85 px-4 py-2 border-b border-gray-200 flex justify-between items-center">
              <span className="font-['Inter',sans-serif] text-xs text-gray-400 font-mono">snippet_principal.js</span>
            </div>
            <pre className="p-6 bg-gray-900 text-gray-100 font-mono text-[11px] overflow-x-auto">
              <code>{project.codeSnippet}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}