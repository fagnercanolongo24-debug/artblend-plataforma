/* =========================================================
   ArtBlend · Sincronização com o banco (Supabase)
   Usado pelas Centrais. Guarda os dados de cada cliente na nuvem
   (tabela dados_ferramenta) e mantém todos os aparelhos iguais.
   Sem login → continua funcionando só no aparelho (modo local).
   ========================================================= */
(function(){
  const URL_SB='https://zjvjixiuvnpbpsdnxuyk.supabase.co', KEY_SB='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqdmppeGl1dm5wYnBzZG54dXlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQxNDUxMjMsImV4cCI6MjA5OTcyMTEyM30.TgC8A0y8e4Or4FZhSVglUW2micje9belaE0P-vAUwiY';
  const S={ sb:null, sessao:null, cliente:null, ferramenta:null, timer:null, salvandoEm:null, ultimaVersao:null, pronto:false };
  window.ABSync=S;
  function el(id){ return document.getElementById(id); }
  function status(txt,cor){ const e=el('syncStatus'); if(e){ e.innerHTML=txt; e.style.color=cor||'var(--txt2)'; } }
  function carregarLib(){ return new Promise((ok,err)=>{ if(window.supabase&&window.supabase.createClient) return ok(); const s=document.createElement('script'); s.src='https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.min.js'; s.onload=ok; s.onerror=err; document.head.appendChild(s); }); }
  S.iniciar=async function(ferramenta, obterDados, aplicarDados){
    S.ferramenta=ferramenta; S.obter=obterDados; S.aplicar=aplicarDados;
    const box=el('syncBox'); if(!box) return;
    try{ await carregarLib(); }catch(e){ status('📴 Sem internet — salvando só neste aparelho'); return; }
    S.sb=window.supabase.createClient(URL_SB,KEY_SB);
    const {data}=await S.sb.auth.getSession(); S.sessao=data&&data.session;
    if(!S.sessao){
      box.innerHTML=`<span id="syncStatus">📱 Só neste aparelho</span> <a class="btn-imp" style="text-decoration:none" href="login.html?volta=${encodeURIComponent(location.pathname.replace(/^\//,'')||'central-qualidade.html')}">☁ Entrar para salvar na nuvem</a>`;
      return;
    }
    const {data:cl,error}=await S.sb.from('clientes').select('id,nome').order('nome');
    if(error){ status('⚠ Não consegui ler os clientes','var(--erro)'); return; }
    const salvo=(()=>{ try{ return localStorage.getItem('artblend_cliente_'+ferramenta); }catch(e){ return null; } })();
    box.innerHTML=`<select id="syncCliente" title="Cliente (restaurante) desta Central" style="border:1.5px solid var(--borda);border-radius:8px;padding:6px 8px;font-size:13px;max-width:190px">
      <option value="">— escolha o cliente —</option>${(cl||[]).map(c=>`<option value="${c.id}" ${c.id===salvo?'selected':''}>${c.nome.replace(/</g,'&lt;')}</option>`).join('')}<option value="__novo">+ Novo cliente…</option></select> <span id="syncStatus" style="font-size:12px"></span>`;
    el('syncCliente').onchange=async function(){ if(this.value==='__novo'){ const n=prompt('Nome do restaurante (cliente):'); if(!n){ this.value=S.cliente||''; return; } const {data:novo,error:e2}=await S.sb.from('clientes').insert({nome:n.trim(),owner_id:S.sessao.user.id}).select('id,nome').single(); if(e2){ alert('Não consegui criar: '+e2.message); return; } const o=document.createElement('option'); o.value=novo.id; o.textContent=novo.nome; this.insertBefore(o,this.lastElementChild); this.value=novo.id; } escolher(this.value); };
    if(salvo && (cl||[]).some(c=>c.id===salvo)) escolher(salvo); else status('escolha o cliente para salvar na nuvem');
    window.addEventListener('focus',()=>S.atualizar()); setInterval(()=>S.atualizar(),60000);
  };
  async function escolher(id){
    S.cliente=id||null; try{ localStorage.setItem('artblend_cliente_'+S.ferramenta,id||''); }catch(e){}
    if(!id){ status('📱 Só neste aparelho'); return; }
    status('☁ carregando…');
    const {data,error}=await S.sb.from('dados_ferramenta').select('conteudo,updated_at').eq('cliente_id',id).eq('ferramenta',S.ferramenta).maybeSingle();
    if(error){ status('⚠ erro ao carregar: '+error.message,'var(--erro)'); return; }
    if(data && data.conteudo && Object.keys(data.conteudo).length){ S.aplicar(data.conteudo); S.ultimaVersao=data.updated_at; status('☁ sincronizado','var(--ok)'); }
    else { const local=S.obter(); const temAlgo=JSON.stringify(local).length>400;
      if(temAlgo && confirm('Este cliente ainda não tem dados na nuvem.\nEnviar o que já está registrado neste aparelho para ele?')) await S.salvarAgora();
      else { S.aplicar({}); await S.salvarAgora(); } }
    S.pronto=true;
  }
  S.agendar=function(){ if(!S.sb||!S.cliente) return; S.pendente=true; status('☁ salvando…'); clearTimeout(S.timer); S.timer=setTimeout(S.salvarAgora,1500); };
  S.salvarAgora=async function(){ if(!S.sb||!S.cliente) return; const conteudo=S.obter(); const agora=new Date().toISOString();
    const {data,error}=await S.sb.from('dados_ferramenta').upsert({cliente_id:S.cliente,ferramenta:S.ferramenta,conteudo,updated_at:agora},{onConflict:'cliente_id,ferramenta'}).select('updated_at').single();
    if(error){ status('⚠ não salvou na nuvem ('+error.message+') — ficou no aparelho','var(--erro)'); return; }
    S.pendente=false;
    S.ultimaVersao=data.updated_at; status('☁ salvo às '+new Date().toLocaleTimeString('pt-BR').slice(0,5),'var(--ok)'); };
  S.atualizar=async function(){ if(!S.sb||!S.cliente||S.pendente||document.hidden) return; const {data}=await S.sb.from('dados_ferramenta').select('updated_at,conteudo').eq('cliente_id',S.cliente).eq('ferramenta',S.ferramenta).maybeSingle();
    if(data && data.updated_at && data.updated_at!==S.ultimaVersao){ S.ultimaVersao=data.updated_at; S.aplicar(data.conteudo||{}); status('☁ atualizado de outro aparelho','var(--ok)'); } };
})();
