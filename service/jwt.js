const jwt = require('jsonwebtoken')


const sign = function (payload) {
  return jwt.sign(payload, 'fuck',{expiresIn: 5})
}
module.exports.sign = sign

const verify = function (token) {
  return jwt.verify(token, 'fuck',{ignoreExpiration: false})
}
module.exports.verify = verify
