import React from 'react';
import styles from '../reviewer.module.css';

const Zoomer = (props) => {
	const { zoomIn, zoomOut } = props;

	return (
		<>
			{/* <div className={styles['zoom-percentage-box']}>
				{zoomPercentage}&nbsp;%
			</div> */}
			<div className={styles['zoom-controls-wrapper']}>
				<div onClick={zoomIn} className={styles['zoom-btn']}>
					+
				</div>
				<div onClick={zoomOut} className={styles['zoom-btn']}>
					-
				</div>
			</div>
		</>
	);
};

export default Zoomer;
