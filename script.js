const progress = document.getElementById('progress');
const prev = document.getElementById('Prev');
const next = document.getElementById('Next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if (currentActive > circles.length){
        currentActive = circles.length
    }

    update()
})

prev.addEventListener('click', () => {
    currentActive++

    if (currentActive < 1){
        currentActive = 2
    }

    update()
})

function update(){
    circles.forEach((circle, idx) => {
        if(idx < currentActive){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })
}