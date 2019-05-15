CREATE DATABASE IF NOT EXISTS university;
USE university;

-- -------------------------------------------------------------
-- TablePlus 2.2(218)
--
-- https://tableplus.com/
--
-- Database: university
-- Generation Time: 2019-05-02 21:07:31.9230
-- -------------------------------------------------------------


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


DROP TABLE IF EXISTS `projects`;
CREATE TABLE `projects` (
  `shortcode` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`shortcode`),
  KEY `idx_projects_deleted_at` (`deleted_at`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `sprint_comments`;
CREATE TABLE `sprint_comments` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `project_code` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `message` text,
  `created_at` timestamp NULL DEFAULT NULL,
  `author_id` int(11) DEFAULT NULL,
  `sprint_id` int(10) unsigned DEFAULT NULL,
  `resolved_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `sprints`;
CREATE TABLE `sprints` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `started_at` timestamp NULL DEFAULT NULL,
  `end_at` timestamp NULL DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `project_code` varchar(255) DEFAULT NULL,
  `duration` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `ticket_comments`;
CREATE TABLE `ticket_comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `project_code` varchar(255) DEFAULT NULL,
  `ticket_id` int(10) unsigned DEFAULT NULL,
  `body` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_ticket_comments_deleted_at` (`deleted_at`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `ticket_histories`;
CREATE TABLE `ticket_histories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `project_code` varchar(255) DEFAULT NULL,
  `ticket_id` int(11) DEFAULT NULL,
  `sprint_id` int(11) DEFAULT NULL,
  `type` enum('sprint','title','assignee','weight','location','status','reprioritised') NOT NULL,
  `old` varchar(255) DEFAULT NULL,
  `new` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `internal` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_ticket_histories_deleted_at` (`deleted_at`)
) ENGINE=InnoDB AUTO_INCREMENT=383 DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `tickets`;
CREATE TABLE `tickets` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `project_code` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `body` text,
  `location_type` enum('sprint','backlog','pending') NOT NULL,
  `previous_ticket` int(11) DEFAULT NULL,
  `workflow_id` int(11) DEFAULT NULL,
  `sprint_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `creator_user_id` int(11) DEFAULT NULL,
  `assignee_user_id` int(11) DEFAULT NULL,
  `workflow_position` int(11) DEFAULT NULL,
  `weight` int(11) DEFAULT NULL,
  `status` enum('open','in-progress','closed') NOT NULL,
  `category` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_tickets_deleted_at` (`deleted_at`)
) ENGINE=InnoDB AUTO_INCREMENT=93 DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `reset_token` varchar(255) DEFAULT NULL,
  `active` tinyint(1) DEFAULT NULL,
  `disabled` tinyint(1) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_users_deleted_at` (`deleted_at`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `workflow_deps`;
CREATE TABLE `workflow_deps` (
  `workflow_rule_id` int(10) unsigned NOT NULL,
  `destination_workflow` int(10) unsigned NOT NULL,
  PRIMARY KEY (`workflow_rule_id`,`destination_workflow`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `workflow_rules`;
CREATE TABLE `workflow_rules` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `max_items` int(10) unsigned DEFAULT NULL,
  `order` int(10) unsigned DEFAULT NULL,
  `status` enum('open','in-progress','closed') NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_workflow_rules_deleted_at` (`deleted_at`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

INSERT INTO `projects` (`shortcode`, `created_at`, `updated_at`, `deleted_at`, `name`) VALUES ('LT', '2018-11-09 05:23:34', '2018-11-09 05:23:34', NULL, 'Luke\'s Project'),
('TST', '2018-11-09 05:23:34', '2018-11-09 05:23:34', NULL, 'Testing Project');

INSERT INTO `sprints` (`id`, `started_at`, `end_at`, `name`, `project_code`, `duration`) VALUES ('19', '2019-05-02 20:05:54', '2019-05-09 20:05:54', 'Design Sprint', 'LT', '1');

INSERT INTO `ticket_comments` (`id`, `project_code`, `ticket_id`, `body`, `created_at`, `updated_at`, `deleted_at`, `user_id`) VALUES ('3', 'LT', '85', '<p>I think we should consider using a material theme.</p>', '2019-05-02 19:55:48', '2019-05-02 19:55:48', NULL, '1');

INSERT INTO `ticket_histories` (`id`, `project_code`, `ticket_id`, `sprint_id`, `type`, `old`, `new`, `created_at`, `updated_at`, `deleted_at`, `internal`) VALUES ('282', 'LT', '85', '19', X'6c6f636174696f6e', '0', '6', '2019-05-02 19:55:20', '2019-05-02 19:55:20', NULL, '1'),
('283', 'LT', '85', '19', X'737072696e74', '', '19', '2019-05-02 19:55:20', '2019-05-02 19:55:20', NULL, NULL),
('284', 'LT', '85', '19', X'776569676874', '', '0', '2019-05-02 19:55:20', '2019-05-02 19:55:20', NULL, '1'),
('285', 'LT', '85', '19', X'7469746c65', '', 'Design user interface', '2019-05-02 19:55:20', '2019-05-02 19:55:20', NULL, '1'),
('286', 'LT', '85', '19', X'737461747573', '', 'open', '2019-05-02 19:55:20', '2019-05-02 19:55:20', NULL, '1'),
('287', 'LT', '86', '19', X'6c6f636174696f6e', '0', '6', '2019-05-02 19:55:22', '2019-05-02 19:55:22', NULL, '1'),
('288', 'LT', '86', '19', X'737072696e74', '', '19', '2019-05-02 19:55:22', '2019-05-02 19:55:22', NULL, NULL),
('289', 'LT', '86', '19', X'776569676874', '', '0', '2019-05-02 19:55:22', '2019-05-02 19:55:22', NULL, '1'),
('290', 'LT', '86', '19', X'7469746c65', '', 'Design login form', '2019-05-02 19:55:22', '2019-05-02 19:55:22', NULL, '1'),
('291', 'LT', '86', '19', X'737461747573', '', 'open', '2019-05-02 19:55:22', '2019-05-02 19:55:22', NULL, '1'),
('292', 'LT', '88', NULL, X'7469746c65', '', 'Implement user accounts API', '2019-05-02 19:55:27', '2019-05-02 19:55:27', NULL, NULL),
('293', 'LT', '88', NULL, X'737461747573', '', 'open', '2019-05-02 19:55:27', '2019-05-02 19:55:27', NULL, NULL),
('294', 'LT', '87', '19', X'6c6f636174696f6e', '0', '6', '2019-05-02 19:58:05', '2019-05-02 19:58:05', NULL, '1'),
('295', 'LT', '87', '19', X'737072696e74', '', '19', '2019-05-02 19:58:05', '2019-05-02 19:58:05', NULL, NULL),
('296', 'LT', '87', '19', X'776569676874', '', '0', '2019-05-02 19:58:05', '2019-05-02 19:58:05', NULL, '1'),
('297', 'LT', '87', '19', X'7469746c65', '', 'Implement authentication API', '2019-05-02 19:58:05', '2019-05-02 19:58:05', NULL, '1'),
('298', 'LT', '87', '19', X'737461747573', '', 'open', '2019-05-02 19:58:05', '2019-05-02 19:58:05', NULL, '1'),
('299', 'LT', '86', '19', X'7469746c65', 'Implement login form', 'Design login form', '2019-05-02 19:58:05', '2019-05-02 19:58:05', NULL, NULL),
('300', 'LT', '86', '19', X'6c6f636174696f6e', '0', '6', '2019-05-02 19:58:05', '2019-05-02 19:58:05', NULL, '1'),
('301', 'LT', '86', '19', X'737072696e74', '', '19', '2019-05-02 19:58:05', '2019-05-02 19:58:05', NULL, NULL),
('302', 'LT', '86', '19', X'776569676874', '', '0', '2019-05-02 19:58:05', '2019-05-02 19:58:05', NULL, '1'),
('303', 'LT', '86', '19', X'7469746c65', '', 'Design login form', '2019-05-02 19:58:05', '2019-05-02 19:58:05', NULL, '1'),
('304', 'LT', '86', '19', X'737461747573', '', 'open', '2019-05-02 19:58:05', '2019-05-02 19:58:05', NULL, '1'),
('305', 'LT', '89', '19', X'6c6f636174696f6e', '0', '6', '2019-05-02 19:58:06', '2019-05-02 19:58:06', NULL, '1'),
('306', 'LT', '89', '19', X'737072696e74', '', '19', '2019-05-02 19:58:06', '2019-05-02 19:58:06', NULL, NULL),
('307', 'LT', '89', '19', X'776569676874', '', '0', '2019-05-02 19:58:06', '2019-05-02 19:58:06', NULL, '1'),
('308', 'LT', '89', '19', X'7469746c65', '', 'Implement login form', '2019-05-02 19:58:06', '2019-05-02 19:58:06', NULL, '1'),
('309', 'LT', '89', '19', X'737461747573', '', 'open', '2019-05-02 19:58:06', '2019-05-02 19:58:06', NULL, '1'),
('310', 'LT', '86', '19', X'7469746c65', 'Implement user accounts API', 'Design login form', '2019-05-02 19:58:06', '2019-05-02 19:58:06', NULL, NULL),
('311', 'LT', '86', '19', X'6c6f636174696f6e', '0', '6', '2019-05-02 19:58:06', '2019-05-02 19:58:06', NULL, '1'),
('312', 'LT', '86', '19', X'737072696e74', '', '19', '2019-05-02 19:58:06', '2019-05-02 19:58:06', NULL, NULL),
('313', 'LT', '86', '19', X'776569676874', '', '0', '2019-05-02 19:58:06', '2019-05-02 19:58:06', NULL, '1'),
('314', 'LT', '86', '19', X'7469746c65', '', 'Design login form', '2019-05-02 19:58:06', '2019-05-02 19:58:06', NULL, '1'),
('315', 'LT', '86', '19', X'737461747573', '', 'open', '2019-05-02 19:58:06', '2019-05-02 19:58:06', NULL, '1'),
('316', 'LT', '88', '19', X'6c6f636174696f6e', '0', '6', '2019-05-02 19:58:08', '2019-05-02 19:58:08', NULL, '1'),
('317', 'LT', '88', '19', X'737072696e74', '', '19', '2019-05-02 19:58:08', '2019-05-02 19:58:08', NULL, NULL),
('318', 'LT', '88', '19', X'776569676874', '', '0', '2019-05-02 19:58:08', '2019-05-02 19:58:08', NULL, '1'),
('319', 'LT', '88', '19', X'7469746c65', '', 'Implement user accounts API', '2019-05-02 19:58:08', '2019-05-02 19:58:08', NULL, '1'),
('320', 'LT', '88', '19', X'737461747573', '', 'open', '2019-05-02 19:58:08', '2019-05-02 19:58:08', NULL, '1'),
('321', 'LT', '87', '19', X'7469746c65', 'Implement accounts page', 'Implement authentication API', '2019-05-02 19:58:08', '2019-05-02 19:58:08', NULL, NULL),
('322', 'LT', '87', '19', X'6c6f636174696f6e', '0', '6', '2019-05-02 19:58:08', '2019-05-02 19:58:08', NULL, '1'),
('323', 'LT', '87', '19', X'737072696e74', '', '19', '2019-05-02 19:58:08', '2019-05-02 19:58:08', NULL, NULL),
('324', 'LT', '87', '19', X'776569676874', '', '0', '2019-05-02 19:58:08', '2019-05-02 19:58:08', NULL, '1'),
('325', 'LT', '87', '19', X'7469746c65', '', 'Implement authentication API', '2019-05-02 19:58:08', '2019-05-02 19:58:08', NULL, '1'),
('326', 'LT', '87', '19', X'737461747573', '', 'open', '2019-05-02 19:58:08', '2019-05-02 19:58:08', NULL, '1'),
('327', 'LT', '90', '19', X'6c6f636174696f6e', '0', '6', '2019-05-02 19:58:09', '2019-05-02 19:58:09', NULL, '1'),
('328', 'LT', '90', '19', X'737072696e74', '', '19', '2019-05-02 19:58:09', '2019-05-02 19:58:09', NULL, NULL),
('329', 'LT', '90', '19', X'776569676874', '', '0', '2019-05-02 19:58:09', '2019-05-02 19:58:09', NULL, '1'),
('330', 'LT', '90', '19', X'7469746c65', '', 'Implement accounts page', '2019-05-02 19:58:09', '2019-05-02 19:58:09', NULL, '1'),
('331', 'LT', '90', '19', X'737461747573', '', 'open', '2019-05-02 19:58:09', '2019-05-02 19:58:09', NULL, '1'),
('332', 'LT', '86', '19', X'7469746c65', '', 'Design login form', '2019-05-02 19:58:09', '2019-05-02 19:58:09', NULL, NULL),
('333', 'LT', '86', '19', X'737461747573', '', 'open', '2019-05-02 19:58:09', '2019-05-02 19:58:09', NULL, NULL),
('334', 'LT', '86', '19', X'6c6f636174696f6e', '0', '6', '2019-05-02 19:58:09', '2019-05-02 19:58:09', NULL, '1'),
('335', 'LT', '86', '19', X'737072696e74', '', '19', '2019-05-02 19:58:09', '2019-05-02 19:58:09', NULL, NULL),
('336', 'LT', '86', '19', X'776569676874', '', '0', '2019-05-02 19:58:09', '2019-05-02 19:58:09', NULL, '1'),
('337', 'LT', '86', '19', X'7469746c65', '', 'Design login form', '2019-05-02 19:58:09', '2019-05-02 19:58:09', NULL, '1'),
('338', 'LT', '86', '19', X'737461747573', '', 'open', '2019-05-02 19:58:09', '2019-05-02 19:58:09', NULL, '1'),
('339', 'LT', '85', '19', X'737461747573', 'open', 'in-progress', '2019-05-02 19:58:15', '2019-05-02 19:58:15', NULL, NULL),
('340', 'LT', '85', '19', X'6c6f636174696f6e', '6', '11', '2019-05-02 19:58:15', '2019-05-02 19:58:15', NULL, '1'),
('341', 'LT', '85', '19', X'6c6f636174696f6e', '11', '12', '2019-05-02 19:58:17', '2019-05-02 19:58:17', NULL, '1'),
('342', 'LT', '88', '19', X'737461747573', 'open', 'in-progress', '2019-05-02 19:58:19', '2019-05-02 19:58:19', NULL, NULL),
('343', 'LT', '88', '19', X'6c6f636174696f6e', '6', '11', '2019-05-02 19:58:19', '2019-05-02 19:58:19', NULL, '1'),
('344', 'LT', '89', '19', X'737461747573', 'open', 'in-progress', '2019-05-02 19:58:21', '2019-05-02 19:58:21', NULL, NULL),
('345', 'LT', '89', '19', X'6c6f636174696f6e', '6', '11', '2019-05-02 19:58:21', '2019-05-02 19:58:21', NULL, '1'),
('346', 'LT', '89', '19', X'737461747573', 'in-progress', 'closed', '2019-05-02 19:58:22', '2019-05-02 19:58:22', NULL, NULL),
('347', 'LT', '89', '19', X'6c6f636174696f6e', '11', '13', '2019-05-02 19:58:22', '2019-05-02 19:58:22', NULL, '1'),
('348', 'LT', '90', '19', X'737461747573', 'open', 'in-progress', '2019-05-02 19:58:25', '2019-05-02 19:58:25', NULL, NULL),
('349', 'LT', '90', '19', X'6c6f636174696f6e', '6', '11', '2019-05-02 19:58:25', '2019-05-02 19:58:25', NULL, '1'),
('350', 'LT', '90', '19', X'6c6f636174696f6e', '11', '12', '2019-05-02 19:58:27', '2019-05-02 19:58:27', NULL, '1'),
('351', 'LT', '90', '19', X'6c6f636174696f6e', '12', '14', '2019-05-02 19:58:28', '2019-05-02 19:58:28', NULL, '1'),
('352', 'LT', '87', '19', X'737461747573', 'open', 'in-progress', '2019-05-02 19:58:34', '2019-05-02 19:58:34', NULL, NULL),
('353', 'LT', '87', '19', X'6c6f636174696f6e', '6', '11', '2019-05-02 19:58:34', '2019-05-02 19:58:34', NULL, '1'),
('354', 'LT', '87', '19', X'6c6f636174696f6e', '11', '12', '2019-05-02 19:58:37', '2019-05-02 19:58:37', NULL, '1'),
('355', 'LT', '86', '19', X'737072696e74', '19', '', '2019-05-02 19:59:37', '2019-05-02 19:59:37', NULL, NULL),
('356', 'LT', '90', '19', X'737072696e74', '19', '', '2019-05-02 19:59:38', '2019-05-02 19:59:38', NULL, NULL),
('357', 'LT', '86', NULL, X'7469746c65', '', 'Design login form', '2019-05-02 19:59:38', '2019-05-02 19:59:38', NULL, NULL),
('358', 'LT', '86', NULL, X'737461747573', '', 'open', '2019-05-02 19:59:38', '2019-05-02 19:59:38', NULL, NULL),
('359', 'LT', '86', NULL, X'6c6f636174696f6e', '0', '6', '2019-05-02 19:59:38', '2019-05-02 19:59:38', NULL, '1'),
('360', 'LT', '89', '19', X'737072696e74', '19', '', '2019-05-02 19:59:39', '2019-05-02 19:59:39', NULL, NULL),
('361', 'LT', '90', NULL, X'7469746c65', '', 'Implement accounts page', '2019-05-02 19:59:39', '2019-05-02 19:59:39', NULL, NULL),
('362', 'LT', '90', NULL, X'737461747573', '', 'in-progress', '2019-05-02 19:59:39', '2019-05-02 19:59:39', NULL, NULL),
('363', 'LT', '90', NULL, X'6c6f636174696f6e', '0', '14', '2019-05-02 19:59:39', '2019-05-02 19:59:39', NULL, '1'),
('364', 'LT', '86', '19', X'737072696e74', '', '19', '2019-05-02 20:05:48', '2019-05-02 20:05:48', NULL, NULL),
('365', 'LT', '86', '19', X'776569676874', '', '0', '2019-05-02 20:05:48', '2019-05-02 20:05:48', NULL, '1'),
('366', 'LT', '86', '19', X'7469746c65', '', 'Design login form', '2019-05-02 20:05:48', '2019-05-02 20:05:48', NULL, '1'),
('367', 'LT', '86', '19', X'737461747573', '', 'open', '2019-05-02 20:05:48', '2019-05-02 20:05:48', NULL, '1'),
('368', 'LT', '88', '19', X'7469746c65', '', 'Implement user accounts API', '2019-05-02 20:05:48', '2019-05-02 20:05:48', NULL, NULL),
('369', 'LT', '88', '19', X'737461747573', '', 'in-progress', '2019-05-02 20:05:48', '2019-05-02 20:05:48', NULL, NULL),
('370', 'LT', '88', '19', X'6c6f636174696f6e', '0', '11', '2019-05-02 20:05:48', '2019-05-02 20:05:48', NULL, '1'),
('371', 'LT', '88', '19', X'737072696e74', '', '19', '2019-05-02 20:05:48', '2019-05-02 20:05:48', NULL, NULL),
('372', 'LT', '88', '19', X'776569676874', '', '0', '2019-05-02 20:05:48', '2019-05-02 20:05:48', NULL, '1'),
('373', 'LT', '88', '19', X'7469746c65', '', 'Implement user accounts API', '2019-05-02 20:05:48', '2019-05-02 20:05:48', NULL, '1'),
('374', 'LT', '88', '19', X'737461747573', '', 'in-progress', '2019-05-02 20:05:48', '2019-05-02 20:05:48', NULL, '1'),
('375', 'LT', '87', '19', X'737072696e74', '19', '', '2019-05-02 20:05:51', '2019-05-02 20:05:51', NULL, NULL),
('376', 'LT', '89', NULL, X'7469746c65', '', 'Implement login form', '2019-05-02 20:05:51', '2019-05-02 20:05:51', NULL, NULL),
('377', 'LT', '89', NULL, X'737461747573', '', 'closed', '2019-05-02 20:05:51', '2019-05-02 20:05:51', NULL, NULL),
('378', 'LT', '89', NULL, X'6c6f636174696f6e', '0', '13', '2019-05-02 20:05:51', '2019-05-02 20:05:51', NULL, '1'),
('379', 'LT', '88', '19', X'737072696e74', '19', '', '2019-05-02 20:05:52', '2019-05-02 20:05:52', NULL, NULL),
('380', 'LT', '87', NULL, X'7469746c65', '', 'Implement authentication API', '2019-05-02 20:05:52', '2019-05-02 20:05:52', NULL, NULL),
('381', 'LT', '87', NULL, X'737461747573', '', 'in-progress', '2019-05-02 20:05:52', '2019-05-02 20:05:52', NULL, NULL),
('382', 'LT', '87', NULL, X'6c6f636174696f6e', '0', '12', '2019-05-02 20:05:52', '2019-05-02 20:05:52', NULL, '1');

INSERT INTO `tickets` (`id`, `project_code`, `title`, `body`, `location_type`, `previous_ticket`, `workflow_id`, `sprint_id`, `created_at`, `updated_at`, `deleted_at`, `creator_user_id`, `assignee_user_id`, `workflow_position`, `weight`, `status`, `category`) VALUES ('85', 'LT', 'Design user interface', '<p>Design the user interface</p>', X'737072696e74', NULL, '12', '19', '0000-00-00 00:00:00', '2019-05-02 20:05:55', NULL, '1', '0', '0', '0', X'696e2d70726f6772657373', 'UI'),
('86', 'LT', 'Design login form', '<p>Design login form</p>', X'737072696e74', '85', '6', '19', '0000-00-00 00:00:00', '2019-05-02 20:05:55', NULL, '1', '0', '1', '0', X'6f70656e', 'UI'),
('87', 'LT', 'Implement authentication API', '<p>Design login form</p>', X'6261636b6c6f67', '88', '12', NULL, '0000-00-00 00:00:00', '2019-05-02 20:05:52', NULL, '1', '0', '1', '0', X'696e2d70726f6772657373', 'API'),
('88', 'LT', 'Implement user accounts API', '<p>Design login form</p>', X'6261636b6c6f67', NULL, '11', NULL, '0000-00-00 00:00:00', '2019-05-02 20:05:52', NULL, '1', '0', '0', '0', X'696e2d70726f6772657373', 'API'),
('89', 'LT', 'Implement login form', '<p>Design login form</p>', X'6261636b6c6f67', '87', '13', NULL, '0000-00-00 00:00:00', '2019-05-02 20:05:51', NULL, '1', '0', '0', '0', X'636c6f736564', 'Frontend'),
('90', 'LT', 'Implement accounts page', '<p>Design login form</p>', X'6261636b6c6f67', '89', '14', NULL, '0000-00-00 00:00:00', '2019-05-02 19:59:39', NULL, '1', '0', '0', '0', X'696e2d70726f6772657373', 'Frontend'),
('91', 'LT', 'Implement forgot password', '<p>Design login form</p>', X'70656e64696e67', NULL, '0', NULL, '2019-05-02 19:55:03', '2019-05-02 19:55:03', NULL, '1', '0', '0', '0', X'6f70656e', 'Frontend'),
('92', 'LT', 'Implement forgot password API', '<p>Design login form</p>', X'70656e64696e67', NULL, '0', NULL, '2019-05-02 19:55:11', '2019-05-02 19:55:11', NULL, '1', '0', '0', '0', X'6f70656e', 'API');

INSERT INTO `users` (`id`, `created_at`, `updated_at`, `deleted_at`, `username`, `email`, `password`, `first_name`, `last_name`, `reset_token`, `active`, `disabled`, `role`) VALUES ('1', '2018-11-20 13:51:37', '2019-05-02 19:53:09', NULL, 'admin', 'ldt4@student.le.ac.uk', '$2a$11$5IY/tIFoSQ58ZzguWdArBeHy4ynRHCXAG8/SfG4Ylyc1SlFhgrIO6', 'Luke', 'Admin', '', '1', '0', 'admin'),
('2', '2018-11-20 13:51:37', '2018-11-20 13:51:37', NULL, 'user', 'luke@luket.io', '$2a$11$dnvKMSJo87YuPbjiu3m/ueXKNTqxbiqeWM4DCBd5Xbq92nyNjKVF6', 'Luke', 'User', NULL, '1', '0', 'user'),
('6', '2018-11-07 19:12:44', '2019-05-02 01:05:42', NULL, 'Luke', 'luke@thompsonuk.me', '$2a$11$dnvKMSJo87YuPbjiu3m/ueXKNTqxbiqeWM4DCBd5Xbq92nyNjKVF6', 'Luke', 'Thompson', '', '1', '0', 'user');

INSERT INTO `workflow_deps` (`workflow_rule_id`, `destination_workflow`) VALUES ('1', '2'),
('2', '1'),
('2', '4'),
('4', '1'),
('4', '2'),
('4', '3'),
('4', '5'),
('5', '1'),
('5', '2'),
('6', '11'),
('6', '13'),
('8', '9'),
('11', '6'),
('11', '12'),
('11', '13'),
('12', '11'),
('12', '13'),
('12', '14'),
('14', '6'),
('14', '11'),
('14', '12');

INSERT INTO `workflow_rules` (`id`, `created_at`, `updated_at`, `deleted_at`, `name`, `max_items`, `order`, `status`) VALUES ('6', '2019-04-29 00:00:20', '2019-04-30 19:44:07', NULL, 'New', '0', '0', X'6f70656e'),
('7', '2019-04-29 00:00:26', '2019-04-29 00:00:30', '2019-04-29 00:00:54', 'New Rules', '0', '0', X'6f70656e'),
('8', '2019-04-29 00:08:04', '2019-04-29 03:04:07', '2019-04-29 03:06:12', 'test rule', '0', '1', X'6f70656e'),
('9', '2019-04-29 00:09:32', '2019-04-29 03:04:07', '2019-04-29 03:06:10', 'New Rule', '0', '1', X'696e2d70726f6772657373'),
('10', '2019-04-29 03:05:55', '2019-04-29 03:05:55', '2019-04-29 03:06:07', 'New Rule', '0', '2', X'696e2d70726f6772657373'),
('11', '2019-04-29 03:06:44', '2019-05-02 19:58:41', NULL, 'In Progress', '0', '2', X'696e2d70726f6772657373'),
('12', '2019-04-29 03:06:50', '2019-05-02 19:58:41', NULL, 'QA', '2', '3', X'696e2d70726f6772657373'),
('13', '2019-04-29 03:06:55', '2019-05-02 19:58:41', NULL, 'Completed', '0', '4', X'636c6f736564'),
('14', '2019-04-29 03:06:55', '2019-05-02 19:58:41', NULL, 'QA Fail', '3', '1', X'696e2d70726f6772657373');




/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
