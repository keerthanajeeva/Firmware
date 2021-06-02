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
-- Table structure for table `customeraccountrelationship`
--

DROP TABLE IF EXISTS `customeraccountrelationship`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customeraccountrelationship` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `AccountName` varchar(200) DEFAULT NULL,
  `fk_DealerId` int NOT NULL,
  `fk_CustomerId` int NOT NULL,
  `BSSID` varchar(100) NOT NULL,
  `InsertUTC` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `UC_BSSID` (`BSSID`),
  KEY `Customer_CustomerAccountRelationship_FK_Cust` (`fk_CustomerId`),
  KEY `Customer_CustomerAccountRelationship_FK_Dealer` (`fk_DealerId`),
  CONSTRAINT `Customer_CustomerAccountRelationship_Dealer_FK` FOREIGN KEY (`fk_DealerId`) REFERENCES `customer` (`ID`),
  CONSTRAINT `Customer_CustomerAccountRelationship_FK_` FOREIGN KEY (`fk_CustomerId`) REFERENCES `customer` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=12855 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customeraccountrelationship`
--

LOCK TABLES `customeraccountrelationship` WRITE;
/*!40000 ALTER TABLE `customeraccountrelationship` DISABLE KEYS */;
INSERT INTO `customeraccountrelationship` VALUES (10,'tgh',50,50,'60','2021-10-14 00:00:00'),(11,'fghj',51,51,'61','2021-10-14 00:00:00'),(12,'ggjn',52,52,'62','2021-10-14 00:00:00');
/*!40000 ALTER TABLE `customeraccountrelationship` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-27 16:13:19
