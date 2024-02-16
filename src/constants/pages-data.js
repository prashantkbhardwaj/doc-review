const PAGES_DATA = {
	data: {
		documents: [
			{
				doc_id: 'a2cbec1124234a6d846f908ba9531a2e',
				excel_type: false,
				pages: [
					{
						id: 1,
						image: {
							height: 2200,
							url: './pdf-img.jpg',
							width: 1700,
						},
					},

					// uncomment this for another page
					// {
					// 	id: 2,
					// 	image: {
					// 		height: 2200,
					// 		url: './pdf-img.jpg',
					// 		width: 1700,
					// 	},
					// },
				],
				status: 'reviewing',
				title: 'invoice.pdf',
				type: 'invoice',
			},
		],
		limit: 1,
		offset: 0,
		total: 1,
	},
	error: '',
	error_code: '',
	message: '',
	status: 'success',
	status_code: 200,
};

export default PAGES_DATA;
