import React from 'react';
import styles from '../reviewer.module.css';
import Checkbox from '../../../shared-components/checkbox';

const Header = () => {
	const switchTheme = (val) => {
		if (val) {
			document.querySelector('body').setAttribute('data-theme', 'dark');
		} else {
			document.querySelector('body').setAttribute('data-theme', 'light');
		}
	};

	return (
		<header>
			<div className={styles['main-header']}>
				<div>Review Screen</div>
				<Checkbox
					onClick={(e) => switchTheme(e.target.checked)}
					label='Light Mode'
				></Checkbox>
			</div>
		</header>
	);
};

export default Header;
