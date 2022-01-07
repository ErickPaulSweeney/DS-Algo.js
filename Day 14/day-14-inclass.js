// Exercise 1

// Part 1

let voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age:  20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function countVoters(voters) {
    let reducer = (accu, curr) => {
        curr.voted == true ? accu++ : accu = accu;
        return accu; 
    }
    return voters.reduce(reducer, 0); 
}

console.log(countVoters(voters)); // should return 7

// Part 2

let voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterAnalysis(voters) {
    let reducer = (accu, curr) => {
        if  (curr.age < 26) {
            accu['numYoungPeople']++;
            if (curr.voted == true) accu['numYoungVotes']++; 
        }
        else if  (curr.age < 36) {
            accu['numMidPeople']++;
            if (curr.voted == true) accu['numMidVotes']++; 
        }
        else if  (curr.age < 56) {
            accu['numOldPeople']++;
            if (curr.voted == true) accu['numOldVotes']++; 
        }
        return accu; 
    }
    return voters.reduce(reducer, { numYoungVotes: 0, numYoungPeople: 0, numMidVotes: 0, numMidPeople: 0, numOldVotes: 0, numOldPeople: 0 })
}

console.log(voterAnalysis(voters)); // Returned value shown below:
/*
{ 
    numYoungVotes: 1,
    numYoungPeople: 4,
    numMidVotes: 3,
    numMidPeople: 4,
    numOldVotes: 3,
    numOldPeople: 4 
}
*/

// Exercise 2

function updateArr(arr) {
    return arr[0] % 2 == 0 ? arr.sort((a, b) => a - b) : arr[0] = 0; 
}

// Exercise 3

function canSum(arr, targetSum) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == targetSum) return true; 
        }
    }
    return false;
}

console.log(canSum([1, 3, 10, 23, 15], 26)) // true; 
console.log(canSum([1, 3, 10, 23, 15], 5)) // false; 

// Less time complexity

function canSum2(arr, targetSum) {
    let obj = {}; 
    for (let i = 0; i < arr.length; i++) {
        if (obj.hasOwnProperty(targetSum - arr[i])) return true; 
        else obj[arr[i]] = true;
    }
    return false; 
}