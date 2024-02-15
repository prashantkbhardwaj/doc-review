import React from 'react';
import styles from './modal.module.css';

const Modal = (props) => {
	const { isOpen, onClose, children } = props;
	if (!isOpen) return null;

	return (
		<div className={styles['modal-overlay']} onClick={onClose}>
			<div
				className={styles['modal-content']}
				onClick={(e) => e.stopPropagation()}
			>
				<button className={styles['close-button']} onClick={onClose}>
					×
				</button>
				{children}
			</div>
		</div>
	);
};

export default Modal;
