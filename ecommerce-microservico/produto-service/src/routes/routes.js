module.exports = (app, contoller) => {


  app.get('/produtos', (req, res, next) => {
    contoller.getTodosProdutos((err, produtos) => {
      if (err)
        return next(err)
      res.json(produtos)
    })
  });

  app.get('/produtos/estoque', (req, res, next) => {
    contoller.getProdutosComEstoque(req.params.uf, (err, produtos) => {
      if (err)
        return next(err)
      res.json(produtos)
    })
  });

}