select *
from db_amazon.prodotti p; -- tutta la tabella p -> alias

select p.famiglia, p.marca 
from db_amazon.prodotti p -- selezione solo una parte della tabella
where p.famiglia ="";

update db_amazon.prodotti p
set p.famiglia = null 
where p.famiglia ="";

select p.marca, p.descrizione 
from db_amazon.prodotti p
where p.marca = "TICINO-ABB"; -- minuscolo lo trova lo stesso (questo perché questo database è case insensitive)

/*Operatori di confronto
 * like -> confrontare una stringa con un'altra
 * = uguale
 * != diverso
 * > maggiore
 * < minore
 * */
select p.descrizione , p.marca
from db_amazon.prodotti p 
where p.marca like 'V%' or p.marca like 'T_C%'; -- iniziano per T, carattere sconosciuto in mezzo, terza C e il resto con la percentuale
-- where p.marca lile '%B' finiscono con B

-- aggiornare campo descrizione cancellando tutti gli spazi da descrizione
update db_amazon.prodotti p
set p.descrizione = trim(p.descrizione); -- rimozione carattere a sinistra (tutti gli spazi prima e dopo)

select p.descrizione , p.marca 
from db_amazon.prodotti p 
where p.descrizione like "q%" and p.marca like "T%";






