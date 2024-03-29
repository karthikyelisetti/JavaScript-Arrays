/***  Q1: Function to calculate the year. ***/
function calculateYear() {
  let inputValue = parseInt(document.getElementById("input-txt").value);
  let year = new Date().getFullYear();
  let yr = year.toString().substring(0, 2); // fetching the first 2 digits of the 2000s year
  let fullYear;

  if (inputValue === "" || inputValue < 10 || inputValue > 99 || isNaN(inputValue)) {
    // Checking for valid input value
    alert("Please enter a valid digit greater than or equal to 10 and less than 100.");
    document.getElementById("input-txt").value = "";
    document.getElementById("output-txt").value = "";
  } 
  else if (inputValue >= 10 && inputValue < 35) {
    // 2000 year range logic
    // Concatinating the first 2 digits of the year with the input value
    fullYear = Number(yr + inputValue);
    return (document.getElementById("output-txt").value = fullYear);
  } 
  else if (inputValue >= 35 && inputValue < 100) {
    // 1900 year range logic
    yr = (Number(yr) - 1).toString(); // fetching the first 2 digits of the 1900s year
    fullYear = Number(yr + inputValue);
    return (document.getElementById("output-txt").value = fullYear);
  }
}


/*** Q2: function that takes your position a and your friend's position b and 
returns a boolean representation of whether it's possible to earn a bonus on any dice roll. ***/
function possibleBonus() {
  let num1 = parseInt(document.getElementById("input-num").value);
  let num2 = parseInt(document.getElementById("input-num1").value);
  let personA = num1;
  let personB = num2;
  for (var i = 1; i <= 6; i++) {
    // considering 6 as the dice will have 6 sides
    personA += 1;
    if (personA === personB) {
      return (document.getElementById("output-txt").value = true);
    }
  }
  return (document.getElementById("output-txt").value = false);
}


/*** Q3: Function to generate the array of multiples ***/
function generateArrayMultiples() {
  let num = parseInt(document.getElementById("input-num").value);
  let len = parseInt(document.getElementById("input-length").value);
  let arrMultiply = [];

  for (var i = 1; i <= len; i++) {
    // Multiplying the number with the array of numbers
    let multiply = num * i;
    // pushing the multiply value to the array
    arrMultiply.push(multiply);
  }
  return (document.getElementById("output-txt").value =
    "[ " + arrMultiply + " ]");
}


/*** Q4: Find the length of the longest sub-sequence ***/
function longestSubSequence() {
  let valArr = document.getElementById("input-txt").value;
  let regex = /\(|\)|\[|\]|\{|\}/g; // regular expression to replace any brackets in the input.
  let arrString = valArr.replace(regex, "");
  let arr = arrString.split(",").map(Number); // spltting the string and mapping it to collection of elements.
  // sorting the array (arr)
  arr.sort(function (a, b) {
    return a - b;
  }); 
  let sortedArray = [];
  let preVal = 0,
    currVal = 0;
  // Using previous value and current value concept to identify the consecutive sequence.
  for (var i = 0; i < arr.length; i++) {
    currVal = arr[i];
    if (preVal == 0) {
      sortedArray.push(currVal);
      preVal = currVal;
    } 
    else if (currVal - preVal <= 1) {
      sortedArray.push(currVal);
      preVal = currVal;
    }
  }
  return (document.getElementById("output-txt").value = sortedArray.length);
}


/*** Q4a: Find the Depth of an Array ***/
function depth() {
  let depthArray = document.getElementById("input-txt").value;
  var arr = depthArray.toString().split(',');
  let depth = 0;
  for (var i=0; i<arr.length; i++) {
    if (arr[i].indexOf("[") > -1) {
      depth += 1;
    }
  }
  return (document.getElementById("output-txt").value = depth);
}


/*** Q5: Function to find the nearest vowel to the letter ***/
function nearestVowel() {
  let letter = document.getElementById("input-txt").value.toLowerCase();
  let vowels = ["a", "e", "i", "o", "u"];
  let letterChar = letter.charCodeAt(0);
  let lengthDiff = "";
  let charArray = [];
  let minValueIndex = "";

  for (i in vowels) {
    // Identifying the length difference between the letter and the vowels
    // using charCodeAt to get the Unicode value of the letter
    lengthDiff = Math.abs(letterChar - vowels[i].charCodeAt(0));
    // pushing the length difference of the letter with respect to each vowel to an array
    charArray.push(lengthDiff);
  }
  // Using Math.min to fetch the minimum value from the array and finding the Index of the minimum value.
  minValueIndex = charArray.indexOf(Math.min(...charArray));
  return (document.getElementById("output-txt").value = vowels[minValueIndex]);
}
