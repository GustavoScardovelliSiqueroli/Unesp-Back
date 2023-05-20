-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 20-Maio-2023 às 16:50
-- Versão do servidor: 5.7.36
-- versão do PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `sili`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `cases`
--

DROP TABLE IF EXISTS `cases`;
CREATE TABLE IF NOT EXISTS `cases` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `latitude` varchar(50) NOT NULL,
  `longitude` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL,
  `created` date NOT NULL,
  `deleted` date DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `cases`
--

INSERT INTO `cases` (`ID`, `latitude`, `longitude`, `status`, `created`, `deleted`) VALUES
(5, '-50.40225612898031', '-21.21128972457565', 'positivo', '2023-05-18', NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `UID` char(36) NOT NULL,
  `password` longtext,
  `name` varchar(50) NOT NULL,
  `cpf` varchar(11) NOT NULL,
  `email` longtext NOT NULL,
  `role` varchar(50) NOT NULL,
  `verificacao` varchar(20) NOT NULL,
  `created` date NOT NULL,
  `deleted` date DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `user`
--

INSERT INTO `user` (`ID`, `UID`, `password`, `name`, `cpf`, `email`, `role`, `verificacao`, `created`, `deleted`) VALUES
(1, '434234234234', '$2a$12$hsi63T7OkIw79HYgk6w7xOPX8Rr5a8YogbTh4MCVzDTNzMK1Hy/sG', 'Gustavo', '43063493813', 'gustavo@gmail.com', 'admin', 'verificado', '2023-05-20', NULL),
(2, '3a66b6b6-7c8a-49e0-8eab-948460f2d61a', '$2b$10$S27Glw.XHPykjn/Jfh9FkO5Cd/xx9SXtN./IzNSa6s0F3FQz1hX0q', 'gustavo costa', '43063493812', 'gustavoc@gmail.com', 'supervisor', 'verificado', '2023-05-20', NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
