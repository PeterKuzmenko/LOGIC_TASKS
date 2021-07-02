'use sctrict'

function checkIncreasing(arr) {
    let prev = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (prev > arr[i]) {
            return false;
        }

        prev = arr[i];
    }

    return true;
}
