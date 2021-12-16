function tuckIn(outerArray, innerArray) {
    let output = [outerArray[0], ...innerArray, outerArray[1]];
    return output;
}

console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9])); // ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(tuckIn([15,150], [45, 75, 35])); // ➞ [15, 45, 75, 35, 150]
console.log(tuckIn([[1, 2], [5, 6]], [[3, 4]])); // ➞ [[1, 2], [3, 4], [5, 6]]

function error(input) {
    let output = {
        1: "Check the fan: e1",
        2: "Emergency stop: e2",
        3: "Pump Error: e3",
        4: "c: e4",
        5: "Temperature Sensor Error: e5"
    }
    return output[input];
}

console.log(error(1)); // ➞ "Check the fan: e1"
console.log(error(2)); // ➞ "Emergency stop: e2"
console.log(error(3)); // ➞ "Pump Error: e3"