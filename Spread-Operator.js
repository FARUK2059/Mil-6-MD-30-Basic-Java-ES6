//  what is Spread Operator in JavaScript ES6

// *** JavaScript এর Spread Operator হলো একটি অপারেটর যা একটি অ্যারে, অবজেক্ট, বা অন্যান্য ইটারেবল অবজেক্ট এর মধ্যে থাকা মানগুলি নিয়ে কাজ করে। এটি অ্যারের মধ্যে একাধিক মান বা অবজেক্টের মধ্যে মান গুলি প্রসার করার জন্য ব্যবহৃত হয়।

// Spread Operator এর ব্যবহার উদাহরণ:
// 1) অ্যারে প্রসার (Spreading Arrays):

const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5, 6];

console.log(moreNumbers); // Output: [1, 2, 3, 4, 5, 6]

// উপরে, [...numbers] হলো অ্যারে প্রসার অপারেটর। এটি numbers অ্যারের সব মান গুলি নিয়ে নতুন একটি অ্যারে তৈরি করে এবং অতিরিক্ত মান যোগ করে।

// 2) অবজেক্ট প্রসার (Spreading Objects):

const person = {
    name: 'John',
    age: 30,
  };
  
  const newPerson = {
    ...person,
    gender: 'male',
  };
  
  console.log(newPerson); // Output: { name: 'John', age: 30, gender: 'male' }

//   উপরে, {...person} হলো অবজেক্ট প্রসার অপারেটর। এটি person অবজেক্টের সব প্রপার্টি নিয়ে নতুন একটি অবজেক্ট তৈরি করে এবং অতিরিক্ত প্রপার্টি যোগ করে।

// **** bফাংশন কলের সময়ে Spread Operator এর ব্যবহার:

// Spread Operator এর অন্তর্ভুক্তি অ্যারে বা অবজেক্ট মূল মানগুলি প্রসার করে ফাংশনের প্যারামিটারের মধ্যে।

// ***ফাংশন এর উদাহরণ:

function sum(x, y, z) {
    return x + y + z;
  }
  
  const numberss = [1, 2, 3];
  
  console.log(sum(...numberss)); // Output: 6

//   উপরে, sum(...numbers) অ্যারেকে প্রসার করে সেই অ্যারেকে sum ফাংশনের প্যারামিটারে পাঠিয়েছে। এখানে ...numbers হলো Spread Operator।

// ** Spread Operator এর মাধ্যমে অ্যারে এবং অবজেক্ট থেকে মান গুলি নিয়ে কাজ করা খুবই সুবিধাজনক। 
