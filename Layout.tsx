import Nav from './components/Nav';
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
		</>
	);
};

export default Layout;
