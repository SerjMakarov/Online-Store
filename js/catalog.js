let elBtnAddBasket = document.querySelectorAll('.js-btn-add');
// console.log(elBtnAddBasket[0]);

let goods = [{
    id: 1000, 
    name: 'Куртка', 
    description: 'Новая модная куртка',
    price: 500,
    url_images: 'photo-1.jpg', 
    description_images: 'photo man',
},
{
    id: 1001, 
    name: 'Брюки', 
    description: 'Новая модная куртка',
    price: 100,
    url_images: 'photo-4.jpg', 
    description_images: 'photo man',
},
{
    id: 1002, 
    name: 'Шорты', 
    description: 'Новая модная куртка',
    price: 50,
    url_images: 'photo-3.jpg', 
    description_images: 'photo man',
},
{
    id: 1002, 
    name: 'Шорты', 
    description: 'Новая модная куртка',
    price: 50,
    url_images: 'photo-3.jpg', 
    description_images: 'photo man',
}]

class Catalog {
    _list_goods;
    _count = 0;
    list_goods = [];

    constructor(arGoods){
        this._list_goods = arGoods;
        this.addGoodInCatalog();
    }

    addGoodInCatalog(){
        let elCatalog = document.querySelector('.js-offer-ticket-body');
        for(this._count = 0; this._list_goods.length > this._count; this._count++){
            let good = new Good(this._list_goods[this._count]);
            elCatalog.innerHTML += good._body;
            this.list_goods.push(good);
        }
    }

    getListGoods(){
        return this.list_goods;
    }
}

class Good {
    _id;
    _name;
    _description;
    _price;
    _url_images;
    _description_images;
    _body;

    constructor(obj){
        this._id = obj.id;
        this._name = obj.name;
        this._description = obj.description;
        this._price = obj.price;
        this._url_images = obj.url_images;
        this._description_images = obj.description_images;
        this._body = this.createBodyGood();
    }

    createBodyGood(){
        let bodyGood = `<div class="ticket">
                            <div class="ticket-head">
                                <div class="ticket-hidden">
                                    <a href="#" class="js-btn-add btn--rectangle"><img src="../img/ticket-add-basket.svg" alt="add in basket">Add to Cart</a>
                                </div>
                                <img src="../img/${this._url_images}" alt="${this._description_image}">
                            </div>
                            <div class="ticket-footer">
                                <h3>${this._name}</h3>
                                <p>${this._description}</p>
                                <span class="price">${this._price}$</span>
                            </div>
                        </div>`;

        return bodyGood;
    }

    addBasket(){
        let bodyGood = `<div class="js-card-product card-product">
                            <div class="head">
                                <img src="../img/${this._url_images}" alt="${this._description_image}">
                            </div>
                            <div class="footer">
                                <div class="propertes-product">
                                    <div class="propertes">
                                        <h2 class="name-propertes name-product">${this._name}</h2>
                                        <img src="../img/close-head-menu.svg" alt="closed">
                                    </div>
                                    <div class="propertes">
                                        <p class="name-propertes">Price:</p>
                                        <span class="value-propertes price">$${this._price}</span>
                                    </div>
                                    <div class="propertes">
                                        <p class="name-propertes">Color:</p>
                                        <span class="value-propertes color">Red</span>
                                    </div>
                                    <div class="propertes">
                                        <p class="name-propertes">Size:</p>
                                        <span class="value-propertes size">XL</span>
                                    </div>
                                    <div class="propertes">
                                        <p class="name-propertes">Quantity:</p>
                                        <input class="value-propertes quantity" type="text" value="0">
                                    </div>
                                </div>
                            </div>
                        </div>`;

       let elListBasket = document.querySelector('.js-product-list');
       elListBasket.innerHTML = bodyGood;
    }
}


let catalog = new Catalog(goods);

catalog.getListGoods();

for(i = 0; elBtnAddBasket.length > i; i++){
    elBtnAddBasket[i].addEventListener('click', function(){
    });
}