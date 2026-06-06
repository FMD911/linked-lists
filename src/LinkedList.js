import Node from "./Node.js";

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let current = this.head;

    while (current.nextNode !== null) {
      current = current.nextNode;
    }

    current.nextNode = newNode;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.nextNode = this.head;

    this.head = newNode;
  }

  size() {
  let count = 0;
  let current = this.head;

  while (current !== null) {
    count++;
    current = current.nextNode;
  }

  return count;
    }

    head() {
    return this.head;
    }

    tail() {
    if (this.head === null) return null;

    let current = this.head;

    while (current.nextNode !== null) {
        current = current.nextNode;
    }

    return current;
}

    at(index) {
    if (index < 0) return null;

    let current = this.head;
    let count = 0;

    while (current !== null) {
        if (count === index) {
        return current;
        }

        current = current.nextNode;
        count++;
    }

    return null;
    }

    contains(value) {
    let current = this.head;

    while (current !== null) {
        if (current.value === value) {
        return true;
        }

        current = current.nextNode;
    }

    return false;
    }

    find(value) {
    let current = this.head;
    let index = 0;

    while (current !== null) {
        if (current.value === value) {
        return index;
        }

        current = current.nextNode;
        index++;
    }

    return null;
    }

    toString() {
    let current = this.head;
    let result = "";

    while (current !== null) {
        result += `( ${current.value} ) -> `;
        current = current.nextNode;
    }

    result += "null";

    return result;
    }

    pop() {
    if (this.head === null) return null;

    if (this.head.nextNode === null) {
        const value = this.head.value;
        this.head = null;
        return value;
    }

    let current = this.head;

    while (current.nextNode.nextNode !== null) {
        current = current.nextNode;
    }

    const value = current.nextNode.value;
    current.nextNode = null;

    return value;
    }

    insertAt(index, value) {
    if (index < 0) return false;

    const newNode = new Node(value);

    if (index === 0) {
        newNode.nextNode = this.head;
        this.head = newNode;
        return true;
    }

    let current = this.head;
    let previous = null;
    let count = 0;

    while (current !== null && count < index) {
        previous = current;
        current = current.nextNode;
        count++;
    }

    if (count !== index) return false;

    previous.nextNode = newNode;
    newNode.nextNode = current;

    return true;
    }

    removeAt(index) {
    if (index < 0 || this.head === null) return false;

    if (index === 0) {
        this.head = this.head.nextNode;
        return true;
    }

    let current = this.head;
    let previous = null;
    let count = 0;

    while (current !== null && count < index) {
        previous = current;
        current = current.nextNode;
        count++;
    }

    if (current === null) return false;

    previous.nextNode = current.nextNode;

    return true;
    }
}

export default LinkedList;
