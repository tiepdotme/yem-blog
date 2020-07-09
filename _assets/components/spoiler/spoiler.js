const spoilerClick = () => {
	const spoilers = Array.from(document.querySelectorAll('.spoiler'));

	spoilers.forEach(function (el) {
		el.addEventListener('click', function () {
			el.classList.remove('spoiler');
		});
	});
};

const spoilerInit = () => {
	spoilerClick();
};

export { spoilerInit };
