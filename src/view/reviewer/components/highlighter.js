import React, { useEffect, useState } from 'react';

const ImageViewer = ({ imageSrc, boxes, width, height }) => {
	return (
		<>
			<img
				src={imageSrc}
				alt='Highlightable'
				style={{ maxWidth: width, height: height, display: 'block' }}
			/>
			{boxes.map((box, index) => (
				<div
					key={index}
					className='bounding-box'
					style={{
						position: 'absolute',
						border: '2px solid #00FF00', // Green color for visibility
						left: `${box.x}px`,
						top: `${box.y}px`,
						width: `${box.width}px`,
						height: `${box.height}px`,
					}}
				/>
			))}
		</>
	);
};

export default ImageViewer;
