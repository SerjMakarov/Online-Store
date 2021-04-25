let btn = document.getElementById('js-sandwich');
let menu = document.getElementById('js-sandwich-menu')
let btn_close = document.getElementById('js-btn-close');

btn.onclick = function(){
    if(menu.style.display == '' || 'none'){
        menu.style.display = 'block';
        console.log(menu.style.display)
    }
}

btn_close.onclick = function(){
    if(menu.style.display === 'block'){
        menu.style.display = 'none'
    }
}