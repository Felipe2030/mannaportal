const MariadbConnection = require("./../utils/database/mariadb-connection")

module.exports = class UsuariosActions extends MariadbConnection {
    async usuariosAction(){
        const db = await this.connection()
        const usuarios = await db.query("SELECT * FROM db_teste.usuarios;")
        return usuarios;
    }
}