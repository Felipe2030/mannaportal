const AuthActions = require("./../actions/auth-action")

module.exports = class AuthController extends AuthActions {
    async authController(){
        return await this.authAction();
    }
}