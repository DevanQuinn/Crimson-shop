const Button = ({ children, onClick = null, buttonStyle = null }) => {
	return (
		<div>
			<button onClick={onClick} style={buttonStyle}>
				<span>{children}</span>
				<div></div>
			</button>
			<style jsx>{`
				button {
					outline: 1px solid black;
					border: none;
					color: black;
					transition: all 0.2s ease;
					background: none;
					padding: 0;
					width: 200px;
					height: 50px;
					margin: 10px;
					text-align: center;
					position: relative;
				}
				div {
					z-index: -1;
					width: 0;
					height: 100%;
					background-color: var(--background-color-old);
					transition: all 0.4s ease;
				}
				button:hover > div {
					width: 100%;
				}

				button:hover {
					color: white;
				}

				span {
					position: absolute;
					font-size: 24px;
					font-family: var(--squada-font);
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
				}
			`}</style>
		</div>
	);
};

export default Button;
