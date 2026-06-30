--
-- Banco de dados: `bookcycle`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `funcionarios`
--

CREATE TABLE `funcionarios` (
  `id_funcionario` int(11) NOT NULL,
  `nome_funcionario` varchar(100) NOT NULL,
  `email_func` varchar(100) NOT NULL,
  `função` varchar(100) NOT NULL,
  `telefone_func` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `funcionarios`
--

INSERT INTO `funcionarios` (`id_funcionario`, `nome_funcionario`, `email_func`, `função`, `telefone_func`) VALUES
(1, 'Clara', 'clara@email.com', 'Desenvolvedora de Interface (Design) + Gerente Adjunto', NULL),
(2, 'Gustavo Marques', 'gustavom@email.com', 'Gerente Geral', '11 98473-8432'),
(3, 'Adriano', 'adrianodriks@email.com', 'Analista de Dados', '11 90973-8472'),
(4, 'Beatriz', 'trizbea@email.com', 'Analista de Documentação Técnica', '11 95633-7234'),
(5, 'Arthur', 'arthur@email.com', 'Desenvolvedor (Back-end)', '11 99743-9345'),
(6, 'Evelyn', 'evelyn@email.com', 'Engenheira de Banco de Dados', '11 98735-8932'),
(7, 'Guilherme', 'guilherme@email.com', 'Administrador de Banco de Dados', '11 92454-9838'),
(8, 'Sophia', 'sophia@email.com', 'Analista de Marketing Digital', '11 96346-7623'),
(9, 'Vinicius', 'vinicius@email.com', 'Desenvolvedor de Interface (Front-end)', NULL);

-- --------------------------------------------------------

--
-- Estrutura para tabela `livros`
--

CREATE TABLE `livros` (
  `id_livro` int(11) NOT NULL,
  `nome_livro` varchar(200) NOT NULL,
  `condição` varchar(50) DEFAULT NULL,
  `localidade` varchar(100) DEFAULT NULL,
  `id_sebo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `sebos`
--

CREATE TABLE `sebos` (
  `id_sebo` int(20) NOT NULL,
  `nome_sebo` varchar(255) NOT NULL,
  `endereco_sebo` varchar(255) NOT NULL,
  `telefone_sebo` varchar(20) NOT NULL,
  `horario_funcionamento` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `sebos`
--

INSERT INTO `sebos` (`id_sebo`, `nome_sebo`, `endereco_sebo`, `telefone_sebo`, `horario_funcionamento`) VALUES
(1, 'Biblio_Bairro', 'rua 123 ', '', NULL),
(2, 'Sebo do Rock', 'galeria do rock nº89', '11 2593-2134', NULL);

CREATE TABLE reservas  (
    id_reserva INT PRIMARY KEY AUTO_INCREMENT,

    id_usuario INT,
    id_sebos INT,

    data_reserva DATE,
    data_expiracao DATE,
    status_reserva VARCHAR(20),

    FOREIGN KEY (id_usuario)
        REFERENCES usuario(id_usuarios),

    FOREIGN KEY (id_sebos)
        REFERENCES sebos(id_sebos)
);

INSERT INTO reservas VALUES (
'1', '','2026 / 05 / 13', ' 2026/ 05/ 14', 'Aguardando a Retirada' );
-- --------------------------------------------------------

--
-- Estrutura para tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `ID_usuario` int PRIMARY KEY(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `email_user` varchar(100) NOT NULL,
  `telefone_user` varchar(20) DEFAULT NULL
  `senha_user` VARCHAR (8),
  `preferencia_literaria` (20),
  `localizacao`(90);
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `usuarios`
--

INSERT INTO `usuarios` (`ID_usuario`, `nome`, `email_user`, `telefone_user`,`senha_user`,`preferencia_literaria`, `localizacao`) VALUES
(1, 'João da Silva', 'joaodasilva@email.com', '(11) 98989-7643', '78905634','HQs','Rua jacarandá Bairro do limoeiro, 505'),
(2, 'Maria do Carmo', '', '0','(11) 98880-7641','Romance', 'Rua Mario de Andrade 809');

CREATE TABLE livros ( titulo VARCHAR (60),
-- se relaciona com  a tabela livro id_autor,
-- chave estrangeira id_usuario  
-- sebos id ( SERIA A TABELA DE RELAÇÃO );

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `funcionarios`

ALTER TABLE `funcionarios`
  ADD PRIMARY KEY (`id_funcionario`);

--
-- Índices de tabela `livros`
--
ALTER TABLE `livros`
  ADD PRIMARY KEY (`id_livro`),
  ADD KEY `fk_sebo_livro` (`id_sebo`);

--
-- Índices de tabela `sebos`
--
ALTER TABLE `sebos`
  ADD PRIMARY KEY (`id_sebo`);

--
-- Índices de tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`ID_usuario`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `funcionarios`
--
ALTER TABLE `funcionarios`
  MODIFY `id_funcionario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de tabela `livros`
--
ALTER TABLE `livros`
  MODIFY `id_livro` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `sebos`
--
ALTER TABLE `sebos`
  MODIFY `id_sebo` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `ID_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `livros`
--
ALTER TABLE `livros`
  ADD CONSTRAINT `fk_sebo_livro` FOREIGN KEY (`id_sebo`) REFERENCES `sebos` (`id_sebo`);
COMMIT;
