const coupons = [                           //List of coupon codes and discount %
    {name:"LENOVO2022", discount:15},
    {name:"FREEWEEKEND", discount:12},
    {name:"WEARECRAZY20", discount:40},
]

//This function validates if the coupon code submitted by the user valid,
//and returns the discount % if it is

var extraDiscount = 0;      //Initializes the additional discount in zero.
                            //if user validates a discount code, extra discount gets that discount

function validCoupon() {
    const couponID = document.getElementById("InputCoupon");
    const couponTAG = couponID.value;                               //gets user input code
    var validCouponAsk = coupons.some(function(coupons) {           //searches for user input among coupons list and
        return coupons.name == couponTAG});                         //returns true if it was found
    if (validCouponAsk == true) {
        var discountIn = coupons.find(function(coupons) {           //searches by coupon name and returns discount %
        return coupons.name == couponTAG});
        var discountPerc = discountIn.discount;
        validation = "Valid coupon!  " + discountPerc + "% off"     //if coupon is found, user gets this message
    }
    else
    {
        validation = "Invalid coupon!"  
        discountPerc = 0;                            //else if coupon not found, user gets this message
    }
    const validCoupon = document.getElementById("validCoupon");
    validCoupon.innerText = validation;                             //prints the messages in the html structure
    return extraDiscount = discountPerc;                            //asigns a discount to extraDiscount if user validated one
}

function calcularPrecioDescuento(precio, descuento) {                                   //calculates the price with discounts
    const precioConDescuento = precio * (100 - descuento - extraDiscount) / 100;
    return precioConDescuento;
}

//
function clickPriceButton() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;
    const precioConDescuento = calcularPrecioDescuento(priceValue, discountValue);
    const resultP = document.getElementById("resultP");
    resultP.innerText = "Your total is: $" + precioConDescuento;
}



