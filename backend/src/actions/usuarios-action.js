const PostgresConnection = require("./../utils/database/postgres-connection")

module.exports = class UsuariosActions extends PostgresConnection {
    async usuariosAction(){
        const db = await this.connection()
        const usuarios = await db.query("SELECT * FROM usuarios;")
        return usuarios['rows'];
    }
}