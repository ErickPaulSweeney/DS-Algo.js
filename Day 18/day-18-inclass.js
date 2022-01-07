// Delete from beginning

function shift(list) {
    if (list && list.next) list = list.next;
    else if (list) list = null;
    else return undefined;
}

console.log(shift(linkedList));

// Delete from end

function pop(list) {
    if (!list) return list;
    if (!list.next) return list = null;
    let tempPtr = list;
    while (tempPtr.next.next) {
        tempPtr = tempPtr.next;
    }
    tempPtr.next = null;
    return list;
}

console.log(pop(linkedList));

// Delete target element

function deleteTarget(list, value) {
    if (!list) return false;
    if (list.data == vaue) {
        list = null;
        return true;
    }
    if (list.data != value && !list.next) return false;
    let tempPtr = list;
    let prevNode = list;
    let nodeCount = 0;
    let flag = false;
    while (tempPtr) {
        if (tempPtr.data == value) {
            flag = true;
            break;
        }
        tempPtr = tempPtr.next;
        if (nodeCount != 0) prevNode = prevNode.next;
        nodeCount++;
    }
    if (flag) {
        if (nodeCount == 0) {
            list = list.next;
            return flag;
        }
        else {
            prevNode.next = tempPtr.next;
            return flag;
        }
    }
    else return flag;
}

console.log(deleteTarget(head, 40)); // true
display(head);
console.log(deleteTarget(head, 50)); // false
display(head);

// Class based implementation of linked list

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    size() {
        let count = 0;
        let tempPtr = this.head;
        while (tempPtr) {
            tempPtr = tempPtr.next;
            count++; 
        }
        console.log(count);
    }

    display() {
        let tempPtr = this.head;
        while (tempPtr) {
            console.log(tempPtr.data);
            tempPtr = tempPtr.next
        }
    }

    push(value) {
        let tempPtr = this.head; 
        while (tempPtr.next) {
            tempPtr = tempPtr.next;
        }
        tempPtr.next = { data: value, next: null};
    }

    unshift(value) {
        this.head = { data: value, next: this.head }
    }

    shift() {
        if (this.head && this.head.next) this.head = this.head.next; 
        else if (this.head) this.head = null; 
        else return undefined;
    }

    pop() {
        if (!this.head) {
            return this.head; 
        }
        else if (!this.head.next) {
            return this.head = null;
        }
        let tempPtr = this.head;
        while (tempPtr.next.next) {
            tempPtr = tempPtr.next;
        } 
        tempPtr.next = null;
    }

    deleteTarget(value) {
        if (!this.head) return false; 
        else if (this.head.data == value) {
            this.head = this.head.next;
            return true;
        }
        else if (this.head.data != value && !this.head.next) return false;
        let tempPtr = this.head;
        let prevPtr = this.head;
        let flag = false;
        while (tempPtr) {
            if (tempPtr.data == value) {
                flag = true;
                break;
            }
            if (tempPtr != this.head) prevPtr = prevPtr.next; 
            tempPtr = tempPtr.next;            
        }
        if (flag) {
            prevPtr.next = tempPtr.next;
            return flag; 
        }
        else return flag; 
    }
}

class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let node1 = new ListNode(10);
let node2 = new ListNode(20);
let node3 = new ListNode(30);
let linkedList = new LinkedList(node1);
node1.next = node2;
node2.next = node3;

console.log('Linked list')
linkedList.display(); // 10 20 30
console.log('Linked list size')
linkedList.size(); // 3
console.log('Push 40')
linkedList.push(40); 
linkedList.display(); // 10 20 30 40
console.log('Unshift 0')
linkedList.unshift(0);
linkedList.display(); // 0 10 20 30 40
console.log('Shift')
linkedList.shift();
linkedList.display(); // 10 20 30 40
console.log('Pop')
linkedList.pop(); 
linkedList.display(); // 10 20 30
console.log('Delete target 20')
linkedList.deleteTarget(20); 
linkedList.display(); // 10 30