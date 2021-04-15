import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang='en'>
				<Head>
					<link
						rel='stylesheet'
						href='https://cdn.snipcart.com/themes/v3.1.0/default/snipcart.css'
					/>
				</Head>
				<body>
					<script
						async
						src='https://cdn.snipcart.com/themes/v3.1.0/default/snipcart.js'
					></script>
					<div
						id='snipcart'
						data-config-modal-style='side'
						data-api-key='YTZlZTY5NTEtZjc2ZC00MzAzLWFiNjQtN2QyYjI3Y2FlM2RkNjM3NTM4Nzk0OTA2NDYyODMy'
						hidden
					></div>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
