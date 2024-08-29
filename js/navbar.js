
window.onload = () => {
    const navbar = document.getElementsByClassName('navbtn')[0];

    navbar.addEventListener('click', () => {
        const nav = document.getElementsByClassName('sidemenu')[0];
        nav.classList.toggle('nav-close');
        nav.classList.toggle('nav-open');
    })

    const colums = document.getElementsByClassName('navcolum');
    for ( let i = 0; i < colums.length; i++ ){
        colums.item(i).addEventListener('click', () => {
            const nav = document.getElementsByClassName('sidemenu')[0];
            nav.classList.toggle('nav-close');
            nav.classList.toggle('nav-open');
        })
    }
}