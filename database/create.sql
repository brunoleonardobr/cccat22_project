drop database if exists trading_plataform;

create schmema trading_plataform;

create table trading_plataform.account (
    account_id uuid primary key,
    name text,
    email text,
    document text,
    password text
);