// Numbers
export function isSortedAsc(arr) {
    return arr.every((val, i) => i === 0 || val >= arr[i - 1]);
}

export function isSortedDesc(arr) {
    return arr.every((val, i) => i === 0 || val <= arr[i - 1]);
}
