function findIntersection(arr1, arr2, arr3){
    let i = 0;
    let j = 0;
    const temp = [];
 
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            i++;
        } else if (arr2[j] < arr1[i]) {
            j++;
        } else {
            temp.push(arr1[i]);
            i++;
            j++;
        }
    }
 
    console.log(temp)
}
function main() {
    const arr1 = [3,3,3];
    const arr2 = [3,3,3];
    const arr3 = [3,3,3];
 
    // Find the intersection of arr1 and arr2
    const temp = findIntersection(arr1, arr2);
 
    // Find the intersection of temp and arr3 to get common elements
    const ans = findIntersection(temp, arr3);
 
    console.log("Common elements present in arrays are:");
    for (const element of ans) {
        console.log(element);
    }
}
main()

// let arr1 = [3 ,4,5,2,3,3]
// let arr2 = [1, 3,4,3,5, 3]
// let arr3 = [3, 3,,1,3,5,4, 3]
// Three(arr1, arr2, arr3)