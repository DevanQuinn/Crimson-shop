import nodemailer from 'nodemailer';
import server from '../../../server';

const handler = (req, res) => {
	const { name, email, subject, message } = req.body;
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
		subject: subject ? `Contact: ${subject}` : 'New Contact Message',
		html: `
        <h2>New Message from ${email}:</h2>
        <h3>Name: ${name}</h3>
        <h3>Email: ${email}</h3>
        <h3>Subject: ${subject}</h3>
        <h3>Message:</h3> <p>${message}</p>

        <h4><a href="mailto:${email}?subject=Re:${
			subject || 'Crimson Athletics Contact'
		}">Reply to email</a></h4>
        `,
	};
	transporter.sendMail(info, err => {
		if (err) {
			console.log(err);
			res.status(500).send('An error has occurred');
			return res.end();
		}
		res.status(201).redirect(`${server}/contact?submitted=true`);
		return res.end();
	});
};

export default handler;
