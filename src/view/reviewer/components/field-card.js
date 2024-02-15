import React from 'react';
import styles from '../reviewer.module.css';
import Tags from '../../../shared-components/tags';
import Checkbox from '../../../shared-components/checkbox';
import { getRandomItem, initialsCreator } from '../../../utility/code-utils';
import Popover from '../../../shared-components/popover';
import Button from '../../../shared-components/button';
import { TAG_TYPES } from '../../../constants/components-const';

const FieldCard = (props) => {
	const { data, removeField, captureField, isSelected } = props;

	return (
		<div
			// onMouseEnter={() => captureField(true, data)}
			// onMouseLeave={() => captureField(false, data)}
			className={
				isSelected
					? [
							styles['field-card-wrapper'],
							styles['selected-field-card'],
					  ].join(' ')
					: styles['field-card-wrapper']
			}
		>
			<div className={styles['field-card-left-items']}>
				<Tags type={getRandomItem(TAG_TYPES)}>
					{initialsCreator(data.label)}
				</Tags>
				<div>
					<div className={styles['field-card-left-item-content']}>
						{data.label}
					</div>
					<div className={styles['field-card-left-item-content']}>
						{data.content?.value}
					</div>
				</div>
			</div>
			<div className={styles['field-card-right-items']}>
				<Checkbox
					checked={data.checked}
					onChange={(e) =>
						captureField(e.target.checked, data, 'checkbox')
					}
				/>
				<Popover
					triggerContent={
						<div className={styles['more-btn']}>
							<div className={styles['more-dot']}></div>
							<div className={styles['more-dot']}></div>
							<div className={styles['more-dot']}></div>
						</div>
					}
				>
					<Button onClick={() => removeField(data.id)} size='small'>
						Remove
					</Button>
				</Popover>
			</div>
		</div>
	);
};

export default FieldCard;
