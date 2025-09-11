"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPizzaDetail = getPizzaDetail;
var cashInRegister = 100;
var nextOrderId = 1;
var nextPizzaId = 1;
var orderHistory = [];
var menu = [
    { id: nextPizzaId++, name: 'Margherita', price: 12 },
    { id: nextPizzaId++, name: 'Pepperoni', price: 14 },
    { id: nextPizzaId++, name: 'Hawaiian', price: 16 },
    { id: nextPizzaId++, name: 'Veggie', price: 15 },
];
function addNewPizza(pizzaObj) {
    var newPizza = __assign({ id: nextPizzaId++ }, pizzaObj);
    menu.push(newPizza);
    return newPizza;
}
addNewPizza({ name: 'Chicken Bacon Ranch', price: 18 });
addNewPizza({ name: 'BBQ CHicken', price: 16 });
addNewPizza({ name: 'Spicy Sausage', price: 15 });
function getPizzaDetail(identifier) {
    if (typeof identifier === 'string') {
        return menu.find(function (pizza) { return pizza.name.toLowerCase() === identifier.toLowerCase(); });
    }
    else if (typeof identifier === 'number') {
        return menu.find(function (pizza) { return pizza.id === identifier; });
    }
    else {
        throw new TypeError('Parameter `identifier` mujst be either a string or a number ');
    }
}
function placeOrder(pizzaName) {
    var selectedPizza = menu.find(function (pizzaObj) { return pizzaObj.name === pizzaName; });
    if (!selectedPizza) {
        console.log("".concat(pizzaName, " does not exist in the menu "));
        return;
    }
    cashInRegister += selectedPizza.price;
    var newOrder = {
        id: nextOrderId++,
        pizza: selectedPizza,
        status: 'ordered',
    };
    orderHistory.push(newOrder);
    return newOrder;
}
function completeOrder(orderId) {
    var order = orderHistory.find(function (order) { return order.id === orderId; });
    if (!order) {
        console.log("Order ".concat(orderId, " does not exist"));
        return;
    }
    order.status = 'completed';
    return order;
}
placeOrder('Chicken Bacon Ranch');
completeOrder(1);
console.log('Menu:', menu);
console.log('Cash in register:', cashInRegister);
console.log('order queue:', orderHistory);
