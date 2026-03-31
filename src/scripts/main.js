document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const posicaoAtual =this.window.scrollY;

        if (posicaoAtual > alturaHero){
            ocultaElementosDoHeader();
        }else{
            exibeElementosdoHeader();
        }
    })

    //Seção de atrações,programação das abas
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


    //Seção Faq,accordion
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta );
    }
})

function ocuktaElementos(){
    const header = document.querySelector('.header');
    header.classList.add('header--is-hidden');
}

function exibeElementosdoHeader(){
    const header = document.querySelector('.header');
    header.classList.remove('header--is-hidden');
}


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