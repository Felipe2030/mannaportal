const AuthActions = require("./../actions/auth-action")

module.exports = class AuthController extends AuthActions {
    authController(){
        return this.authAction();
    }
}