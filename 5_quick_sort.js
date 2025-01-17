function quickSort(arr) {
    if(arr.length <= 1) {
        return arr
    }

    const pivot = arr[0]
    const left = []
    const right = []
    const equal = []
    for(let num of arr) {
        if(num < pivot) {
            left.push(num)
        } else if(num > pivot) {
            right.push(num)
        } else {
            equal.push(num)
        }
    }

    return [...quickSort(left),...equal, ...quickSort(right)]
}

console.log(quickSort([5,3,6,64,7,5,3,32,5,623,67,4,3,34,45,3,35]))