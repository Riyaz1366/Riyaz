//1.Print odd numbers in an array

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i of numbers) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

//2.Convert all the strings to title caps in a string array

let stringArray = ["hello", "world", "javascript", "example"];
let titleCapsArray = [];

for (let i = 0; i < stringArray.length; i++) {
  let string = stringArray[i];
  let titleCapsString = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  titleCapsArray.push(titleCapsString);
}

console.log(titleCapsArray);
// Output: ["Hello", "World", "Javascript", "Example"]


//3.Sum of all numbers in an array


let arr = [1, 2, 3, 4, 5];
let sum = 0;

for (let i=0; i<arr.length; i++){

    sum += arr[i];
}

console.log(sum);

//4.Return all the prime numbers in an array


let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
let primeNumbers = [];

for (let num of numbers) { 
  let isPrime = true;
  if (num === 1) {
    isPrime = false;
  } else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
  }

  if (isPrime) {
    primeNumbers.push(num);
  }
}

console.log(primeNumbers);

//5.Return all the palindromes in an array


let words = ["level", "racecar", "hello", "noon", "wow"];

function findPalindromes(arr) {
  let palindromes = [];

  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    let reversed = '';

    for (let j = word.length - 1; j >= 0; j--) {
      reversed += word[j];
    }

    if (reversed === word) {
      palindromes.push(word);
    }
  }

  return palindromes;
}


let palindromes = findPalindromes(words);
console.log(palindromes);


//6.Return median of two sorted arrays of the same size.


let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];

let mergedArray = arr1.concat(arr2);
mergedArray.sort((a, b) => a - b);

let length = mergedArray.length;
let middleIndex = Math.floor(length / 2);

let median;
if (length % 2 === 1) {
  median = mergedArray[middleIndex];
} else {
  median = (mergedArray[middleIndex - 1] + mergedArray[middleIndex]) / 2;
}

console.log(median); 

//7. Remove duplicates from an array


let array = [1, 2, 3, 3, 4, 5, 5];
let uniqueArray = [...new Set(array)];

console.log(uniqueArray); 

//8. Rotate an array by k times

let array = [1, 2, 3, 4, 5];
let k = 3;

let n = array.length;
let rotations = k % n; 

for (let i = 0; i < rotations; i++) {
  let lastElement = array.pop(); 
  array.unshift(lastElement); 
}

console.log(array); 





                                             //using Arrow Function.

  //1.Print odd numbers in an array
         

const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Numbers.forEach(num => {
  if (num % 2 !== 0) {
    console.log(num);
  }
});



//2.Convert all the strings to title caps in a string array

const stringArray = ["hello", "world", "javascript", "example"];

const titleCapsArray = stringArray.map(str => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
});

console.log(titleCapsArray);


//3.Sum of all numbers in an array


let numberArray = [1, 2, 3, 4, 5];

let sum = numberArray.reduce((a, b) => a + b);

console.log(sum);



//4. Return all the prime numbers in an array

let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let isPrime = num => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

let primeNumbers = numberArray.filter(num => isPrime(num));

console.log(primeNumbers); 



//5. Return all the palindromes in an array

let stringArray = ["hello", "level", "world", "radar", "javascript", "noon"];

let isPalindrome = str => {
  let reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
};

let palindromeArray = stringArray.filter(str => isPalindrome(str));

console.log(palindromeArray); 







