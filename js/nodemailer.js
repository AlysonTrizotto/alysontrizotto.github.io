const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

const {host, port, user, pass} = require('../json/mail.json');

var transport = nodemailer.createTransport({
    host,
    port,
    auth: {user, pass}
});
transport.use('compile', hbs({
    viewEngine: 'Handlebars',
    viewPath: path.resolve('../resourse/mail'),
    extName: '.html',
}))

module.exports = transport;