-- ==============================================================================
-- Satyarthi Solar Solution - Hardened Database Schema
-- Optimized for Safalhost cPanel Single MySQL Database
-- ==============================================================================

-- 1. Leads Table (with indexes for fast, secure lookup)
CREATE TABLE IF NOT EXISTS `leads` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `lead_id` VARCHAR(64) NOT NULL UNIQUE,
  `name` VARCHAR(150) NOT NULL,
  `phone` VARCHAR(30) NOT NULL,
  `email` VARCHAR(150) DEFAULT NULL,
  `location` VARCHAR(100) DEFAULT 'Gorakhpur',
  `service` VARCHAR(150) DEFAULT 'Residential Rooftop Solar',
  `bill` VARCHAR(50) DEFAULT NULL,
  `roof_area` VARCHAR(50) DEFAULT NULL,
  `message` TEXT DEFAULT NULL,
  `status` ENUM('New', 'Contacted', 'Site Visit', 'Converted', 'Rejected') DEFAULT 'New',
  `notes` TEXT DEFAULT NULL,
  `ip_address` VARCHAR(45) DEFAULT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_phone (`phone`),
  INDEX idx_status (`status`),
  INDEX idx_created (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2. Projects & Installation Showcase Table
CREATE TABLE IF NOT EXISTS `projects` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(200) NOT NULL,
  `location` VARCHAR(100) NOT NULL,
  `capacity` VARCHAR(50) NOT NULL,
  `client_name` VARCHAR(150) DEFAULT NULL,
  `savings` VARCHAR(50) DEFAULT NULL,
  `image_url` VARCHAR(255) DEFAULT NULL,
  `category` ENUM('Residential', 'Commercial', 'Agro & Mill', 'Industrial') DEFAULT 'Residential',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3. Admin Users Table (with BCRYPT hashed passwords)
CREATE TABLE IF NOT EXISTS `admin_users` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `username` VARCHAR(60) NOT NULL UNIQUE,
  `password_hash` VARCHAR(255) NOT NULL,
  `role` VARCHAR(30) DEFAULT 'admin',
  `last_login` TIMESTAMP NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
