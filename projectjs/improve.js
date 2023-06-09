            
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
    let link1=document.querySelector('.link11')
    let link2=document.querySelector('.link55')
    let link21=document.querySelector('.link05')
    let link3=document.querySelector('.link21')
    let link4=document.querySelector('.link31')
    let link5=document.querySelector('.link41')
let text1=`В рамках наших давних обязательств по сохранению природных ресурсов. Louis Vuitton объединяет усилия с благотворительной
 организацией по охране природы People For Wildlife. Работая с местными сообществами, это 5-летнее экологическое партнерство по
  поддержанию и улучшению биоразнообразия на территории площадью свыше 400 000 гектаров на северо-востоке Австралии способствует
   достижению цели LVMH по восстановлению 5 миллионов  гектаров флоры и фауны к 2030 году, а также выполнениюСоглашения Конференции 
   ООН по биоразнообразию. (COP-15), чтобы к тому же году защитить 30% суши планеты.`
let text2=`Louis Vuitton уже много лет тесно сотрудничает с основателем People For Wildlife - доктором Даниэлем Натушем,экспертом
 в области охраны природы. Долгие годы занимаясь исследованиями и изучениями в Кейп-Йорке,  в 2020 г доктор Натуш создал People For
Wildlife. Рассматривая вопрос о том, как расширить возможности и усилия по сохранению климата и восстановлению биоразнообразия,
сотрудничество с этой благотворительной организацией  было естественным выбором, учитывая те экологические ценности, которые мы
 разделяем.Совместная работа дарит уникальный шанс лучше понять процесс рационального использования природных материалов.`
let text21=`Узнать больше о People For Wildlife`
let text3=`На полуострове Кейп-Йорк, в штате Квинсленд, в окружении тропических лесов,зеленых массивов, пресноводных экосистем и 
береговой линии находится одно из самых богатых биоразнообразий в мире. Louis Vuitton оказывает поддержку в научных исследованиях People
For Wildlife и поощряет инициативы по ведению рационального землепользования местными сообществами, чтобы всеми силами уберечь и обратить
 вспять процесс сокращения биоразнообразия, а также принять меры против изменения климата..`
 let text4=`Поддержка научных исследований и разработка решений, основанных на принципах экологичности.`
let text5=`Вклад в ускорение процесса поглощения углерода происходит в глобальном масштабе, помимо климатической стратегии,
 подтвержденной  Инициативой по научно обоснованным целям (SBTi), направленной на снижение нашего углеродного следа на 55% к 2030 г`
     for (let i = 0; i < text1.length; i++) {
        setTimeout(() => {
            link1.innerHTML+=`${text1[i]}`
        }, `${i}0`);   
    }  
    setTimeout(() => {
        for (let i = 0; i < text2.length; i++) {
            setTimeout(() => {
                link2.innerHTML+=`${text2[i]}`
            }, `${i}0`);   
        }  
    }, 6500);
    setTimeout(() => {
        for (let i = 0; i < text21.length; i++) {
            setTimeout(() => {
                link21.innerHTML+=`${text21[i]}`
            }, `${i*2}0`);   
        }  
    }, 13700);
    setTimeout(() => {
        for (let i = 0; i < text3.length; i++) {
            setTimeout(() => {
                link3.innerHTML+=`${text3[i]}`
            }, `${i}0`);   
        }  
    }, 14700);
    setTimeout(() => {
        for (let i = 0; i < text4.length; i++) {
            setTimeout(() => {
                link4.innerHTML+=`${text4[i]}`
            }, `${i*2}0`);   
        }  
    }, 20000);
    setTimeout(() => {
        for (let i = 0; i < text5.length; i++) {
            setTimeout(() => {
                link5.innerHTML+=`${text5[i]}`
            }, `${i*2}0`);   
        }  
    }, 22700);
    
    
   
 