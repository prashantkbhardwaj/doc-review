import React, { useEffect, useState } from 'react';
import styles from './reviewer.module.css';
import Tabs from '../../shared-components/tabs';
import FieldCard from './components/field-card';
import SidebarFooter from './components/sidebar-footer';
import SECTION_DATA from '../../constants/sidebar-data';
import ImageViewer from './components/highlighter';
import PAGES_DATA from '../../constants/pages-data';
import Modal from '../../shared-components/modal';
import Button from '../../shared-components/button';
import Checkbox from '../../shared-components/checkbox';

const DocReviewer = (props) => {
	const {} = props;
	const [zoomPercentage, setZoomPercentage] = useState(35);
	const [offset, setOffset] = useState({ x: 0, y: 0 });
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
	}, [selectedFields]);

	const positionsArray = SECTION_DATA?.data?.sections[0]?.children.map(
		(item) => {
			return {
				x: item.content?.position[0],
				y: item.content?.position[1],
				height: item.content?.position[2],
				width: item.content?.position[3],
				id: item.id,
			};
		},
	);

	const zoomIn = () =>
		setZoomPercentage((zoomPercentage) =>
			zoomPercentage !== 100 ? zoomPercentage + 10 : zoomPercentage,
		);

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
		fields[index].checked = val;
		setFieldData([...fields]);
	};

	const captureField = (action, item, source) => {
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
				<header>
					<div className={styles['main-header']}>
						<div>Review Screen</div>
						<Checkbox label='Dark Mode'></Checkbox>
					</div>
				</header>
				<div className={styles['content-wrapper']}>
					<div className={styles['preview-border']}>
						<div className={styles['preview-wrapper']}>
							<div
								className={styles['zoomable-div']}
								style={{
									transform: `scale(${zoomPercentage / 100})`,
									width: PAGES_DATA.data.documents[0]
										?.pages[0]?.image.width,
								}}
							>
								{PAGES_DATA.data.documents[0]?.pages?.map(
									(item) => (
										<ImageViewer
											key={item.id}
											imageSrc={'./pdf-img.jpg'}
											width={`${item.image.width}px`}
											height={`${item.image.height}px`}
											boxes={selectedFields}
										/>
									),
								)}
							</div>
							<div className={styles['zoom-percentage-box']}>
								{zoomPercentage}&nbsp;%
							</div>
							<div className={styles['zoom-controls-wrapper']}>
								<div
									onClick={zoomIn}
									className={styles['zoom-btn']}
								>
									+
								</div>
								<div
									onClick={zoomOut}
									className={styles['zoom-btn']}
								>
									-
								</div>
							</div>
						</div>
					</div>

					<div className={styles['sidebar']}>
						<div className={styles['head-wrapper']}>Fields</div>
						<Tabs>
							<div
								label='Regular Fields'
								id='regular'
								activeTab='regular'
							>
								<div className={styles['cards-wrapper']}>
									{fieldData.map((item) => (
										<FieldCard
											key={item.id}
											data={item}
											removeField={removeField}
											captureField={captureField}
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
				</div>
			</div>
			<Modal isOpen={confirmationBox} onClose={toggleConfirmationBox}>
				<div className={styles['modal-content']}>
					<div className={styles['modal-body']}>
						Are you sure you want to confirm the selected fields?
					</div>
					<div className={styles['modal-footer']}>
						<Button
							onClick={() => {
								toggleConfirmationBox();
								toggleConfirmedBox();
							}}
						>
							Yes, Confirm
						</Button>
						<Button onClick={toggleConfirmationBox}>Cancel</Button>
					</div>
				</div>
			</Modal>
			<Modal isOpen={confirmedBox} onClose={toggleConfirmedBox}>
				<div className={styles['modal-content']}>
					<div className={styles['modal-body']}>
						Fields confirmed and processed successfully!
					</div>
					<div className={styles['modal-footer']}>
						<Button block={true} onClick={toggleConfirmedBox}>
							Ok, got it!
						</Button>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default DocReviewer;
