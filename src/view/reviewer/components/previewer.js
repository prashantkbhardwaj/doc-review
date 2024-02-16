import React from 'react';
import styles from '../reviewer.module.css';
import PAGES_DATA from '../../../constants/pages-data';
import ImageViewer from './image-viewer';
import Zoomer from './zoomer';

const Reviewer = (props) => {
	const {
		zoomPercentage,
		zoomIn,
		zoomOut,
		selectedFields,
		captureField,
		positionsArray,
	} = props;

	return (
		<div className={styles['preview-border']}>
			<div className={styles['preview-wrapper']}>
				<div
					className={styles['zoomable-div']}
					style={{
						transform: `scale(${zoomPercentage / 100}) `,
						width: PAGES_DATA.data.documents[0]?.pages[0]?.image
							.width,
					}}
				>
					{PAGES_DATA.data.documents[0]?.pages?.map((item) => (
						<ImageViewer
							key={item.id}
							imageSrc={'./pdf-img.jpg'}
							width={`${item.image.width}px`}
							height={`${item.image.height}px`}
							boxes={selectedFields}
							highlightField={captureField}
							positionsArray={positionsArray}
						/>
					))}
				</div>
				<Zoomer
					zoomPercentage={zoomPercentage}
					zoomIn={zoomIn}
					zoomOut={zoomOut}
				/>
			</div>
		</div>
	);
};

export default Reviewer;
