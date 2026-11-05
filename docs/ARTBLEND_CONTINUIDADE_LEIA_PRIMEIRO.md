# ARTBLEND · DOCUMENTO DE CONTINUIDADE
Versão do documento: 05/11/2026 (noite) · Plataforma no ar: **Versão 3**

---

## ▶ COMANDO PARA COLAR NUMA CONVERSA NOVA
> "Olá, Claude. Sou o Fagner, da ArtBlend Consultoria Gourmet. Leia este Documento de Continuidade inteiro antes de qualquer coisa. Ele descreve quem sou, a plataforma que já está pronta e no ar, onde tudo está guardado, as regras de segurança e o padrão visual. **Não refaça nada do que já existe.** Confira o estado atual (GitHub, site no ar e pendrive), me mostre um resumo curto do que encontrou e me pergunte por qual item da lista de PRÓXIMOS PASSOS quer continuar. Siga sempre as REGRAS DE OURO."

---

## 1. QUEM SOU EU
- **Fagner**, chef de cozinha e consultor gastronômico há muitos anos, instrutor de gastronomia, membro da FIC Brasil. Moro em **Gravatá-PE**.
- Dono da **ArtBlend Consultoria Gourmet** — consultoria para restaurantes, bares, lanchonetes e eventos.
- Lema: **"O ABC gastronômico que você precisa"** (ABC = ArtBlend Consultoria; é o beabá do restaurante).
- Trabalho principalmente pelo **celular**. Meu computador é fraco (Windows, 4 GB de RAM) e trava fácil: **nada pesado deve ser instalado nele**.
- **Como prefiro trabalhar:** tudo em **português**, passo a passo, explicado de forma simples, sem termos técnicos. Prefiro devagar e com conferência do que rápido. Quero **ver antes de mudar**.
- Meta: fazer da ArtBlend **a plataforma mais completa da América Latina** para restaurantes e consultores (concorrentes de referência: Produz Soluções/ProApp em Pernambuco; iFood entrando no segmento; referência de gestão: G4).
- Ordem de uso: **1º o consultor usa com os clientes → apresenta ao dono → dono ou consultor treinam o colaborador.**

---

## 2. ONDE TUDO MORA (e como se liga)
```
Claude edita → GitHub (código, versão oficial = branch main)
            → Cloudflare publica sozinha em segundos
            → artblendconsultoria.com.br (site no ar)
Domínio comprado na Hostinger → aponta para a Cloudflare (não mexer)
Logins e dados → Supabase
Cópias de segurança → pendrive (E:\Arquivos artblend\BACKUPS) + Downloads do computador
```

| O quê | Endereço / local |
|---|---|
| Site oficial | https://artblendconsultoria.com.br |
| Central de Qualidade | https://artblendconsultoria.com.br/central-qualidade |
| Código (oficial) | GitHub: `fagnercanolongo24-debug/artblend-plataforma` (público — **nunca colocar senhas**) |
| Publicação | Cloudflare (Pages) ligada ao GitHub — publica a branch `main` |
| Domínio | Hostinger → Cloudflare |
| Banco de dados / login | Supabase, projeto `zjvjixiuvnpbpsdnxuyk` (região us-east-2). Tabelas: `clientes`, `dados_ferramenta` (conteúdo em JSON por cliente e ferramenta), `crm_agenda`, `crm_estado`, `indicadores_mensais`, `perfis_usuario` (papéis: desenvolvedor, consultor, lider). Funções no servidor: `riquinho`, `catalogo` |
| Netlify | **cancelado / sem acesso — não usar** |
| E-mail | Gmail pessoal (fagnercanolongo24@gmail.com); e-mail @artblendconsultoria.com.br encaminha para ele |
| Cofre de endereços | `00_COFRE_ARTBLEND_LEIA_PRIMEIRO.md` (pendrive e Downloads) |
| Backups | Pendrive `E:\Arquivos artblend\BACKUPS\` — `BACKUP_ARTBLEND_2026-11-05.zip` (V2) e `BACKUP_ARTBLEND_V3_2026-11-05.zip` (V3, com todo o histórico do GitHub) |

### Versões (cada uma SOMA à anterior — nada é apagado)
| Versão | O que é | Cópia congelada no GitHub |
|---|---|---|
| V1 | Landing, início, login, plataforma com menu turquesa, cursos EEG | histórico |
| V2 | + Custos, comanda, estoque, agenda, checklist, login real do Supabase | `backup/2026-11-05-antes-fase2` |
| **V3 (no ar)** | **+ Central de Qualidade** (detalhes na seção 4) | `versao/v3-central-qualidade` |
| Visual guardado | "Hub no visual turquesa original (aprovado pelo Fagner)" — ainda não no ar; o visual dele foi usado na Central | `feat/v1-plataforma-turquesa` |

Para voltar atrás: *"Volte o site para a cópia congelada `<nome>`."*

---

## 3. REGRAS DE OURO (segurança)
1. **Nunca apagar** nada da plataforma ou dos meus arquivos. Tudo novo é **somado** (V4, V5…).
2. **Antes de publicar:** cópia congelada no GitHub + comparação de arquivos. **Só publicar com zero arquivos apagados.** Mostrar a comparação ao Fagner.
3. Toda mudança é feita numa **cópia de teste** (branch separada). Fagner olha e aprova. Só depois vai ao ar.
4. Depois de publicar: abrir **todas as páginas** do site e confirmar que nenhuma quebrou; atualizar **backup no pendrive** e o **cofre**.
5. **Senhas e chaves nunca** no GitHub nem na conversa. Chaves (Claude API, WhatsApp) são coladas pelo próprio Fagner no painel do Supabase.
6. Conteúdo de cursos de terceiros (Lu Vanderley, Mayara Vale, Cacá Gomes, CCP etc.): **usar o método, reescrever com palavras ArtBlend, tirar os nomes de origem.** Não copiar texto pago palavra por palavra.
7. Contabilidade, impostos, leis trabalhistas e sanitárias: orientação básica, sempre com "confirme com seu contador / advogado / vigilância local".

---

## 4. O QUE JÁ ESTÁ PRONTO
### Plataforma (V1/V2)
Landing (`index.html`), início (`inicio.html`), login real Supabase com "esqueci a senha" (`login.html`), plataforma com menu lateral (`plataforma.html`): dashboard, indicadores, clientes, cursos EEG, gamificação, notificações, WhatsApp, relatórios, custos e precificador, comanda, estoque, agenda, checklist, buscador (lupa).

### Central de Qualidade (V3) — `central-qualidade.html` — **MODELO APROVADO para todas as áreas**
- **0 · ABC da Qualidade:** os 3 momentos **A**valiar (visita para fechar a consultoria), **B**ase (implantação com o consultor dentro, 30–90 dias), **C**onstância (rotina sem o consultor); agenda "o que fazer e quando"; tabela "quem usa o quê"; aba **Treinamento** = Curso ABC de Boas Práticas (8 aulas + 1 bônus, quiz de 5 perguntas, acertar 4).
- **Painel:** nota, registros do dia, alertas, gráfico de evolução da nota.
- **1 · Inspeção Sanitária:** 65 itens nos 12 blocos da RDC 216, C/NC/NA, itens críticos ★, nota Bom/Regular/Ruim, **foto e comentário por item, cronômetro**, histórico mensal.
- **2 · Biblioteca de POPs:** 17 POPs ArtBlend (4 obrigatórios: higienização, pragas, caixa d'água, saúde do manipulador), imprimíveis.
- **3 · Controles do Dia:** temperatura de equipamentos, recebimento, **planilha 08** (temperatura das preparações), óleo, amostras, limpeza, **planilha 12** (água e pragas) — alerta automático + **foto do termômetro** + exportar.
- **3+ · Rotina Inteligente:** etiquetas de validade com QR (60×40 mm), QR Code na porta de cada equipamento (abre o registro), lembretes (WhatsApp/Agenda), pesagem no recebimento + **fator de correção, perda e custo do kg limpo**, leitura de balança USB, kit de equipamentos.
- **4 · Equipe:** exames (ASO) com vencimento, trilha de 8 treinamentos, **certificado com validade de 1 ano; reimpressão só após reciclagem**.
- **5 · Visita do Consultor:** relatório automático com nota, plano de ação (prazos 2/15 dias), alertas, fotos e evolução.
- **6 · Manual de Boas Práticas:** gerador com 14 capítulos + POPs anexos; responsável técnico pode ser **nutricionista, técnico ou o dono capacitado**.
- **Normas e Referências:** RDC 216, RDC 275, Codex Alimentarius/APPCC, ISO 22000, comparação com SafetyCulture, Jolt, FoodDocs, Squizify, Zenput, PathSpot.
- Perfis no topo: **Consultor · Dono/Gerente · Colaborador**. Lupa de busca. Botão **🖨 Imprimir / PDF**.
- **Limite atual:** os dados ficam **só no aparelho** onde foram feitos (falta a etapa "ligar ao Supabase").

### Documentos já feitos
`PADRAO_ARTBLEND.md` (padrão visual), `docs/FORNECEDORES_KIT_ARTBLEND.md`, `docs/PLANO_AGENTE_IA_WHATSAPP.md`, `PROMPT_MESTRE_ARTBLEND_FASE2.md`, `INVENTARIO_QUALIDADE_SANITARIA.xlsx`, planilhas `08` e `12` (pendrive `E:\Arquivos artblend\FASE2\`).

---

## 5. PADRÃO VISUAL ARTBLEND (usar em tudo)
- **Cores:** principal `#1C93A8` · destaque `#2EC4D6` · verde `#3ADC84` · texto `#16294A` · fundo `#F5F7FA` · bordas `#E2E6ED`. Alertas: ok `#2E9D5B`, atenção `#E0A100`, erro `#D64545`.
- **Marca animada:** "**A**rt / **B**lend / **C**onsultoria / **G**ourmet" (letras A, B, C, G em destaque, fonte Poppins) + frase "O **ABC G**astronômico que você precisa". As letras A, B, C, G **descem até a frase**, as letras da frase **crescem**, e o ciclo recomeça a cada ~6 s. Marca d'água "ABC" ao fundo.
- **No celular:** a marca aparece **no topo** do ABC e do Painel; ao rolar vira uma **barrinha fixa** que continua se mexendo; nos outros módulos ela some.
- **Estrutura de toda área nova:** Módulo **0 · ABC** (3 momentos, agenda, quem usa o quê, treinamento com quiz e certificado) → Painel → módulos numerados (ferramentas práticas) → Normas e Referências. Perfis Consultor/Dono-Gerente/Colaborador. Botão Imprimir/PDF. Lupa. Linguagem simples.

---

## 6. ONDE ESTÃO OS MATERIAIS (para as próximas áreas)
- **Pendrive `E:\Arquivos artblend\`:** `ARTBLEND_CONSOLIDADO` (Compliance, Manuais Operacionais, Cardápio, CRM, Frameworks, Gestão Financeira, NR-1/DRPS, Chef Faixa Preta, Manuais de Empratamento, Confeitaria, Cocção, Vendas e Atendimento de Salão, Gestão de Alta Performance, cursos CEP, TD, NR-1…), `ARTBLEND_V1`, `RECONSTRUCAO_ARTBLEND` (inventário de 2026-11-03), e-books NR-1 e liderança, webinário de planejamento, checklists.
- **Área de trabalho (OneDrive\Desktop):** `backup artblend  cloud` (mesmas ferramentas HTML + documentos Word: Sistema de Consultoria, Biblioteca de Conhecimento, Metodologia Zero, **Manual CCP**, CEP 40h, Proposta Comercial, Portfólio, Diagnóstico…) e a subpasta **`Nova pasta`** com as 8 planilhas do chef (ficha operacional, pedido de compras, pratos por praça, preparos por prato, mapeamento de praça 5 Ok's, plano de ataque, procedimento operacional); `lu vanderley box manual BPF` (já usada na V3); `backup moto E7` (**prints de concorrentes** e dicas); `github`; livro **Cozinha Estratégica** (PDF); `OneDrive`, `Documentos`.
- **Downloads:** **FOTOS_CCP** (63 fotos das anotações do curso de Consultoria de Cardápio na Prática), apostila de **Sommelier Básico (ABS)**, cursos HTML EEG, planilhas, POPs.
- **Google Drive:** `Documentacoes › Imersao consultor de alimentos` (material da imersão de consultoria de alimentos — já usado na V3; subpasta "Quanto cobrar").

---

## 7. PRÓXIMOS PASSOS (em ordem sugerida)
1. **"Ligar" a Central ao Supabase** — login, escolher cliente, registros/fotos/cursos na nuvem e em todos os aparelhos, perfis Dono e Colaborador, painel do consultor com todos os clientes, etiquetas descontando do estoque. (Só acrescenta tabelas; pedir o "sim" do Fagner antes.)
2. **Central de Salão e Vendas (V4)** no mesmo padrão: recepção, garçom, etiqueta e serviço de mesa, comunicação, persuasão, quebra de objeção, marketing e networking; **Sommelier** (serviço do vinho, apostila ABS).
3. **Empratamento** — Fagner vai mandar o conteúdo dos cursos que fez.
4. **Gestão e Indicadores** ("números": metas, CMV, prime cost, fluxo de caixa) no mesmo padrão.
5. **Cardápio e Produção (método CCP com nome ArtBlend):** usar as 63 fotos, o Manual CCP e as 8 planilhas do chef → ferramentas (com nomes ArtBlend no lugar de "plano de ataque" etc.).
6. **RH Estratégico** (aprofundado: recrutamento, escala 5x2, NR-1 e riscos psicossociais, avaliação, cultura) e **Fiscal/Contábil básico** (impostos, regimes, custo do funcionário).
7. **Eventos** (página/ferramenta).
8. **Prints do Moto E7:** transformar ideias de concorrentes em ferramentas.
9. **Assistente de IA no WhatsApp** (plano pronto). Fagner precisa providenciar: chip novo só da ArtBlend, conta em console.anthropic.com (créditos), conta Meta Business. Serviço recomendado: **Meta oficial** (não usar Z-API).
10. **Kit de equipamentos** para revender (fornecedores levantados): impressora de etiquetas, sensores Wi-Fi, balança USB.
11. **Bancada crítica de 10 avaliadores** (dono pequeno, consultor, nutricionista, RH, contador, investidor, designer, garçom, concorrente, segurança) + pesquisa das melhores empresas do mundo.
12. **Organizar pastas antigas** (ex.: versão "roxinha" com gamificação): primeiro **inventariar e aproveitar**, depois **mover para uma pasta de arquivo morto no pendrive** — não apagar direto.

---

## 8. COMO FAZER CADA NOVA ÁREA (receita)
1. Inventário só lendo (o que existe nos materiais e no site) → mostrar ao Fagner.
2. Proposta de módulos → Fagner aprova.
3. Construir na cópia de teste, no padrão da seção 5.
4. Testar no computador e no celular (clicar em tudo).
5. Mostrar → aprovar → cópia congelada → comparar (zero apagados) → publicar → conferir todas as páginas → backup no pendrive + cofre.
