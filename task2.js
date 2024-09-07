//find the smallest name

const names = ['rahim', 'robin', 'rafi', 'ron','a', 'rashed']; 

function smallestName(namesArray) {
    let minName = namesArray[0]; 
    for (const name of namesArray) {
        if (minName.length > name.length) {
            minName = name; 
        }
    }
    return minName; 
}

console.log(smallestName(names));
