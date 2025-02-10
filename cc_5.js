// Task 1-
let customer = { 
    name: "Nancy Franklin", // name of customer
    age: "22", //age of customer
    email: "nancyfranklin@gmail.com" // email of customer
};

// logging the name of the customer
console.log(`name: ${customer.name}`);// logging the name of the customer

console.log(`age: ${customer.age}`);// logging the age of the customer

console.log(`email: ${customer.email}`);// logging the age of the customer


// Task 2-

let orders = {
     orderId: 12345, 
     totalAmount: 150, 
     status: "Processing" 
};


//Task 3-
let cartItems = ["Dress", "Sneakers", "Airpods"];

cartItems.push("Skateboard");

cartItems.pop();

cartItems.unshift("Wig")

cartItems.shift

console.log("Updated Cart Items:", cartItems);
// entire log for shopping car


//Task 4-

// Declares array for prices
let prices = ["100", "200", "300"];

// 10% discount is applied to price
let discountedPrices = prices.map(price => price * 0.9);

console.log("Original Prices: ", prices);
console.log("Discounted Prices: ", discountedPrices);

// entire log for price adjustment

//Task 5-Filter Method

// Declares an array with prices
let inventory = ["5", "0", "12", "8", "0"];
inventory = prices.filter(price => price= "0");
console.log(inventory); // [400]

// log for product availability 

//Task 6- Reduce Method

let sales = [500, 300, 200, 400]
sales = sales.reduce((total, sale) => total + sale, 0);
console.log(sales); //

// log for revenue calculation

// Task 7- find () Method

let customers =  ["Alice", "Bob", "Charlie", "David"]



//Task 8-
function calculateTax(amount, taxRate) {
    return amount * taxRate;
 }
 let tax = calculateTax(300, 0.10);
 console.log(`Calculated tax: $${tax}`);

//tax calculation log 

 //Task 9-
const applyDiscount = function(price, discount) {
    return price - (price * discount / 100);
 };
 let discountedPrice = applyDiscount(100, 10);
 console.log(`Discounted price: $${discountedPrice}`);

// discount application log 

//Task 10 -
const calculatePoints = purchaseAmount => purchaseAmount / 10;
let points = calculatePoints(150);
console.log(`Earned points: ${points}`);

//loyalty points log