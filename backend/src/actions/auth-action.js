const MariadbConnection = require("./../utils/database/mariadb-connection")

module.exports = class AuthActions extends MariadbConnection {
    async authAction(){
       return "ok";
    }
}