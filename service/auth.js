const jwt = require('jsonwebtoken')


const sign = function (payload) {
  return jwt.sign(payload, 'fuck')
}
module.exports.sign = sign

const verify = function (token) {
  jwt.verify(token, 'fuck', function (err, decoded) {
    if(!err){
      return decoded.account
    }
    else {
      return err
    }
  })
}
module.exports.verify = verify
