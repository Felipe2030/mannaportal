CREATE TABLE IF NOT EXISTS perfil (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nm VARCHAR(100) NOT NULL UNIQUE,
	bn_active BOOLEAN DEFAULT TRUE
);