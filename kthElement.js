// Input:
// N = 6
// arr[] = 7 10 4 3 20 15
// K = 3
// L=0 R=5

// Output : 7
// Explanation :
// 3rd smallest element in the given 
// array is 7.

class Solution {
    kthSmallest(arr,l,r,k){
        let sortArr = [];
        
    sortArr = arr.sort((a,b) => a-b)
    
     return arr[k-1];
    }
  }