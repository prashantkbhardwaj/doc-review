import React from 'react';
import styles from './tags.module.css';
import { TAG_TYPES } from '../../constants/components-const';

const Tags = (props) => {
	const { type } = props;

	return (
		<div
			className={
				type && TAG_TYPES.includes(type)
					? [styles['tag-content'], styles[type]].join(' ')
					: [styles['tag-content'], styles['default']].join(' ')
			}
		>
			{props.children}
		</div>
	);
};

export default Tags;
