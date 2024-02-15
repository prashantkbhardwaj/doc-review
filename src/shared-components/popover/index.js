import React, { useState, useRef, useEffect } from 'react';
import styles from './popover.module.css';

const Popover = (props) => {
	const { children, triggerContent } = props;
	const [isVisible, setIsVisible] = useState(false);
	const popoverRef = useRef(null);

	const handleClickOutside = (event) => {
		if (popoverRef.current && !popoverRef.current.contains(event.target)) {
			setIsVisible(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<div className={styles['popover-container']} ref={popoverRef}>
			<div
				onClick={() => setIsVisible(!isVisible)}
				className={styles['trigger']}
			>
				{triggerContent}
			</div>
			{isVisible && (
				<div className={styles['popover-content']}>{children}</div>
			)}
		</div>
	);
};

export default Popover;
