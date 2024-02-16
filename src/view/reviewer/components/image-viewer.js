import React from 'react';
import { getRandomItem } from '../../../utility/code-utils';
import styles from '../reviewer.module.css';

const HIGHLIGHT_COLORS = ['red', 'blue', 'green', 'yellow', 'orange', 'pink'];

const ImageViewer = (props) => {
	const { imageSrc, boxes, width, height, highlightField, positionsArray } =
		props;
	return (
		<div className={styles['img-container']}>
			<img
				src={imageSrc}
				alt='Highlightable'
				style={{ maxWidth: width, height: height, display: 'block' }}
			/>
			{positionsArray.map((box, index) => (
				<div
					onMouseEnter={() => {
						highlightField(true, box);
					}}
					onMouseLeave={() => {
						highlightField(false, box);
					}}
					key={index}
					style={{
						position: 'absolute',
						left: `${box.x}px`,
						top: `${box.y}px`,
						width: `${box.width}px`,
						height: `${box.height}px`,
						background: getRandomItem(HIGHLIGHT_COLORS),
						opacity: boxes.some((obj) => obj['id'] === box.id)
							? '0.3'
							: '0',
					}}
				/>
			))}
		</div>
	);
};

export default ImageViewer;
