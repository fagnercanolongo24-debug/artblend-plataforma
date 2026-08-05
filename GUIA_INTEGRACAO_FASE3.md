# 🚀 GUIA DE INTEGRAÇÃO FASE 3
## Supabase + Kanban + WhatsApp + Certificados

**Data:** 2 de Agosto 2026  
**Status:** Fase 3 Completa (Módulos 1-7)  
**Tempo Estimado:** 6 horas  
**Dificuldade:** Intermediária

---

## ✅ O QUE VOCÊ TEM AGORA

Arquivos criados:
- ✅ `ARTBLEND_SUPABASE_INTEGRADOR.js` - Conexão central
- ✅ `ARTBLEND_KANBAN_AUTOMATICO.html` - Drag-drop em tempo real
- ✅ `ARTBLEND_DASHBOARD_SUPABASE_REAL.html` - KPIs com dados reais
- ✅ `ARTBLEND_WHATSAPP_NOTIFICADOR.js` - Lembretes automáticos
- ✅ `ARTBLEND_CERTIFICADOS_GERADOR.js` - PDFs com QR code
- ✅ `artblend_supabase_schema.sql` - Tabelas Supabase
- ✅ `GUIA_INTEGRACAO_FASE3.md` - Este arquivo

---

## 🎯 PASSO 1: SUPABASE SETUP (30 min)

### 1.1 Criar projeto Supabase

1. Acesse https://supabase.com
2. Clique "New Project"
3. Preencha:
   - **Name:** `artblend-plataforma`
   - **Database password:** (gere uma forte)
   - **Region:** `São Paulo` (sa-east-1)
4. Aguarde ~1 minuto (criação do banco)

### 1.2 Pegar credenciais

Após projeto criar:
- Menu "Settings" → "API"
- Copie:
  - **URL do Projeto:** (ex: https://xxxxxx.supabase.co)
  - **Chave Anon (Public):** (anon | service-role)
  
**⚠️ IMPORTANTE:** Guarde a chave **anon** (pública), não compartilhe a chave service-role

### 1.3 Executar SQL Schema

1. No Supabase: Menu "SQL Editor"
2. Clique "+ New Query"
3. Cole TUDO do arquivo `artblend_supabase_schema.sql`
4. Clique "RUN"
5. Aguarde 2-3 segundos
6. ✅ Tabelas criadas!

**Verify:** Menu "Table Editor" → Deve listar 10 tabelas

---

## 🔧 PASSO 2: CONFIGURAR CREDENCIAIS (10 min)

### 2.1 Armazenar no LocalStorage (Navegador)

Abra console JavaScript (F12) e execute:

```javascript
// Suas credenciais Supabase
localStorage.setItem('supabase_url', 'https://SEU_PROJETO.supabase.co');
localStorage.setItem('supabase_key', 'SEU_ANON_KEY_AQUI');
localStorage.setItem('cliente_id', 'cliente-1'); // Teste
```

### 2.2 Ou Configure no Backend (Node.js)

Se usar um servidor:

```javascript
// .env
SUPABASE_URL=https://seu-projeto.supabase.co
SUPABASE_KEY=sua-chave-anon
TWILIO_SID=seu-twilio-sid
TWILIO_TOKEN=seu-twilio-token
TWILIO_FROM=whatsapp:+551199999999
```

```javascript
// .env.js (ou similar)
require('dotenv').config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const twilioSID = process.env.TWILIO_SID;
const twilioToken = process.env.TWILIO_TOKEN;
const twilioFrom = process.env.TWILIO_FROM;
```

---

## 📊 PASSO 3: CARREGAR MÓDULOS HTML

### 3.1 Adicionar Bibliotecas Externas

Nos `<head>` dos arquivos HTML, já tem:
```html
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js@3/dist/chart.min.js"></script>
<!-- Para Certificados (opcional): -->
<script src="https://cdn.jsdelivr.net/npm/jspdf"></script>
<script src="https://cdn.jsdelivr.net/npm/qrcode"></script>
```

✅ Já inclusos nos arquivos!

### 3.2 Testar Conexão

Abra `ARTBLEND_KANBAN_AUTOMATICO.html` no navegador.

Se for **online**: ✅ Verde - "Sincronizado"  
Se for **offline**: ⚠️ Laranja - "Modo Offline (dados de exemplo)"

---

## 💬 PASSO 4: WHATSAPP SETUP (Twilio) (30 min)

### 4.1 Criar conta Twilio

1. Acesse https://www.twilio.com
2. Sign Up (gratuito primeiros $15)
3. Verificar número celular
4. **Pular** "SMS/Voice" por enquanto
5. Ir direto para "WhatsApp Sandbox"

### 4.2 Ativar WhatsApp Sandbox

1. Console Twilio → "Messaging" → "Try it out" → "Send an SMS"
2. Clique "WhatsApp"
3. **Sandbox Setup:**
   - Seu número sandbox: (ex: +55 11 99999-9999)
   - Número de origem Twilio: (ex: +1 415 523 8886)
4. **Enviar mensagem de teste:**
   - Envie para seu número: `join TRIAL-CÓDIGO`
   - Twilio responde confirmando

### 4.3 Pegar Credenciais

Console Twilio → "Account" (canto inferior esquerdo):
- **Account SID:** (ex: ACxxxxxx...)
- **Auth Token:** (ex: xxxxxx...)

Copie e guarde em `.env` do servidor.

### 4.4 Testar Envio

No servidor Node.js:

```javascript
const twilio = require('twilio');
const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

client.messages.create({
  from: 'whatsapp:+551199999999', // Seu número Sandbox Twilio
  to: 'whatsapp:+5511987654321',   // Seu número pessoal (quem recebe)
  body: '✅ WhatsApp conectado! Teste OK.'
})
.then(message => console.log('Enviado:', message.sid))
.catch(err => console.error('Erro:', err));
```

✅ Se receber a mensagem no WhatsApp = funcionando!

---

## 📅 PASSO 5: AGENDAR CRON JOBS (1h)

### 5.1 Lembretes Diários (8h e 17h)

Use serviço como:
- **Node:** `node-schedule` (npm install)
- **Python:** `APScheduler`
- **Netlify Functions:** Scheduled functions
- **Heroku:** Heroku Scheduler

Exemplo Node:

```javascript
const schedule = require('node-schedule');
const { WhatsAppNotificador } = require('./ARTBLEND_WHATSAPP_NOTIFICADOR.js');

const notificador = new WhatsAppNotificador(
  process.env.TWILIO_SID,
  process.env.TWILIO_TOKEN,
  process.env.TWILIO_FROM
);

// Lembrete 8h
schedule.scheduleJob('0 8 * * *', async () => {
  const clientes = await supabase.from('clientes').select('*');
  
  for (const cliente of clientes.data) {
    const tarefas = await supabase
      .from('tarefas')
      .select('*')
      .eq('cliente_id', cliente.id)
      .eq('completa', false)
      .limit(1);

    if (tarefas.data.length > 0) {
      await notificador.enviarLembrete(
        `whatsapp:${cliente.telefone_wa}`,
        cliente.nome,
        tarefas.data[0].titulo
      );
    }
  }
  
  console.log('✅ Lembretes 8h enviados');
});

// Lembrete 17h (repita processo acima)
schedule.scheduleJob('0 17 * * *', async () => {
  // ... mesmo código
});
```

### 5.2 Alertas de Temperatura (30 min)

Integrar com sensores IoT (se houver):

```javascript
// Pseudo-código
schedule.scheduleJob('*/30 * * * *', async () => { // A cada 30min
  const clientes = await supabase.from('clientes').select('*');
  
  for (const cliente of clientes.data) {
    const temp = await buscarTemperatura(cliente.id); // Seu sensor
    
    if (temp > 6 || temp < 3) {
      await notificador.enviarAlerta(
        `whatsapp:${cliente.telefone_wa}`,
        cliente.nome,
        'temperatura',
        { temperatura: temp, normal: '4-5°C' }
      );
    }
  }
});
```

---

## 🎓 PASSO 6: CERTIFICADOS (30 min)

### 6.1 Setup PDF Libraries

HTML já tem:
```html
<script src="https://cdn.jsdelivr.net/npm/jspdf"></script>
<script src="https://cdn.jsdelivr.net/npm/qrcode"></script>
```

### 6.2 Testar Gerador

```javascript
const gerador = new CertificadosGerador(supabase);

// Quando cliente completa curso:
const resultado = await gerador.gerarCertificado(
  'cliente-1',
  'curso-gestao-financeira',
  'Gestão Financeira'
);

if (resultado.sucesso) {
  // Download automático
  await gerador.downloadPDF(
    resultado.pdfBlob,
    resultado.cliente,
    'Gestão Financeira'
  );
}
```

### 6.3 Endpoint Validação (Público)

Para Vigilância Sanitária validar certificados:

```javascript
// GET /validar/{numero-certificado}
app.get('/validar/:numeroCert', async (req, res) => {
  const gerador = new CertificadosGerador(supabase);
  const resultado = await gerador.validarCertificado(req.params.numeroCert);
  
  res.json(resultado);
  // Retorna: { valido: true, dados: { nome, empresa, curso, dataEmissao } }
});
```

---

## 🎨 PASSO 7: DEPLOY FASE 3 (30 min)

### 7.1 Copiar Arquivos

```bash
# Copiar módulos para pasta site
cp /mnt/user-data/outputs/ARTBLEND_*.{html,js} /home/claude/site/

# Verificar
ls /home/claude/site/ | grep ARTBLEND_
```

### 7.2 Update Menu Hub

No `artblend_hub.html`, adicione links aos módulos Fase 3:

```html
<section>
  <h2>🧠 INTELIGÊNCIA AUTOMÁTICA</h2>
  
  <div class="modulo" onclick="carregarModulo('ARTBLEND_KANBAN_AUTOMATICO.html')">
    <h3>📋 Kanban Automático</h3>
    <p>Tarefas em tempo real com Supabase</p>
  </div>
  
  <div class="modulo" onclick="carregarModulo('ARTBLEND_DASHBOARD_SUPABASE_REAL.html')">
    <h3>📊 Dashboard Real-Time</h3>
    <p>KPIs com dados reais do cliente</p>
  </div>
</section>
```

### 7.3 Deploy

**Netlify:**
```bash
cd /home/claude/site
# Cria site.zip
zip -r site.zip *.html *.js

# Arraste para Netlify (Deploy manual)
```

**AWS S3:**
```bash
aws s3 sync /home/claude/site/ s3://artblend-plataforma/
```

### 7.4 Testar Online

```
1. Acesse seu site live
2. Clique "Kanban Automático"
3. Deve mostrar ✅ "Sincronizado" (verde) ou ⚠️ "Offline"
4. Clique "Dashboard"
5. Gráfico deve aparecer (simulado no offline)
```

---

## 🔐 PASSO 8: SEGURANÇA (Row Level Security)

### 8.1 Ativar RLS no Supabase

```sql
-- Execute no SQL Editor do Supabase

-- Clientes: cada usuário vê só seus dados
ALTER TABLE clientes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Clientes: próprios dados" ON clientes
  FOR ALL USING (auth.uid()::text = cliente_id);

-- Tarefas: cada usuário vê suas tarefas
ALTER TABLE tarefas ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Tarefas: próprias" ON tarefas
  FOR ALL USING (auth.uid()::text = cliente_id);

-- ... repita para outras tabelas
```

### 8.2 Variáveis de Ambiente

**NUNCA** commite chaves no GitHub:
```bash
# .gitignore
.env
.env.local
*.pem
```

---

## ✅ CHECKLIST FINAL

- [ ] Supabase projeto criado
- [ ] SQL schema executado (10 tabelas)
- [ ] Credenciais salvas (localStorage ou .env)
- [ ] Twilio WhatsApp configurado
- [ ] Cron jobs agendados (lembretes 8h/17h)
- [ ] Arquivos Fase 3 copiados para /site
- [ ] Menu hub.html atualizado
- [ ] Deploy em Netlify/AWS
- [ ] Teste online (Kanban e Dashboard)
- [ ] RLS ativado (segurança)
- [ ] WhatsApp funcionando (teste enviado)
- [ ] Certificados gerando (teste)

---

## 🚀 GO LIVE!

Quando tudo acima ✅:

```
1. Cliente acessa seu site
2. Faz diagnóstico (Raio-X)
3. Sistema salva no Supabase
4. Recomendador popula Kanban
5. Cliente implementa → tarefas completam
6. Dashboard atualiza em real-time
7. WhatsApp manda lembrete dia seguinte
8. Ao completar → Certificado PDF gerado
9. Vigilância Sanitária valida QR code
```

**Impacto esperado: +R$ 5.000/mês (90 dias)**

---

## 📞 SUPORTE

**Erros comuns:**

| Erro | Solução |
|------|---------|
| "Supabase conectado: false" | Verificar URL/Chave (localStorage/env) |
| "Certificado não gerado" | Verificar se jsPDF está carregado |
| "WhatsApp não envia" | Verificar Twilio SID/Token, sandbox ativo |
| "Gráfico em branco" | Dados não carregando - check console (F12) |
| "Tarefas não sincronizam" | Real-time subscriptions - check conexão |

---

## 📚 Arquivos de Referência

Todos arquivos estão em:
- `/mnt/user-data/outputs/` (Fase 3)
- `/home/claude/site/` (Produção)

Documentação:
- `GUIA_DEPLOY_RAPIDO.md` - Deploy site
- `RELATORIO_FINAL_14CURSOS_FASE2_COMPLETO_AGOSTO2026.md` - Tudo sobre Fase 1-2
- `SupabaseIntegrador.js` - Documentação inline

---

**Status Fase 3:** ✅ PRONTO PARA DEPLOY

Qualquer dúvida, revise este guia ou acesse a documentação inline dos arquivos .js

Vamo! 🚀
