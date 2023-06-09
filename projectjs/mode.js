let menu3=document.querySelector('.menu3')
let menu1=document.querySelector('.header_menu1')
let icon=document.querySelector('.icon')
let menu31=document.querySelector('.menu31')
let menu32=document.querySelector('.menu32')
let loc1=document.querySelector('.loc1')
let loc2=document.querySelector('.l2')
let loc3=document.querySelector('.l3')
let one=document.querySelector('.on')
let q=document.querySelectorAll('.q')
let l1=document.querySelector('.l1')
icon.addEventListener('click',func2)
let st1=document.querySelectorAll('.st1')
let st2=document.querySelectorAll('.st2')
const img1=[
'url("./projectimg/mode11.jpg") 0% 0% / 100% 100% no-repeat',
'url("./projectimg/mode12.webp") 0% 0% / 100% 100% no-repeat',
'url("./projectimg/mode13.webp") 0% 0% / 100% 100% no-repeat',
'url("./projectimg/mode141.webp") 0% 0% / 100% 100% no-repeat',
'url("./projectimg/mode151.webp") 0% 0% / 100% 100% no-repeat',
'url("./projectimg/mode144.webp") 0% 0% / 100% 100% no-repeat',
]

const img2=[
'url("./projectimg/mode21.webp") 0% 0% / 100% 100% no-repeat',
'url("./projectimg/mode23.jpg") 0% 0% / 100% 100% no-repeat',
'url("./projectimg/mode22.webp") 0% 0% / 100% 100% no-repeat',
'url("./projectimg/mode24.jpg") 0% 0% / 100% 100% no-repeat',
'url("./projectimg/mode143.jpg") 0% 0% / 100% 100% no-repeat',
'url("./projectimg/mode145.webp") 0% 0% / 100% 100% no-repeat',
]

const img3=[
'url("./projectimg/mode31.webp") 0% 0% / 100% 100% no-repeat',
'url("./projectimg/mode33.webp") 0% 0% / 100% 100% no-repeat',
'url("./projectimg/mode32.webp") 0% 0% / 100% 100% no-repeat',
'url("./projectimg/mode34.jpg") 0% 0% / 100% 100% no-repeat',
'url("./projectimg/mode142.jpg") 0% 0% / 100% 100% no-repeat',
'url("./projectimg/mode146.webp") 0% 0% / 100% 100% no-repeat',
]
l1.style.transitionDuration='0.5s'
loc2.style.transitionDuration='0.5s'
loc3.style.transitionDuration='0.5s'
const con=[]
st2[0].addEventListener('click',()=>{
for (let i = 0; i < img1.length; i++) {
if (l1.style.background==img1[i]) {
l1.style.background=img1[i+1]
break
}
if (l1.style.background==img1[5]) {
l1.style.background=img1[0]
break
}

}
})
st2[1].addEventListener('click',()=>{

for (let i = 0; i < img2.length; i++) {
if (loc2.style.background==img2[i]) {
loc2.style.background=img2[i+1]
break
}
if (loc2.style.background==img2[5]) {
loc2.style.background=img2[0]
break
}

}
})
st2[2].addEventListener('click',()=>{
for (let i = 0; i < img3.length; i++) {
if (loc3.style.background==img3[i]) {
loc3.style.background=img3[i+1]
break
}
if (loc3.style.background==img3[5]) {
loc3.style.background=img3[0]
break
}

}
})
st1[0].addEventListener('click',()=>{
for (let i = 0; i < img1.length; i++) {
if (l1.style.background==img1[0]) {
l1.style.background=img1[5]
break
}
if (l1.style.background==img1[i]) {
l1.style.background=img1[i-1]
break
}


}
})
st1[1].addEventListener('click',()=>{
for (let i = 0; i < img2.length; i++) {

if (loc2.style.background==img2[0]) {
loc2.style.background=img2[5]
break
}
if (loc2.style.background==img2[i]) {
loc2.style.background=img2[i-1]
break
}

}
})
st1[2].addEventListener('click',()=>{
for (let i = 0; i < img3.length; i++) {
if (loc3.style.background==img3[0]) {
loc3.style.background=img3[5]
break
}   
if (loc3.style.background==img3[i]) {
loc3.style.background=img3[i-1]
break
}

}
})



function func1() {

   menu3.style.display='block'
   menu1.style.background='url(../)'
}
function func2() {
    menu32.style.display='none'
    menu31.style.display='none'
    menu3.style.display='none'
   menu1.style.cssText='background:url(./projectimg/menu1.jpg);'
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

