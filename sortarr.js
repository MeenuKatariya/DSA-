// Input:
// N = 4
// arr[] = {1, 5, 3, 2}
// Output: {1, 2, 3, 5}
// Explanation: After sorting array will 
// be like {1, 2, 3, 5}.


// Sort Method 
     function sortArr(n, arr) {
              arr.sort((a,b) => {
                  return a-b;
              })
              return arr
    }
     
    