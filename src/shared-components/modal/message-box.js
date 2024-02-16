import React from 'react';
import styles from './modal.module.css';
import Button from '../button';

const MessageBox = (props) => {
	const { message, btnLabel, btnAction } = props;

	return (
		<div className={styles['modal-body-wrapper']}>
			<div className={styles['modal-body']}>{message}</div>
			<div className={styles['modal-footer']}>
				<Button block='true' onClick={btnAction}>
					{btnLabel}
				</Button>
			</div>
		</div>
	);
};

export default MessageBox;
