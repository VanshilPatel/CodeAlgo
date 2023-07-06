const express = require("express");
const app = express();
const port = 3000;
const mongoose = require('mongoose');
var jwt = require("jsonwebtoken");
const { auth } = require("./middleware");
let USER_ID_COUNTER = 1;
const USERS = [];
const JWT_SECRET = "secret";
const bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const cors = require("cors");
app.use(cors());
app.use(jsonParser);
const User = require('./userschema');
const Problem = require('./problemschema');


const PROBLEMS = [
  {
    id: "1",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.You may assume that each input would have exactly one solution, and you may not use the same element twice.You can return the answer in any order.",
    status: "Solved",
    title: "Two Sum",
    acceptance: "40%",
    difficulty: "Easy",
  },
  {
    id: "2",
    description: "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.You may assume the two numbers do not contain any leading zero, except the number 0 itself.",
    status: "Unsolved",
    title: "Add Two Numbers",
    acceptance: "20%",
    difficulty: "Hard",
  },
  {
    id: "3",
    description: "Given a string s, find the length of the longest substring without repeating characters.",
    status: "Solved",
    title: "Longest Substring Without Repeating Characters",
    acceptance: "70%",
    difficulty: "Medium",
  },
  {
    id: "4",
    description: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.The overall run time complexity should be O(log (m+n)).",
    status: "Unsolved",
    title: "Median of Two Sorted Arrays",
    acceptance: "65%",
    difficulty: "Easy",
  },
  {
    id: "5",
    description: "Given a string s, return the longest palindromic substring in s.",
    status: "Solved",
    title: "Longest Palindromic Substring",
    acceptance: "30%",
    difficulty: "Hard",
  },
  {
    id: "6",
    description: "The string PAYPALISHIRING is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)",
    status: "Unsolved",
    title: " Zigzag Conversion",
    acceptance: "20%",
    difficulty: "Easy",
  },
  {
    id: "7",
    description: "Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.Assume the environment does not allow you to store 64-bit integers (signed or unsigned).  ",
    status: "Solved",
    title: "Reverse Integer",
    acceptance: "90%",
    difficulty: "Easy",
  },
  {
    id: "8",
    description: "Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function). The algorithm for myAtoi(string s) is as follows:  Read in and ignore any leading whitespace. Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present. Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored. Convert these digits into an integer (i.e. 123 -> 123, 0032 -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2). If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1. Return the integer as the final result.",
    status: "Unsolved",
    title: "String to Integer (atoi)",
    acceptance: "79%",
    difficulty: "Hard",
  },
  {
    id: "9",
    description: "Given an integer x, return true if x is a palindrome , and false otherwise.",
    status: "Solved",
    title: "Palindrome Number",
    acceptance: "38%",
    difficulty: "Medium",
  },
  {
    id: "10",
    description: "Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:'.' Matches any single character.​​​​ '*' Matches zero or more of the preceding element.The matching should cover the entire input string (not partial).",
    status: "Solved",
    title: "Regular Expression Matching",
    acceptance: "58%",
    difficulty: "Easy",
  },
  {
    id: "11",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.You may assume that each input would have exactly one solution, and you may not use the same element twice.You can return the answer in any order.",
    status: "Solved",
    title: "Two Sum",
    acceptance: "40%",
    difficulty: "Easy",
  },
  {
    id: "12",
    description: "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.You may assume the two numbers do not contain any leading zero, except the number 0 itself.",
    status: "Unsolved",
    title: "Add Two Numbers",
    acceptance: "20%",
    difficulty: "Hard",
  },
  {
    id: "13",
    description: "Given a string s, find the length of the longest substring without repeating characters.",
    status: "Solved",
    title: "Longest Substring Without Repeating Characters",
    acceptance: "70%",
    difficulty: "Medium",
  },
  {
    id: "14",
    description: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.The overall run time complexity should be O(log (m+n)).",
    status: "Unsolved",
    title: "Median of Two Sorted Arrays",
    acceptance: "65%",
    difficulty: "Easy",
  },
  {
    id: "15",
    description: "Given a string s, return the longest palindromic substring in s.",
    status: "Solved",
    title: "Longest Palindromic Substring",
    acceptance: "30%",
    difficulty: "Hard",
  },
  {
    id: "16",
    description: "The string PAYPALISHIRING is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)",
    status: "Unsolved",
    title: " Zigzag Conversion",
    acceptance: "20%",
    difficulty: "Easy",
  },
  {
    id: "17",
    description: "Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.Assume the environment does not allow you to store 64-bit integers (signed or unsigned).  ",
    status: "Solved",
    title: "Reverse Integer",
    acceptance: "90%",
    difficulty: "Easy",
  },
  {
    id: "18",
    description: "Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function). The algorithm for myAtoi(string s) is as follows:  Read in and ignore any leading whitespace. Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present. Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored. Convert these digits into an integer (i.e. 123 -> 123, 0032 -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2). If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1. Return the integer as the final result.",
    status: "Unsolved",
    title: "String to Integer (atoi)",
    acceptance: "79%",
    difficulty: "Hard",
  },
  {
    id: "19",
    description: "Given an integer x, return true if x is a palindrome , and false otherwise.",
    status: "Solved",
    title: "Palindrome Number",
    acceptance: "38%",
    difficulty: "Medium",
  },
  {
    id: "20",
    description: "Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:'.' Matches any single character.​​​​ '*' Matches zero or more of the preceding element.The matching should cover the entire input string (not partial).",
    status: "Solved",
    title: "Regular Expression Matching",
    acceptance: "58%",
    difficulty: "Easy",
  },
]

const SUBMISSIONS = [];

app.get("/", (req, res) => {
  res.json({
    msg: "hello world",
  });
});

app.get("/problems", async (req, res) => {

  let problems;

  try {
    problems = await Problem.find({});
  } catch (err) {
    res.status(500).json({ msg: "Fetching problems failed, please try again later." })
  }
  res.json({ problems: problems.map(problem => problem.toObject({ getters: true })) });

  // const filteredProblems = PROBLEMS.map((x) => ({
  //   id: x.id,
  //   status: x.status,
  //   difficulty: x.difficulty,
  //   acceptance: x.acceptance,
  //   title: x.title,
  // }));

  // res.json({
  //   problems: filteredProblems,
  // });
});

app.get("/problem/:id", (req, res) => {
  const id = req.params.id;

  const problem = PROBLEMS.find((x) => x.id === id);

  if (!problem) {
    return res.status(411).json({});
  }

  res.json({
    problem,
  });
});

app.get("/me", auth, (req, res) => {
  const user = USERS.find((x) => x.id === req.userId);
  res.json({ email: user.email, id: user.id });
});

app.get("/submissions/:problemId", auth, (req, res) => {
  const id = req.params.id;
  const submissions = SUBMISSIONS.filter(
    (x) => x.id === id && x.userId === req.userId
  );
  res.json({
    submissions,
  });
});

// app.get("/probdb", async (req, res) => {
//   try {
//     for (const p of PROBLEMS) {
//       const createdProblem = new Problem({
//         id: p.id,
//         description: p.description,
//         status: p.status,
//         title: p.title,
//         acceptance: p.acceptance,
//         difficulty: p.difficulty
//       });

//       await createdProblem.save();
//     }

//     res.status(200).json({ msg: "Problems inserted successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ msg: "Failed to insert problems" });
//   }
// });


app.post("/submission", auth, (req, res) => {
  const isCorrect = Math.random() < 0.5;
  const id = req.body.id;
  const submission = req.body.submission;

  if (isCorrect) {
    SUBMISSIONS.push({
      submission,
      id,
      userId: req.userId,
      status: "AC",
    });
    return res.json({
      status: "AC",
    });
  } else {
    SUBMISSIONS.push({
      submission,
      id,
      userId: req.userId,
      status: "WA",
    });
    return res.json({
      status: "WA",
    });
  }
});

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  // if (!email || !password) {
  //   return res.status(400).json({ msg: "Email and password are required" });
  // }

  try {
    let existingUser = await User.findOne({ email: email });

    if (existingUser) {
      return res.status(422).json({ msg: "User exists already, please login instead" });
    }

    const createdUser = new User({
      email,
      password
    });

    await createdUser.save();

    res.status(201).json({ email: createdUser.email });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Signing up failed, please try again" });
  }
});


// if (USERS.find((x) => x.email === email)) {
//   return res.status(403).json({ msg: "Email already exists" });
// }

// USERS.push({
//   email,
//   password,
//   id: USER_ID_COUNTER++,
// });
// return res.json({
//   msg: "Success",
// });


app.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const existingUser = await User.findOne({ email: email });

    if (!existingUser) {
      return res.status(403).json({ msg: "Invalid credentials, could not login." });
    }

    if (existingUser.password === password) {
      // If the passwords match, you can proceed with further actions like generating a token
      // const token = jwt.sign(
      //   {
      //     id: existingUser.id,
      //   },
      //   JWT_SECRET
      // );

      return res.status(200).json({ msg: "Logged In Successfully" });
    } else {
      return res.status(403).json({ msg: "Invalid credentials, could not login." });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Logging in failed, please try again later." });
  }
});

// const user = USERS.find((x) => x.email === email);

// if (!user) {
//   return res.status(403).json({ msg: "User not found" });
// }

// if (user.password !== password) {
//   return res.status(403).json({ msg: "Incorrect password" });
// }


mongoose
  .connect('mongodb+srv://j966433:DkW0PAAMdDgARo13@users.lp1sjwp.mongodb.net/user?retryWrites=true&w=majority')
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch(err => {
    console.log(err);
  });
