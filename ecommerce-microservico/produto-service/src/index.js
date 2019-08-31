//carrega o modulo para as variaveis de ambiente, não é necesário atribuír para uma variável
require('dotenv-safe').config();

const routes = require('./routes/routes')
const server = require('./server')
const controller = require('./controllers/produto')

server.start(routes,controller,(err,app)=>{
  console.log(`Servidor start`)
})