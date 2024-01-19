function Three(arr1, arr2, arr3){
    let bag =[]
   for(let i=0;i<arr1.length;i++){
    for(let j=0;j<=arr2.length;j++){
       if(arr1[i] == arr2[j]){
          bag.push(arr1[i])
       }
    }
   }
  
   let result = ""
   for(let j=0;j<arr3.length;j++){
   for(let i=0;i<bag.length;i++){
     if(arr3[j] == bag[i]){
          result+=arr3[j] + ' '
     } 
   }
   
   }
   console.log(result)
}

let arr1 = [1, 5, 10, 20, 40, 80]
let arr2 = [6, 7, 20, 80, 100]
let arr3 = [4, 15, 20, 30, 70, 80, 120]
Three(arr1, arr2, arr3)