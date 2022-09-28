const menuOpen = document.querySelector('#menu-open');
const menuClose = document.querySelector('#menu-close');
const mobileMenu = document.querySelector('#mobile-menu');
const image_input= document.querySelector('photo');
var uploaded_image=''

menuOpen.addEventListener('click', () => {
    menuOpen.style.display = 'none'
    menuClose.style.display = 'block'
    mobileMenu.style.display = 'block'
})
image_input.addEventListener('change',function(){
    const reader= new FileReader();
    reader.addEventListener("load",() =>{
        uploaded_image = reader.result
        document.querySelector("#display_image").style.backgroundImage =url ($,{uploaded_image})
    });
    reader.readAsDataURL(this.file[0]);
})


menuClose.addEventListener('click', () => {
    menuClose.style.display = 'none'
    menuOpen.style.display = 'block'
    mobileMenu.style.display = 'none'

})