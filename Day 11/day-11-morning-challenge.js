function isModest(num) {
    if (num < 10) return false; 
    let partitions = []; 
    let temp = JSON.parse(JSON.stringify(num)); 
    let divisor = 10; 
    while (temp > 1) {
        partitions.push([Math.floor(num / divisor), num % divisor]); 
        divisor *= 10;
        temp = Math.floor(temp / 10); 
    }
    for (let i = 0; i < partitions.length; i++) {
        if (partitions[i][0] !== 0) {
            if (num % partitions[i][1] == partitions[i][0]) return true; 
        }
    }
    return false; 
}

console.log(isModest(13)); // ➞ true
console.log(isModest(15)); // ➞ false
console.log(isModest(2036)); // ➞ true
console.log(isModest(7782)); // ➞ false
console.log(isModest(2851111)); // ➞ true