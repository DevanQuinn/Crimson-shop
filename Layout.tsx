import Nav from './components/Nav';
import Footer from './components/Footer';
import Head from 'next/head';
import styles from './styles/Layout.module.css';

const Layout = ({ children }): JSX.Element => {
	return (
		<>
			<Head>
				<title>Crimson Athletics</title>
			</Head>
			<Nav styles={styles} />
			{children}
			<Footer styles={styles} />
		</>
	);
};

export default Layout;
