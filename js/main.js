let btn = document.getElementById('js-sandwich');
let menu = document.getElementById('js-sandwich-menu');
let btn_close = document.getElementById('js-btn-close');
let menu_filter = document.getElementById('js-filter-menu');
let btn_filter = document.getElementById('js-btn-filter');
let btn_filter_close = document.getElementById('js-btn-filter-close');
let btn_param = document.getElementById('js-btn-param');
let menu_param = document.getElementById('js-menu-param');

btn.onclick = function(){
    if(menu.style.display === '' || 'none'){
        menu.style.display = 'block';
        console.log(menu.style.display)
    }
}

btn_close.onclick = function(){
    if(menu.style.display === 'block'){
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
