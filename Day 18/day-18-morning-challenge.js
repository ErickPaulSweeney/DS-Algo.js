// Challenge 1

let linkedList = {
    value: 5,
    next: {
        value: 7,
        next: {
            value: 11,
            next: {
                value: 18,
                next: undefined
            }
        }
    }
}

function isValuePresent(linkedList, value) {
    let tempPtr = linkedList;
    while (tempPtr) {
        if (tempPtr.value == value) return true;
        tempPtr = tempPtr.next;
    }
    return false;
}

console.log(isValuePresent(linkedList, 7)); // should return true
console.log(isValuePresent(linkedList, 18)); // should return true
console.log(isValuePresent(linkedList, 3)); // should return false

// Challenge 2

let linkedList = {
    value: 5,
    next: {
        value: 7,
        next: {
            value: 11,
            next: {
                value: 18,
                next: undefined
            }
        }
    }
};

function middleOfLinkedList(linkedList) {
    let fastPtr = linkedList;
    let slowPtr = linkedList;
    while (fastPtr && fastPtr.next) {
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next.next;
    }
    return slowPtr.value;
}

console.log(middleOfLinkedList(linkedList)); // should print 11