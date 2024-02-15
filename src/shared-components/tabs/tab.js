import React from 'react';
import styles from './tabs.module.css';

const Tab = (props) => {
	const { id, activeTab, label, onClick } = props;
	const isActive = id === activeTab;

	const handleClick = () => {
		onClick(id);
	};

	return (
		<li
			className={
				isActive
					? [styles['tab-list-item'], styles['active']].join(' ')
					: styles['tab-list-item']
			}
			onClick={handleClick}
		>
			{label}
		</li>
	);
};

export default Tab;
