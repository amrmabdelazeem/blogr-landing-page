const menuIcon = $(".menu-icon");
const menu = $(".menu");
const hamIcon = './images/icon-hamburger.svg';
const closeIcon = './images/icon-close.svg'
const product = $(".product");
const productMenu = $(".product-menu");
const company = $(".company");
const companyMenu =$(".company-menu");
const connect = $(".connect");
const connectMenu =$(".connect-menu");

menuIcon.on("click", ()=>{
    if(menuIcon.attr("src") === hamIcon){
        menu.fadeIn();
        menuIcon.attr("src", closeIcon);
    }else{
        menu.fadeOut();
        menuIcon.attr("src", hamIcon).fadeIn();
    }
})

product.on("click", ()=>{
    productMenu.toggleClass("show");
    $(".product img").toggleClass("flip");
})
company.on("click", ()=>{
    companyMenu.toggleClass("show");
    $(".company img").toggleClass("flip");
})
connect.on("click", ()=>{
    connectMenu.toggleClass("show");
    $(".connect img").toggleClass("flip");
})