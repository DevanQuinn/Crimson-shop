import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

const NavLink: FC<{ children: JSX.Element; href: string }> = ({
	children,
	href,
}) => {
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

export default NavLink;
