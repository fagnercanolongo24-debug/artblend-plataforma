# Plano · Assistente ArtBlend (inteligência artificial + WhatsApp)
Pedido do Fagner em 05/11/2026. Status: **planejado — depende de contas e chaves para ligar.**

## O que ele vai fazer
O colaborador, o gerente ou o dono manda mensagem no **WhatsApp da ArtBlend** e conversa com o assistente:
1. **Tira dúvidas** com base no conteúdo da Central: POPs, curso, temperaturas, RDC 216. Ex.: "Qual a temperatura do freezer?", "Como limpo a caixa d'água?".
2. **Registra controles por foto**: manda a foto do termômetro na geladeira, o assistente lê a temperatura, confirma e grava na Central (com hora e número de quem mandou).
3. **Recicla o curso**: refaz as aulas e o quiz pelo WhatsApp; ao passar, o certificado volta a valer.
4. **Avisa e lembra**: manda os lembretes da rotina e os alertas (geladeira fora da faixa, exame vencendo).

## Como funciona por dentro (resumo)
```
WhatsApp do colaborador → Serviço de mensagens (Meta / Twilio / Z-API)
   → Função na nuvem (Supabase Edge Function)
      → Claude (Anthropic) responde usando só o conteúdo ArtBlend
      → grava registros e fotos no Supabase (com hora, número e foto)
   → resposta volta para o WhatsApp
```
- **Base de conhecimento**: textos da Central (17 POPs, 9 aulas, 12 blocos da RDC 216, controles e faixas). O assistente responde **só** com base nisso e diz "não sei, vou chamar o consultor" quando não estiver no material.
- **Anti-fraude das fotos**: a foto chega pelo servidor com a hora real do recebimento e o número do celular. A foto repetida é identificada pela "impressão digital" do arquivo, igual já faz a Central.
- **Quem é quem**: o número do WhatsApp fica ligado ao cadastro do colaborador (perfil Colaborador/Gerente) no Supabase.

## O que precisa para ligar
| Item | Quem providencia | Observação |
|---|---|---|
| Conta na **Anthropic (Claude API)** | Fagner | console.anthropic.com · cobra por uso |
| **Número de WhatsApp Business** exclusivo da ArtBlend | Fagner | Não usar o número pessoal |
| Serviço de mensagens: **Meta oficial, Twilio ou Z-API** | Escolher 1 | Já existe guia ArtBlend do Twilio |
| **Supabase** (já existe) | — | Tabelas: colaboradores, registros, fotos, conversas |
| Central de Qualidade gravando no Supabase (hoje grava só no aparelho) | Claude | Pré-requisito: passo 1 abaixo |

## Etapas
1. **Ligar a Central ao Supabase** (login real, dados na nuvem, painel do consultor com todos os clientes).
2. **Assistente de dúvidas** na própria Central (botão "Pergunte ao ABC") — testar as respostas.
3. **WhatsApp**: dúvidas → depois fotos de controles → depois curso e reciclagem.
4. **Teste piloto** com 1 cliente por 30 dias.

## Cuidados
- O assistente **não substitui** o responsável técnico nem a vigilância sanitária. Em situação de risco (alimento suspeito, cliente passando mal), ele orienta a parar e chamar o responsável.
- Dados pessoais dos colaboradores (telefone, exames) protegidos conforme a LGPD: só o restaurante e o consultor veem.
