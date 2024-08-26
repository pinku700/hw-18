let on = document.querySelector('.on')
let img = document.querySelector('.img')
on.addEventListener('click',function(){
    img.src = 'https://www.w3schools.com/js/pic_bulbon.gif'
})
let off = document.querySelector('.off')
off.addEventListener('click',function(){
    img.src="https://www.w3schools.com/js/pic_bulboff.gif"
})