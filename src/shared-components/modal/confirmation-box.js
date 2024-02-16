import React from 'react';
import styles from './modal.module.css';
import Button from '../button';

const ConfirmationBox = (props) => {
	const {
		message,
		primaryBtnLabel,
		primaryBtnAction,
		secondaryBtnLabel,
		secondaryBtnAction,
	} = props;

	return (
		<div className={styles['modal-body-wrapper']}>
			<div className={styles['modal-body']}>{message}</div>
			<div className={styles['modal-footer']}>
				<Button onClick={primaryBtnAction}>{primaryBtnLabel}</Button>
				<Button onClick={secondaryBtnAction}>
					{secondaryBtnLabel}
				</Button>
			</div>
		</div>
	);
};

export default ConfirmationBox;
