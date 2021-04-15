import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavLink = ({ children, href }) => {
	const path = useRouter().pathname;
	return (
		<>
			<Link href={href}>
				<a className={path === href ? 'selected' : null}>{children}</a>
			</Link>
			<style jsx>{`
				.selected {
					color: black;
					text-decoration: underline;
				}
				a {
					color: grey;
				}
				a:hover {
					color: black;
				}

				@media only screen and (max-width: 1024px) {
					a {
						display: none;
					}
				}
			`}</style>
		</>
	);
};

NavLink.propTypes = {};

export default NavLink;
