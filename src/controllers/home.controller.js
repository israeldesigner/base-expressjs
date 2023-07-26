/* eslint-disable no-undef */
const HomeModel = require('../models/HomeModel')
const Excel = require('../models/ConvertModel')
const nodemailer = require('nodemailer');

exports.index = async (req, res) => {
  res.render('index')
  return
}

exports.sendfile = async ( req, res )  => {
 
  const { nome, email, mensagem } = req.body;
    console.log(req.body._csrf)
    // Verificar o token CSRF antes de processar o formulário
    if (!req.body._csrf) {
      return res.status(403).send('Token CSRF inválido.');
    }
  
    // Configuração do Nodemailer
    const transporter = nodemailer.createTransport({
      host: 'smtps.fortaleza.ce.gov.br',
      port: 587,
      secure: false, //SSL/TLS
      logger: true,
      auth: {
          user: 'freewifi@sis.fortaleza.ce.gov.br',
          pass: '#5H^sJsU:c'
      }
    });

    // Configuração do e-mail a ser enviado
    const mailOptions = {
      from: `Wifor - <freewifi@sis.fortaleza.ce.gov.br>`,
      to: 'wifor@sis.fortaleza.ce.gov.br',
      subject: `${nome} - ${email} te enviou uma mensagem!`,
      text: mensagem,
      html: `
          <h2 style="text-align:center;">${nome} - ${email}</h2>
          <p style="background:#f6f6f6; padding:20px; text-align:center">
          O contato - ${email}
          CITINOVA
          <br />
          <br />
          ${mensagem}
          </p>
          <br />
          <br />
          <br />
          <br />
          <p><em>Não retorne esse Email, alguém do suporte entrará em contato em breve</em></p>
      `
    };

    // Enviando o e-mail
   await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        awaitres.send('Ocorreu um erro ao enviar o e-mail.');
      } else {
        console.log('E-mail enviado: ' + info.response);
        res.send('E-mail enviado com sucesso!');
      }
    });
}