            // ******** Template String
// JavaScript এর Template String হলো একটি উন্নত স্ট্রিং ফরম্যাট, যা ES6 (ECMAScript 2015) এ যোগ করা হয়েছে। এটি backticks (``) দ্বারা চিহ্নিত হয় এবং ভেরিয়েবল এবং এক্সপ্রেশনসহ মূল্যায়নের সুযোগ দেয়।

// একটি উদাহরণ দেখা যাক:

const name1 = 'John';
const age = 30;

const greeting1 = `Hello, my name is ${name1} and I am ${age} years old.`;

console.log(greeting1); // Output: Hello, my name is John and I am 30 years old.

// এখানে, backticks () ব্যবহার করে আমরা একটি Template String তৈরি করেছি। ${name}এবং${age}` এর মধ্যে আমরা ভেরিয়েবল এবং এক্সপ্রেশন এড করেছি। যখন আমরা এই স্ট্রিং প্রিন্ট করি, তখন ভেরিয়েবলের মান সহ স্ট্রিং প্রদর্শিত হয়।


// **************** Multiple Line String
// Multiple Line String হলো এমন একটি স্ট্রিং যেখানে আমরা একাধিক লাইনে লেখা করতে পারি বিনা নিচের ধারণাটি অনুসরণ করে:
const multipleLines = `This is 
a string 
spanning 
multiple lines.`;

console.log(multipleLines);

// এবং আমাদের স্ক্রিপ্টে এই স্ট্রিংটি একত্রিত হলে, এটি একটি সিঙ্গেল স্ট্রিং হিসাবে গণ্য হবে এবং এর লাইনগুলি স্ট্রিং এস্কেপ করা ছাড়াই প্রিন্ট হবে।


// **************** Dynamic String
// Dynamic String বা Concatenation এমন স্ট্রিং যেখানে আমরা একই স্ট্রিং কে একাধিক ভেরিয়েবল বা অন্য স্ট্রিং এক্সপ্রেশনের সাথে যোগ করি।

const name = 'John';
const age1 = 30;

const greeting = 'Hello, my name is ' + name + ' and I am ' + age1 + ' years old.';

console.log(greeting); // Output: Hello, my name is John and I am 30 years old.

// এখানে, আমরা ভেরিয়েবল এবং স্ট্রিংগুলির মাঝে স্ট্রিং কনক্যাটেনেশন (+) অপারেটর ব্যবহার করেছি। এটি স্ট্রিং তৈরি করার একটি পূর্বে ব্যবহৃত পদ্ধতি।

// এই তিনটি স্ট্রিং ফরম্যাটকে ব্যবহার করে, স্ট্রিং তৈরি করার পদ্ধতি এবং ভেরিয়েবল এক্সপ্রেশন সহ সহজে এবং সুন্দরভাবে লেখতে পারব।
