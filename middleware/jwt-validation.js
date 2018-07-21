var jwt = require('../service/jwt.js')

module.exports = function (req, res, next) {
  try{
    var verify = jwt.verify(req.headers.token)
    next()
  }
  catch(e){
    res.json(e)
  }
}
