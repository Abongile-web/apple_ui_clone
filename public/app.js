//Make mobile navigation menu appear after clicking hamburger icon

window.onload = () => {
    document.querySelector('.nav2').style.display = 'none';
}

document.querySelector('#menu').addEventListener('click', () => {
    let show = document.querySelector('.nav2');
    
    if (show.style.display === 'none') {
        show.style.display = 'block';
        document.querySelector('.header').style.backgroundColor = 'rgba(0, 0, 0, 0.99)';
        document.querySelector('#menu').classList = 'fa fa-times';
    } else {
        show.style.display = 'none';
        document.querySelector('.header').style.backgroundColor = 'rgba(0, 0, 0, 0.82)';
        document.querySelector('#menu').classList = 'fa fa-bars';
    }
});