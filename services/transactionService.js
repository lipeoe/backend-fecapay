const fecapayDB = require('../db/db.js')

exports.insertTransaction = async(ra, tipo_transacao, valor, data) =>{
    await fecapayDB.query(
        `INSERT INTO transacoes(ra_aluno, tipo_transacao, valor, data_transacao) VALUES ($1, $2, $3, $4)`, [ra, tipo_transacao, valor, data]
    )
}