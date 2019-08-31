const mongodb = require('../config/mongodb')

function getTodosClientes(callback) {
  mongodb.conectar((err, conn) => {
    conn.collection('cliente').find().toArray(callback)
  })
}

function getClientesPorUF(uf, callback) {
  mongodb.conectar((err, conn) => {
    conn.collection('cliente').find({ estado: uf }).toArray((err, clientes) => {
      if (err)
        return callback(err, null)
      callback(err, clientes)
    })
  })
}

module.exports = {getTodosClientes, getClientesPorUF}