let elList = document.querySelector('.js-product-list');
let arElList = Array.from(elList.children);
arElList.pop();

for(i = 0; arElList.length > i; i++){
    if(arElList[i].classList[0] == 'js-card-product'){
        arElList[0].style.display = 'none';
    }  else {
        elList.children[0].style.display = 'block';
    }
}