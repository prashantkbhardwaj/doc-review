import React from 'react';
import styles from '../reviewer.module.css';
import Tabs from '../../../shared-components/tabs';
import FieldCard from './field-card';
import SidebarFooter from './sidebar-footer';

const Sidebar = (props) => {
	const {
		fieldData,
		removeField,
		captureField,
		selectedFields,
		selectAll,
		isAllSelected,
		isConfirmDisabled,
		toggleConfirmationBox,
	} = props;

	return (
		<div className={styles['sidebar']}>
			<div className={styles['head-wrapper']}>Fields</div>
			<Tabs>
				<div label='Regular Fields' id='regular' activeTab='regular'>
					<div className={styles['cards-wrapper']}>
						{fieldData.map((item) => (
							<FieldCard
								key={item.id}
								data={item}
								removeField={removeField}
								captureField={captureField}
								isSelected={selectedFields.some(
									(obj) => obj['id'] === item.id,
								)}
							/>
						))}
					</div>
				</div>
				<div label='Column Fields' id='column'>
					This is tab 2 content.
				</div>
			</Tabs>
			<SidebarFooter
				selectAll={selectAll}
				isAllSelected={isAllSelected}
				isConfirmDisabled={isConfirmDisabled}
				openConfimation={toggleConfirmationBox}
			/>
		</div>
	);
};

export default Sidebar;
