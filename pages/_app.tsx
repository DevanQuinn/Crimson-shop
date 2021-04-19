import '../styles/globals.css';
import Layout from '../Layout';
import { FC } from 'react';

const MyApp: FC<{ Component; pageProps }> = ({ Component, pageProps }) => {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
};

export default MyApp;
