var hashMap = [];
hashMap.length = 5;  // set the capacity by defining the length of the array

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

function growHashMap(hashMap) {
    let tempHashMap = []
    tempHashMap.length = Math.floor(hashMap.length * 1.5);
    console.log(`new hashMap length is ${tempHashMap.length}`)
    for (let x = 0; x < hashMap.length; x++) {
        if (hashMap[x]){
            hashInsert(hashMap[x][0], hashMap[x][1], tempHashMap)
        }
    }
    hashMap = tempHashMap;
    console.log(hashMap)
    return hashMap;
}

function hashInsert(key, value, hashMap){
    let hashedKey = key.hashCode();
    let idx = mod(hashedKey, hashMap.length);

    if (hashMap[idx] === undefined){
        hashMap[idx] = [key, value]
    } else {
        hashMap[idx][1] = value; 
    }
    let count = 0; 
    for (let x = 0; x < hashMap.length; x++) {
        if (hashMap[x]){
            count += 1
        }
    }
    if ((count / hashMap.length) > .70){
        console.log('The hashMap needs to grow')
        return growHashMap(hashMap);    
    } else {
        console.log('The hashMap still has space')
        return hashMap;
    }
}

function hashLookUp(key, hashMap){
    let hashedKey = key.hashCode();
    let idx = mod(hashedKey, hashMap.length);

    for (let x = 0; x < hashMap.length; x++) {
        if (hashMap[x]) {
            if (hashMap[x][0] === key) {
                return console.log(`Key: "${key}" Found Value: "${hashMap[x][1]}"`)
            }
        }
    }
    return null;
}

hashInsert('role', 'tech', hashMap);
hashInsert('sport', 'basketball', hashMap);
hashInsert('friend', 'pat', hashMap);
hashInsert('girlfriend', 'kim', hashMap);
hashInsert('hobby', 'no time', hashMap);
hashInsert('school', 'coding dojo', hashMap);
hashInsert('city', 'seattle', hashMap);
hashInsert('state', 'washington', hashMap);



hashLookUp('role', hashMap);