import HashMap from "./HashMap.js";

const map = new HashMap(16);

map.set('apple', 'red')
map.set('banana', 'yellow')
map.set('carrot', 'orange')
map.set('dog', 'brown')
map.set('elephant', 'gray')
map.set('frog', 'green')
map.set('grape', 'purple')
map.set('hat', 'black')
map.set('ice cream', 'white')
map.set('jacket', 'blue')
map.set('kite', 'pink')
map.set('lion', 'golden')

map.set("dog", "light brown");
map.set("moon", "silver");

console.log(map.entries());