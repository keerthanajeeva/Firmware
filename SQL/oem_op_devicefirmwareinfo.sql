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
-- Table structure for table `devicefirmwareinfo`
--

DROP TABLE IF EXISTS `devicefirmwareinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `devicefirmwareinfo` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `IPConfigured` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `Port` int DEFAULT NULL,
  `fk_JavaFirmwareID` int DEFAULT NULL,
  `fk_CFirmwareID` int DEFAULT NULL,
  `InsertUTC` datetime DEFAULT CURRENT_TIMESTAMP,
  `UpdateUTC` datetime DEFAULT NULL,
  `IsActive` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`ID`),
  UNIQUE KEY `JAVA_C_ID` (`fk_JavaFirmwareID`,`fk_CFirmwareID`),
  KEY `FirmwareDetailJava_DeviceFirmwareInfo_FK` (`fk_JavaFirmwareID`),
  KEY `FirmwareDetailC_DeviceFirmwareInfo_FK` (`fk_CFirmwareID`),
  CONSTRAINT `FirmwareDetailC_DeviceFirmwareInfo_FK` FOREIGN KEY (`fk_CFirmwareID`) REFERENCES `firmwaredetailc` (`ID`),
  CONSTRAINT `FirmwareDetailJava_DeviceFirmwareInfo_FK` FOREIGN KEY (`fk_JavaFirmwareID`) REFERENCES `firmwaredetailjava` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=96039 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `devicefirmwareinfo`
--

LOCK TABLES `devicefirmwareinfo` WRITE;
/*!40000 ALTER TABLE `devicefirmwareinfo` DISABLE KEYS */;
INSERT INTO `devicefirmwareinfo` VALUES (120,'190.09.01',7070,1,1,'2021-07-10 00:00:00','2021-08-10 00:00:00',1);
/*!40000 ALTER TABLE `devicefirmwareinfo` ENABLE KEYS */;
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
