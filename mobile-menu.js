let openBtns = document.querySelectorAll('.open-menu');
let menu = document.querySelector('#menu');
let closeBtn = menu.querySelector('button');

openBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        menu.style.display = "flex"
    })
});

closeBtn.addEventListener('click', () => {
    menu.style.display = 'none'
})