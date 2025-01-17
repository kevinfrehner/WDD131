const colorSelector = document.querySelector('#color-selector');
const lightLogo = document.querySelector('#BYUI-Logo');
const darkLogo = document.querySelector('#Dark-BYUI-Logo');

colorSelector.addEventListener('change', changeTheme);
function changeTheme() {
    const selectedOption = colorSelector.value;
    
    if (selectedOption === "dark") {
        document.body.classList.add('dark');
        lightLogo.style.display = 'none';
        darkLogo.style.display ='block';
    } else {
        document.body.classList.remove('dark');
        lightLogo.style.display = 'block';
        darkLogo.style.display ='none';
    }
}