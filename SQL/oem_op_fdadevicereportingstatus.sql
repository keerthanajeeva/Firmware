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
-- Table structure for table `fdadevicereportingstatus`
--

DROP TABLE IF EXISTS `fdadevicereportingstatus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fdadevicereportingstatus` (
  `ID` bigint NOT NULL AUTO_INCREMENT,
  `DeviceId` varchar(128) NOT NULL,
  `packetsequenceno` varchar(128) DEFAULT NULL,
  `imei` varchar(128) DEFAULT NULL,
  `LastReportedPacket` varchar(128) DEFAULT NULL,
  `msg_sl_no` varchar(128) DEFAULT NULL,
  `Pfreqency` varchar(128) DEFAULT NULL,
  `LastReportedDate` datetime DEFAULT NULL,
  `TimestampLocal` varchar(128) DEFAULT NULL,
  `PublishUTC` varchar(128) DEFAULT NULL,
  `lat` varchar(128) DEFAULT NULL,
  `lon` varchar(128) DEFAULT NULL,
  `altitude` varchar(128) DEFAULT NULL,
  `heading` varchar(128) DEFAULT NULL,
  `gpsspeed` varchar(128) DEFAULT NULL,
  `no_of_satellites` varchar(128) DEFAULT NULL,
  `location` varchar(999) DEFAULT NULL,
  `gpsodometer` varchar(128) DEFAULT NULL,
  `AvgAccelerometerX` varchar(128) DEFAULT NULL,
  `AvgAccelerometerY` varchar(128) DEFAULT NULL,
  `AvgAccelerometerZ` varchar(128) DEFAULT NULL,
  `fw_ver` varchar(128) DEFAULT NULL,
  `vehicle_type` varchar(128) DEFAULT NULL,
  `vehicle_type_description` varchar(128) DEFAULT NULL,
  `VIN` varchar(128) DEFAULT NULL,
  `SubscriptionEndDate` varchar(128) DEFAULT NULL,
  `Elevation` varchar(128) DEFAULT NULL,
  `Frequency_from_W` varchar(128) DEFAULT NULL,
  `ign_status` varchar(128) DEFAULT NULL,
  `vehicle_battery_potential` varchar(128) DEFAULT NULL,
  `obu_batt_volt` varchar(128) DEFAULT NULL,
  `fuellevel` varchar(128) DEFAULT NULL,
  `device_fuel_level` varchar(128) DEFAULT NULL,
  `wheel_based_speed` varchar(128) DEFAULT NULL,
  `enginespeed` varchar(128) DEFAULT NULL,
  `device_engine_speed` varchar(128) DEFAULT NULL,
  `enginecoolanttemperature` varchar(128) DEFAULT NULL,
  `FuelConsumption` varchar(128) DEFAULT NULL,
  `ThrottlePosition` varchar(128) DEFAULT NULL,
  `Engine_Torque` varchar(128) DEFAULT NULL,
  `EngineHours` varchar(128) DEFAULT NULL,
  `FrictionalTorque` varchar(128) DEFAULT NULL,
  `engine_oil_pressure` varchar(128) DEFAULT NULL,
  `ClutchSwitch` varchar(128) DEFAULT NULL,
  `BrakeSwitch` varchar(128) DEFAULT NULL,
  `VehicleDistance` varchar(128) DEFAULT NULL,
  `EngineOilTemperature` varchar(128) DEFAULT NULL,
  `EngineIntakePressure_1` varchar(128) DEFAULT NULL,
  `EngineIntakeTemperature_1` varchar(128) DEFAULT NULL,
  `EngineAirInletPressure` varchar(128) DEFAULT NULL,
  `BarometricPressure` varchar(128) DEFAULT NULL,
  `EngineFuelTemperature_1` varchar(128) DEFAULT NULL,
  `DriversDemandEnginePercentTorque` varchar(128) DEFAULT NULL,
  `BatteryChargingCurrent` varchar(128) DEFAULT NULL,
  `AirPressure_1` varchar(128) DEFAULT NULL,
  `AirPressure_2` varchar(128) DEFAULT NULL,
  `DistanceToEmpty` varchar(128) DEFAULT NULL,
  `GSASCompliance` varchar(128) DEFAULT NULL,
  `AirPressureDigital` varchar(128) DEFAULT NULL,
  `OilPressureDigital` varchar(128) DEFAULT NULL,
  `gsm_signal` varchar(128) DEFAULT NULL,
  `alertid` varchar(128) DEFAULT NULL,
  `Silent` int DEFAULT NULL,
  `ReportGeneratedDate` int DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `ReportGeneratedDate` (`ReportGeneratedDate`,`DeviceId`),
  KEY `alertid` (`alertid`,`DeviceId`),
  KEY `alertid_2` (`alertid`,`DeviceId`)
) ENGINE=InnoDB AUTO_INCREMENT=146964955 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fdadevicereportingstatus`
--

LOCK TABLES `fdadevicereportingstatus` WRITE;
/*!40000 ALTER TABLE `fdadevicereportingstatus` DISABLE KEYS */;
INSERT INTO `fdadevicereportingstatus` VALUES (11,'116','45','6','10','12','56','2021-09-07 00:00:00','9','5','43','34','23','50','100','20','chennai','200','x10','y20','z30','58','good','it work good','vin0','2007','e1','w2','status','30','3','50','60','20','20','20','5','4','2','3','60','30','2','0ff','on','1m','57t','40p','60et','30ap','40bp','40f','10','40','p1','p2','0e','gs1','5ap','6op','5s','25',6,18);
/*!40000 ALTER TABLE `fdadevicereportingstatus` ENABLE KEYS */;
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
