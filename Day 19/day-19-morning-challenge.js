function carPooling(trips, maxCapacity) {
    let schedule = new Array(Math.max(...trips.flat())).fill(0)
    for (let i = 0; i < trips.length; i++) {
        for (let j = trips[i][1]; j < trips[i][2]; j++) {
            schedule[j] += trips[i][0];
            if (schedule[j] > maxCapacity) return false;
        }
    }
    return true; 
}

console.log(carPooling([[2, 1, 5], [3, 3, 7]], 4)); // false
console.log(carPooling([[2, 1, 5], [3, 3, 7]], 5)); // true
console.log(carPooling([[2, 1, 5], [3, 5, 7]], 3)); // true
console.log(carPooling([[3, 2, 7], [3, 7, 9], [8, 3, 9]], 11)); // true
console.log(carPooling([[9, 3, 4], [9, 1, 7], [4, 2, 4], [7, 4, 5]], 23)); // true
console.log(carPooling([[3, 2, 7], [8, 3, 9], [3, 7, 9], [500, 2, 2]], 12)); // true;