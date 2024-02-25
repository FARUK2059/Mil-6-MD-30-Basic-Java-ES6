//  What is array max

// *** JavaScript এর Array এর মধ্যে সর্বোচ্চ (বৃহত্তম) মান বের করার জন্য আমরা Math.max() মেথড ব্যবহার করতে পারি। তবে, এটি এক্সপ্লিসিটি যুক্ত না। তাই সহজে অ্যারের সর্বোচ্চ মান বের করার জন্য আমরা spread operator সহ এই মেথড ব্যবহার করতে পারি।

// একটি উদাহরণ দেখা যাক:

const numbers = [10, 5, 20, 15, 25];

const maxNumber = Math.max(...numbers);
console.log(maxNumber); // Output: 25

// উপরে, আমরা Math.max() মেথডের মধ্যে spread operator ব্যবহার করে অ্যারে numbers এর সব মান পাস করেছি। Math.max() মেথড অ্যারের সর্বোচ্চ মান রিটার্ন করে এবং সেটি আমরা maxNumber ভেরিয়েবলে সংরক্ষণ করেছি। পরবর্তীতে আমরা console.log() দিয়ে সর্বোচ্চ মানটি প্রিন্ট করেছি।
