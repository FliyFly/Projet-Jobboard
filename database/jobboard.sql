-- MySQL dump 10.13  Distrib 8.0.21, for osx10.15 (x86_64)
--
-- Host: localhost    Database: jobboard
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `advertisements`
--

DROP TABLE IF EXISTS `advertisements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `advertisements` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) DEFAULT NULL,
  `about` longtext,
  `job_description` longtext,
  `contract_type` varchar(45) DEFAULT NULL,
  `localisation` varchar(45) DEFAULT NULL,
  `id_sector` int DEFAULT NULL,
  `id_wage` int DEFAULT NULL,
  `id_companie` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_sector` (`id_sector`),
  KEY `id_wage` (`id_wage`),
  KEY `id_companie` (`id_companie`),
  CONSTRAINT `advertisements_ibfk_1` FOREIGN KEY (`id_sector`) REFERENCES `sectors` (`id`),
  CONSTRAINT `advertisements_ibfk_2` FOREIGN KEY (`id_wage`) REFERENCES `wages` (`id`),
  CONSTRAINT `advertisements_ibfk_3` FOREIGN KEY (`id_companie`) REFERENCES `companies` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `advertisements`
--

LOCK TABLES `advertisements` WRITE;
/*!40000 ALTER TABLE `advertisements` DISABLE KEYS */;
INSERT INTO `advertisements` VALUES (3,'Business Développeur junior','M2DG propose une offre globale à 360° autour de l’espace travail.','Pour accompagner notre développement, nous recherchons un Business Developer junior pour notre marque dans une équipe dynamique.','part-time','Lyon',10,1,7),(9,'Product Owner','AOS est une startup qui améliore le quotidien des acteurs du bâtiment par le biais de l’innovation et de la technologie !','Intégré.à l’équipe Produit, ton rôle sera de manager le cycle de développement de fonctionnalités et d’être l’interlocuteur dédié autour du produit auprès de nos clients ainsi qu’auprès de nos équipes.','full-time','Paris',9,2,5),(10,'Lead Développeur Front React','L’Atelier est une jeune entreprise fondée en 2016 par trois ingénieurs animés d’une même passion pour l’innovation et les hackathons. Déçus de voir les projets abandonnés et ne pas aboutir à des produits utilisés, ils décident de s’associer afin d’aider les entreprises à concrétiser leurs idées.','Au sein d’une product Team composée de 2 devs back, de 2 devs front, d’un UX/UI Designer et d’un PO, tous passionnés, tu interviendras sur le développement de produits en co-création avec nos clients.\r\nEn plus de tes tâches de développement tu devras encadrer et faire progresser ta team front.','full-time','Marseille',11,3,6);
/*!40000 ALTER TABLE `advertisements` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `applications`
--

DROP TABLE IF EXISTS `applications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `applications` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_user` int DEFAULT NULL,
  `id_advertisement` int DEFAULT NULL,
  `apply_date` datetime DEFAULT NULL,
  `id_email` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_user` (`id_user`),
  KEY `id_advertisement` (`id_advertisement`),
  KEY `id_email` (`id_email`),
  CONSTRAINT `applications_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`),
  CONSTRAINT `applications_ibfk_2` FOREIGN KEY (`id_advertisement`) REFERENCES `advertisements` (`id`),
  CONSTRAINT `applications_ibfk_3` FOREIGN KEY (`id_email`) REFERENCES `emails` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `applications`
--

LOCK TABLES `applications` WRITE;
/*!40000 ALTER TABLE `applications` DISABLE KEYS */;
INSERT INTO `applications` VALUES (1,15,3,'2020-10-18 20:27:13',29);
/*!40000 ALTER TABLE `applications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `companies`
--

DROP TABLE IF EXISTS `companies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `companies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `about` longtext,
  `linkedin_link` varchar(200) DEFAULT NULL,
  `twitter_link` varchar(200) DEFAULT NULL,
  `website_link` varchar(200) DEFAULT NULL,
  `id_domain` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_domain` (`id_domain`),
  CONSTRAINT `companies_ibfk_1` FOREIGN KEY (`id_domain`) REFERENCES `domains` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companies`
--

LOCK TABLES `companies` WRITE;
/*!40000 ALTER TABLE `companies` DISABLE KEYS */;
INSERT INTO `companies` VALUES (1,'Apple','Entreprise créatrice de révolution','linkedin/apple','twitter/apple','apple.com',1),(2,'Capgemini','Nous créons les solutions de demain','linkedin/capgemini','twitter/capgemini','capgemini.com',1),(5,'AOS','AOS est une startup qui améliore le quotidien des acteurs du bâtiment par le biais de l’innovation et de la technologie !','linkedin/aos','twitter/aos','aos.com',1),(6,'L\'Atelier','L’Atelier est une jeune entreprise fondée en 2016 par trois ingénieurs animés d’une même passion pour l’innovation et les hackathons. Déçus de voir les projets abandonnés et ne pas aboutir à des produits utilisés, ils décident de s’associer afin d’aider les entreprises à concrétiser leurs idées.','linkedin/atelier','twitter/atelier','atelier.com',1),(7,'M2DG','M2DG propose une offre globale à 360° autour de l’espace travail.','linkedin/M2DG','twitter/M2DG','M2DG.com',5);
/*!40000 ALTER TABLE `companies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `domains`
--

DROP TABLE IF EXISTS `domains`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `domains` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `domains`
--

LOCK TABLES `domains` WRITE;
/*!40000 ALTER TABLE `domains` DISABLE KEYS */;
INSERT INTO `domains` VALUES (1,'Technology'),(5,'Immobilier');
/*!40000 ALTER TABLE `domains` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `emails`
--

DROP TABLE IF EXISTS `emails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `emails` (
  `id` int NOT NULL AUTO_INCREMENT,
  `object` varchar(100) DEFAULT NULL,
  `content` longtext,
  `send_date` datetime DEFAULT NULL,
  `resume` varchar(100) DEFAULT NULL,
  `letter` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `emails`
--

LOCK TABLES `emails` WRITE;
/*!40000 ALTER TABLE `emails` DISABLE KEYS */;
INSERT INTO `emails` VALUES (1,'Candidature pour vendeur de légumes','Bonjour je souhaiterais rejoindre votre entreprise de vendeur de légumes.','2020-10-18 15:39:32','moncv.pdf','Je suis très motivé.'),(2,'dfsgd','dgfsf','2020-10-18 15:55:13','dfgsdg','sdfgsfdg'),(3,'fgsdgsd','dfgsdg','2020-10-18 15:56:50','tyryur','tjyrrtj'),(4,'fvgsdg','dsfgdgd','2020-10-18 19:48:11','dsfgdsgd','sfdgdfg'),(5,'toto','toto','2020-10-18 19:50:53','toto','toto'),(6,'toto','toto','2020-10-18 19:51:49','toto','toto'),(7,'toto','toto','2020-10-18 19:52:30','toto','toto'),(8,'toto','toto','2020-10-18 19:53:21','toto','toto'),(9,'toto','toto','2020-10-18 19:54:00','toto','toto'),(10,'toto','toto','2020-10-18 20:02:32','toto','toto'),(11,'toto','toto','2020-10-18 20:03:52','toto','toto'),(12,'toto','toto','2020-10-18 20:04:23','toto','toto'),(13,'toto','toto','2020-10-18 20:04:44','toto','toto'),(14,'toto','toto','2020-10-18 20:06:12','toto','toto'),(15,'sqfgsdg','sfgsdg','2020-10-18 20:07:27','fdgsdg','gfsd'),(16,'dfgsdfgds','dsfgsdg','2020-10-18 20:08:04','sdfgsdgfd','dsgfsdg'),(17,'srdfgd','dfgssds','2020-10-18 20:08:33','dfgdsg','dsfgdg'),(18,'fdgsfdg','fgdsgsd','2020-10-18 20:09:24','dfgsdg','dsfgsfg'),(19,'fgsdfg','sdfgsd','2020-10-18 20:10:34','gfdsg','sdfgdsg'),(20,'dfqsgf','sgds','2020-10-18 20:11:25','sdfgd','sdfg'),(21,'dfqsg','dfgs','2020-10-18 20:12:36','fdgsd','sdfgd'),(22,'dfgsdfgs','sdfgsd','2020-10-18 20:14:32','dfgsd','sdfgs'),(23,'dfsgdfg','sdfgsdfg','2020-10-18 20:15:35','sdfgdfsg','sdgfsd'),(24,'sfdggs','sdfgdf','2020-10-18 20:16:34','dsfgsd','dfgsd'),(25,'fgds','sdfgs','2020-10-18 20:17:22','dfgs','sdfg'),(26,'dsgffg','dfsggs','2020-10-18 20:20:26','fdsgdfg','dsgfd'),(27,'sfgg','dsfgd','2020-10-18 20:21:02','sfdgfdg','dsfgd'),(28,'dsfgdg','sdgsdfg','2020-10-18 20:22:35','dsfgsdfg','dsfgsd'),(29,'sdfgfd','sdfgd','2020-10-18 20:27:13','sdfgfdg','sdfgsfdg');
/*!40000 ALTER TABLE `emails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Clients'),(2,'Recruiters'),(4,'Admins');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sectors`
--

DROP TABLE IF EXISTS `sectors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sectors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sectors`
--

LOCK TABLES `sectors` WRITE;
/*!40000 ALTER TABLE `sectors` DISABLE KEYS */;
INSERT INTO `sectors` VALUES (4,'Technology'),(9,'Product Owner'),(10,'Développement'),(11,'Développement Front-End');
/*!40000 ALTER TABLE `sectors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `token` varchar(200) DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `id_companie` int DEFAULT NULL,
  `id_role` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_companie` (`id_companie`),
  KEY `id_role` (`id_role`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`id_companie`) REFERENCES `companies` (`id`),
  CONSTRAINT `users_ibfk_2` FOREIGN KEY (`id_role`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Oussama','FLIFLI','Oussama.flifli@epitech.eu','password123','iuciueciuresiusfviuhrezoivuzvzoueh4545CD','male','0611743683','1998-12-22',NULL,1),(15,'kanye','west','kanye@epitech.eu','$2b$10$YCTM2V/Mn1JJ1.IXtRr3FudYe4C10G/Q.n/.bzngsLzphaVkwtaFy','9443a4b9178748bc8dd08adfadbcf92327dd48f228d43b2584866950f5adeea146833e96d7262108c3109eb67adbd5e17226d9c8da000c280242f1ebad87d3d7b4f6c35ec6dd13a7085458b4904daac22ecc707bca576b93bd7f3a2c943bb55dd14c2383','homme','435636','1995-10-12',NULL,1),(24,'Michelle','Obama','michelle@epitech.eu','$2b$10$554VPwjGZoWTl6qF2aNvDOoQCLLDvNSZNssD476aDUSV002XobUjG','f1b844939691cbf7825985ce98e3787d61b0ad88d9a9d30aada8c2456d8c704aba3710af2506a058ab59752b4d68f16078be683ed83f0d2c1cb594b8e5d034ad86df92efb1c3d09157e3c2b836a7d0df9b0597ccfd01cd1b67b8850c40fb61fb71e28587','femme','067567436','1974-10-12',NULL,4),(25,'Thomas','Pesquet','thomas@epitech.eu','$2b$10$6c6bvkNr5KVNL.lHvIi/8.mMwqJv1MLnXe7hafHkxujRBlxK7LqDa','decda85afeffdcb149cef54a24e542ba2df681193759669d1b663abeb89ccd1c6d48f2d83ae8eb15f908e4a913e1243af12a4fb81dd5f6c9c0cb230a4e480468ae24f5511df7767292ede2436de7d9a8da8938ad25884bde173c34fdabc82480322072b7','homme','0547574478','1990-12-10',6,2);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wages`
--

DROP TABLE IF EXISTS `wages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `amount` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wages`
--

LOCK TABLES `wages` WRITE;
/*!40000 ALTER TABLE `wages` DISABLE KEYS */;
INSERT INTO `wages` VALUES (1,'1000 - 2000'),(2,'2000 - 3000'),(3,'3000 - 4000'),(5,'4000 - 5000');
/*!40000 ALTER TABLE `wages` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-10-18 21:35:51
