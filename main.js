const image = document.querySelectorAll(".image")
const popup = document.querySelector('.popup')
const backdrop = document.querySelector('.backdrop')
const popupimg = document.querySelector('.popup img')
const popupclose = document.querySelector ('.popup a')

image.forEach((image, index) => {
    image.addEventListener("click" ,(event) =>{
        popup.classList.add('popup_active')
        backdrop.classList.add('active')
        popupimg.setAttribute('src' ,event.target.src)
    })
})
popupclose.addEventListener("click",(event) =>{
    popup.classList.remove('popup_active')
    backdrop.classList.remove('active')
})