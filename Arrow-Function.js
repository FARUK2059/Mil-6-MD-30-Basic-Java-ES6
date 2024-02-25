// **** avaScript এর Arrow Function হলো ES6 (ECMAScript 2015) এর একটি নতুন ফাংশন লেখার পদ্ধতি, যা সাধারণ ফাংশন লেখার একটি সংক্ষেপোপকারে সরলীকৃত রূপ। এটি সাধারণ ফাংশন লেখার পরিবর্তে কম কোড এবং কনটেক্সচুয়াল this ভাবের সঙ্গে কাজ করে।

// উদাহরণ:

// একটি সাধারণ ফাংশন:
function add(a, b) {
    return a + b;
}
console.log(add(5, 3)); // Output: 8


// Arrow Function এর ব্যবহার:
const add = (a, b) => a + b;
console.log(add(5, 3)); // Output: 8


// ** Arrow Function এর বৈশিষ্ট্য ও ব্যবহার:

// i) মৌলিক সিনট্যাক্স: (parameters) => {statement} বা (parameters) => expression

// ii) যদি ফাংশনের কাজ শুধুমাত্র একটি এক্সপ্রেশন হয়, তাহলে কোনো ব্রেস ({}) এর প্রয়োজন নেই এবং সেই এক্সপ্রেশনের মান ডিফল্টভাবে রিটার্ন হয়।

// iii) ফাংশনের প্যারামিটার একটির বেশি হলে একটি ব্র্যাকেট () এসে থাকতে হবে।

// iv) Arrow Function এ আপনি একটি ব্যবধানের ভেতরে অন্য ফাংশনে ব্যবহার করতে পারেন।

// v) Arrow Function এর মধ্যে আপনি আপনার স্কোপের this কে ক্যাচ করতে পারেন না, এটি উপরের স্কোপের this কে ব্যবহার করবে।

const numbers = [1, 2, 3, 4, 5];

// Using arrow function to double each number
const doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// Arrow Function এর এই উদাহরণটিতে দেখা যায় যে  map() ফাংশনে একটি Arrow Function ব্যবহার করা হয় যা প্রতিটি সংখ্যাকে দ্বিগুণ করে ফেলেছে।
