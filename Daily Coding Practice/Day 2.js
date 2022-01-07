// Case and index reverser

function invert(str) {
    return str.split('').reverse().map((el) => el.toUpperCase() == el ? el.toLowerCase() : el.toUpperCase()).join(''); 
}

console.log(invert("dLROW YM sI HsEt")); // ➞ "TeSh iS my worlD"
console.log(invert("ytInIUgAsnOc")); // ➞ "CoNSaGuiNiTY"
console.log(invert("step on NO PETS")); // ➞ "step on NO PETS"
console.log(invert("XeLPMoC YTiReTXeD")); // ➞ "dExtErIty cOmplEx"

// Flatten arr

function flatten(arr) {
    function reducer(accu, curr) {
        accu = accu.concat(curr); 
        return accu;
    }
    return arr.reduce(reducer, []); 
}

var arr = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arr)); // ["1", "2", "3", true, 4, 5, 6];