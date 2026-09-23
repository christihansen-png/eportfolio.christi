// A few things that actually help it stick:

// <  vs  >: wide/open side = bigger number. Narrow/pointy side = smaller number.
// Applying it to i < str.length:
// You're saying "i is smaller, str.length is bigger" — so the pointy side touches i (small), and the open/wide side touches str.length (big). That's exactly what < looks like: point on the left (touching i), open wide on the right (touching str.length).

// Type it yourself, don't copy-paste. Your fingers build muscle memory even before your brain fully "gets" it.
// Break everything into the same 3 questions: What goes in? (parameters) What happens to it? (the logic) What comes out? (return). Every function you've written today follows that exact shape.
// Expect the panic, then ignore it. The freeze-up before starting is just your brain flagging "unfamiliar," not "impossible." It fades with rep count, not with being smarter.

// BEGINNER CHALLENGES
// Question 1
// adding numbers

// function addition(num1,num2) {
//   return num1 + num2
// }

// console.log(addition(3, 5)) 

// Question 2
// Convert hours into Seconds

// function hourIntoSeconds(hours) {
//   return hours * 3600;
// }

// function hourIntoSeconds(hour) {
//   let minutes = hour * 60;
//   let seconds = minutes * 60;
//   return seconds;
// }

// console.log(hourIntoSeconds(2.5))
// console.log(hourIntoSeconds(24))

// Question 3
// calculate the perimeter of a rectangle

// function rectanglePerimeter(length, width) {
//   return 2 * (length + width);
// }

// console.log(rectanglePerimeter(6, 7));
// console.log(rectanglePerimeter(20, 10));
// console.log(rectanglePerimeter(2, 9));

// Question 4
// calculate the area of a triangle

// function triangleArea(base, height) {
//   return 0.5 * base * height;
// }

// console.log(triangleArea(3, 2))
// console.log(triangleArea(10, 10))
// console.log(triangleArea(20, 20))

// Question 5
// Write a function accepts a string and adds 'Frontend' onto the end of it.

// function addFrontend(str) {
//   return str + "frontend";
// }

// console.log(addFrontend('Apple'))
// console.log(addFrontend('Banana'))
// console.log(addFrontend('Orange'))

// Question 6
// Given two numbers, return true if the sum of both numbers is greater than 100. Otherwise, return false.

// function sumGreaterThan100(num1, num2) {
//   return num1 + num2 > 100;
// }

// console.log(sumGreaterThan100(20, 10))
// console.log(sumGreaterThan100(50, 60))
// console.log(sumGreaterThan100(100, -50))

// Question 7
// Write a function that accepts a number and returns true if it is less than or equal to zero, otherwise returns false.

// function lessOrEqualToZero(number) {
// return (number <= 0)
// }

// console.log(lessOrEqualToZero(10))
// console.log(lessOrEqualToZero(-10))
// console.log(lessOrEqualToZero(0))

// Question 8 
// Given a boolean (true or false), return the opposite boolean.

// an ! will give you the opposite of the boolean

// function oppositeBoolean(bool) {
// return !bool;
// }

// console.log(oppositeBoolean(true))

// Question 9
// Given ANY element, return true if it is NOT the number 0.

// function isNotZero(element) {
//   return element !== 0;
// }

// console.log(isNotZero(5))
// console.log(isNotZero(0))
// console.log(isNotZero(null))

// Question 10
// Given two numbers, return their remainder when divided by each other.

// function calcRemainder(num1, num2) {
//   return num1 % num2;
// }

// console.log(calcRemainder(4, 2))
// console.log(calcRemainder(7, 8))
// console.log(calcRemainder(9, 8))

// Question 11
// Given two numbers, return true if the number is odd.

// function returnOddTrue(number) {
//   return number % 2 === 1
// }

// console.log(returnOddTrue(15))
// console.log(returnOddTrue(2))
// console.log(returnOddTrue(3))

// Question 12
// Create a function that takes a number argument and returns 1 if the numbers is even. If the number is odd return -1.

// function booleanInteger(number) {
//   if (number % 2 !== 1) 
//   return 1
//   else {
//     return -1;
//   }
// }

// function booleanInteger(number) {
//   return number % 2 === 0 ? 1 : -1;
// }

// console.log(booleanInteger(1))
// console.log(booleanInteger(2))
// console.log(booleanInteger(5))

// Question 13
// Create a function that takes in two strings. If the first string is equal to 'LOGGED_IN' AND the second string is equal to 'SUBSCRIBED' return true, otherwise return false.

// function isLoggedInAndSubscribed(logged_in, subscribed) {
//   return logged_in === 'LOGGED_IN' && subscribed ==='SUBSCRIBED'
// }

// console.log(isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'))
// console.log(isLoggedInAndSubscribed('LOGGED_IN', 'UNSUBSCRIBED'))
// console.log(isLoggedInAndSubscribed('LOGGED_OUT', 'SUBSCRIBED'))

// Question 14
// Create a function that takes inf two strings. If the first string is equal to 'LOGGED_IN' OR the second string is equal to 'SUBSCRIBED' return true, otherwise return false.

// function isLoggedInOrSubscribed(loggedIn, subscribed) {
//   return loggedIn === "LOGGED_IN" || subscribed === "subscribed"
// }

// console.log(isLoggedInOrSubscribed('LOGGED_IN', 'NOTSUBSCRIBED'))
// console.log(isLoggedInOrSubscribed('LOGGED_IN', 'SUBSCRIBED'))
// console.log(isLoggedInOrSubscribed('LOGGED_OUT', 'SUBSCRIBED'))













// MEDIUM LEVEL CHALLENGES

// Question 1
// Given two values, return the first one it it is falsy, otherwise return the second one.

// function filterOutFalsy(element1, element2) {
//   if (!element1) {
//    return element1;
// }
//   else {
//    return element2;
// }
// }

// function filterOutFalsy(element1, element2) {
//   return (!element1) ? element1 : element2;
// }

// console.log(filterOutFalsy(0, 5));
// console.log(filterOutFalsy(10, 5));
// console.log(filterOutFalsy(null, 5));

// // Question 2
// // Given an array, return its length.
// // What's an array?
// // An array is a list of values, stored in order, inside square brackets [], indexes start at 0, not 1.

// function arrLenth(arr) {
//   return arr.length - 1
// }

// console.log(arrLength([2, 4, 6, 8]))

// function arrLength(arr) {
// return arr.length;
// }

// console.log(arrLength([1, 2, 3]));
// console.log(arrLength([1, 2, 3, 4, 5, 6]));

// // Question 3
// // Given an array, return the last element.
// // How do you find the LAST element, without knowing how long the array is ahead of time?
// // That's what arr.length is for — it tells you how many items are in the array. since indexes start at 0, the last valid index is always one less than the length. arr[arr.length - 1]

// function lastElem(arr) {
// return arr[arr.length - 1];
// }

// console.log(lastElem([0, 1, 2, 3]))
// console.log(lastElem([2, 3, 4, 5, 6, 7]))

// // Question 4
// // given an array, return the sum of every element.

// function arrSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; ++i) {
//     // This is how you loop through every element in an array.
//     sum = sum + arr[i];
//   }
//   return sum;
// }

// console.log(arrSum([2, 2, 2]))
// console.log(arrSum([100, 200, 500]))
// console.log(arrSum([0, -5, -10]))

// // Question 5 Add up the numbers from a single number
// // Given a number, add up all the numbers from one to the number that is given. E.g. An input of 4 will give you 1 + 2 + 3 + 4, which equals 10. 

// // One small note on ++i: that's called the increment operator — it's just shorthand for i = i + 1. You could write either one and it'd work the same inside a for loop.

// function progressiveSum(num) {
// let sum = 0;
// for (let i = 1; i <= num; ++i) {
//   sum = sum + i;
// }
// return sum
// }

// console.log(progressiveSum(3))

// // Question 6 Calculate the time
// // Given a number in seconds, return this number in mm:ss format.

// function calcTime(seconds) {
// // Math.floor() chops off everything after the decimal point, rounding down to the nearest whole number.
//   let timerMinutes = Math.floor(seconds / 60);
//   let timerSeconds = seconds % 60;
// // timerMinutes is 2 — a number. .toString() converts it to the string "2", and .length checks how many characters that string has. "2" has length 1, so the if is true, and it becomes '0' + 2, which is '02'.
//   if (timerMinutes.toString().length === 1) {
//     timerMinutes = '0' + timerMinutes;
//   }
//   if (timerSeconds.toString().length ===1) {
//      timerSeconds = '0' + timerSeconds
//   }

//   return timerMinutes + ':' + timerSeconds
// }

// console.log(calcTime(605))

// // Question 7 find the largest number
// // Given an array of numbers, return the largest number of that array

// // function findBiggestNumber(arr) {
// //   let biggest = arr[0];
// //   //i = 0 — start at the first index
// // // i < arr.length — keep going as long as i is a valid index (remember, valid indexes go from 0 to length - 1, so we use <, not <=, here — different from your progressiveSum loop!)
// // // ++i — move to the next index each time
// //   for (let i = 0; i < arr.length; ++i) {
// //     if (arr[i] > biggest) {
// //       biggest = arr[i]
// //     }
// //   }
// //   return biggest;
// // }

// function findBiggestNumber(arr) {
//   let max = arr[0];
//   for (let i = 1; i < arr.length; ++i) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// console.log(findBiggestNumber([-100, -200, -300]))
// console.log(findBiggestNumber([5, 12, 3, 8]))

// //Question 8 reverse a string
// // Given a string, return the reversed string

// //practice not working
// function reverseString (str) {
// let reverseString = '';
// for (let i = str.length - 1; i >= 0; --i) {
//   reverse = reverse + str[i];
// }
// return reverse
// }

// console.log('abc')
// console.log('David')
// console.log('This is cool')

// //practice

// function reverseString(str) {
//   let reversed = '';
//   for (let i = str.length - 1; i >= 0; --i) {
// reversed = reversed + str[i];
// }
// return reversed;
// }

// console.log(reverseString('abc'))
// console.log(reverseString('Christi'))
// console.log(reverseString('This is cool'))


// // incrementing for loop

// function reverseString(str) {
//   let reverseString = '';
// for (let i = 0; i < str.length; ++i) {
//   // This is how you loop through every character in a string
//   reverseString = str[i] + reverseString;
// }
// return reverseString
// }

// console.log(reverseString('abc'))
// console.log(reverseString('Christi'))
// console.log(reverseString('This is cool'))

// // decrementing for loop

// function reverseString(str) {
// let reverseString = '';
// for (let i = str.length - 1; i >= 0; --i) {
//   reverseString = reverseString + str[i];
// }
// return reverseString
// }

// console.log(reverseString('abc'))
// // console.log(reverseString('Christi'))
// // console.log(reverseString('This is cool'))


// // Converting a string into an array to reverse.

// // in order to convert a string to an array you need to use .split('') <- Keep string empty .split() breaks a string apart into an array, cutting at whatever you put inside the parentheses. Passing an empty string '' tells it "cut between every single character." So 'abc' becomes an array of its individual letters: ['a', 'b', 'c'].
// // This matters because strings don't have a built-in .reverse() method — but arrays do! So this step exists just to convert your string into something you can reverse.

// // ['a', 'b', 'c'].reverse() // ['c', 'b', 'a']
// // This is a built-in array method that flips the order of the array in place — first becomes last, last becomes first. No loop needed; JavaScript does the looping internally for you.

// // ['c', 'b', 'a'].join('') // 'cba'
// // .join() does the opposite of .split() — it takes an array and glues all the elements back into a single string. Passing '' means "glue them with nothing in between" (no spaces, no commas).

// // 'abc'.split('').reverse().join('') // 'cba'
// // Each method runs on the result of the one before it — string → array → reversed array → string again.

// // Quick check: based on what .split('') and .join('') do, what do you think 'hello world'.split(' ') would give you back?

// //'hello world'.split('')   // cuts between every character
// //'hello world'.split(' ')  // cuts at every SPACE character

// // Notice the difference: one has nothing between the quotes (''), the other has an actual space between the quotes (' ') — same tricky thing you ran into earlier with reversed = ' ' vs reversed = ''!

// // So this time, .split(' ') tells JavaScript: "cut the string apart wherever you see a space, and throw the spaces away."

// // 'hello world' has one space, right between hello and world.
// // 'hello world'.split(' ') // ['hello', 'world']

// //Quick recap of the three methods from the screenshot, now that you've worked through all of them:

// // .split(separator) → string → array (cutting wherever separator appears)
// // .reverse() → array → array (flips the order)
// // .join(separator) → array → string (glues pieces back together with separator in between)

// function reverseStrings(str) {
//   return str.split('').reverse().join('');
// }

// console.log(reverseStrings('Christi'));

// // Question 9 Turn every element in an array into 0
// //Given an array of elements, return the same length array filled with 0's.
// // 1. start → let i = 0
// // 2. condition → i < element.length
// // 3. step → ++i

// // Using a for loop

// function convertToZeros(element) {
//   for (let i = 0; i < element.length; ++i) {
//     element[i] = 0;
//   }
//   return element
// }

// console.log(convertToZeros([5, 100, 0]))

// // Using array '.fill'
// function convertToZero(arr) {
//   return new Array(arr.length).fill(0);
// }

// console.log(convertToZero([1, 2, 3]))

// // Using Array 'map'
// // .map(elem => elem * 2) => ES6 has an invisable return inside of it
// // .map() — takes an array, does something to every item, and gives you back a new array of the same length with the results.

// function convertToZero (arr) {
//   return arr.map(elem => 0)
// }

// console.log(convertToZero([1, 2, 3]))

// // Question 10 Filter out all the apples
// // Given and array of fruits, if it is an apple remove it from the array.

// // Using a for loop

// // Made with David
// function removeApples(arr) {
//   let noApples = []
//   for (let i =0; i < arr.length; ++i) {
//     if (arr[i] !== 'Apple') {
//       noApples.push(arr[i]); // .push is how you add an element to an array
//     }
//   }
//   return noApples
// }

// // made with claude
// // function removeApples (str) {
// // for (let i = 0; i < str.length; ++i) {
// //   if (str[i] === 'Apple') {
// //    str.splice(i, 1)
// //   }
// // }
// // return str;
// // }

// console.log(removeApples(['Banana', 'Apple', 'orange', 'Apple']))
// console.log(removeApples(['Tomato', 'Apple', 'orange',]))
// console.log(removeApples(['Banana', 'orange', 'Apple']))

// // using an Array 'filter'
// // What is .filter()?
// // It's a built-in array method — similar to .map(), .filter() goes through every item in an array and asks a yes/no question about each one. If the answer is true, the item stays in a new array; if false, it gets left out.

// // using David -- one liner
// function removeApples(arr) {
//   return arr.filter(elem => elem !== 'Apple')
// }

// using AI -- long code 
// function removeApples (str) {
//   // let filtered names it so you can call it in the return statement
//   let filtered = str.filter(function(fruit) {
//     return fruit !== 'Apple';
//   })
//   return filtered;
// }

// console.log(removeApples(['Banana', 'Apple', 'orange', 'Apple']))
// console.log(removeApples(['Tomato', 'Apple', 'orange',]))
// console.log(removeApples(['Banana', 'orange', 'Apple']))

// Question 11 Filter out all the falsy values
// Given an array of values, filter out all the falsy values and only return the truthy values.

// - using for loop

// function filterOutFalsy(arr) {
// let truthyArr = [];
// for (let i = 0; i < Array.length; ++i) {
//   if (!!arr[i] === true) {
//     truthyArr.push(arr[i]);
//   }
// }
// return truthyArr;
// }

// console.log(filterOutFalsy(["", 0, 500, null, undefined, "0"]))

// - using Array filter

// function filterOutFalsy(arr) {
// return arr.filter(elem => !!elem === true)
// }

// console.log(filterOutFalsy(["",[], 0, null, undefined, "0"]))
// console.log(filterOutFalsy(['Tomato', 'Orange', 'Banana', false]))
// console.log(filterOutFalsy(['Apple', 'Orange', 'Banana']))

// By myself...

//solution 1 - For loop
// function filterOutFalsy(arr) {
//   let truthyArr = []
// for (let i = 0; i < arr.length; ++i) {
// if (!!arr[i] === true) {
// truthyArr.push(arr[i]);
// }
// }
// return truthyArr
// }

// console.log(filterOutFalsy(['Tomato', 'Orange', 'Banana', null]))

// // solution 2 - Array 'filter'
// function filterOutFalsy(arr) {
// return arr.filter(elem => !!elem === true)
// }

// console.log(filterOutFalsy(['Tomato', 'Banana', false, null]))

// Question 12 Truthy to true, falsy to false
// Given an array of truthy and falsy values, return the same array of elements into its boolean value.

// function convertToBoolean(arr) {
//   return arr.map(function(elem) {
// return !!elem
// })
// }

// console.log(convertToBoolean([500, 0, "David", "", []]))

// A shorthand version, called an "arrow function":

// javascript
// arr.map(elem => !!elem)

// Look closely — this shorthand:

// Drops the word function
// Adds => (an arrow, made of = and >) right after the parameter
// Drops the curly braces AND the return keyword entirely, IF the whole thing fits on one line as a single expression

// This is likely what your instructor meant by "built-in return" — in this one-line arrow function shorthand, there's no visible return keyword, but JavaScript automatically treats whatever comes after the => as the value to give back. The return is implied, not typed.

// function convertToBooleans(arr) {
// return arr.map(elem => !!elem)
// }

// console.log(convertToBooleans([500, 0, "David", "", []]))








// JavaScript Challenges - Hard

// Question 1 Show rating

// Given a rating, display a star (*) for each full rating and a full-stop (.) for each half rating.

// Done with David
// function showRating(rating) {
//   let ratings = "";
// for (let i = 0; i < Math.floor(rating); ++i) {
//   ratings = ratings + "*"
//   if (i !== Math.floor(rating) -1) {
//     ratings = ratings + " "
//   }
// }
// if (!Number.isInteger(rating)) {
//   ratings = ratings + " .";
// }
// return ratings;
// }

// console.log(showRating(3.5));

// Shorthand

// function showRating(rating) {
//   let ratings = "";
// for (let i = 0; i < Math.floor(rating); ++i) {
//   ratings += "*"  //use += instead of ratings = ratings + "*"
//   if (i !== Math.floor(rating) -1) {
//     ratings += " "  //use += instead of ratings = ratings + " "
//   }
// }
// if (!Number.isInteger(rating)) {
//   ratings += " .";  //use += instead of ratings = ratings + " ."
// }
// return ratings;
// }

// console.log(showRating(3.5));


// // Done by myself
// function showRatings(rating) {
//   ratings = "";
//   for (let i = 0; i < Math.floor(rating); ++i) {
//     ratings = ratings + "*"
//     if (i !== Math.floor(rating) -1) {
//       ratings = ratings + " "
//     }
//   }
//   if (!Number.isInteger(rating)) {
//     ratings = ratings + " ."
//   }
//   return ratings;
// }

// console.log(showRatings(3))
// console.log(showRatings(4.5))
// console.log(showRatings(.5))




// Question 2 Sort by lowest to highest Price
//

// function sortLowToHigh(numbers) {
// return numbers.sort((a, b) => a - b);
// }

// console.log(sortLowToHigh([1, 5, 0, 10, 4]))




// Question 3 Sort by highest to lowest price

// Given an array of objects, return the prices sorted by high to low.

// function sortHighToLow(numbers) {
// return numbers.sort((a, b) => b.price - a.price);
// }

// console.log(sortHighToLow([6, 30, 20, 100])) 


// console.log(sortHighToLow([
//   {id: 1, price: 50},
//   {id: 2, price: 30},
//   {id: 3, price: 60},
//   {id: 4, price: 10},
// ]))

// console.log(sortHighToLow([
//   {id: 1, price: 50},
//   {id: 2, price: 30},
//   {id: 3, price: 60},
//   {id: 4, price: 10},
// ]))




// Question 4 Promises
// watch on Youtube

// async/await = async  = makes a function return a Promise
//               await  = makes an async function wait for a Promise

// Allows you to write asynchronous code in a synchronous manner Async doesn't have resolve or reject parameters Everything after wait is placed in an event queue.
// i loved JavaScript ASYNC/AWAIT is easy -By Bro Code- On Youtube better



// Question 5 Find all the posts by a single user

// Call this API "https://jsonplaceholder.typicode.com/posts" and return all the posts by any given user Id .


// function postByUser(userId) {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(res => console.log(res))
//   console.log(userId)
// }

// function postByUser(userId) {
//   fetch("https://jsonplaceholder.typicode.com/posts")
// .then(res => {
//   console.log(res)
//   console.log(userId)
// })
// }

// async function postByUser(userId) {
//   const promise = await fetch("https://jsonplaceholder.typicode.com/posts")
//   console.log(promise)
// }

// async function postByUser(userId) {
//   const promise = await fetch("https://jsonplaceholder.typicode.com/posts")
//   console.log(await promise.json()) // need to convert it to something JS can read using .json()
// }

// async function postByUser(userId) {
//   const promise = await fetch("https://jsonplaceholder.typicode.com/posts")

//   const result = await promise.json()

//   console.log(result)
// }

// async function postByUser(userId) {
//   const promise = await fetch("https://jsonplaceholder.typicode.com/posts")

//   const result = await promise.json()
//  // waiting finished

//const posts = result.filter(element => element.userId ===userId)
// // we have have results so we filter the ones we want

// console.log(posts)
// }

// postByUser(5);


//What is fetch?

// fetch(url) reaches out to the internet and requests data from that URL — like your browser loading a webpage, but for raw data instead of a full page. It doesn't return the data immediately — network requests take time (milliseconds, but still time), so JavaScript can't just pause and wait around by default.

// So what does fetch actually give you back right away?

// A Promise — think of it like a claim ticket at a dry cleaner. You don't get your clothes (the data) right when you hand over the ticket; you get a promise that the clothes will be ready eventually.

// This is where await comes in.

// await says: "pause right here until this Promise is actually finished, then give me the real result." Without await, you'd just be holding the claim ticket, not the actual data.


// Question 6 First 6 incomplete Todos

// Call this API "https://jsonplaceholder.typicode.com/todos" and return the first 6 incomplete todo's from the result.

// async function firstSixIncomplete() {
//   const promise = await fetch("https://jsonplaceholder.typicode.com/todos")

//   const result = await promise.json();

//   const incomplete = result.filter(todo => !todo.completed);

//   let firstSix = incomplete.slice(0, 6);

//   return firstSix;
// }

// // console.log(await firstSixIncomplete());
// firstSixIncomplete().then(result => console.log(result))