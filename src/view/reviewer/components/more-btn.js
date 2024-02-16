import React from 'react';
import Popover from '../../../shared-components/popover';
import styles from '../reviewer.module.css';
import Button from '../../../shared-components/button';

const MoreBtn = (props) => {
	const { removeField, id } = props;

	return (
		<Popover
			triggerContent={
				<div className={styles['more-btn']}>
					<div className={styles['more-dot']}></div>
					<div className={styles['more-dot']}></div>
					<div className={styles['more-dot']}></div>
				</div>
			}
		>
			<Button onClick={() => removeField(id)} size='small'>
				Remove
			</Button>
		</Popover>
	);
};

export default MoreBtn;
