import nodemailer from 'nodemailer';
import server from '../../../server';

const handler = (req, res) => {
	const { name, email, message } = req.body;
	let mailerConfig = {
		host: 'smtpout.secureserver.net',
		secure: true,
		secureConnection: false, // TLS requires secureConnection to be false
		tls: {
			ciphers: 'SSLv3',
		},
		requireTLS: true,
		port: 465,
		auth: {
			user: process.env.EMAIL_USERNAME,
			pass: process.env.EMAIL_PASSWORD,
		},
	};
	var transporter = nodemailer.createTransport(mailerConfig);
	const info = {
		from: 'contact@crimsonathletics.shop',
		to: 'devan@crimsonathletics.shop',
		subject: 'NEW CONTACT FORM RECEIVED',
		html: `
        <h1>New Message:</h1>
        <br />
        <h3>Name: ${name}</h3>
        <br />
        <h3>Email: ${email}</h3>
        <br />
        <h3>Message: ${message}</h3>
        `,
	};
	transporter.sendMail(info, err => {
		if (err) {
			console.log(err);
			res.status(500).send('An error has occurred');
			return res.end();
		}
		res.status(201).redirect(`${server}/contact?submitted=true`);
		res.end();
	});
};

export default handler;
