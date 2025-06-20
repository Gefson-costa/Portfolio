const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content')


function PageTransitions() {
    // button click active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function (e) {
            let currentBtn = document.querySelectorAll('.active-btn')
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '')
            this.className += ' active-btn'
        })
    }

    //Section Active class
    allSections.addEventListener("click", (e) => {
        const id = e.target.dataset.id
        if (id) {

            sectBtn.forEach((btn) => {
                btn.classList.remove('active')
            })

            e.target.classList.add('active')


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


PageTransitions()