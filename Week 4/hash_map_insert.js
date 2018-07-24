var hashMap = [];
hashMap.length = 30;  // set the capacity by defining the length of the array

String.prototype.hashCode = function(){
    var hash = 0;
    if(this.length == 0){
        return hash;
    }
    for(i=0; i<this.length; i++){
        var char = this.charCodeAt(i);
        hash = ((hash<<5)-hash) + char; // bitwise operators are used to manipulate the string in binary
        hash &= hash;                
    }
    return hash; // by the end of the loop, the hash is unique to this string
}

function mod(input, div){
    return (input % div + div) % div;
}

function hashInsert(key, value){
    //  converts key into hashCode
    let hashedKey = key.hashCode();
    // use the function to get the index position where we should store our data
    let idx = mod(hashedKey, hashMap.length);

    if (hashMap[idx] === undefined){
        hashMap[idx] = [key, value]
    } else {
        hashMap[idx][1] = value; 
    }
}

hashInsert('role', 'tech')
console.log(hashMap);