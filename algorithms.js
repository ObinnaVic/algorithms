//FINACCI SEQUENCE

//Question 1: Given a number "n", find the first "n" elements of the fibonacci sequence:

console.time("fib1");
const fib = (n) => {
    let firstFibNum = [0, 1];
    let seq = [...firstFibNum];

    while (seq.length < n) {
        let add = firstFibNum[0] + firstFibNum[1];
        seq.push(add);
        firstFibNum.shift();
        firstFibNum.push(add);
    }

    return seq;
}
console.timeEnd("fib1"); //0.01ms 

console.log(fib(10));

//solution 2
console.time("fib2");
const fib2 = (n) => {
    let fibArr = [0, 1]; //---- O(1);
    while (fibArr.length < n) fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]) //----- O(n);

    return fibArr; //----- O(1);
}

console.timeEnd("fib2"); //0.007ms

console.log(fib2(10));


//FACTORIAL OF A NUMBER
//Question: Find the factorial of a given number "n";

const fact = (n) => {
    let result = 1; //----- O(1)
    for (let i = 1; i <= n; i++) result *= i; //----- O(n);       
    return result // ------ O(1);
}

console.log(fact(10));

//usig recursion to solve factorial
const fact2 = (n) => {
    if (n === 0) {
        return 1;
    }

    return n * fact2(n - 1);
}

console.log(fact2(10));


//PRIME NUMBERS
//Question: Given a number "n", find if the number is a prime number or not. Should return true or false;

const Prime = (n) => {
    return n < 2 ? false : (n % 2 != 0) //----- O(1);
}

console.log(Prime(12));



//POWER OF TWO
// Question: Given a positive integer "n", determine if the integer is a power of two or not: n === 2^X

const PowerOfTwo = (n) => {
    let i = 0; result = 0;
    while (result < n) {
        result = 2**i; //---------- O(n);
        i++
    }

    return result == n;
}

console.log(PowerOfTwo(64));

//using recursion to solve fibonacci sequences
const recursiveFib = (n) => {
    if (n < 2) {
        return n;
    }

    return recursiveFib(n - 1) + recursiveFib(n-2);
}

console.log(recursiveFib(10));


//SEARCH ALGORITHMS

//LINEAR SEARCH
//QUESTION: Given an array of "n" elements and a value "t", find the index of "t" in the array if found and -1 if "t" 
//is not found in the array.

const linSearch = (n, t) => {
    for (let i = 0; i < n.length; i++) {
        if (n[i] == t) {
            return result = i;
        } 
    }
    return -1
}

console.log(linSearch([1,2,3,4,5], 4));


//BINARY SEARCH
//QUESTION: Given an array of "n" elements and a value "t", find the index of "t" in the array if found and -1 if "t" 
//is not found in the array.

const binarySearch = (n, t) => {
    let leftIndex = 0
    let rightIndex = n.length - 1;
    while (leftIndex <= rightIndex) { //Keep calling running loop until n[middleIndex] === t or leftIndex > rightIndex
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (n[middleIndex] == t) {
            return middleIndex;
        } 
        if(n[middleIndex] > t) {
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1;
        }
    }

    return -1
}

console.log(binarySearch([1,2,3,4,5], 2));

//Using recursion to solve the binary search
const recursiveBS = (n, t) => {
    return searchArr(n, t, 0, n.length - 1);
}

const searchArr = (n, t, leftIndex, rightIndex) => { //Keep calling this function until n[middleIndex] === t or leftIndex > rightIndex
    if (leftIndex > rightIndex) {
        return -1;
    }

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (n[middleIndex] == t) {
        return middleIndex;
    }

    if (n[middleIndex] < t) {
        return searchArr(n, t, middleIndex + 1, rightIndex);
    } else {
        return searchArr(n, t, leftIndex, middleIndex - 1);
    }
}

console.log(recursiveBS([1,2,3,4,5], 4));


//BUBBLE SORT: Sorting numbers in assending order

const bubbleSort = (arr) => {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            let temp = arr[i + 1];
            arr[i + 1] = arr[i];
            arr[i] = temp;
            swapped = true;
        }   
    }
    } while (swapped);
    return arr
}

console.log(bubbleSort([2, -3, 1, -8, 5, 7, 4, 9]));


//INSERTION SORT 

const insertionSort = (arr) => {
    let newArr = [...arr];
    
    let swapped;
    
    do {
        let i = 0;
        swapped = false
        while (i <= arr.length - 2) {

            let nti = newArr[i + 1]
            
            let sorted = newArr[i];
            
            if (sorted < nti) {
            
                i += 1
            
            } else {
            
                newArr[i] = nti
            
                newArr[i + 1] = sorted; 
            
                i += 1
                swapped = true
            }
        }
    } while (swapped);
    return newArr;
}

console.log(insertionSort([2, -3, 1, -8, 5, 7, 4, 9]));


//QUICK SORT

const quickSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([2, -3, 1, -8, 5, 7, 4, 9]));



//MERGE SORT

const merge = (left, right) => {
    let result = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            result.push(left[0]);
            left.shift()
        } else {
            result.push(right[0]);
            right.shift();
        }
    }

    return result.concat(left).concat(right);
}

const sortArr = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    let half = Math.floor(arr.length / 2)
    
    let left = arr.slice(0, half);
    
    let right = arr.slice(half);
    
    return merge(sortArr(left), sortArr(right));

}

console.log(sortArr([2, -3, 1, -8, 5, 7, 4, 9]));