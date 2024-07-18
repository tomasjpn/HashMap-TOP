import HashMap from "./HashMap.js";

export default class HashSet{
    constructor(sizeBucketArr = 16){
        this.map = new HashMap(sizeBucketArr);
    }

    add(key){
        this.map.set(key, true);
    }

    has(key){
        return this.map.has(key);
    }

    delete(key){
        return this.map.remove(key);
    }

    get size(){
        return this.map.length();
    }

    clear(){
        this.map.clear();
    }

    keys(){
        return this.map.keys();
    }

    values(){
        return this.map.keys().map(key => true);
    }

    entries(){
        return this.map.keys().map(key => key);
    }


}