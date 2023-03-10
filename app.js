const about = document.querySelector('.about');
const tabBtns = document.querySelectorAll('.tab-btn');
const contentArticles = document.querySelectorAll('.content');

about.addEventListener('click', function (event) {

    const id = event.target.dataset.id;

    if (id) {

        tabBtns.forEach(function (btn) {

            // removing active class from all the buttons
            btn.classList.remove('active');

            // adding class 'active' to the button that was clicked
            event.target.classList.add('active');

        });



        // 

        // adding class 'active' to the corresponding content


    }

});