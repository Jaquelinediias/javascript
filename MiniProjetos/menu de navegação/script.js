const menuButton = document.getElementById('menu-opener');

menuButton.addEventListener('click', () => {
    let menuArea = document.getElementById('menu-area');
    if(menuArea.style.width == '200px') {
        menuArea.style.width = '0px'
    } else{
        menuArea.style.width = '200px'
    }
     
})
    