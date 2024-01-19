// Input:
// N = 4
// arr[] = {geeksforgeeks, geeks, geek,
//          geezer}
// Output: gee
// Explanation: "gee" is the longest common
// prefix in all the given strings.

  longestCommonPrefix(["flower","flow","flight"], 3)
 function longestCommonPrefix(strs,n){ 
    //code here
    let prefix = strs.reduce((acc, str) => 
     console.log(acc, str)
    // str.length < acc.length ? str : acc
    );
   
// for (let str of strs) {
//     while (str.slice(0, prefix.length) != prefix) {
//         prefix = prefix.slice(0, -1);
//     }
// }
// if(prefix){
//     console.log(prefix)
// }else{
//     console.log(-1)
// }

}