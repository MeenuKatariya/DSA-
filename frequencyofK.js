// Input:
// N = 5
// vector = {1, 1, 1, 1, 1}
// X = 1
// Output: 
// 5
// Explanation: Frequency of 1 is 5.

class Solution{
    findFrequency(a, n, x){
        //code here
        let count = 0;
        for (let i=0; i < n; i++)
        if (a[i] == x) 
            count++;
        return count;
    }
}