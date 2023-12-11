const menuIcon = $(".menu-icon");
const menu = $(".menu");
const hamIcon = './images/icon-hamburger.svg';
const closeIcon = './images/icon-close.svg'
const menuItem = $(".product");
const itemList = $(".product-menu");

menuIcon.on("click", ()=>{
    if(menuIcon.attr("src") === hamIcon){
        menu.fadeIn();
        menuIcon.attr("src", closeIcon);
    }else{
        menu.fadeOut();
        menuIcon.attr("src", hamIcon).fadeIn();
    }
})

menuItem.on("click", ()=>{
    $(".title img").toggleClass("flip");
    itemList.toggleClass("show");
})