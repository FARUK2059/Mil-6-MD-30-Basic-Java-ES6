//   Keys mathod of JavaScript ES6

// JavaScript ES6 এর Keys হলো Object এর প্রোপার্টি গুলির নামগুলি যা তার মান সংরক্ষণ করে।

// এটি কেন গুরুত্বপূর্ণ এবং উপকারী হতে পারে তা আমরা একটি Object এর সকল Keys বের করে দেখি:

const person = {
  name: 'John',
  age: 30,
  country: 'USA'
};

// Object.keys() method returns an array of a given object's own enumerable property names
const keys = Object.keys(person);

console.log(keys); // Output: ['name', 'age', 'country']

// উপরে, Object.keys() মেথডটি ব্যবহার করে আমরা person অবজেক্টের সব প্রোপার্টি গুলির কীগুলির একটি অ্যারে পেয়েছি। এই অ্যারেতে প্রোপার্টি নামগুলি আছে যেগুলি person অবজেক্টে প্রকাশ্যমান হিসেবে সংরক্ষিত।

// এই কীগুলি ব্যবহার করে আমরা অবজেক্টের প্রোপার্টি গুলির মান বা অ্যাক্সেস করতে পারি। এছাড়াও, আমরা for...of লুপ বা forEach() মেথড ব্যবহার করে এই কীগুলি ব্যাবহার করতে পারি অথবা প্রোপার্টি গুলির উপর লোপ চালাতে পারি।