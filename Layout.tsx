import Nav from './components/Nav';
import Footer from './components/Footer';
import Head from 'next/head';
import styles from './styles/Layout.module.css';

const Layout = ({ children }): JSX.Element => {
	return (
		<>
			<Head>
				<title>Crimson Athletics</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<meta charSet='UTF-8' />
				<meta
					name='keywords'
					content='Fitness, Clothing, Gym, Workout, Tank Top, Stringer'
				></meta>
				<meta
					name='Description'
					content='High quality fitness clothing you can wear confidently.'
				/>
			</Head>
			<Nav styles={styles} />
			<div className={styles.children}>{children}</div>
			<Footer styles={styles} />
		</>
	);
};

export default Layout;
