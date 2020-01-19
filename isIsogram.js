function isIsogram(str){
  
  //Vars to hold 2 letters to compare.
  let l1,l2;

  //Simplifiy the string to lowercase.
  str = str.toLowerCase();

  //Loop through the entire string array starting with the first letter.
  for(l1 = 0; l1 < str.length; l1++){

    //Loop through the entire string array starting with the second letter.
    for(l2 = l1 + 1; l2 < str.length; l2++){

      //While looping the string, check if the letter before is the same as the next letter in the string.
      if(str[l1] === str[l2]){
        return(false);
      }
      

    }
  }
  return(true);

}
