-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 02/06/2024 às 16:10
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `physicus_up`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `acdemy`
--

CREATE TABLE `acdemy` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `level` varchar(255) NOT NULL,
  `time` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `series` varchar(255) NOT NULL,
  `train` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `acdemy`
--

INSERT INTO `acdemy` (`id`, `name`, `level`, `time`, `date`, `series`, `train`) VALUES
(2, 'Biceps', 'Difícil [8]', '1:10:6', '2024/06/01', '8', 'Peito'),
(3, 'Guilherme Santiago de Brito', 'Difícil [9]', '1:10:2', '2024/06/28', '81', 'dsaas');

-- --------------------------------------------------------

--
-- Estrutura para tabela `tabela`
--

CREATE TABLE `tabela` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `distance` int(11) NOT NULL,
  `level` varchar(255) NOT NULL,
  `time` varchar(255) NOT NULL,
  `obs` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `pace` varchar(255) NOT NULL,
  `timeString` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tabela`
--

INSERT INTO `tabela` (`id`, `name`, `distance`, `level`, `time`, `obs`, `date`, `pace`, `timeString`) VALUES
(5, 'Treino leve', 8, 'Fácil [3]', '0370.18333333333333332', 'Terra', '2024/06/04', '4\'39 Min/KM', '0:37:11'),
(6, 'Treino forte', 8, 'Muito Difícil [10]', '0250.18333333333333332', 'Terra', '2024/06/20', '3\'9 Min/KM', '0:25:11'),
(7, 'Treino forte', 8, 'Difícil [9]', '0250.18333333333333332', 'Terra', '2024/06/15', '3\'9 Min/KM', '0:25:11'),
(8, 'Treino forte', 8, 'Difícil [8]', '0250.18333333333333332', 'Terra', '', '3\'9 Min/KM', '0:25:11'),
(9, 'Treino forte', 8, '', '0250.18333333333333332', 'Terra', '2024/06/27', '3\'09 Min/KM', '0:25:11'),
(10, 'Treino forte', 100, 'Difícil [8]', '900100.18333333333333332', 'Terra', '2024/06/06', '9\'06 Min/KM', '15:10:11');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `acdemy`
--
ALTER TABLE `acdemy`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `tabela`
--
ALTER TABLE `tabela`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `acdemy`
--
ALTER TABLE `acdemy`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `tabela`
--
ALTER TABLE `tabela`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
