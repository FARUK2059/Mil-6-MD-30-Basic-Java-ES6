//  Mathod of Copy Array

// JavaScript-এ অ্যারে কপি করার বিভিন্ন উপায় রয়েছে। আমি কয়েকটি উপায় উল্লেখ করব এবং প্রতিটি উপায়ের উদাহরণ দেওয়া হবে:

// ১. Slice মেথড ব্যবহার করা:
// Slice মেথড ব্যবহার করে আমরা অ্যারের একটি অংশ কপি করতে পারি।


const originalArray = [1, 2, 3, 4, 5];
const copiedArray = originalArray.slice();

console.log(copiedArray); // Output: [1, 2, 3, 4, 5]


// ২. Spread Operator ব্যবহার করা:
// Spread Operator ব্যবহার করে আমরা একটি অ্যারের সকল মান অন্য একটি অ্যারেতে কপি করতে পারি।

const originalArray1 = [1, 2, 3, 4, 5];
const copiedArray1 = [...originalArray1];

console.log(copiedArray1); // Output: [1, 2, 3, 4, 5]


// ৩. Array.from() ব্যবহার করা:
// Array.from() মেথডটি ব্যবহার করে আমরা অ্যারে অন্য অ্যারেতে কপি করতে পারি।

const originalArray2 = [1, 2, 3, 4, 5];
const copiedArray2 = Array.from(originalArray2);

console.log(copiedArray2); // Output: [1, 2, 3, 4, 5]


// উপরের উদাহরণগুলি প্রতিটি অ্যারের কপি তৈরি করে দেখাচ্ছে এবং কপিকৃত অ্যারেগুলি মূল অ্যারের সাথে স্বাধীন। যেমন, যদি আমরা কোনও একটি অ্যারে মধ্যে কোনও পরিবর্তন করি, তবে কপিকৃত অ্যারে সাথে কোনও পরিবর্তন হবে না।