const mongoose = require('mongoose')
let connection = null;

function conectar(callback) {
  //se a conecção já existir deve ser devolvida ela
  if (connection) 
    return callback(null, connection)
  
  //criar a conexão

  mongoose.connect(process.env.MONGO_CONNECTION, { useNewUrlParser: true }, (err, conn) => {
    //ocorreu erro 
    if (err) {
      console.log(err)
      return callback(err, null)
    } else {
      connection = conn;
      return callback(null, connection)
    }
  })

}

function desconectar(){
  if(!connection){
    return true
  }else{
    connection.close();
    connection = null;
    return true;
  }
}

//exporta somente as funções que são "públicas"
module.exports = {conectar, desconectar};