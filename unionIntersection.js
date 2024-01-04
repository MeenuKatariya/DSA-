// Input: arr1[] = {1, 3, 4, 5, 7}
//         arr2[] = {2, 3, 5, 6} 
// Output: Union : {1, 2, 3, 4, 5, 6, 7} 
//          Intersection : {3, 5}

// Input: arr1[] = {2, 5, 6}
//         arr2[] = {4, 6, 8, 10} 
// Output: Union : {2, 4, 5, 6, 8, 10} 
//          Intersection : {6}


// using set 
union([1,2,3,5,4,7, 2, 5, 7, 9, 1], [3,5,8,9,2,1])
// function union(arr1, arr2){
//     const sortArr1 = arr1.sort((a,b) => a-b);
//     const sortArr2 = arr2.sort((a,b) => a-b);

//     const set1 = new Set(sortArr1);
//     const set2 = new  Set(sortArr2);
//     const result = [...new Set([...set1, ...set2])];

//     console.log(result)
// }

  // Map

function union(arr1, arr2){
    const map1 = {};

    for(let i=0;i<arr1.length; i++){
        map1[arr1[i]] = ( map1[arr1[i]] || 0) +1 
    }
    
    

    for(let i=0;i<arr2.length; i++){
        map1[arr2[i]] = ( map1[arr2[i]] || 0) +1
    }
    console.log(Object.keys(map1))


}
