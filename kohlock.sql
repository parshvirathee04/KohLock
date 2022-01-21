-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 21, 2022 at 04:45 PM
-- Server version: 10.1.35-MariaDB
-- PHP Version: 7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kohlock`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `pid` varchar(10) NOT NULL,
  `kname` varchar(50) NOT NULL,
  `cost` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`pid`, `kname`, `cost`) VALUES
('p1', 'The Colossal Kajal', 170),
('p2', 'All Rounder Pencil', 450),
('p3', 'Eyeconic Kajal', 180),
('p4', 'Jumbo Eye Pencil', 550),
('p5', 'Kajal Magique', 290),
('p6', 'Crayon Kajal Eye Liner', 2100),
('p7', 'Magnet Eyes Kajal', 179),
('p8', 'Color Kick Kajal', 199);

-- --------------------------------------------------------

--
-- Table structure for table `u1`
--

CREATE TABLE `u1` (
  `pid` varchar(10) NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `u1`
--

INSERT INTO `u1` (`pid`, `quantity`) VALUES
('p1', 1),
('p3', 3),
('p7', 2);

-- --------------------------------------------------------

--
-- Table structure for table `u2`
--

CREATE TABLE `u2` (
  `pid` varchar(10) NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `u2`
--

INSERT INTO `u2` (`pid`, `quantity`) VALUES
('p1', 1),
('p4', 3),
('p5', 1),
('p8', 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(1, 'Parshvi Rathee', 'parshvirathee04@gmail.com', 'p1'),
(2, 'Ritu Rathee', 'riturathee2577@gmail.com', 'r1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`pid`);

--
-- Indexes for table `u1`
--
ALTER TABLE `u1`
  ADD PRIMARY KEY (`pid`);

--
-- Indexes for table `u2`
--
ALTER TABLE `u2`
  ADD PRIMARY KEY (`pid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
