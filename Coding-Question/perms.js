/*

				Name: Mehul Chaturvedi
				IIT-Guwahati

*/

let perms = (string) => {
    
    //In case of wrong input or empty input
    if (!string || typeof(string) !== "string"){
      return "Please enter a valid string"
    } else if (string.length < 2 ){
      return string
    }
  
    //Result array
    let result = [];
     
    //Assume you have disassembled all the characters and are 
    //Pick a character from the box
    for (let i = 0; i < string.length; i++){
      let char = string[i]
  
      if (string.indexOf(char) != i){
        continue;
      } 
  
      let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)
  
      for (let permutation of perms(remainingChars)){
        result.push(char + permutation) }
    }
    return result
  }

console.log(perms("AABC"));