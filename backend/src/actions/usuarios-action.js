const MysqlConnection = require("./../utils/database/mysql-connection")

module.exports = class UsuariosActions extends MysqlConnection {
    async usuariosAction(){
        const db = await this.connection()
        const [rows] = await db.execute("SELECT * FROM usuarios;")
        return rows
    }
}