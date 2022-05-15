CREATE DATABASE hospital_santa_isabel;

use hospital_santa_isabel;





-- TABELA 
CREATE TABLE tbmedicos (
crm varchar(25) not null,
nome varchar(100) not null,
especialidade char(200) not null
);

-- CHAVE-PRIMÁRIA (PK)
ALTER TABLE tbmedicos ADD PRIMARY KEY (crm);





-- TABELA 
CREATE TABLE tbespecialidade (
codigo varchar(10) not null,
nome char(200) not null
);

-- CHAVE-PRIMÁRIA (PK)
ALTER TABLE tbespecialidade ADD PRIMARY KEY (codigo);





-- TABELA 
CREATE TABLE tbcliente (
cpf varchar(25) not null,
nome varchar(100) not null,
contato int not null
);

-- CHAVE-PRIMÁRIA (PK)
ALTER TABLE tbcliente ADD PRIMARY KEY (cpf);





-- TABELA 
CREATE TABLE tbconsulta (
id_consulta int not null,
data_consulta datetime not null,
cpf_cliente varchar(25) not null,
crm_medico varchar(25) not null,
procedimento char(250) not null
);

-- CHAVE-PRIMÁRIA (PK)
ALTER TABLE tbconsulta ADD PRIMARY KEY (id_consulta);