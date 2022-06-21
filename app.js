const boxes = document.querySelectorAll('.box')
        
window.addEventListener('scroll', check_animation)

check_animation()

function check_animation () {
    const trigger = window.innerHeight / 6 * 4;
    
    boxes.forEach(box => {

        
        const top = box.getBoundingClientRect().top
      
        if (trigger > top) {
            box.classList.add('show_content')
        } else {
            box.classList.remove('show_content')
        }
    })
}