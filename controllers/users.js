// const UsersModal = require('../models/users.js')
const UsersModal = require(process.cwd() + '/models/users.js')
const jwt = require(process.cwd() + '/service/jwt')
const {to} = require('await-to-js')

const create = async function (req, res) {
  res.setHeader('Content-Type', 'application/json')
  let err, users;

  [err, users] = await to(UsersModal.create(req.body))

  if (!err){
    res.statusCode = 200;
    let token = jwt.sign({account:req.body.account})
    res.json({token:token})
  }
  else {
    res.statusCode = 400;
    res.json({error:err.errors[0].message})
  }
}
module.exports.create = create

const login = async function (req, res) {
  res.setHeader('Content-Type', 'application/json')
  let err, users;

  [err, users] = await to(UsersModal.findOne({where: {account: req.body.account}}))
  if(!err){
    if(!users){
      res.json({state:'account not exist'})
    }
    else if(users.password === req.body.password){
      let token = jwt.sign({account:req.body.account})
      res.json({token:token})
    }
    else {
      res.json({state:'password not correct'})
    }
  }
  else {
    res.json({state:msg})
  }
}
module.exports.login = login
