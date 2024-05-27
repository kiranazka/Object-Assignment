var scrambledArray = [
    "student",
    "of",
    true,
    123,
    "am",
    "a",
    "GIAIC",
    "I",
];
// Convert non-string elements to strings
scrambledArray[2] = String(scrambledArray[2]);
scrambledArray[3] = String(scrambledArray[3]);
// Rearrange the elements in the correct order
var rearrangedArray = [];
rearrangedArray.push(scrambledArray[7]);
rearrangedArray.push(scrambledArray[4]);
rearrangedArray.push(scrambledArray[5]);
rearrangedArray.push(scrambledArray[0]);
rearrangedArray.push(scrambledArray[1]);
rearrangedArray.push(scrambledArray[6]);
// Combine the elements into a single string
var modifiedSentence = rearrangedArray.join(" ");
console.log(modifiedSentence);
