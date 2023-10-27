<div align="center">
  <h1> Data Structures and Algorithms </h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/victor-n77/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/NkireVictor">
  <img alt="Twitter Follow" src="https://twitter.com/NkireVictor">
  </a>

  <sub>Author:
  <a href="https://www.linkedin.com/in/victor-n77/" target="_blank">Victor Nkire</a><br>
  <small> October, 2023</small>
  </sub>
</div>


//-------------------------------------------------------ALGORITHMS-----------------------------------------------------

// An Algorithm is a set of well-defined instructions to solve a particular problem.

// INPUT ---------> ALGORITHM --------> OUTPUT

//Characteristics of Algorithms

//1) Well defined inputs and Outputs
//2) Each step should be clear and unambiguous
//3) Language independence


//------------------------------------------------------Time And Space Complexity----------------------------------------

//1) Time Complexity: This is the amount of time taken by an algorithm to run
//2) Space Complexity: This is the amount of memory taken by an algorithm to run

//------------Asymptotic notation---------------: 
// This is a mathematical tool to represent time and space complexity. It includes:

//1) BIG-O NOTATION (O-notation): This signifies the worst case complexities.
//2) OMEGA NOTATION : This signifies the best case complexities.
//3) THETA NOTATION : This signifies the Average case complexities.


 
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
            return i;
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



//CARTESIAN PRODUCT

const cartesianProduct = (arr1, arr2) => {
    let result = [];
    for (const i of arr1) for (const j of arr2) result.push([i, j]) 
//-------- O(m*n) this is because the two arrays are of different 
//size and solutio is dependent on the length of the two arrays

    return result;
}

console.log(cartesianProduct([1, 3, 4], [7, 6, 8]));


///Find the longest "n" unique substring of a string where "n" begins the string i.e "2aabbacbaa"; 

const longestSubString = (str) => {
    let n = +str[0];
    let string = str.slice(1);
    
    const generateSubStrings = (sub_str) => {
        let subStr = [];
        for (let i = 0; i < sub_str.length; i++) {
            
            subStr.push(sub_str[i]);

            for (let j = i + 1; j < sub_str.length; j++) {

                subStr.push(subStr[subStr.length - 1] + sub_str[j])
                
            }
            
        }
        return subStr
    }

    console.log(generateSubStrings(string));

    const uniqueSubstr = generateSubStrings(string).filter((str) => {
        let unique = []

        for (const element of str) {
            
            if (!unique.includes(element)) {
                
                unique.push(element)
            
            }

        }

        return unique.length === n
    }) 
    
    console.log(uniqueSubstr);

    const longestSubStr = (strArr) => {
        return strArr.reduce((acc, cur) => cur.length > acc.length ? cur : acc, strArr[0])
    }

    return `The longest ${n} unique alphabets substring is ${longestSubStr(uniqueSubstr)}`

}

console.log(longestSubString("2aabbacbaa"))



//-------------------------------------------------------DATA STRUCTURES-----------------------------------------------------

//STACK
//A stack is a collection of elements that follows the LIFO principle. That is, the LAST IN, FIRST OUT, 
//where by the last element added to a stack is the first element that can the removed from the stack.

class Stack {
    constructor() {
        this.items = [];
    }


    push(element) { //This is to add an element from the stack data
        this.items.push(element);
    }


    pop() { ///This is to remove and return the last added element from the collection.
        return this.items.pop();
    }


    peek() { ///This is to return the last element in the collection or top-most element in the stack
        return this.items[this.items.length - 1];
    }


    isEmpty() {
        return this.items.length === 0;
    }


    size() {
        return this.items.length;
    }


    print() {
        console.log(this.items.toString());
    }



}

const stack = new Stack();

console.log(stack.isEmpty());

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.isEmpty());

console.log(stack.peek());

console.log(stack.pop());

console.log(stack.peek());

stack.print()



//QUEUE DATA STRUCTURE
//This is a sequential collection of elements that follows the principle of Firts In, FIrst Out. 
//That is, the first element added to the queue is also the first element that is removed from the queue.

class Queue {
    constructor() {
        this.items = [];
    }


    enqueue(element) {
        this.items.push(element);
    }


    dequeue() { /////////// --------- O(n)
        return this.items.shift();
    }


    peek() {
        return this.items[0];
    }


    isEmpty(){
        return this.items.length === 0;
    }


    size() {
        return this.items.length
    }


    print() {
        return this.items.toString();
    }
}

const queue = new Queue;

console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.size());

console.log(queue.isEmpty());

console.log(queue.peek());

console.log(queue.dequeue());

console.log(queue.peek());

console.log(queue.print());


//More Optimized way of creating and using a queue: This is by using object instead of Array

class Queue2 {
    constructor() {
        this.items = {};
        this.rear = 0;
        this.front = 0;
    }

    enqueue(element) {
        this.items[this.rear] = element;
        this.rear++;
    }


    dequeue() { /////////// --------- O(1)
        const item = this.items[this.front];
        delete(this.items[this.front]);
        this.front++
        return item;
    }


    peek() {
        return this.items[this.front];
    }


    isEmpty() {
        return this.rear - this.front === 0;
    }


    size() {
        return this.rear - this.front;
    }


    print() {
        return this.items;
    }
}


const queue2 = new Queue2;

console.log(queue2.isEmpty());

queue2.enqueue(10);
queue2.enqueue(20);
queue2.enqueue(30);

console.log(queue2.isEmpty());

console.log(queue2.peek());
console.log(queue2.dequeue());
console.log(queue2.peek());

console.log(queue2.size());
console.log(queue2.print());




////CIRCULAR QUEUE
//Here, the size of the queue is fixed and it works as if the first element is connected to the last element.
//Also referred to as the ring buffer or circular buffer and aslo follows the principle of FIFO.

class CircularQueue {
    constructor(capacity) { //capacity is the declared fixed size of the array.
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.currentLength = 0;
        this.rear = -1;
        this.front = -1;
    }


    isFull() {
        return this.capacity === this.currentLength;
    }

    isEmpty() {
        return this.currentLength === 0;
    }


    enqueue(element) {
        if (this.isEmpty()) {
            this.front += 1
        }
        if (!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity;
            this.currentLength = this.currentLength + 1;
            this.items[this.rear] = element;
        } else {
            return "Queue is full";
        }
    }


    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        let item = this.items[this.front];
        this.items[this.front] = null;
        this.front = (this.front + 1) % this.capacity
        this.currentLength = this.currentLength - 1;
        
        if (this.isEmpty()) {
            this.rear = -1;
            this.front = -1;
        }
        return item;
    }


    peek() {
        if (!this.isEmpty()) {
            return this.items[this.front];
        }
        return null;
    }


    print() {
        let i
        let str = "";
        for(i = this.front; i !== this.rear; i = (i+1)%this.capacity) {
            str+= this.items[i] + " ";
        }

        str+= this.items[i];
        return str;
    }

    size() {
        return this.currentLength;
    }
}

const circularQueue = new CircularQueue(5);

console.log(circularQueue.isEmpty());
console.log(circularQueue.isFull());

circularQueue.enqueue(10);
circularQueue.enqueue(20);
circularQueue.enqueue(30);
circularQueue.enqueue(40);
circularQueue.enqueue(50);

console.log(circularQueue.isEmpty());
console.log(circularQueue.isFull());

console.log(circularQueue.print());

circularQueue.dequeue();

console.log(circularQueue.print());
circularQueue.enqueue(60);
console.log(circularQueue.print());
console.log(circularQueue.size());


///LINKED LIST
//This is a linear data structure that includes a series of connected nodes. Each node consists of a data value and a 
//pointer that points to the next node.

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class List {
  constructor() {
    this.head = null;
    this.size = 0;
  }   

  isEmpty() {
    return this.size == 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) { //Add a new node to the start of the linked list
    const node = new Node(value);
    if (this.isEmpty()) {
        this.head = node;
    } else {
        node.next = this.head;
        this.head = node;
    }

    this.size++;
  }

  append(value) { //Add a new node to the end of the linked list.
    const node = new Node(value);

    if (this.isEmpty()) {
        this.head = node;
    } else {
        let prev = this.head;
        while (prev.next) {
            prev = prev.next;
        } 
        prev.next = node;
    }
    this.size++;
  }

  insert(value, index) { //To insert a node at a particular index of the list.
    if (index < 0 || index > this.size) { //checks if the index passed is invalid. That is, if it is less than 0 ir greater than size.
         return;
    }

    if (index == 0) { //ckecks if the index is equal to 0.
        this.prepend(value);
    }

    if (index > 0) { //checks if the index passed is greater than 0.
        const node = new Node(value);
        let prev = this.head;
        for (let i = 0; i < index - 1; i++) {
            prev = prev.next;
        }
        node.next = prev.next;
        prev.next = node;
        this.size++;
    }
  }

  removeFrom(index) { //Removes the node at a particular index from the linked list.
    if (index < 0 || index >= this.size) {
        return;
    }

    let removedNode;

    if (index == 0) {
        removedNode = this.head;
        this.head = this.head.next;
    } 

    if (index > 0) {
        let prev = this.head;
        for (let i = 0; i < index - 1; i++) {
            prev = prev.next;
        }

        removedNode = prev.next;
        prev.next = removedNode.next;
    }
    this.size--;
    return removedNode.value;

  }


  removeValue(value) { //This is to remove a node whose value is equal to the value that is being passed.
    if (this.isEmpty()) {
        return;
    }

    let removedNode;

    if (value == this.head.value) {
        this.head = this.head.next;
        this.size--
        return value;
    } else {
        let prev = this.head;
        while (prev.next && prev.next.value !== value) {
            prev = prev.next;
        }

        if (prev.next) {
            removedNode = prev.next;
            prev.next = removedNode.next;
            this.size--
            return value;
        }
        return null;
    }

  }


  reverse() { //This is to reverse the order of the linked list.
    let prev = null;
    let curr = this.head;
    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    this.head = prev;
  }


  search(value) { //Search for a node whose value is equal to the value that is being passed and return the index of the node, else return -1 if not found. 
    if (this.isEmpty()) {
        return -1;
    }

    if (value == this.head.value) {
        return 0;
    } else {
        let i = 0
        let curr = this.head;
        while (curr) {
            if (curr.value == value) {
                return i;
            }
            curr = curr.next;
            i++;
        }
        return -1;
    }
  }


  print() { //Get all nodes values from the list
    if (this.isEmpty()) {
        console.log("List is Empty");
    } else {
        let curr = this.head;
        let listValue = "";
        while (curr) {
            listValue += `${curr.value} `;
            curr = curr.next;
        }
        return listValue;
    }
  }
}

const myList = new List;

console.log(myList.isEmpty());
console.log(myList.getSize());

myList.prepend(10);
myList.prepend(20);
myList.prepend(30);
myList.prepend(40);
myList.prepend(50);

console.log(myList.print());
console.log(myList.getSize());

myList.append(5);

console.log(myList.print());

myList.insert(70, 2);

console.log(myList.print());

console.log(myList.removeFrom(3));

console.log(myList.print());

console.log(myList.getSize());

console.log(myList.removeValue(70));

console.log(myList.print());

console.log(myList.search(40));

myList.reverse();

console.log(myList.print());



///Linked list with a Head and tail pointer

class NodeTwo {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class ListTwo {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    prepend(value) { //This is to add a new node to the beginning of the list using the head and tail pointers
        const node = new NodeTwo(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++
    }

    append(value) { //This is to add a new node to the end of the list using the tail and head pointers.
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;

    }

    removeFront() {
        if (this.isEmpty()) {
            return null;
        } else {
            let value = this.head.value;
            this.head = this.head.next;
            this.size--;
            return value;
        }
    }

    removeBack() {
         if (this.isEmpty()) {
            return null;
         }
         let value = this.tail.value;
         if (this.size == 1) {
            this.tail = null;
            this.head = null;
         } else {
            let prev = this.head;
            while (prev.next !== this.tail) {
                prev = prev.next;
            }
            prev.next = null;
            this.tail = prev;
         }
         this.size--;
         return value;
    }

    print() {
        let next = this.head;
        let listValue = ""
        while (next) {
            listValue+= `${next.value} `;
            next = next.next;
        }

        return listValue
    }
}

const list2 = new ListTwo;

console.log(list2.isEmpty());
console.log(list2.getSize());

list2.prepend(10)
list2.prepend(20)
list2.prepend(30)

console.log(list2.getSize());

console.log(list2.print());

list2.append(40)
list2.append(50)
list2.append(60)

console.log(list2.print());

list2.removeFront()
console.log(list2.print());

list2.removeBack();
console.log(list2.print());



//USING THE LINK LIST TO IMPLEMENT THE STACK METHOD(LAST IN, FIRST OUT);

class LinkedListStack {
    constructor() {
        this.list = new ListTwo;
    }

    push(value) {
        return this.list.prepend(value);
    }

    pop() {
        return this.list.removeBack();
    }

    peek() {
        return this.list.head.value;
    }

    isEmpty() {
        return this.list.isEmpty();
    }

    getSize() {
        return this.list.getSize();
    }

    print() {
        return this.list.print();
    }
}

let newList = new LinkedListStack;

console.log(newList.isEmpty());
console.log(newList.getSize());

newList.push(10)
newList.push(20)
newList.push(30);

console.log(newList.getSize());
console.log(newList.print());

newList.pop()

console.log(newList.print());

console.log(newList.peek());


//USING THE LINK LIST TO IMPLEMENT THE QUEUE METHOD(FIRST IN, FIRST OUT);

class LinkedListQueue {
    constructor() {
        this.list = new ListTwo;
    }

    enqueue(value) {
        return this.list.append(value);
    }

    dequeue() {
        return this.list.removeFront();
    }

    peek() {
        return this.list.tail.value;
    }

    isEmpty() {
        return this.list.isEmpty();
    }

    getSize() {
        return this.list.getSize();
    }

    print() {
        return this.list.print();
    }

}

let newQueue = new LinkedListQueue;

console.log(newQueue.isEmpty());
console.log(newQueue.getSize());

newQueue.enqueue(10)
newQueue.enqueue(20)
newQueue.enqueue(30)

console.log(newQueue.getSize());
console.log(newQueue.print());

newQueue.dequeue()

console.log(newQueue.print());

console.log(newQueue.peek());


//HASH TABLE DATA STRUCTURE
//This is also know as hash map. This is a data structure that is used to store key-value pairs just the way we have it in 
//javascript object and map. The key-value pairs are stored in fixed size array using a HASHING FUNCTION.

class Hash {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    hashFunction(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }

        return total % this.size;
    }

    set(key, value) {
        let index = this.hashFunction(key);
        // this.table[index] = value; 
        //The following code is used to solve the issue of hash table collusion of keys.
        let bucket = this.table[index];
        if (!bucket) {
            this.table[index] = [[key, value]]
        } else {
            let sameKeyItem = bucket.find((item) => item[0] === key);
            if (sameKeyItem) {
                sameKeyItem[1] = value;
            } else {
                bucket.push([key, value]);
            }
        }
    }

    get(key) {
        let index = this.hashFunction(key);
        // return this.table[index];
        //The following code is used to solve the issue of hash table collusion of keys.
        let bucket = this.table[index];
        if (bucket) {
            let sameKeyItem = bucket.find((item) => item[0] === key);
            if (sameKeyItem) {
                return sameKeyItem[1];
            }
        }
        return null;
    }

    remove(key) {
        let index = this.hashFunction(key);
        // this.table[index] = undefined;
        //The following code is used to solve the issue of hash table collusion of keys.
        let bucket = this.table[index];
        if (bucket) {
            let sameKeyItem = bucket.find((item) => item[0] === key);
            if (sameKeyItem) {
                bucket.splice(bucket.indexOf(sameKeyItem), 1);
            }
        }
    }

    display() {
        let item = "";
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                item += `${i}, [${this.table[i]}] `
            }
        }
        return item;
    }
}

const newHash = new Hash(10);

newHash.set(2, "Victor");
newHash.set("name", "Nkire");

console.log(newHash.display());

newHash.remove(2);

console.log(newHash.display());



///TREE DATA STRUCTURE: This is a hierarchical data structure that consists of nodes connected by edges.

//BINARY SEARCH TREE: This is a tree data structure in which each nodes has at most two children. They are referred to as 
//the left child and the right child.

//The left child must be lesser than the Parent child.
// The Right Child must be greater than the Parent child.

class TreeNode { //The class for each Node instance that will be added to the tree.
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree { 
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        let newNode = new TreeNode(value);
        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this.checkExistingNode(this.root, newNode); //function to check the existing nodes.
        }
    }

    checkExistingNode(root, newNode) {
        if (newNode.value < root.value) { //if newNode.value is less than root.value, we focus on the left side as the left node must be less than Parent node.
            if (root.left === null) { //Check if there is already a left node not.
                root.left = newNode;
            } else {
                this.checkExistingNode(root.left, newNode); //If there is a left node, check the node's children.  
            }
        } else {
            if (root.right === null) { //if newNode.value is greater than root.value, we focus on the right side as the right node must be greater than Parent node.
                root.right = newNode;
            } else {
                this.checkExistingNode(root.right, newNode); //If there is a right node, check the node's children.
            }
        }
    }


    search(root, value) {
        if (!root) {
            return false;
        } else {
            if (root.value === value) {
                return true;
            } else if (value < root.value) {
                return this.search(root.left, value);
            } else {
                return this.search(root.right, value);
            }
        }
    }


    //DFS(DEPTH FIRST SEARCH): This is used to traverse and print out all the elements 
    //of a tree by traversing the left children, then backtracking and traversing the 
    // right children of each subroot.
    preOrder(root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    inOrder(root) {
        if (root) {
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }

    postOrder(root) {
        if (root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }

    //BFS(BREADTH FIRST SEARCH): This is also a method of traversing through the tree
    //and printing out all the values of each level of the tree.
    levelsearch() {
        const queue = [];
        const result = []
        queue.push(this.root);
        while (queue.length) {
            let curr = queue.shift();
            result.push(curr.value);
            if (curr.left) {
                queue.push(curr.left);
            }
            if (curr.right) {
                queue.push(curr.right);
            }
        }
        console.log(result);
        return result;
    }

    //function to get the minimum value of the tree.
    min(root) {
        if (!root.left) {
            return root.value;
        } else {
            return this.min(root.left);
        }
    }

    //function to get the maximum value in the tree.
    max(root) {
        if (!root.right) {
            return root.value;
        } else {
            return this.max(root.right);
        }
    }

    //function to delete a node from the tree looking at 3 cases:
    //If the node to delete is a leaf node
    //If the node to delete has one child
    //If the node to delete has two children: In this case, we will replace the node to delete
    /////with the minimum value of right subtree of node to delete.

    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(root, value) {
        if (root === null) {
            return root;
        }

        if (value < root.value) {

            root.left = this.deleteNode(root.left, value);

        } else if (value > root.value) {

            root.right = this.deleteNode(root.right, value);
        
        } else {
            
            if (!root.left && !root.right) {

                return null;
            
            } 
            if (!root.left) {
            
                return root.right;
            
            } else if (!root.right) {
            
                return root.left;
            
            } 
            
            root.value = this.min(root.right);
        
            root.right = this.deleteNode(root.right, root.value)
            
            
        }

        return root;
    }
}

const bst = new BinarySearchTree();

console.log(bst.isEmpty());

bst.insert(10);
bst.insert(20);
bst.insert(5);
bst.insert(4);
bst.insert(30);

console.log(bst.isEmpty());

console.log(bst.search(bst.root, 30));

bst.preOrder(bst.root);
bst.inOrder(bst.root);
bst.postOrder(bst.root);

console.log(bst.levelsearch());

console.log(bst.min(bst.root));
console.log(bst.max(bst.root));

bst.delete(20);

console.log(bst.levelsearch());



///GRAPH DATA STRUCTURE: This is a non-linear data structure that consists of a finite number of vertexes(nodes) connected by edges.

//Types of Graph data structure
//1) Directed Graph: This is a type of graph inwhich the edges have a defined direction. The egdes are represented by 
/////////////////////by arrows pointing in the direction the graph can be traversed.

//2) Undirectional Graphs: This is a type of graph where the edges are bi-directional. This means that it is 
///////////////////////////traversed in either direction.


//Graphs can be represented in code in 2 ways:

//1) Adjacency matrix: This is a 2D array of size V x V, where V is the number of vertexes in the graph. That is, imagine 3 vertexes A, B and C:
// A is connected to B thereby B is connected to A, B is connected to C thereby C is connected to B in an undirectional graph. Illustrating this on a matrix as follows:

//    A     B     C
// --------------------
// A |0     1     0
// B |1     0     1
// c |0     1     0

//Using the matrix above, we can structure it using Javascript as shown below;

const matrix = [
    [0, 1, 0], 
    [1, 0, 1], 
    [0, 1, 0]
] 

console.log(matrix[0][1]); //This returns 1 when there is a connection between the vertexes and 0 when the vertexes are not connected.


//2) Adjacency list: Here, vertexes are stored in a map-like data structure where every vertexes stores a list of its adjacent vertexes.
//That is:

// A => B;
// B => A, C;
// C => B

//Illustrated in Javascript as follows:

const adjacent_List = {
    "A": ["B"],
    "B": ["A","C"],
    "C": ["B"]
}

console.log(adjacent_List["B"]); //This returns all the vertexes that are connected to B.

//Illustration of the Adjacent List Graph:

class Graph {
    constructor() {
        this.list = {}
    }

    addvertex(vertex) {
        if (!this.list[vertex]) {
            this.list[vertex] = new Set();   
        }
    }

    addEdges(vertex1, vertex2) {
        if (!this.list[vertex1]) {
            this.addvertex(vertex1);
        }
        if (!this.list[vertex2]) {
            this.addvertex(vertex2);
        }

        this.list[vertex1].add(vertex2);
        this.list[vertex2].add(vertex1);
    }

    hasEdge(vertex1, vertex2) {
        return (
            this.list[vertex1].has(vertex2) &&
            this.list[vertex2].has(vertex1)
        );
    }

    viewList() {
        let result = []
        for (const vertex in this.list) {
           result.push(vertex + " => " + [...this.list[vertex]])
        }
        return result
    }

    removeEdge(vertex1, vertex2) {
        this.list[vertex1].delete(vertex2);
        this.list[vertex2].delete(vertex1);
    }

    removeVertex(vertex) {
        if (!this.list[vertex]) {
            return;
        } 
        for (const adjacentVertex of this.list[vertex]) {
            this.removeEdge(adjacentVertex, vertex);
        }
        delete this.list[vertex]
    }
}

const graph = new Graph();

graph.addvertex("A")
graph.addvertex("B")
graph.addvertex("C")

graph.addEdges("A", "B");
graph.addEdges("B", "C");

console.log(graph.viewList());

console.log(graph.hasEdge("A", "B"));
console.log(graph.hasEdge("A", "C"));

graph.removeEdge("A", "B");

console.log(graph.viewList());

graph.removeVertex("A");

console.log(graph.viewList());



