const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function (meal) {
        this.orders.push(meal);
    },
    getOrders: function () {
        this.orders.values;
    }
}
const chickenComboMeal = {
    sandwhichType: "Chicken",
    fries: true,
    drinkSize: "Medium"
}
const cheeseBurgerComboMeal = {
    sandwhichType: "Beef",
    fries: true,
    drinkSize: "Large"
}
const veganComboMeal = {
    sandwhichType: "Vegan",
    fries: false,
    drinkSize: "Medium"
}
const fishComboMeal = {
    sandwhichType: "Fish",
    fries: true,
    drinkSize: "Large"
}
// Place an order
restaurant.placeOrder();

// Invoke the function to return the list of all orders
restaurant.getOrders();
// Output all orders to the console using console.table()
console.table(orders);