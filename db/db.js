require("dotenv").config();
const { Pool } = require("pg");
const fs = require("fs");

const fecapayDB = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD, 
    port: process.env.DB_PORT || 5432,
    ssl: {
        rejectUnauthorized: false,
        ca: process.env.SSL_CERT ? fs.readFileSync(process.env.SSL_CERT) : undefined
    }
});

fecapayDB.connect()
    .then(() => console.log("Conectado ao Banco de Dados!"))
    .catch(error => console.error("Erro ao conectar:", error));

module.exports = fecapayDB;