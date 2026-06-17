(function () {

    const backdrop = document.getElementById('backdrop');

    function openModal() {
        backdrop.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        backdrop.classList.remove('show');
        document.body.style.overflow = '';
    }

    document
        .getElementById('openAlt')
        .addEventListener('click', openModal);

    document
        .getElementById('closeM')
        .addEventListener('click', closeModal);

    backdrop.addEventListener('click', function (event) {
        if (event.target === backdrop) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });

})();