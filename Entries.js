//  Entries Mathod of JavaScript

// JavaScript ES6 এর Object.entries() মেথড হলো এমন একটি মেথড যা একটি অবজেক্ট থেকে প্রোপার্টি-মান জোড়াগুলির একটি অ্যারে তৈরি করে। প্রতিটি জোড়ে, প্রথম উপাদান হলো প্রোপার্টির নাম এবং দ্বিতীয় উপাদান হলো তার মান।

// এটি অবজেক্টের সব প্রোপার্টি-মান জোড়াগুলির উপাদান গুলির একটি অ্যারে ফেরত দেয়।

// একটি উদাহরণ:

const person = {
  name: 'John',
  age: 30,
  country: 'USA'
};

// Object.entries() method returns an array of a given object's own enumerable property [key, value] pairs
const entries = Object.entries(person);

console.log(entries);


// উপরে, Object.entries() মেথডটি ব্যবহার করে আমরা person অবজেক্টের সব প্রোপার্টি-মান জোড়াগুলির একটি অ্যারে পেয়েছি। এই অ্যারেতে প্রোপার্টির নাম এবং তার মানের জোড় প্রতিটি অ্যারের উপাদান হবে।

// উদাহরণস্বরূপ, প্রথম জোড় হলো ['name', 'John'], দ্বিতীয় জোড় হলো ['age', 30], এবং তৃতীয় জোড় হলো ['country', 'USA']।

// এই entries অ্যারেটি ব্যবহার করে আমরা অবজেক্টের প্রোপার্টি-মান জোড় গুলির উপর লুপ চালাতে পারি বা এই জোড় গুলির উপর অন্যান্য অপারেশন অনুমোদন করতে পারি।