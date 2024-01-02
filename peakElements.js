
// Input:
// N = 3
// arr[] = {3,4,2}
// Possible Answer: 1
// Output: 1
// Explanation: 4 (at index 1) is the 
// peak element as it is greater than 
// it's neighbor elements 3 and 2.
// If 1 is returned then the generated output will be 1 else 0.

class Solution {
    
    peakElement(arr, n)
    {
      for(let i = 0; i<arr.length; i++){
           if(i==0 && arr[i]>=arr[i+1] || i==arr.length-1 && arr[i]>= arr[i-1] ){
               return i
           }
             if(arr[i]>= arr[i+1] && arr[i]>= arr[i-1]){
              return i;
            }
         
          

      }
   
    }
}