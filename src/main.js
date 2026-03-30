document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

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

    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta );
    }
})

function abreOutFechaResposta(element){
    const classe ='faq__questions__item--is-open';
    const elementPai = element.target.parentNode;

    elementPai.classList.toggle(classe);
}

    function escondeTodasAbas(){
        const buttons = document.querySelectorAll('[data-tab-button]');

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('shows__tabs__button--is-active');
        }
    }