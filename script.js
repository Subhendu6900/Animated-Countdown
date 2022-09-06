const numbs = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const finalMessage = document.querySelector('.final')
const replay = document.querySelector('#replay')

runAnimation()

function resetDOM() {
    counter.classList.remove('hide')
    finalMessage.classList.remove('show')

    numbs.forEach((num) => {
        num.classList.value = ''
    }) +

    numbs[0].
        classList.add('in')
}
function runAnimation() {
    numbs.forEach((num, idx) => {
        const nextToLast = numbs.length - 1

        num.addEventListener('animationend', (e) => {
            if (e.animationName === 'goIn' && idx !== nextToLast) { 
                num.classList.remove('in')
                num.classList.add('out')
            } else if (e.animationName === 'goOut' && num.nextElementSibl:
                num.nextElementSibling.classList.add('in')
            } else {
                counter.classList.add('hide')
                finalMessage.classList.add('show')
            }
        })
}


replay.addEventListener('click', () => {
    resetDOM()
    runAnimation()
})

//DOM stands for document object model.
//DOM is a programming interface that allows to create,change,sss
