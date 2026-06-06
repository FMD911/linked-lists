import LinkedList from "./src/LinkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("bird");

list.insertAt(1, "fish");

console.log(list.toString());