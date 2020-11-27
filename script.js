/*** Add JavaScript code here ***/
/* Task 1 */
console.log("External Javascript")

/* Task 2 */
function sumOfArray(numbers_array) {

    let sum = 0
    numbers_array.forEach(item => {
        sum=sum+item
    });
    return sum;
    
}

// Executing the function to check implementation
let sum = sumOfArray([12, 32, 1, 2])
console.log('sum', sum)

/* Task 3 */
function isValidEmail(email_string) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email_string)
}

let validity1 = isValidEmail('test')
let validity2 = isValidEmail('test@test.com')
console.log('invalid', validity1)
console.log('valid', validity2)

/* Task 4 */
//paste the library array here first

var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];
 
const getReadingStatus = (index) => {
    return library[index].readingStatus
}

console.log(getReadingStatus(0))
console.log(getReadingStatus(2))

/* Task 5 */
//paste the cart array here first

var cart = [ 
    {
        name: 'Shoes',
        price: 560,
        quantity: 4
    },
    {
        name: 'Regular Tee',
        price: 455.50,
        quantity: 6
    },
    {
        name: 'Socks',
        price: 65.99,
        quantity: 2
    }];
 

/* Task 5a */
const addItemToCart = (cart, item) => {
    cart.push(item)
    return cart
}
console.log(addItemToCart(cart, {
    name: 'Notebook',
    price: 12,
    quantity: 20
}))

/* Task 5b */
const sortCart = (cart, property_name) => {
    cart.sort((a, b) => 
        a[property_name] < b[property_name] ? -1 : 
        a[property_name] > b[property_name] ? 1 : 0
    );
    return cart;
}

console.log(sortCart(cart, 'name'))


/* Task 5c */
const findByName = (cart, keyword) => {
    return cart.filter(item => item.name.toLowerCase().includes(keyword.toLowerCase()));
}

console.log(findByName(cart, 'sh'));

/* Task 5d */
const calculateTotalCost = (cart) => {
    let sum = 0.0;
    cart.forEach(item => {
        sum += item.price*item.quantity;
    });
    return sum;
}

console.log(calculateTotalCost(cart))



///////////
/* !Caution!
------------
 Don't remove this line of code, this is required for autograding */
module.exports = { sumOfArray, isValidEmail, getReadingStatus, addItemToCart, sortCart, findByName, calculateTotalCost }
