//  Selector universal

const $ = function (selector) {
    return document.querySelector(selector);
}


//  selector All Q
const $$ = function (selector) {
    return document.querySelectorAll(selector);
}