//  Seal Matod of Javascript ES6 

// JavaScript-এ, Object.seal() মেথডটি ব্যবহার করা হয় অবজেক্টের প্রোপার্টিগুলির মধ্যে কোনো পরিবর্তনের সাহায্য করে না, তার অর্থ হলো প্রোপার্টি যোগ করা, মুছে ফেলা, অথবা পরিবর্তন করা যাবে না। তবে, প্রোপার্টি মূল্য পরিবর্তন করা যাবে।

// একটি উদাহরণ দেখি:

const person = {
  name: 'John',
  age: 30
};

Object.seal(person);

// Trying to add a new property
person.country = 'USA';
console.log(person); // Output: { name: 'John', age: 30 }

// Trying to delete an existing property
delete person.age;
console.log(person); // Output: { name: 'John', age: 30 }

// Trying to change the value of an existing property
person.name = 'Jane';
console.log(person); // Output: { name: 'Jane', age: 30 }


// উপরে, আমরা Object.seal() মেথড ব্যবহার করে অবজেক্টের সীল করেছি। পরবর্তীতে, আমরা চেষ্টা করেছি নতুন প্রোপার্টি যোগ করার জন্য, বিদ্যমান প্রোপার্টি মুছে ফেলার জন্য, এবং প্রোপার্টির মান পরিবর্তন করার জন্য। কোন একটি পরিবর্তন কার্যকর হয়নি, কারণ অবজেক্টটি সীল করা হয়েছে।

// সীল করা অবজেক্টের প্রোপার্টিগুলি প্রাকৃতিকভাবে পরিবর্তন করা যেতে থাকে, কিন্তু যেসব পরিবর্তন আসল অবজেক্ট ভেতরে অনুমোদন করা হয়েছে সেগুলি শুধু মানের উপর প্রভাব ফেলবে, নতুন প্রোপার্টি যোগ করা বা প্রোপার্টি মুছে ফেলা যাবে না।
