import { FC } from 'react';
import { useEffect, useState } from 'react';

const useVisible: FC<any> = element => {
	const [isVisible, setIsVisible] = useState(null);

	useEffect(() => {
		const observer = new window.IntersectionObserver(([entry]) =>
			setIsVisible(entry.isIntersecting)
		);
		observer.observe(element.current || element);
		return () => observer.disconnect();
	});

	return isVisible;
};

export default useVisible;
