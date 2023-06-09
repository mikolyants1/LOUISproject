        
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
    let h2=document.querySelectorAll('h2')
    let im1=document.querySelectorAll('.im1') 
    let im=document.querySelectorAll('.im') 
    window.addEventListener('scroll',()=>{
        if (pageYOffset>190) {
            for (let i = 0; i < im1.length; i++) {
               im1[i].style.animationDelay=`${i*0.3}s`
               im1[i].style.animationName='show'
               im1[i].style.animationDuration='1s'
               im1[i].style.animationTimingFunction='ease'
            }
        }
        if (pageYOffset>1560) {
            for (let i = 0; i < im.length; i++) {
               im[i].style.animationDelay=`${i*0.3}s`
               im[i].style.animationName='show'
               im[i].style.animationDuration='1s'
               im[i].style.animationTimingFunction='ease'
            }
        }
    })
   
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