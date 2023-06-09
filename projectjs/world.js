const imgs=[
                   
    'projectimg/luis1.webp',
    'projectimg/improve.webp',
    'projectimg/mode2.webp',
]
const text=[
    'Выставки Les ESPACES LOUIS VUITTON',
    'PEOPLE FOR WILDLIFE',
    'ПОКАЗ ЖЕНСКОЙ КОЛЛЕКЦИИ осень-зима 2023',
]
let sr=document.querySelector('.sr')
let img1=document.querySelector('.img1')
let text1=document.querySelector('.text1')
let imp=document.querySelector('.imp')
let hos=document.querySelector('.hos')
let is=document.querySelector('.is')
let mod=document.querySelector('.mod')
imp.addEventListener('click',()=>{
img1.src=imgs[1]
text1.textContent=`${text[1]}`
})

is.addEventListener('click',()=>{
img1.src=imgs[0]
text1.textContent=`${text[0]}`
})
mod.addEventListener('click',()=>{
img1.src=imgs[2]
text1.textContent=`${text[2]}`
})
img1.addEventListener('click',()=>{
    if (text1.textContent==`${text[0]}`) {
        sr.href='project1mode.html'
    }
    if (text1.textContent==`${text[1]}`) {
        sr.href='project1improve.html'
    }
    if (text1.textContent==`${text[2]}`) {
        sr.href='project1mod.html'
    }


})
let menu3=document.querySelector('.menu3')
let menu1=document.querySelector('.header_menu1')
let icon=document.querySelector('.icon')
let menu31=document.querySelector('.menu31')
let menu32=document.querySelector('.menu32')
icon.addEventListener('click',func2)

function func1() {

menu3.style.display='block'
menu1.style.background='url(../)'
}
function func2() {
menu32.style.display='none'
menu31.style.display='none'
menu3.style.display='none'
menu1.style.cssText='background:url(projectimg/menu1.jpg);'
}
let price=document.querySelectorAll('.price')
let pn=document.querySelectorAll('.products_button')
for (let i = 0; i < pn.length; i++) {
pn[i].innerHTML='купить'


}
for (let i = 0; i < price.length; i++) {
price[i].style.color='grey'

}
let hn=document.querySelector('.header_name')
hn.style.color='rgb(234,234,234)'
hn.style.letterSpacing='2px'
hn.style.fontSize='35px'
hn.style.margin='0 0 0 120px'
let hl=document.querySelectorAll('.header_link')
hl[0].addEventListener('click',func3)
function func3() {
menu31.style.display='block'
menu32.style.display='none'
}
hl[1].addEventListener('click',func4)
function func4() {
menu32.style.display='block'
menu31.style.display='none'
}
let non=document.querySelector('.non')
let all=document.querySelectorAll('.all')
function remove1() {
all[0].style.display='none'
if (all[0].style.display=='none'&&all[1].style.display=='none') {
non.style.display='block'
}
}
function remove2() {
all[1].style.display='none'
if (all[0].style.display=='none'&&all[1].style.display=='none') {
non.style.display='block'
}
}
let hl1=document.querySelectorAll('.header_link1') 
for (let i = 0; i < hl1.length; i++) {
hl1[i].style.fontSize='20px' 
hl1[i].style.textDecoration='none'
hl1[i].style.color='rgb(234,234,234)'
hl1[i].style.letterSpacing='1.5px'

} 
for (let i = 0; i < hl.length; i++) {
hl[i].style.fontSize='20px' 

hl[i].style.color='rgb(234,234,234)'
hl[i].style.letterSpacing='2px'

} 