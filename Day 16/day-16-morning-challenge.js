let numbers = [10, 6, 5, 2, 2, 1];

function getWaterLevel(numbers, totalWater) {
    let output = 0;
    let row = 0;
    let newNumbers = JSON.parse(JSON.stringify(numbers))
    newNumbers.unshift(Number.POSITIVE_INFINITY)
    newNumbers.push(Number.POSITIVE_INFINITY);
    while (totalWater > 0) {
        if (newNumbers.some((el) => el < row)) {
            let width = newNumbers.reduce((accu, curr) => {
                if (curr < row) accu++;
                return accu; 
            }, 0)
            if (totalWater >= width) {
                totalWater -= width;
                output = row;  
                row++; 
            }
            else {
                output += (totalWater / width); 
                totalWater = 0;
            }
        }
        else {
            row++;
        }; 
    }
    return output;
}

console.log(getWaterLevel(numbers, 0)); // 0
console.log(getWaterLevel(numbers, 1)); // 2
console.log(getWaterLevel(numbers, 4)); // 3
console.log(getWaterLevel(numbers, 10)); // 5
console.log(getWaterLevel(numbers, 12)); // 5.5
console.log(getWaterLevel(numbers, 25)); // 8.2
console.log(getWaterLevel(numbers, 34)); // 10
console.log(getWaterLevel([2, 2, 2, 2, 2], 10)) // 4