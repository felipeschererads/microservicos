module.exports = (app, contoller) => {


  app.get('/clientes', (req, res, next) => {
    contoller.getTodosClientes((err, clientes) => {
      if (err)
        return next(err)
      res.json(clientes)
    })
  });

  app.get('/clientes/:uf', (req, res, next) => {
    contoller.getClientesPorUf(req.params.uf, (err, clientes) => {
      if (err)
        return next(err)
      res.json(clientes)
    })
  });

}