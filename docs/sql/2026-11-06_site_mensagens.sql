-- Caixinha "Fale com a gente" do site (aguardando autorização do Fagner para aplicar no Supabase)
create table if not exists public.site_mensagens (
  id uuid primary key default gen_random_uuid(),
  criado_em timestamptz not null default now(),
  nome text not null check (char_length(nome) between 1 and 120),
  contato text check (char_length(contato) <= 160),
  perfil text check (char_length(perfil) <= 40),
  mensagem text not null check (char_length(mensagem) between 1 and 3000),
  pagina text check (char_length(pagina) <= 200),
  lida boolean not null default false
);
alter table public.site_mensagens enable row level security;
create policy "site: qualquer visitante pode enviar mensagem" on public.site_mensagens
  for insert to anon, authenticated with check (lida = false);
create policy "site: só o dono da ArtBlend lê as mensagens" on public.site_mensagens
  for select to authenticated using ((select auth.jwt() ->> 'email') = 'fagnercanolongo24@gmail.com');
create policy "site: só o dono da ArtBlend marca como lida" on public.site_mensagens
  for update to authenticated using ((select auth.jwt() ->> 'email') = 'fagnercanolongo24@gmail.com')
  with check ((select auth.jwt() ->> 'email') = 'fagnercanolongo24@gmail.com');
