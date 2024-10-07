select *
from db_amazon.prodotti p ;

select *
from db_amazon.prodotti p 
where p.famiglia like "1%";

select *
from db_amazon.prodotti p 
where p.marca = "varie";

select distinct p.marca
from db_amazon.prodotti p;

select p.prezzo, p.iva, p.prezzo + p.prezzo * p.iva /100 as lordo
from db_amazon.prodotti p
where  p.prezzo + p.prezzo * p.iva /100 > 100;
-- where p.prezzo >= 70 and p.prezzo <= 120;
-- where (p.prezzo between 70 and 100) or (p.prezzo between 10 and 20);
-- operatore between 

-- aggiungere una data