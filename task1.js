const numbers = [1167, 190, 120, 165, 1380,2]; 

function lowest(array) {
    let min = array[0]; 
    for (const num of array) {
        if (num < min) {
            min = num; 
        }
    }
    return min; 

}

console.log(lowest(numbers));