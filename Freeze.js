//  Use of Freeze mathod

// JavaScript ES6 এর Object.freeze() মেথডটি ব্যবহার করা হয় অবজেক্টের প্রোপার্টিগুলিকে অবিচ্ছিন্নভাবে স্থিতিশীল করার জন্য। এটি অবজেক্টের সমস্ত প্রোপার্টিগুলির উপর মানিপুলেশনের বিরোধী। অর্থাৎ, একবার একটি অবজেক্ট স্থিতিশীল করা হলে পরবর্তীতে ঐ অবজেক্টের মূল্য পরিবর্তন করা যাবে না, নতুন প্রোপার্টি যোগ করা যাবে না, এবং যেসব প্রোপার্টি মুছে ফেলা যাবে না।

// একটি উদাহরণ দেখা যাক:

const person = {
  name: 'John',
  age: 30
};

Object.freeze(person);

// Trying to change the value of an existing property
person.name = 'Jane'; // Attempted change is ignored

// Trying to add a new property
person.country = 'USA'; // Attempted addition is ignored

// Trying to delete an existing property
delete person.age; // Attempted deletion is ignored

console.log(person); // Output: { name: 'John', age: 30 }


// উপরে, আমরা Object.freeze() মেথড ব্যবহার করে অবজেক্ট person কে স্থিতিশীল করেছি। পরবর্তীতে, আমরা চেষ্টা করেছি অবজেক্টের প্রোপার্টি-গুলির মান পরিবর্তন করার জন্য, নতুন প্রোপার্টি যোগ করার জন্য, এবং প্রোপার্টি মুছে ফেলার জন্য। কোন একটি পরিবর্তন কার্যকর হয়নি, কারণ অবজেক্টটি স্থিতিশীল করা হয়েছে।

// মনে রাখা যাবে যে, Object.freeze() কে ব্যবহার করা হয় মূলত অবজেক্টের মান পরিবর্তন থেকে সাক্ষাত রাখার জন্য, যাতে কোনো অপ্রয়োজনীয় মানিপুলেশন হতে না পারে।