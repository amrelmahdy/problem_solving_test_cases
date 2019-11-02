module.exports = {
    linearSearchIndexOf: (arr, val) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === val) {
                return i
            }
        }
        return -1;
    },
    linearSearchIncludes: (arr, val) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === val) {
                return true
            }
        }
        return false;
    },
    linearSearchFind: (arr, cb) => {
        for (let i = 0; i < arr.length; i++) {
            if (cb(arr[i]) === true) {
                return arr[i]
            }
        }
        return undefined;
    }

};
