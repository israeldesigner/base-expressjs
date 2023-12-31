/* eslint-disable no-undef */
require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const mongoose = require('mongoose')
mongoose
  .connect(process.env.CONNECTIONSTRING, {
    dbName: 'db_wifi',
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('conectei a base de dados')
    app.emit('pronto')
  })
  .catch((e) => console.log(e))

const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('connect-flash')

const routes = require('./route.js')
const path = require('path')
const multer = require('multer')
const csrf = require('csurf')
const {
  middleWareGlobal,
  verifyNonce,
  checkCsrfError,
  csrfMiddleware,
} = require('./src/middlewares/middleware.js')

// app.use(helmet());
// Configuração de armazenamento
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/')
//     },
//     filename: function (req, file, cb) {
//         // Extração da extensão do arquivo original:
//         const extensaoArquivo = file.originalname.split('.')[1];

//         // Cria um código randômico que será o nome do arquivo
//         const novoNomeArquivo = require('crypto')
//             .randomBytes(64)
//             .toString('hex');

//         // Indica o novo nome do arquivo:
//         cb(null, `${novoNomeArquivo}.${extensaoArquivo}`)
//     }
// });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})

app.use(multer({ storage }).single('foto'))

app.use(express.json())
app.use(express.urlencoded({ extend: true }))
app.use(express.static(path.resolve(__dirname, 'dist')))
app.use('/converter', express.static(__dirname + '/dist'))

const sessionOptions = session({
  secret: 'fdslsdlsdjkfsjkdlf90f00djajbflfkdllkjfdjlkdfs',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING, dbName: 'db_wifi' }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
})

app.use(sessionOptions)
app.use(flash())

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(csrf())
app.use(middleWareGlobal)
app.use(verifyNonce)
// app.use(redirectErrorMiddleware)
// app.use(redirectErrorGlobal)
app.use(checkCsrfError)
app.use(csrfMiddleware)
app.use(routes)

app.on('pronto', () => {
  app.listen(`${PORT}`, () => {
    console.log(`acessar ${PORT}`)
    console.log('servidor está executando')
  })
})
