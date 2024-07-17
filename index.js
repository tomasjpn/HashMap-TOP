import HashMap from "./HashMap.js";

const map = new HashMap(16);

map.set("moin", "hello");
map.set("carla", "world");
map.set("carlos", "everyone");


console.log(map.keys());