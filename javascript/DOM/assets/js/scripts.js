const darkMode = document.getElementById('btn-dark');
const darkModeClass = 'dark-mode';
const header = document.getElementById('header');
const main = document.getElementById('main');
const footer = document.getElementById('footer');
const h1 = document.getElementById('h1');
const button = document.getElementById('btn-dark');

const changeMode = () => {
    changeColor();
    changeText();
}
const changeColor = () => {

    header.classList.toggle(darkModeClass)
    main.classList.toggle(darkModeClass)
    footer.classList.toggle(darkModeClass)
    button.classList.toggle(darkModeClass)
}

const changeText = () => {
    const lightMode = 'Light Mode';
	const darkMode = 'Dark Mode';

	if (main.classList.contains(darkModeClass)) {
		button.innerHTML = lightMode;
		h1.innerHTML = darkMode + ' ON';
		return;
	}

	button.innerHTML = darkMode;
	h1.innerHTML = lightMode + ' ON';
}

darkMode.addEventListener('click', changeMode);
