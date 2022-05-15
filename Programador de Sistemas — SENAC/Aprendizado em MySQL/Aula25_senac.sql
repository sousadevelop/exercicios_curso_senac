use sucos;

create table tb_cliente
(CPF varchar(11),
NOME varchar(100),
ENDERECO1 varchar(150),
ENDERECO2 varchar(150),
BAIRRO varchar(50),
CIDADE varchar(50),
ESTADO varchar(2),
CEP varchar(8),
IDADE smallint,
SEXO varchar(1),
LIMITE_CREDITO float,
VOLUME_COMPRA float,
PRIMEIRA_COMPRA bit(1));

select * from sucos.tb_cliente;