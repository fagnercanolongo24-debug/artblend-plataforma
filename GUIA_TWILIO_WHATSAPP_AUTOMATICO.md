# 📱 GUIA: Configurar Twilio para WhatsApp Automático

## O que você vai ganhar:
✅ Cliente termina aula → recebe WhatsApp automático parabenizando  
✅ Cliente faz checklist → recebe mensagem de progresso  
✅ Segunda de manhã → recebe motivação automática  
✅ Tudo 100% automático, você não mexe em nada  

---

## PASSO 1: Criar Conta Twilio (5 minutos)

### 1.1 Ir para Twilio
- Abra: https://www.twilio.com/
- Clique em "Sign Up" (canto superior direito)
- Preencha: Email, senha, nome completo
- Confirme o email (vem em seu email)

### 1.2 Verificar Telefone
- Twilio vai pedir seu celular
- Recebe SMS com código
- Digita o código (confirma que é real)

### 1.3 Responder Questões
- "O que vai fazer com Twilio?" → Responda: "WhatsApp para clientes de restaurante"
- "Qual linguagem?" → "JavaScript"
- Clique em "Get Started"

---

## PASSO 2: Pegar suas Chaves (5 minutos)

### 2.1 Pegar Account SID
- Vá para: https://console.twilio.com/
- Esquerda → "Account"
- Você vê "Account SID" (tipo: ACxxxxxxxxxxxxxxxxxxxxxxxx)
- **COPIE e GUARDE EM UM LUGAR SEGURO**

### 2.2 Pegar Auth Token
- Embaixo do Account SID, tem "Auth Token"
- Clique em "Show" (mostra a senha)
- **COPIE e GUARDE EM UM LUGAR SEGURO**

### 2.3 Pegar Número WhatsApp
- Esquerda → "Messaging" → "Try it Out" → "WhatsApp"
- Você vai ver: "Sandbox Number"
- Tem algo tipo: `+1415XXXXXXX` (não é de você, é de teste)
- Ou pode comprar número seu no Twilio (pago, ~$15/mês)

---

## PASSO 3: Configurar WhatsApp Sandbox (5 minutos)

### 3.1 Acessar Sandbox WhatsApp
- https://console.twilio.com/
- Esquerda → "Messaging" → "Try it Out" → "WhatsApp"
- Vê um número tipo: `whatsapp:+1415XXXXXXX`
- **COPIE esse número**

### 3.2 Conectar seu Celular ao Sandbox
- Abra seu WhatsApp no celular
- Procure o contato: `+1415XXXXXXX` (número do Twilio)
- IMPORTANTE: Copie a mensagem que vem na página:
  ```
  Envie: "join <code>"
  Exemplo: "join purple-lion"
  ```
- Envie essa mensagem pro número Twilio no WhatsApp
- Pronto! Seu celular está vinculado

### 3.3 Testar Envio
- Na página do Twilio, em "Send a test message"
- Tipo no campo: "Olá teste!"
- Clique "Send"
- **Você deve receber no WhatsApp em 5 segundos**

Se receber → ✅ Funcionando!  
Se não → Repita passo 3.2

---

## PASSO 4: Integrar no ArtBlend (5 minutos)

### 4.1 Adicionar Chaves ao Arquivo
Abra: `ARTBLEND_INTEGRACAO_SUPABASE_TWILIO.js`

Procure por:
```javascript
const TWILIO_ACCOUNT_SID = "ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
const TWILIO_AUTH_TOKEN = "your_auth_token_here";
const TWILIO_WHATSAPP_NUMBER = "whatsapp:+55XXXXXXXXXXX";
```

Substitua:
```javascript
const TWILIO_ACCOUNT_SID = "AC1234567890123456789..."; // Sua chave aqui
const TWILIO_AUTH_TOKEN = "abc123def456..."; // Sua chave aqui  
const TWILIO_WHATSAPP_NUMBER = "whatsapp:+1415XXXXXXX"; // Número do Twilio
```

### 4.2 Adicionar Arquivo ao HTML
Em cada arquivo de curso (ex: `ARTBLEND_CURSO_GESTAO_FINANCEIRA_V2_EEG.html`)

Procure pelo fechamento: `</body>`

Antes dele, adicione:
```html
<script src="ARTBLEND_INTEGRACAO_SUPABASE_TWILIO.js"></script>
```

Exemplo:
```html
    </div>
  </div>

  <script src="ARTBLEND_INTEGRACAO_SUPABASE_TWILIO.js"></script>
</body>
</html>
```

### 4.3 Testar no seu Celular
- Abra um curso no navegador
- Console → F12 → Abra a aba Console
- Devem aparecer mensagens verdes:
  ```
  ✅ ArtBlend Integration pronta!
  📱 WhatsApp automático pronto para usar!
  💾 Supabase conectado!
  🚀 Tudo integrado e funcionando!
  ```

---

## PASSO 5: Disparar Eventos (Teste)

### 5.1 Testar Mensagem de Conclusão
No Console (F12), copie e cola:

```javascript
ArtBlendIntegracao.dispararEvento('curso_concluido', {
  cursoNome: 'Gestão Financeira',
  cursoId: 'curso_001'
});
```

**Resultado esperado:** Seu WhatsApp recebe mensagem tipo:
```
🎉 Parabéns João! Você completou a aula "Gestão Financeira"! 🏆

Próximos passos:
✅ Implementar checklist de 30 dias
✅ Fazer registro em tempo real

Próxima aula: Terça 10h
Link: https://artblend.app/cursos

Vamos junto! 💪
```

### 5.2 Testar Progresso Semanal
```javascript
ArtBlendIntegracao.dispararEvento('checklist_concluido', {
  checklistNome: 'Semana 1 - Diagnóstico',
  semana: 1
});
```

**Resultado:** Mensagem de progresso (25%)

---

## PASSO 6: Supabase (Banco de Dados)

### 6.1 Criar Tabelas
- Vá para: https://supabase.com/
- Entre com sua conta (você já tem: zjvjixiuvnpbpsdnxuyk)
- Esquerda → "SQL Editor"
- Novo Query
- Cole o SQL (vem no final do arquivo `ARTBLEND_INTEGRACAO_SUPABASE_TWILIO.js`)
- Clique "Run"

### 6.2 Adicionar Chave Supabase
No arquivo `ARTBLEND_INTEGRACAO_SUPABASE_TWILIO.js`:

```javascript
const SUPABASE_URL = "https://zjvjixiuvnpbpsdnxuyk.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...";
```

Para pegar ANON_KEY:
- Supabase → Settings → API Keys
- Copie "anon" key (é pública, ok)
- Cole no código

---

## RESUMO FINAL

| O que | Onde |
|------|------|
| Account SID | Twilio Console → Account |
| Auth Token | Twilio Console → Account |
| WhatsApp Number | Twilio → Messaging → WhatsApp (Sandbox) |
| Supabase URL | Supabase → Settings |
| Supabase Key | Supabase → Settings → API Keys |

---

## TESTE COM MENSAGENS DE TESTE

Para testar mensagens diferentes, use:

```javascript
// Teste 1: Curso concluído
ArtBlendIntegracao.dispararEvento('curso_concluido', {
  cursoNome: 'Prime Cost',
  cursoId: 'curso_002'
});

// Teste 2: Checklist semana 2
ArtBlendIntegracao.dispararEvento('checklist_concluido', {
  checklistNome: 'Semana 2 - Implementação',
  semana: 2
});

// Teste 3: Checklist semana 3
ArtBlendIntegracao.dispararEvento('checklist_concluido', {
  checklistNome: 'Semana 3 - Monitoramento',
  semana: 3
});
```

Cada teste deve enviar uma mensagem diferente pro seu WhatsApp.

---

## TROUBLESHOOTING

**Problema: "Erro ao enviar WhatsApp"**
- Resposta: Verificar se Account SID e Auth Token estão corretos
- Solução: Copiar de novo do Twilio Console

**Problema: "Número de celular não reconhecido"**
- Resposta: Sandbox precisa estar vinculado
- Solução: Enviar "join XXXX" no WhatsApp para Twilio de novo

**Problema: "CORS error"**
- Resposta: Twilio bloqueia requisições do navegador por segurança
- Solução: Usar um backend (Node.js) para fazer as chamadas (vem na Fase 4)

---

## ✅ PRONTO!

Agora você tem:
✅ Twilio configurado
✅ WhatsApp integrado  
✅ Supabase conectado
✅ Tudo automático

Próxima: **DEPLOY NO AR!**
