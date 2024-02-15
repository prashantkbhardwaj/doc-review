import React from 'react';
import styles from '../reviewer.module.css';
import Button from '../../../shared-components/button';

const SidebarFooter = (props) => {
	const { selectAll, isAllSelected, isConfirmDisabled, openConfimation } =
		props;

	return (
		<div className={styles['sidebar-footer-wrapper']}>
			<Button onClick={selectAll}>
				{isAllSelected ? 'De-' : ''}Select all
			</Button>
			<Button onClick={openConfimation} disabled={isConfirmDisabled}>
				Confirm
			</Button>
		</div>
	);
};

export default SidebarFooter;
