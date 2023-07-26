/* eslint-disable no-undef */
const mailer = require("nodemailer");
require("dotenv").config();

module.exports = (email, nome, mensagem, anexo) => {
    const smtpTransport = mailer.createTransport({
        host: 'smtps.fortaleza.ce.gov.br',
        port: 587,
        secure: false, //SSL/TLS
        logger: true,
        auth: {
            user: 'freewifi@sis.fortaleza.ce.gov.br',
            pass: '#5H^sJsU:c'
        }
    })

    const mail = {
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
    }

    if(anexo){
        console.log(anexo);
        mail.attachments = [];
        mail.attachments.push({
            filename: anexo.originalname,
            content: anexo.buffer
        })
    }

    return new Promise((resolve, reject) => {
        smtpTransport.sendMail(mail)
            .then(response => {
                console.log(response.status)
                smtpTransport.close();
                return resolve(response);
            })
            .catch(error => {
                console.log(error)
                smtpTransport.close();
                return reject(error);
            });
    })
}
