//  *** Destructure of Arry

// *** **JavaScript-এ Object এবং Array Destructuring হলো এমন একটি ধারণা যা আমাদের সহজেই Object এবং Array এর মধ্যের মান গুলি থেকে প্রারম্ভিক অবস্থায় মূল মান বা প্রোপার্টি গুলি নিয়ে আসে।

// **** Object Destructuring:

// Object Destructuring ব্যবহার করে আমরা একটি Object এর মধ্য থেকে প্রয়োজনীয় মান গুলি বের করতে পারি এবং সেগুলি নিজের ভেতরে প্রয়োগ করতে পারি।

const person = {
  name: 'John',
  age: 30,
  country: 'USA'
};

// Destructuring object
const { name, age } = person;

console.log(name); // Output: John
console.log(age); // Output: 30


// *** Array Destructuring:

// Array Destructuring একইভাবে Array এর মধ্য থেকে প্রয়োজনীয় মান গুলি বের করতে পারি এবং সেগুলি নিজের ভেতরে প্রয়োগ করতে পারি।


const numbers = [1, 2, 3, 4, 5];

// Destructuring array
const [first, second] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2


// উপরের উদাহরণগুলিতে, আমরা এক্ষেত্রে Object এবং Array এর মধ্যে থেকে আমরা নিজেরা নির্ধারণ করেছি প্রয়োজনীয় মান গুলি। এই মান গুলি আমরা পরবর্তীতে ব্যবহার করতে পারি এবং নতুন ভেরিয়েবল এ সংরক্ষণ করতে পারি।