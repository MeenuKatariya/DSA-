// Input: arr[] = {1, 4, 20, 3, 10, 5}, sum = 33
// Output: Sum found between indexes 2 and 4
// Explanation: Sum of elements between indices 2 and 4 is 20 + 3 + 10 = 33

subArray([1, 4, 20, 3, 10, 5], 33)
function subArray(arr, sum){
    for (let i = 0; i < arr.length; i++) {
        let currentSum = arr[i];
 
        if (currentSum == sum) {
            console.log("Sum found at indexes " +i);
            return;
        }
        else {
           
            for (let j = i + 1; j < arr.length; j++) {
                currentSum += arr[j];
 
                if (currentSum == sum) {
                    console.log("Sum found between indexes "
                         + i + " and " +j);
                    return;
                }
            }
        }
    }
    console.log("No subarray found");
    return;

}