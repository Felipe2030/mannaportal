CREATE TABLE IF NOT EXISTS db_teste.usuarios (
	id INT PRIMARY KEY AUTO_INCREMENT,
	perfil_id INT NOT NULL,
	nm_imagem VARCHAR(100) NOT NULL,
	statususuario_id INT NOT NULL DEFAULT 1,
	nm_email VARCHAR(100) NOT NULL UNIQUE,
	nm_senha VARCHAR(100) NOT NULL,
	dt_created TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
	dt_update TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
	nu_acesso INT NOT NULL,
	bn_active BOOLEAN DEFAULT TRUE
);
