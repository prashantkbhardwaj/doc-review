import React, { useEffect, useState } from 'react';
import styles from './reviewer.module.css';
import SECTION_DATA from '../../constants/sidebar-data';
import Modal from '../../shared-components/modal';
import Header from './components/header';
import Previewer from './components/previewer';
import Sidebar from './components/sidebar';
import ConfirmationBox from '../../shared-components/modal/confirmation-box';
import MessageBox from '../../shared-components/modal/message-box';

const DocReviewer = () => {
	const [zoomPercentage, setZoomPercentage] = useState(35);
	const [fieldData, setFieldData] = useState(
		SECTION_DATA?.data?.sections[0]?.children.map((item) => {
			return { checked: false, ...item };
		}),
	);
	const [selectedFields, setSelectedFields] = useState([]);
	const [isAllSelected, setIsAllSelected] = useState(false);
	const [isConfirmDisabled, setIsConfirmDisabled] = useState(true);
	const [confirmationBox, setConfirmationBox] = useState(false);
	const [confirmedBox, setConfirmedBox] = useState(false);

	const toggleConfirmationBox = () =>
		setConfirmationBox((prevState) => !prevState);

	const toggleConfirmedBox = () => setConfirmedBox((prevState) => !prevState);

	useEffect(() => {
		if (selectedFields.length > 1 && isConfirmDisabled) {
			setIsConfirmDisabled(false);
		} else if (selectedFields.length <= 1 && !isConfirmDisabled) {
			setIsConfirmDisabled(true);
		}
	}, [selectedFields, isConfirmDisabled]);

	const positionsArray = SECTION_DATA?.data?.sections[0]?.children.map(
		(item) => {
			return {
				x: item.content?.position[0],
				y: item.content?.position[1],
				height: item.content?.position[3] - item.content?.position[1],
				width: item.content?.position[2] - item.content?.position[0],
				id: item.id,
			};
		},
	);

	const zoomIn = () =>
		setZoomPercentage((zoomPercentage) => zoomPercentage + 10);

	const zoomOut = () =>
		setZoomPercentage((zoomPercentage) =>
			Math.max(zoomPercentage - 10, 10),
		);

	const removeField = (id) => {
		const selections = selectedFields.filter((obj) => obj.id !== id);
		setSelectedFields([...selections]);
		setFieldData((prevState) => prevState.filter((item) => item.id !== id));
	};

	const updateCheckedField = (val, item) => {
		const fields = fieldData;
		const index = fields.findIndex((obj) => item.id === obj.id);
		if (index >= 0) {
			fields[index].checked = val;
			setFieldData([...fields]);
		}
	};

	const captureField = (action, item) => {
		const filteredArr = positionsArray.filter((obj) => obj.id === item.id);
		const selections = selectedFields;
		if (action && !selections.includes(filteredArr[0])) {
			selections.push(filteredArr[0]);
			updateCheckedField(true, item);
			setSelectedFields([...selections]);
		} else {
			const newSelections = selections.filter(
				(obj) => obj.id !== filteredArr[0].id,
			);
			updateCheckedField(false, item);
			setSelectedFields([...newSelections]);
		}
	};

	const updateAllCheckboxes = (val) => {
		let fields = fieldData;
		fields = fields.map((item) => {
			return { ...item, checked: val };
		});
		setFieldData([...fields]);
	};

	const selectAll = () => {
		if (isAllSelected) {
			updateAllCheckboxes(false);
			setSelectedFields([]);
			setIsAllSelected(false);
		} else {
			updateAllCheckboxes(true);
			setSelectedFields(positionsArray);
			setIsAllSelected(true);
		}
	};

	return (
		<>
			<div className={styles['main-body']}>
				<Header />
				<div className={styles['content-wrapper']}>
					<Previewer
						zoomPercentage={zoomPercentage}
						zoomIn={zoomIn}
						zoomOut={zoomOut}
						selectedFields={selectedFields}
						captureField={captureField}
						positionsArray={positionsArray}
					/>
					<Sidebar
						fieldData={fieldData}
						removeField={removeField}
						captureField={captureField}
						selectedFields={selectedFields}
						selectAll={selectAll}
						isAllSelected={isAllSelected}
						isConfirmDisabled={isConfirmDisabled}
						toggleConfirmationBox={toggleConfirmationBox}
					/>
				</div>
			</div>
			<Modal isOpen={confirmationBox} onClose={toggleConfirmationBox}>
				<ConfirmationBox
					message='Are you sure you want to confirm the selected fields?'
					primaryBtnLabel='Yes, Confirm'
					primaryBtnAction={() => {
						toggleConfirmationBox();
						toggleConfirmedBox();
					}}
					secondaryBtnLabel='Cancel'
					secondaryBtnAction={toggleConfirmationBox}
				/>
			</Modal>
			<Modal isOpen={confirmedBox} onClose={toggleConfirmedBox}>
				<MessageBox
					message='Fields confirmed and processed successfully!'
					btnLabel='Ok, got it!'
					btnAction={toggleConfirmedBox}
				/>
			</Modal>
		</>
	);
};

export default DocReviewer;
