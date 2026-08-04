// 🎯 ARTBLEND CONSULTORIA - CONFIGURAÇÃO CENTRALIZADA v4.0
// Use este arquivo para sincronizar TODOS os nomes em um único lugar

const CONFIG = {
  // ═══════════════════════════════════════════════════════════════
  // NOMES OFICIAIS (use em todos os arquivos)
  // ═══════════════════════════════════════════════════════════════
  
  nome_empresa: "ArtBlend Consultoria Gourmet",
  nome_curto: "ArtBlend",
  slogan: "Consultoria Inteligente para Restaurantes",
  
  // ═══════════════════════════════════════════════════════════════
  // DOMÍNIOS (ATUAL vs FUTURO)
  // ═══════════════════════════════════════════════════════════════
  
  dominos: {
    // ATUAL (funcionando agora)
    netlify_app: "https://artblendconsultoriagourmet.netlify.app",
    netlify_site_id: "artblendconsultoriagourmet",
    
    // FUTURO (propagando DNS 48h)
    customizado: "https://artblendconsultoria.com.br",
    customizado_status: "EM PROPAGAÇÃO (48h, volta em ~2026-08-06)",
    registrador: "DESCOBRIR (GoDaddy/Namecheap/etc)",
    
    // LINKS CURTOS (backup)
    artblend_app: "https://artblend.app",
    artblend_com_br: "https://artblend.com.br"
  },

  // ═══════════════════════════════════════════════════════════════
  // SUPABASE (Banco de dados centralizado)
  // ═══════════════════════════════════════════════════════════════
  
  supabase: {
    project_id: "zjvjixiuvnpbpsdnxuyk",
    url: "https://zjvjixiuvnpbpsdnxuyk.supabase.co",
    anon_key: process.env.SUPABASE_ANON_KEY,
    tabelas: {
      clientes: "clientes",
      dados_ferramenta: "dados_ferramenta",
      progresso_cursos: "progresso_cursos",
      usuarios: "usuarios"
    }
  },

  // ═══════════════════════════════════════════════════════════════
  // NETLIFY (Hosting + Build)
  // ═══════════════════════════════════════════════════════════════
  
  netlify: {
    site_id: "artblendconsultoriagourmet",
    site_name: "artblendconsultoriagourmet",
    build_hook: process.env.NETLIFY_BUILD_HOOK,
    api_url: "https://api.netlify.com/api/v1/sites/artblendconsultoriagourmet"
  },

  // ═══════════════════════════════════════════════════════════════
  // TWILIO (WhatsApp) - CREDENCIAIS EM .env
  // ═══════════════════════════════════════════════════════════════
  
  twilio: {
    account_sid: process.env.TWILIO_ACCOUNT_SID,
    auth_token: process.env.TWILIO_AUTH_TOKEN,
    whatsapp_number: "whatsapp:+5508199137405"
  },

  // ═══════════════════════════════════════════════════════════════
  // ROTAS INTERNAS (URLs dentro do site)
  // ═══════════════════════════════════════════════════════════════
  
  rotas: {
    login: "/",
    hub: "/artblend_hub",
    painel: "/painel",
    dashboard: "/dashboard",
    cursos: "/cursos",
    clientes: "/clientes"
  },

  // ═══════════════════════════════════════════════════════════════
  // ARQUIVOS HTML PRINCIPAIS
  // ═══════════════════════════════════════════════════════════════
  
  arquivos: {
    login: "index.html",
    hub: "ARTBLEND_HUB.html",
    painel_consultor: "ARTBLEND_PAINEL_CONSULTOR.html",
    cadastro_cliente: "ARTBLEND_CADASTRO_CLIENTE_V2.html"
  },

  // ═══════════════════════════════════════════════════════════════
  // 8 MÓDULOS DINÂMICOS
  // ═══════════════════════════════════════════════════════════════
  
  modulos: [
    {
      nome: "Dashboard Consultor",
      icon: "📊",
      descricao: "Visão completa com gráficos",
      arquivo: "ARTBLEND_DASHBOARD_CONSULTOR_COMPLETO.html"
    },
    {
      nome: "Gamificação",
      icon: "🎮",
      descricao: "30 badges, pontos, ranking",
      arquivo: "ARTBLEND_GAMIFICACAO_SISTEMA_COMPLETA.html"
    },
    {
      nome: "WhatsApp Automação",
      icon: "💬",
      descricao: "6 templates, triggers automáticos",
      arquivo: "ARTBLEND_WHATSAPP_AUTOMACAO_COMPLETA.html"
    },
    {
      nome: "Dashboard Clientes Realtime",
      icon: "🌐",
      descricao: "Online, heatmap 24h, funnel",
      arquivo: "ARTBLEND_DASHBOARD_CLIENTES_REALTIME.html"
    },
    {
      nome: "Temas Personalização",
      icon: "🎨",
      descricao: "Dark Mode, cores customizadas",
      arquivo: "ARTBLEND_TEMAS_PERSONALIZACAO_COMPLETA.html"
    },
    {
      nome: "Notificações Sistema",
      icon: "🔔",
      descricao: "Bell icon, 4 tipos notificações",
      arquivo: "ARTBLEND_NOTIFICACOES_SISTEMA_COMPLETA.html"
    },
    {
      nome: "Relatório Cliente V2",
      icon: "📄",
      descricao: "KPIs, progresso, recomendações",
      arquivo: "ARTBLEND_RELATORIO_CLIENTE_V2_FINAL.html"
    },
    {
      nome: "Analytics BI Dashboard",
      icon: "📈",
      descricao: "Receita, funnel, ROI, top cursos",
      arquivo: "ARTBLEND_ANALYTICS_BI_DASHBOARD_COMPLETO.html"
    }
  ]
};

// ═══════════════════════════════════════════════════════════════
// USE ASSIM EM QUALQUER ARQUIVO:
// ═══════════════════════════════════════════════════════════════

/*
// Em index.html:
<title>${CONFIG.nome_empresa} - Login</title>

// Em ARTBLEND_HUB.html:
const SUPABASE_URL = CONFIG.supabase.url;
const SUPABASE_ANON_KEY = CONFIG.supabase.anon_key;

// Em redirecionamentos:
${CONFIG.dominos.netlify_app}${CONFIG.rotas.hub}

// Para exibir modulos:
CONFIG.modulos.forEach(modulo => {
  // Renderizar modulo
});
*/

// ═══════════════════════════════════════════════════════════════
// EXPORTAR PARA USO EM SCRIPTS
// ═══════════════════════════════════════════════════════════════

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
