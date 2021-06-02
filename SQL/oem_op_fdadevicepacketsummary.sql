-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: oem_op
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `fdadevicepacketsummary`
--

DROP TABLE IF EXISTS `fdadevicepacketsummary`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fdadevicepacketsummary` (
  `ID` bigint NOT NULL AUTO_INCREMENT,
  `DeviceId` varchar(100) NOT NULL,
  `VIN` varchar(128) DEFAULT NULL,
  `Customer` varchar(100) DEFAULT NULL,
  `VehicleType` varchar(128) DEFAULT NULL,
  `TankCapacity` double DEFAULT NULL,
  `fk_GroupClusterID` int DEFAULT NULL,
  `StartDate` datetime DEFAULT NULL,
  `EndDate` datetime DEFAULT NULL,
  `TriggerFlag` varchar(100) DEFAULT NULL,
  `PlantName` varchar(100) DEFAULT NULL,
  `fw_version` varchar(999) DEFAULT NULL,
  `Total` int DEFAULT NULL,
  `D0` int DEFAULT NULL,
  `D` int DEFAULT NULL,
  `P` int DEFAULT NULL,
  `A` int DEFAULT NULL,
  `V` int DEFAULT NULL,
  `F0` int DEFAULT NULL,
  `FD` int DEFAULT NULL,
  `FE` int DEFAULT NULL,
  `FF` int DEFAULT NULL,
  `Published` int DEFAULT NULL,
  `NotPublished` int DEFAULT NULL,
  `D0_NotPublished` int DEFAULT NULL,
  `D0_Published` int DEFAULT NULL,
  `F0_NotPublished` int DEFAULT NULL,
  `F0_Published` int DEFAULT NULL,
  `E0_NotPublished` int DEFAULT NULL,
  `E0_Published` int DEFAULT NULL,
  `E5_NotPublished` int DEFAULT NULL,
  `E5_Published` int DEFAULT NULL,
  `Pfreqency` varchar(128) DEFAULT NULL,
  `lat` varchar(128) DEFAULT NULL,
  `location` varchar(999) DEFAULT NULL,
  `VehicleBatteryPotential` varchar(128) DEFAULT NULL,
  `ObuBattVolt` varchar(128) DEFAULT NULL,
  `lon` varchar(128) DEFAULT NULL,
  `Silent` int DEFAULT NULL,
  `LastReportedDate` datetime DEFAULT NULL,
  `DaysPastStartDate` int DEFAULT NULL,
  `DeviceStatus` varchar(128) DEFAULT NULL,
  `ageing` varchar(128) DEFAULT NULL,
  `ReportGeneratedDate` int DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `IDX_ReportGeneratedDate` (`ReportGeneratedDate`)
) ENGINE=InnoDB AUTO_INCREMENT=43081174 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fdadevicepacketsummary`
--

LOCK TABLES `fdadevicepacketsummary` WRITE;
/*!40000 ALTER TABLE `fdadevicepacketsummary` DISABLE KEYS */;
INSERT INTO `fdadevicepacketsummary` VALUES (1,'12','vintype','mani','110',1000,150,'2021-07-10 00:00:00','2021-07-14 00:00:00','2021-05-18','flag','10.0',50,1,2,3,4,5,6,7,8,10,55,90,123,88,53,74,81,98,500,0,'0.0.5','silent-01','2005','2021-01-07','0','ageing01',897,'2020-08-24 00:00:00',0,'34','65',56);
/*!40000 ALTER TABLE `fdadevicepacketsummary` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-27 16:13:20
