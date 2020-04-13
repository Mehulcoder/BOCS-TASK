/*

				Name: Mehul Chaturvedi
				IIT-Guwahati

*/

let perms = (string) => {
    
    //In case of wrong input or empty input
    if (!string || typeof(string) !== "string"){
      return "Please enter a valid string"
    } else if (string.length <= 1 ){
      return string
    }
  
    //Result array
    let result = [];


    //Pick a character from the string one by one
    for (let i = 0; i < string.length; i++){

        //Picked a character starting from the left
        let char = string[i]
        
        //If the same character has not been picked before : continue
        if (string.indexOf(char) != i){
            continue;
        } 
        
        //Remaining characters other than the picked one
        let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)
        
        //Put all perms of remaining chars in the result array
        for (let permutation of perms(remainingChars)){
            //Concate the chosen character in each perm in the array.
            result.push(char + permutation) 
        }
    }
    return result;
}

var input = "aabc";

console.log(perms(input), perms(input).length);