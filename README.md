# NLW VAloriza

## Regras

- Cadastro de usuario

  [ x ] Nao eh permitido cadastrar mais de um usuario com o mesmo e-mail
  
  [ x ] No eh permitido cadastrar usuario sem e-mail


- Cadastro de TAG

  [ x ] Nao eh permitido cadastrar TAG sem nome

  [ x ] Nao eh permitido cadastrar mais de uma TAG com o mesmo nome
  
  
  [ x ] Nao eh permitido o cadastro por usuarios que nao sao administradores
  

- Cadastro de elogios

  [ x ] Nao eh permitido um usuario cadastrar um elogio para si

  [ x ] Nao eh permitido cadastrar elogios para usuarios invalidos

  [ x ] O usuario precisa estar autenticado na aplicacao

- Cadastro de produtoss

  Tabela de produts: id, name, price, bar_code
  
  rotas:
  criar novo produto
  atualizar produto
  listar produtos (do usuario autenticado)

  mostrar usuario q inseriu o produto

  [ ] codigo gerado automaticamente
  [ ] ordem crescente
  [ ] codigo unico