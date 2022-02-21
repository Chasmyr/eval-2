const input = document.getElementById('active');
const menu = document.getElementById('menu');
const lia = document.getElementById('lia');
const lib = document.getElementById('lib');
const lic = document.getElementById('lic');

input.addEventListener('change', () => {
        menu.style.display = 'none';
        setTimeout(menu.style.display = 'inline', 100);
});

lia.addEventListener('click', () => {
    menu.style.display = 'none';
    input.checked= false;
    setTimeout(menu.style.display = 'inline', 100);
});

lib.addEventListener('click', () => {
    menu.style.display = 'none';
    input.checked= false;
    setTimeout(menu.style.display = 'inline', 100);
});

lic.addEventListener('click', () => {
    menu.style.display = 'none';
    input.checked= false;
    setTimeout(menu.style.display = 'inline', 100);
});
