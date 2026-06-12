// 1. Importe as fotos dos seus projetos aqui:
// Supondo que você salvou uma foto chamada 'projeto-bio.png' na pasta assets
import imgProjeto1 from './assets/modelodeuso.png';
import imgProjeto2 from './assets/chamados.png';
import imgProjeto3 from './assets/fluxon8n.png';




// 2. Exporte a sua lista de projetos:
export const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Projeto Piloto',
    subtitle: 'Funcionalidades em React.',
    category: 'Desenvolvimento Web',
    image: imgProjeto1,
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'HTML5 & CSS3', 'Vite'],
    summary: 'App piloto criado para apresentar as funcionalidades do React.',
    challenge: 'Fazer o layout ficar responsivo.',
    solution: 'Usei CSS Grid e Flexbox).',
    codeSnippet: `// Exemplo de código aqui (colocar)
function calcular() {
  console.log("Olá mundo!");
}`,
    liveLink: 'https://modelodeuso.web.app/',
    githubLink: 'https://github.com/micheleguims/modelodeuso'
  },
  {
    id: 2,
    title: 'Portal Interno de Chamados',
    subtitle: 'Sistema de gerenciamento de chamados de setor.',
    category: 'Desenvolvimento Web',
    image: imgProjeto2,
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'HTML5 & CSS3', 'Vite'],
    summary: 'Protótipo de sistema de gerenciamento de chamados para setores administrativos, com foco em transições fluidas e responsividade em múltiplos dispositivos.',
    challenge: '--',
    solution: '--',
    codeSnippet: `// Exemplo de código aqui (colocar)
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
    liveLink: 'https://chamadosgsdcit.netlify.app/',
    githubLink: 'https://github.com/micheleguims/chamados-cit'
  },
  {
    id: 3,
    title: 'Fluxo Automatizado de Distribuição de Demandas',
    subtitle: 'Fluxo em n8n para automação de distribuição de demandas para outros setores.',
    category: 'Automação de Processos',
    image: imgProjeto3,
    technologies: ['n8n', 'JavaScript', 'APIs REST', 'Ollama', 'Automação de Fluxos'],
    summary: 'Automação de fluxo de trabalho para distribuição inteligente de demandas entre setores, utilizando n8n para orquestração e integração com APIs REST e modelos de linguagem Ollama para análise contextual.',
    challenge: 'Credenciamento e integração de APIs de terceiros para enriquecimento de dados, além de garantir a escalabilidade do fluxo para lidar com volumes crescentes de demandas.',
    solution: 'Implementação de autenticação OAuth para acesso seguro às APIs, uso de webhooks para comunicação em tempo real entre sistemas, e configuração de n8n para processamento assíncrono e balanceamento de carga.',
    codeSnippet: `// Exemplo de código aqui (colocar)
const processChartData = async (rawData) => {
  const filtered = rawData.filter(d => d.value > 0);
  return filtered.map(item => ({
    label: item.timestamp,
    value: item.score
  }));
};`,
    liveLink: '#',
    githubLink: 'https://github.com/micheleguims'
  }
];