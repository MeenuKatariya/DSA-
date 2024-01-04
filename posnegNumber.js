// Input : 
// N = 8
// arr[] = {1, -1, 3, 2, -7, -5, 11, 6 }
// Output : 
// 1  3  2  11  6  -1  -7  -5
segregateElements([1, -1, 3, 2, -7, -5, 11, 6], 8)

 function segregateElements(arr,n){
    //code here
    let pos =[];
    let neg=[]
    for(let i=0; i<arr.length; i++){
        if(arr[i]>0){
            pos.push(arr[i]);
            
        }else{
            neg.push(arr[i])
        }
    }
     console.log(pos.concat(neg))
}