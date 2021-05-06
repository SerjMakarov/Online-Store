let btn = document.getElementById('js-sandwich');
let menu = document.getElementById('js-sandwich-menu');
let btn_close = document.getElementById('js-btn-close');
let menu_filter = document.getElementById('js-filter-menu');
let btn_filter = document.getElementById('js-btn-filter');
let btn_filter_close = document.getElementById('js-btn-filter-close');
let btn_param = document.getElementById('js-btn-param');
let menu_param = document.getElementById('js-menu-param');
let pattern_email = document.getElementById('js-pattern-email');
let btn_subscribe = document.getElementById('btn-subscribe');
let line_1 = document.getElementById('line-1');
let line_2 = document.getElementById('line-2');
let line_3 = document.getElementById('line-3');

btn_subscribe.addEventListener('click', function(e) {
    e.preventDefault();
    down();
  }, false);


function down(){
    let pattern = /^\w+@[A-Za-z_]+?\.[A-Za-z]{2,3}$/gm;
    let email = pattern_email.value.match(pattern)

    if(email === null){
        pattern_email.style.border = '1px solid red'
    }

    if(email){
        pattern_email.style.border = '1px solid green'
    }
}

btn.onclick = function(){
    if(menu.style.display === '' || 'none'){
        menu.style.display = 'block';
        line_1.className = 'anime-sandwich_1';
        line_2.className = 'anime-sandwich_2';
        line_3.className = 'anime-sandwich_3';
        console.log(menu.style.display)
    }
}

btn_close.onclick = function(){
    if(menu.style.display === 'block'){
        line_1.className = 'anime-sandwich_1end';
        line_2.className = 'anime-sandwich_2end';
        line_3.className = 'anime-sandwich_3end';
        menu.style.display = 'none'
    }
}

btn_filter.onclick = function(){
    if(menu_filter.style.display === '' || 'none'){
        menu_filter.style.display = 'block'
    }
}

btn_filter_close.onclick = function(){
    if(menu_filter.style.display === 'block'){
        menu_filter.style.display = 'none'
    }
}

btn_param.onclick = function(){
    console.log('a')
    if(menu_param.style.display === '' || 'none'){
        menu_param.style.display = 'block'
    }
}