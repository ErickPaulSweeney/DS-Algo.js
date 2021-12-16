function isSubset(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        if (!array2.includes(array1[i])) return false;
    }
    return true;
}

console.log(isSubset([3, 2, 5], [5, 3, 7, 9, 2])); // should return true
console.log(isSubset([8, 9], [7, 1, 9, 8, 4, 5, 6])); // should return true
console.log(isSubset([1, 2], [3, 5, 9, 1])); // should return false