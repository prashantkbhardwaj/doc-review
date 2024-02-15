import React from 'react';
import styles from './checkbox.module.css';

const Checkbox = (props) => {
	const { label } = props;
	return (
		<label>
			<input className={styles['checkbox']} type='checkbox' {...props} />
			{label}
		</label>
	);
};

export default Checkbox;
