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
// var token = jwt.sign({ foo: 'bar' }, 'shhhhh')
// var token = jwt.sign({ foo: 'bar', iat: Math.floor(Date.now() / 1000) - 30 }, 'shhhhh');

// console.log(token)

// var verifyToken = jwt.verify(token, 'shhhhh')
// console.log(verifyToken)

// var decoded = jwt.decode(token, {complete: true});
// console.log(decoded)
