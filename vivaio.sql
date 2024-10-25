CREATE database db_riviste;
use db_riviste;

create table db_riviste.rivista(
	titolo varchar(30),
	prezzo int,
	editore varchar(30),
	uscita datetime
);

insert into db_riviste.rivista(titolo, prezzo, editore, uscita)
values
('Rivista1', 10, 'Hoepli', '2024/05/10'),
('Rivista2', 20, 'Hoepli', '2024/05/09'),
('Rivista3', 30, 'Hoepli', '2024/05/13'),
('Rivista4', 40, 'Hoepli','2024/05/12'),
('Rivista5', 50, 'Hoepli','2024/05/11');

select *
from db_riviste.rivista r ;

select count(*) as numeroRiviste_per_editore
from db_riviste.rivista r 
group by r.editore 
having count(*) > 1;

select avg(*) as numeroRiviste_per_editore
from db_riviste.rivista r 
group by r.editore;

select r.titolo , datediff(now(), r.uscita) as giorni_dall_uscita
from db_riviste.rivista r
where datediff(now(), r.uscita) < 200; -- riviste che sono uscite da meno di 200 giorni

-- ----------------------------------------------------------------------------------------------------------------
create table db_riviste.sedie(
	tipologia varchar(100),
	colore varchar(20),
	n_inventario int not null,
	data_fabbricazione datetime
);

insert into db_riviste.sedie (tipologia, colore, n_inventario, data_fabbricazione)
values 
('plastica', 'verde', 34, '2024/05/04'),('legno', 'marrone', 55, '2024/05/18'), ('braccioli', 'rossa', 15, '2021/08/06'),
('plastica', 'verde', 54, '2024/05/04'),
('legno', 'rossa', 14, '2024/05/04'),
('braccioli', 'azzurra', 56, '2024/05/04');


select *
from db_riviste.sedie s;

select *
from db_riviste.sedie s 
where s.colore = 'rossa' or s.colore = 'verde';

select *
from db_riviste.sedie s 
where s.colore in ('rossa', 'verde');

select *
from db_riviste.sedie s 
where s.n_inventario between 10 and 50;

select s.tipologia, count(*) as numero_braccioli
from db_riviste.sedie s
where s.tipologia = 'braccioli';

select s.tipologia, count(*) as numero_tipologia
from db_riviste.sedie s
group by s.tipologia
having count(s.n_inventario) > 1;





