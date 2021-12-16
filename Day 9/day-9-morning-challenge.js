// Exercise 1
function consecutiveTruths(arr) {
    let output = 0; 
    if (arr.length < 3) return 0; 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == true && arr[i + 1] == true && arr[i + 2] == true) { 
            output++; 
            i += 4;
        }
        else if (arr[i] == false) {
            if (arr[i + 1] == true && arr[i + 2] == true && arr[i + 3] == true) { 
                output++; 
                i += 4;
            }
        }
    }
    return output; 
}

console.log(consecutiveTruths([true, false, true, true, true, false, true, true])); // should return 1
console.log(consecutiveTruths([true, true, true, false, false, true, true, true])); // should return 2
console.log(consecutiveTruths([true, true, true, true, false, true, true, true])); // should return 2
console.log(consecutiveTruths([true, true, true, true, true, true, true])); // should return 1 

// Exercise 2

function cropHydrated(farm) {
    let flag = false;
    let isWater = (farm, row, col) => row >= 0 && row < farm.length && col >= 0 && col <= farm[row].length && farm[row][col] === 'w'; 
    for (let i = 0; i < farm.length; i++) {
        for (let j = 0; j < farm[i].length; j++) {
            if (isWater(farm, [i - 1], [j - 1]) || // upper right
                isWater(farm, [i - 1], [j]) || // above
                isWater(farm, [i + 1], [j + 1]) || // upper left
                isWater(farm, [i], [j + 1]) || // left
                isWater(farm, [i], [j - 1]) || // right
                isWater(farm, [i + 1], [j]) || // below
                isWater(farm, [i + 1], [j - 1]) || // lower right
                isWater(farm, [i + 1], [j + 1])) { // lower left
                    // do nothing
            }
            else {
              return false;  
            }
        }
    }
    return true;
}

console.log(cropHydrated([
    [ "w", "c" ],
    [ "w", "c" ],
    [ "c", "c" ]
])); // true

console.log(cropHydrated([
    [ "c", "c", "c" ]
])); // false
// There isn"t even a water source.

console.log(cropHydrated([
    [ "c", "c", "c", "c" ],
    [ "w", "c", "c", "c" ],
    [ "c", "c", "c", "c" ],
    [ "c", "w", "c", "c" ]
])); // false