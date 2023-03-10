const about = document.querySelector('.about');
const tabBtns = document.querySelectorAll('.tab-btn');
const contentArticles = document.querySelectorAll('.content');

about.addEventListener('click', function (event) {

    const id = event.target.dataset.id;

    if (id) {

        // removing class 'active' from all the buttons
        tabBtns.forEach(function (btn) {
            btn.classList.remove('active');
        });

        // adding class 'active' to the button that was clicked
        event.target.classList.add('active');

        // removing class 'actove' from contentArticles
        contentArticles.forEach(function (article) {
            article.classList.remove('active');
        });

        // adding class 'active' to the contentArticle with matching id
        const element = document.getElementById(id);
        element.classList.add('active');

    }

});