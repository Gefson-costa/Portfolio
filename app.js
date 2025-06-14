const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content')


function PageTransitions() {
    // button click active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function (e) {
            let currentBtn = document.querySelectorAll('.active-btn') // porque nao usar o arrow function?
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '')
            this.className += ' active-btn'
        })
    }

    //Section Active class
    allSections.addEventListener("click", (e) => {
        const id = e.target.dataset.id
        if (id) {
            // remove selected from the other btns
            sectBtn.forEach((btn) => { // professor color btns em vez de btn 
                btn.classList.remove('active')
            })

            e.target.classList.add('active') // como o 'event. vem do clique entao ele adionara em quem clicou o evento

            //hide other sections
            sections.forEach((section) => {
                section.classList.remove('active')
            })

            const element = document.getElementById(id)
            element.classList.add('active')
        }
    })

    // toggle
    const theme = document.querySelector(".theme-btn")
    theme.addEventListener("click", () => {
        const element = document.querySelector('.main-content')
        element.classList.toggle("bright-mode")
    })

}


/*function PageTransitions() {
  // Adiciona UM único evento no container pai
    sectBtns[0].addEventListener('click', (e) => {
    // Verifica se o clique foi em um botão
    const clickedBtn = e.target.closest('.control');
    if (!clickedBtn) return;

    // Remove classe ativa de todos os botões
    sectBtn.forEach(btn => btn.classList.remove('active-btn'));
    
    // Adiciona classe no botão clicado
    clickedBtn.classList.add('active-btn');
    });
} */



PageTransitions()