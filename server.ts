const isProduction: boolean = process.env.NODE_ENV === 'production';

const server: string = isProduction
	? 'http://localhost:3000'
	: 'https://crimson-shop.vercel.app';
export default server;
