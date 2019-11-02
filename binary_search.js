module.exports = {
    binarySearch: (arr, value) => {
        let left = 0;
        let right = arr.length - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            let midVal = arr[mid];
            if (midVal === value) {
                return mid;
            } else if (midVal < value) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
        return -1
    }
};