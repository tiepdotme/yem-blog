const handleBlogGrid = () => {
	const gridSelector = Array.from(
		document.querySelectorAll('.grid-selector')
	);

	if (!!gridSelector && gridSelector.length > 0) {
		gridSelector.forEach(function (el) {
			el.addEventListener('click', function () {
				this.classList.remove('active');
				Array.from(document.querySelectorAll('.post')).map((el) =>
					el.classList.toggle('active')
				);
			});
		});
	}
};

const blogGrid = () => {
	handleBlogGrid();
};

export { blogGrid };
