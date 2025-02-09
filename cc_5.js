// Task 1-
let customer = { 
    name: "Nancy Franklin", 
    age: "22", 
    email: "nancyfranklin@gmail.com"
};

console.log("Customer Name:", customer);

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


//Task 4-

// Declares array for prices
let prices = ["100", "200", "300"];

// 10% discount is applied to price
let discountedPrices = prices.map(price => price * 0.9);

console.log("Original Prices: ", prices);
console.log("Discounted Prices: ", discountedPrices);

//Task 5-Filter Method

// Declares an array with prices
let inventory = ["5", "0", "12", "8", "0"];
inventory = prices.filter(price => price= "0");
console.log(inventory); // [400]

//Task 6- Reduce Method

let sales = [500, 300, 200, 400]
sales = sales.reduce((total, sale) => total + sale, 0);
console.log(sales); //

// Task 7- find () Method

let customers =  ["Alice", "Bob", "Charlie", "David"]



//Task 8-
function calculateTax(amount, taxRate) {
    return amount * taxRate;
 }
 let tax = calculateTax(300, 0.10);
 console.log(`Calculated tax: $${tax}`);


 //Task 9-
const applyDiscount = function(price, discount) {
    return price - (price * discount / 100);
 };
 let discountedPrice = applyDiscount(100, 10);
 console.log(`Discounted price: $${discountedPrice}`);


//Task 10 -
const calculatePoints = purchaseAmount => purchaseAmount / 10;
let points = calculatePoints(150);
console.log(`Earned points: ${points}`);