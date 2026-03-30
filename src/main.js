document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');


    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click',function(button){
            const abaAlvo =button.target.dataset.tabButton;
            console.log(button,target,dataset,tabButton);
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            abaAlvo.classList.add('shows__list--is-active');
            escondeTodasAbas();
            button.target.classList.add('shows__tabs__button--is-active');
        })
    }
})

    function escondeTodasAbas(){
        const buttons = document.querySelectorAll('[data-tab-button]');

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('shows__tabs__button--is-active');
        }
    }