const scrambledArray: any = [
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
  
  const rearrangedArray: string[] = [];
  
  rearrangedArray.push(scrambledArray[7]);
  rearrangedArray.push(scrambledArray[4]);
  rearrangedArray.push(scrambledArray[5]);
  rearrangedArray.push(scrambledArray[0]);
  rearrangedArray.push(scrambledArray[1]);
  rearrangedArray.push(scrambledArray[6]);
  
  // Combine the elements into a single string
  
  const modifiedSentence: string = rearrangedArray.join(" ");
  
  console.log(modifiedSentence);