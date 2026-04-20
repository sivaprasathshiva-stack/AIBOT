create table if not exists public.users (
  id bigint primary key,
  first_name text,
  last_name text,
  username text,
  language_code text,
  age_verified boolean not null default false,
  blocked boolean not null default false,
  profile_json jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.messages (
  id bigint generated always as identity primary key,
  user_id bigint not null references public.users(id) on delete cascade,
  role text not null check (role in ('user', 'assistant')),
  content text not null,
  created_at timestamptz not null default now()
);

create index if not exists messages_user_id_created_at_idx on public.messages (user_id, created_at desc);

create table if not exists public.daily_usage (
  user_id bigint not null references public.users(id) on delete cascade,
  usage_date date not null,
  message_count integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (user_id, usage_date)
);

create table if not exists public.feedback (
  id bigint generated always as identity primary key,
  user_id bigint not null references public.users(id) on delete cascade,
  feedback_text text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.safety_events (
  id bigint generated always as identity primary key,
  user_id bigint not null references public.users(id) on delete cascade,
  event_type text not null,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists users_set_updated_at on public.users;
create trigger users_set_updated_at
before update on public.users
for each row
execute function public.set_updated_at();

drop trigger if exists daily_usage_set_updated_at on public.daily_usage;
create trigger daily_usage_set_updated_at
before update on public.daily_usage
for each row
execute function public.set_updated_at();