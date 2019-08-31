const mongodb = require('../config/mongodb')

function getTodosProdutos(callback) {
  mongodb.conectar((err, conn) => {
    conn.collection('produtos').find().toArray(callback)
  })
}

function getProdutosComEstoque(callback) {
  mongodb.conectar((err, conn) => {
    conn.collection('produtos').find({ 'estoque': { $gte: 0 } }).toArray((err, produtos) => {
      if (err)
        return callback(err, null)
      callback(err, Produtos)
    })
  })
}

module.exports = { getTodosProdutos, getProdutosComEstoque }