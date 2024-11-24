-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : dim. 24 nov. 2024 à 21:02
-- Version du serveur : 5.7.24
-- Version de PHP : 8.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `sitegames`
--

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `pseudo` varchar(40) NOT NULL,
  `email` varchar(40) NOT NULL,
  `password` varchar(80) NOT NULL,
  `time_registration` datetime NOT NULL,
  `time_login` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `pseudo`, `email`, `password`, `time_registration`, `time_login`) VALUES
(1, 'nono', 'zeaea@eaze.com', '694947af650c7f5bf4e9c41bb83e383cded268fed3ee7f6e41c0a6d78967e6e4', '2024-11-18 18:37:29', '2024-11-18 18:37:29'),
(3, 'nonoea', 'zeaeeeea@eaze.com', '874b47a2f1442a8461ae2db8a2ccd0034f727b4090b936116226cc0d002bdeed', '2024-11-18 19:02:58', NULL),
(4, 'noasman', 'noahkiche@gmail.com', '578f9644f08d314a965f5f5ef0ed8f17da15d47ee26d9dc0709ce67700d92fb4', '2024-11-18 19:09:27', NULL),
(5, 'noneeo', 'noahkiceehe@gmail.com', '578f9644f08d314a965f5f5ef0ed8f17da15d47ee26d9dc0709ce67700d92fb4', '2024-11-18 19:42:04', NULL);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `pseudo` (`pseudo`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
