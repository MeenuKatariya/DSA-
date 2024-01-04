// Input: arr[] = {1, 2, 3, 4, 5}
// Output: arr[] = {5, 1, 2, 3, 4}

// Input: arr[] = {2, 3, 4, 5, 1}
// Output: {1, 2, 3, 4, 5}

class Solution{
    rotate(arr,n){
        let newArr =[];
        let last = arr[arr.length-1];
        newArr.push(last)
        for(let i = 0; i<arr.length-1 ; i++){
            newArr.push( arr[i])
        }
        return newArr
    }
}