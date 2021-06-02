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
-- Table structure for table `firmwaredetailjava`
--

DROP TABLE IF EXISTS `firmwaredetailjava`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `firmwaredetailjava` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `ServerIP` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `UserName` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `Password` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `FileSize` int DEFAULT '0',
  `FilePath` varchar(300) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `Port` int DEFAULT NULL,
  `InsertUTC` datetime DEFAULT CURRENT_TIMESTAMP,
  `UpdateUTC` datetime DEFAULT NULL,
  `IsActive` tinyint(1) DEFAULT '1',
  `ReleaseNotes` mediumtext,
  `IsFirmware` tinyint(1) DEFAULT '0',
  `isSNM476` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`ID`),
  UNIQUE KEY `FirmwareDetailJava_Name_Unique` (`Name`)
) ENGINE=InnoDB AUTO_INCREMENT=546 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `firmwaredetailjava`
--

LOCK TABLES `firmwaredetailjava` WRITE;
/*!40000 ALTER TABLE `firmwaredetailjava` DISABLE KEYS */;
INSERT INTO `firmwaredetailjava` VALUES (1,'clangauage','192.01.02','dhana','dhana',10,'c/local',8000,'2021-05-14 00:00:00','2021-05-18 00:00:00',0,'20',0,0),(114,'javalangauage','192.01.02','dhanalakshmi','dhanalakshmi',10,'java/local',8000,'2021-05-14 00:00:00','2021-05-18 00:00:00',0,'20',0,0),(115,'javalan','192.01.02','dhanamani','dhanamani',10,'java/local',8000,'2021-05-14 00:00:00','2021-05-18 00:00:00',0,'20',0,0),(544,'java','190.110.10','java','java',6,'localcdisk',5050,'2021-04-14 00:00:00','2021-05-14 00:00:00',0,'30',0,0),(545,'javaversion','191.110.17','javaversion','javaversion',6,'localc',5050,'2021-04-14 00:00:00','2021-05-14 00:00:00',1,'30',0,0);
/*!40000 ALTER TABLE `firmwaredetailjava` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-27 16:13:18
