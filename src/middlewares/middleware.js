/* eslint-disable no-undef */
const crypto = require('crypto');

const allowedOrigins = [
    'http://localhost:5000',
    'https://localhost:5000',
    'http://localhost:5000/send',  
    'https://localhost:5000/send',  
    'http://localhost', 
    'https://localhost', 
    'http://localhost/send', 
    'https://localhost/send', 
    'https://hom-wifor.fortaleza.ce.gov.br', 
    'https://hom-apresentacao.fortaleza.ce.gov.br', 
    'https://hom-wifor.fortaleza.ce.gov.br/send', 
    'https://hom-apresentacao.fortaleza.ce.gov.br/send', 
    'https://wifor.fortaleza.ce.gov.br',
    'https://wifor.fortaleza.ce.gov.br/send'
]
/* eslint-disable no-undef */
exports.middleWareGlobal = ( req, res, next ) => {
    const generateNonce = () => crypto.randomBytes(16).toString('hex')
    const nonce = generateNonce()
    res.setHeader('Access-Control-Allow-Origin', allowedOrigins)
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    // Set to true if you need the website to include cookies in the requests sent
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader(
        'Content-Security-Policy',
        "img-src 'self' data: https://dados.fortaleza.ce.gov.br/ https://b.tile.openstreetmap.org https://a.tile.openstreetmap.org https://c.tile.openstreetmap.org/ https://tile.openstreetmap.org/ https://*.google-analytics.com https://*.googletagmanager.com https://www.google-analytics.com; script-src 'self' https://*.google-analytics.com https://www.google-analytics.com https://ssl.google-analytics.com https://*.googletagmanager.com https://www.googletagmanager.com/gtag/js; style-src 'self' https://fonts.googleapis.com; frame-src 'self' https://digital.fortaleza.ce.gov.br; frame-ancestors 'self'; form-action 'self'; connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com; object-src 'self' openstreetmap.org;"
    )
  
    console.log(nonce)
    res.locals.errors = req.flash('errors');
    res.locals.success= req.flash('success');
    res.locals.user = req.session;
    next()
}

exports.verifyNonce = (req, res, next) => {
    const nonce = req.cookies.nonce
    const clientNonce = req.header('X-Nonce')
  
    if (nonce && clientNonce && nonce === clientNonce) {
      // Nonce válido
      next()
    } else {
      // Nonce inválido
      res.status(403).send('Nonce inválido')
    }
    next()
  }

  exports.checkCsrfError = (err, req, res, next) => {
    // console.log(req)
    // console.log(res)
    if (err && err.code == 'EBADCSRFTOKEN') {
      console.log(err)
      return res.render('404page')
    }
    next()
  }
  
  exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    console.log(` este o middleware ${res.locals.csrfToken}`)
    next()
  }
