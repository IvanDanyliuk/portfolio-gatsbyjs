const bodyParser = require('body-parser');
const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.urlencoded());

const contactAddress = 'ivandaniliuk@gmail.com';

const mailer = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.production.GMAIL_ADDRESS,
        pass: process.env.production.GMAIL_PASSWORD
    },
});

app.post('/contact', (req, res) => {
    mailer.sendMail(
        {
            from: req.body.from,
            to: [contactAddress],
            subject: req.body.subject || '[No Subject]',
            html: req.body.message || '[No Message]',
        },
        (err, info) => {
            if(err) {
                return err.status(500).send(err);
            }
            res.json({success: true});
        }
    )
});

app.listen(8000);

