// Input:
// s = Geeks
// Output: skeeG

// First Method

class Solution {
    
    reverseWord(str){
      let string = str.split("").reverse().join("");
       return string;
    }
}

//Second Method
class Solution {
    
    reverseWord(str){
        let string =""
      for(let i = str.length-1; i>=0; i--){
         string+=str[i];  
      } 
      return string
 }
 }