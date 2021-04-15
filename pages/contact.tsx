import styles from '../styles/contact.module.css';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import server from '../server';

const contact = (): JSX.Element => {
	const contactFormJsx = (
		<>
			<h1 className='heading-title'>Contact</h1>
			<form
				method='POST'
				action={`${server}/api/email/contactform`}
				name='EmailForm'
				encType='multipart/formdata'
				className={styles.form}
			>
				<input name='name' type='text' placeholder='Name' required />
				<input name='email' type='email' placeholder='Email' required />
				<input name='subject' type='text' placeholder='Subject (optional)' />
				<textarea name='message' placeholder='Message' required />
				<button type='submit'>Submit</button>
				<p>Your information will solely be used to reply accordingly.</p>
			</form>
		</>
	);
	const { submitted } = useRouter().query;
	const [pageData, setPageData] = useState(contactFormJsx);
	useEffect(() => {
		if (submitted)
			setPageData(
				<div className={styles['thank-you']}>
					<h1>THANK YOU</h1>
					<p>Your contact submission has been received.</p>
					<p>Expect a reply within a few days.</p>
				</div>
			);
	}, [submitted]);

	return pageData;
};

export default contact;
