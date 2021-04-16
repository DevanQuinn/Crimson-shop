const isProduction: boolean = process.env.NODE_ENV === 'production';

const server: string = !isProduction
	? 'http://localhost:3000'
	: 'https://crimson-shop.herokuapp.com/';
export default server;
export { isProduction };
