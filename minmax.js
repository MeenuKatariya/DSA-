// Input:
// N = 6
// A[] = {3, 2, 1, 56, 10000, 167}
// Output: 1 10000
// Explanation: minimum and maximum elements of array are 1 and 10000.

class Solution{
    getMinMax(arr,n){
      let min = 100000000000000000000000;
      let max= 0;
      for(let i = 0; i<arr.length; i++){
          if(min > arr[i]){
              min = arr[i]
          }
          
          if(max < arr[i]){
              max= arr[i]
          }
      }
      return [ min, max]
    }
}