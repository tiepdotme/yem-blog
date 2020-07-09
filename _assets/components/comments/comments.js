const showComments = () => {
	const showCommentsButton = document.querySelector('.show-comments');
	if (!!showCommentsButton) {
		showCommentsButton.addEventListener('click', function () {
			document
				.getElementById('comments')
				.classList.toggle('comments--show');
		});
	}
};

const commentsInit = () => {
	showComments();
};

export { commentsInit };
