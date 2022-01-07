// Exercise 1
function binarySearch(arr, num, initial = 0, end = arr.length - 1) {
    let mid = Math.floor((initial + end) / 2);    
    if (num == arr[mid]) return mid;
    else if (initial > end) return -1;  
    else if (num < arr[mid]) return binarySearch(arr, num, initial, mid - 1);
    else return binarySearch(arr, num, mid + 1, end); 
}

console.log(binarySearch([1, 2, 10, 11, 14], 2)); // 1
console.log(binarySearch([-1, 0, 1, 7, 9], 15)); // -1
console.log(binarySearch([8], 8)); // 0