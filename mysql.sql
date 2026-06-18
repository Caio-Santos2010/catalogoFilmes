create database catalogo;
use catalogo;
create table filmes (
id int auto_increment primary key,
titulo varchar(100) not null unique,
imagem text,
descricao text
);

create table series (
id int auto_increment primary key,
titulo varchar(100) not null unique,
imagem text,
descricao text
);

create table jogos (
id int auto_increment primary key,
titulo varchar(100) not null unique,
imagem text,
descricao text
);

select * from filmes;
insert into filmes (titulo, imagem, descricao)
values
("Vingadores", "https://image.tmdb.org/t/p/w500/6ELCZlTA5lGUops70hKdB83WJxH.jpg", "Os maiores heróis da terra unidos."),
("Batman", "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg", "O cavaleiro das trevas."),
("Homem-Aranha", "https://image.tmdb.org/t/p/w500/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg", "O amigo da vizinhança");

select * from series;
insert into series (titulo, imagem, descricao)
values
("Stranger Things", "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg", "Mistérios sobrenaturais em Hawkins"),
("The Last of Us", "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg", "Sobrevivência em um mundo pós-apocalíptico"),
("Breaking Bad", "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg", "A transformação de um professor em criminoso");

select * from jogos;
insert into jogos (titulo, imagem, descricao)
values
("5 Noitadas com o Epstein", "https://pbs.twimg.com/media/HALWND5WQAEm5Kx.jpg", "Jogo de Macho Alfa"),
("Noite com Jailson", "https://i.scdn.co/image/ab676161000051746fd5393f9b7bd6a51f6309b4", "Jogo de Urso"),
("Miguel", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4IIK-C0HXYE6isBuiuqgWOdBo--blI6iZ3Q&s", "Jogo do Miguel");
