const showSearch = () => {
	const showSearchButton = document.querySelector('.show-search');

	if (!!showSearchButton) {
		showSearchButton.addEventListener('click', function () {
			document
				.querySelector('.bd-search')
				.classList.toggle('search--show');
		});
	}
};

const searchInit = () => {
	showSearch();
};

export { searchInit };
