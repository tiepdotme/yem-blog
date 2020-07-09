import { DOM } from '../../helpers/DOM';

const handleClickNavIcon = () => {
	if (!!DOM.navIcon) {
		DOM.navIcon.addEventListener('click', function () {
			this.classList.toggle('active');
			DOM.menu.classList.toggle('active');
			DOM.blackoverNav.classList.toggle('active');
			DOM.body.classList.toggle('active-side');
		});
	}
};

const navIcon = () => {
	handleClickNavIcon();
};

export { navIcon };
