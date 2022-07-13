const mariadb = require("mariadb")
const fs = require("fs")

module.exports = class MariadbConnection {
    async connection(){
        const pool = mariadb.createPool({
            host: "localhost", 
            port: 3306,
            user: "root", 
            password: "Password123!"
        });
        return await pool.getConnection();
    }

    async migrations(){
        const db = await this.connection()
        fs.readdir("./src/utils/database/migrations", (error, files) => {
            files.forEach(async (nameFile) => {
                const texto = String(fs.readFileSync(`./src/utils/database/migrations/${nameFile}`))
                if(texto.trim()) await db.query(texto)
            })
        })
    } 
    
    async create_migration(){
        const date = (new Date()).getTime()
        fs.writeFile(`./src/utils/database/migrations/${date}.sql`, '', function (err) {
            if (err) throw err;
            console.log('File is created successfully.');
        });
    }
}
