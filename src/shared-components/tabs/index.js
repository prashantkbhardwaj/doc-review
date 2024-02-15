import React, { useState } from 'react';
import Tab from './tab';
import styles from './tabs.module.css';

const Tabs = ({ children }) => {
	const [activeTab, setActiveTab] = useState(children[0].props.id);

	const handleClickTab = (tabId) => {
		setActiveTab(tabId);
	};

	return (
		<div>
			<ul className={styles['tab-list']}>
				{children.map((child) => {
					const { id, label } = child.props;

					return (
						<Tab
							key={id}
							id={id}
							label={label}
							activeTab={activeTab}
							onClick={handleClickTab}
						/>
					);
				})}
			</ul>
			<div className={styles['tab-content']}>
				{children.map((child) => {
					if (child.props.id !== activeTab) return undefined;
					return child.props.children;
				})}
			</div>
		</div>
	);
};

export default Tabs;
