const about = document.querySelector('.about');
const tabBtns = document.querySelectorAll('.tab-btn');
const contentArticles = document.querySelectorAll('.content');

about.addEventListener('click', function (event) {

    console.log(event.target.dataset.id);

});