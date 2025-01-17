// function countdown(time) {
//     if (time === 0) {
//         return;
//     } else {
//         console.log(time);
//         countdown(time - 1);
//     }
// }

// countdown(5);

// factorial 5! = 5 * 4 * 3 * 2 * 1 = 120
// function getFactorial(number) {
//     if(number === 1) {
//         return 1;
//     } else {
//         return number * getFactorial(number - 1);
//     }
// }


// console.log(getFactorial(5)); // 120

// function getSum(arr) {
//     let total = 0
//     if(!arr.length) {
//         return total
//     } else {
//         total += arr.pop()
//         return total + getSum(arr)
//     }
// }

// console.log(getSum([2,4,6]))

// function getBigger(arr, bigger = 0) {
//     if(!arr.length) {
//         return bigger
//     } else {
//        const current = arr.pop()
//        if(current > bigger) {
//            bigger = current
//        }

//        return getBigger(arr, bigger)
//     }
// }

// console.log(getBigger([4,2,6,3,12,35,2,5]))

function binarySearch(arr, item, left = 0, right = arr.length - 1) {
    if(left > right) {
        return -1
    } 

    const mid = Math.floor((left + right) / 2)

    if(arr[mid] === item) {
        return mid
    }

    if(arr[mid] > item) {
        return binarySearch(arr, item, left, right - 1)
    }

    if(arr[mid] < item) {
        return binarySearch(arr, item, mid + 1, right)
    }
}

console.log(binarySearch([1,2,3,4,5,6,7,8], 4))