const PostgresConnection = require("./../utils/database/postgres-connection")

module.exports = class AuthActions extends PostgresConnection {
    async authAction(){
       return "ok";
    }
}