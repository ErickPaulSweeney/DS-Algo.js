// Last method array

Array.prototype.last = () => {
    return this[this.length - 1];
}

let arr = [1, 2, 3, 4];
console.log(arr.last()); // 4

// Linked list

let linkedList = {
    data: 10, 
    next: {
        data: 20,
        next: {
            data: 30,
            next: {
                data: 40,
                next: null
            }
        }
    }
}

function printData(list) {
    let tempPointer = list; 
    while (tempPointer) {
        console.log(tempPointer.data); 
        tempPointer = tempPointer.next;
    }
}

printData(linkedList);

function countNodes(list) {
    let tempPointer = list; 
    let nodes = 0;
    while (tempPointer) {
        tempPointer = tempPointer.next;
        nodes++;
    }
    return nodes;
}

console.log(countNodes(linkedList)); 

function searchList(list, target) {
    let tempPointer = list;
    let node = 1;
    while (tempPointer) {
        if (tempPointer.data == target) return node;
        tempPointer = tempPointer.next;
        node++; 
    }
    return undefined;
}
 
console.log(searchList(linkedList, 30)); 

function push(list, info) {
    let tempPointer = list; 
    while (tempPointer.next) {
        tempPointer = tempPointer.next; 
    }
    tempPointer.next = { data: info, next: null }; 
    return list; 
}

console.log(push(linkedList, 50)); 

function unshift(list, info) {
    list = { data: info, next: list}; 
    return list; 
}

console.log(unshift(linkedList, 0)); 

function shift(list) {
    list = list.next; 
    return list;
}

console.log(shift(linkedList));

function pop(list) {
    let tempPointer = list;
    while (tempPointer.next.next) {
        tempPointer = tempPointer.next;
    }
    tempPointer.next = null; 
    return list;
}

console.log(pop(linkedList)); 