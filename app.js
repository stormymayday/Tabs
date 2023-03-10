const about = document.querySelector('.about');
const tabBtns = document.querySelectorAll('.tab-btn');
const contentArticles = document.querySelectorAll('.content');

about.addEventListener('click', function (event) {

    const id = event.target.dataset.id;

    if (id) {

        // removing active class from all the buttons
        tabBtns.forEach(function (btn) {

            btn.classList.remove('active');

        });
    }

});