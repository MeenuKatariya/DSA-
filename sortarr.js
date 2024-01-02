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
     
    // Selection Sort - tc- n^2

    for(let i=0;i<arr.length-1;i++){
        min=i;
        for(let j = i+1; j<arr.length; j++){
            if(arr[j]<arr[min]){
                min=j
            }

        }
        swap(arr.i,min)
    }
    function swap(arr,a,b){
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }