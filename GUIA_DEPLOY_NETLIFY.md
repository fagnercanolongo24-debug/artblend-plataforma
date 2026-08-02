# 🚀 GUIA DEPLOY: Colocar ArtBlend no Ar (30 minutos)

## O que você vai fazer:
✅ Push do código pro GitHub  
✅ Conectar GitHub no Netlify  
✅ Deploy automático  
✅ Site ao vivo em seu domínio  
✅ HTTPS seguro (grátis)  

---

## OPÇÃO A: Deploy Mais Fácil (Netlify + Drag & Drop)

### Tempo: 5 minutos
### Custo: FREE

### A.1 Acessar Netlify
- Vá para: https://www.netlify.com/
- Clique em "Sign Up"
- Escolha: "Sign up with GitHub" (mais fácil)
- Autorize a conexão

### A.2 Deploy via Drag & Drop
- Baixe os arquivos em seu PC:
  ```
  ├─ ARTBLEND_DESIGN_SYSTEM.css
  ├─ ARTBLEND_CURSO_GESTAO_FINANCEIRA_V2_EEG.html
  ├─ ARTBLEND_CURSO_PRIME_COST_V2_EEG.html
  ├─ ... (todos 14 cursos)
  ├─ ARTBLEND_INTEGRACAO_SUPABASE_TWILIO.js
  └─ index.html (crie um com links para todos os cursos)
  ```

- Na página do Netlify, em "Drag files here to deploy"
- Arraste os arquivos
- Pronto! Site ao vivo em XXX.netlify.app

---

## OPÇÃO B: Deploy Profissional (GitHub + Netlify - RECOMENDADO)

### Tempo: 30 minutos
### Custo: FREE (básico) ou $19/mês (pro)
### Vantagem: Deploy automático (você push → site atualiza sozinho)

### B.1 Criar Repositório GitHub

#### Passo 1: Criar conta GitHub
- Vá para: https://github.com/
- "Sign up"
- Email, senha, username
- Confirme email

#### Passo 2: Criar Repositório
- Clique "+" (canto superior direito)
- "New repository"
- Nome: `artblend-platform`
- Descrição: "Plataforma ArtBlend - Consultoria Restaurantes"
- Tipo: Public (para deploy funcionar)
- "Create repository"

#### Passo 3: Fazer Upload dos Arquivos
- Clique "Add file" → "Upload files"
- Selecione TODOS os arquivos:
  - Design System CSS
  - 14 cursos HTML
  - Integração Twilio
  - Guias README.md
- Clique "Commit changes"

#### Passo 4: Criar arquivo `index.html` (Menu Principal)
- Em seu PC, crie `index.html`
- Cole este conteúdo:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ArtBlend - Plataforma de Consultoria</title>
  <link rel="stylesheet" href="ARTBLEND_DESIGN_SYSTEM.css">
  <style>
    body { padding: 40px 20px; background: linear-gradient(135deg, #1C93A8, #2EC4D6); }
    .container { max-width: 1000px; margin: 0 auto; }
    .header { text-align: center; color: white; margin-bottom: 50px; }
    .header h1 { font-size: 48px; margin: 0; }
    .header p { font-size: 18px; opacity: 0.9; margin: 10px 0 0 0; }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; }
    .card-link { 
      background: white; 
      padding: 30px; 
      border-radius: 12px; 
      text-decoration: none; 
      color: #16294A;
      text-align: center;
      transition: all 0.3s ease;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    .card-link:hover { transform: translateY(-5px); box-shadow: 0 8px 24px rgba(0,0,0,0.2); }
    .card-link h2 { margin: 0 0 10px 0; font-size: 24px; }
    .card-link p { margin: 0; color: #6E7A8C; font-size: 14px; }
    .footer { text-align: center; color: white; margin-top: 50px; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🎓 ArtBlend</h1>
      <p>Plataforma de Consultoria Gourmet para Restaurantes</p>
    </div>

    <div class="grid">
      <a href="ARTBLEND_CURSO_GESTAO_FINANCEIRA_V2_EEG.html" class="card-link">
        <h2>💰 Gestão Financeira</h2>
        <p>Controle receitas e custos</p>
      </a>

      <a href="ARTBLEND_CURSO_PRIME_COST_V2_EEG.html" class="card-link">
        <h2>📊 Prime Cost</h2>
        <p>CMV + Folha = Lucro</p>
      </a>

      <a href="ARTBLEND_CURSO_INDICADORES_KPI_V2_EEG.html" class="card-link">
        <h2>📈 Indicadores KPI</h2>
        <p>8 Métricas de Gestão</p>
      </a>

      <a href="ARTBLEND_CURSO_FLUXO_CAIXA_V2_EEG.html" class="card-link">
        <h2>💵 Fluxo de Caixa</h2>
        <p>Planejamento 90 dias</p>
      </a>

      <a href="ARTBLEND_CURSO_CARDAPIO_ENGENHARIA_V2_EEG.html" class="card-link">
        <h2>🍽️ Engenharia Cardápio</h2>
        <p>Preços + Margens Certas</p>
      </a>

      <a href="ARTBLEND_CURSO_RECEITAS_PADRAO_V2_EEG.html" class="card-link">
        <h2>👨‍🍳 Receitas Padrão</h2>
        <p>100% Consistência</p>
      </a>

      <a href="ARTBLEND_CURSO_HIGIENE_SANIDADE_V2_EEG.html" class="card-link">
        <h2>🧼 Higiene & Sanidade</h2>
        <p>BPF Implementação</p>
      </a>

      <a href="ARTBLEND_CURSO_ESTOQUE_CONTROLE_V2_EEG.html" class="card-link">
        <h2>📦 Controle de Estoque</h2>
        <p>Zero Desperdício</p>
      </a>

      <a href="ARTBLEND_CURSO_RH_GESTOR_V2_EEG.html" class="card-link">
        <h2>👥 Gestão de RH</h2>
        <p>Equipe Engajada</p>
      </a>

      <a href="ARTBLEND_CURSO_REFORCO_PSICOSSOCIAL_V2_EEG.html" class="card-link">
        <h2>💪 Reforço Psicossocial</h2>
        <p>Bem-estar Equipe</p>
      </a>

      <a href="ARTBLEND_CURSO_CONCORRENCIA_ANALISE_V2_EEG.html" class="card-link">
        <h2>🎯 Análise Concorrência</h2>
        <p>Posicionamento Claro</p>
      </a>

      <a href="ARTBLEND_CURSO_OPERACAO_CHECKLIST_V2_EEG.html" class="card-link">
        <h2>⚙️ Operação Checklist</h2>
        <p>Integração Total</p>
      </a>

      <a href="ARTBLEND_CURSO_CONSULTORIA_SANITARIA_V2_EEG.html" class="card-link">
        <h2>🧪 Consultoria Sanitária</h2>
        <p>BPF + APPCC</p>
      </a>

      <a href="ARTBLEND_CURSO_APPCC_V2_EEG.html" class="card-link">
        <h2>🔬 APPCC</h2>
        <p>Perigos Críticos</p>
      </a>
    </div>

    <div class="footer">
      <p>© 2026 ArtBlend Consultoria Gourmet | CNPJ: XX.XXX.XXX/XXXX-XX</p>
      <p>Versão 2.0 - Design EEG | Deploy: 02/08/2026</p>
    </div>
  </div>
</body>
</html>
```

- Salve como `index.html`
- GitHub → "Add file" → "Upload files"
- Selecione `index.html`
- Commit

### B.2 Conectar GitHub no Netlify

#### Passo 1: Vá para Netlify
- https://www.netlify.com/
- Entre (GitHub)
- Clique "New site from Git"

#### Passo 2: Autorizar GitHub
- Clique "GitHub"
- "Authorize Netlify by GitHub"
- Confirme em GitHub

#### Passo 3: Escolher Repositório
- Busque: `artblend-platform`
- Clique nele
- Deploy settings aparecem

#### Passo 4: Configurar Deploy
- "Deploy settings" → deixe padrão:
  - Branch: main
  - Build command: (deixe vazio)
  - Publish directory: / (raiz)
- Clique "Deploy site"

#### Passo 5: Esperar Deploy
- Netlify começa a fazer upload
- Aguarde 2-3 minutos
- Vai aparecer uma URL: https://XXX.netlify.app/

#### Passo 6: Testar
- Clique na URL
- Deve abrir seu site com os 14 cursos
- Clique em um curso
- Deve abrir normalmente

---

## OPÇÃO C: Deploy com Domínio Customizado

### C.1 Comprar Domínio
- Vá para: https://www.hostinger.com.br/ ou https://registro.br/
- Procure: `artblend.com.br` (ou outro)
- Compre por 1 ano (~R$ 50)

### C.2 Conectar Domínio no Netlify
- Netlify → Site Settings
- "Domain management"
- "Add domain"
- Digita: `artblend.com.br`
- Ele diz qual DNS usar
- Volta pro seu registrador (Hostinger/Registro.br)
- Altera os DNS para os do Netlify
- Aguarde 24-48h (DNS propagar)

### C.3 Certificado HTTPS
- Netlify faz automaticamente
- Seu site fica seguro em HTTPS

---

## DEPLOY AUTOMÁTICO (Quando você atualiza o código)

Agora quando você faz mudanças:

```
1. Modifica um arquivo (ex: curso novo)
2. Faz upload no GitHub
3. Git commit/push
4. Netlify vê a mudança AUTOMATICAMENTE
5. Faz deploy novo
6. Site atualiza em 2 minutos
7. Você não faz nada mais!
```

---

## CHECKLIST DEPLOY

| Item | Status |
|------|--------|
| GitHub criado | ✅ ou ❌ |
| Arquivos no GitHub | ✅ ou ❌ |
| Netlify conectado | ✅ ou ❌ |
| Site ao vivo | ✅ ou ❌ |
| Domain customizado | ✅ ou ❌ |
| HTTPS ativo | ✅ ou ❌ |
| Todos 14 cursos funcionando | ✅ ou ❌ |
| Twilio integrado | ✅ ou ❌ |
| Supabase conectado | ✅ ou ❌ |

---

## ✅ PRONTO!

Seu site está no ar! 🎉

**URL:** https://artblend.netlify.app (ou seu domínio customizado)

Agora:
- Clientes acessam de qualquer lugar
- Fazem diagnóstico
- Começam os cursos
- Recebem WhatsApp automático
- Dados salvos no Supabase
- Você vê tudo no dashboard

---

## TROUBLESHOOTING DEPLOY

**Problema: "Deploy falhou"**
- Solução: Verificar se `index.html` está no repositório

**Problema: "Site mostra erro 404"**
- Solução: Verificar se `ARTBLEND_DESIGN_SYSTEM.css` está importado corretamente

**Problema: "Cursos não abrem"**
- Solução: Verificar se nomes dos arquivos estão corretos no index.html

**Problema: "WhatsApp não funciona"**
- Solução: Twilio precisa estar configurado (ver guia anterior)

---

## 🎉 TUDO PRONTO!

Seu site está no ar com:
✅ 14 cursos profissionais
✅ Design visual EEG
✅ WhatsApp automático
✅ Banco de dados Supabase
✅ HTTPS seguro
✅ Deploy automático

Sucesso! 🚀
