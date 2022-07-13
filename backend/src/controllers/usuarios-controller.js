const UsuariosActions = require("./../actions/usuarios-action")

module.exports = class UsuariosController extends UsuariosActions {
    async usuariosController(){
        return await this.usuariosAction()
    }
}