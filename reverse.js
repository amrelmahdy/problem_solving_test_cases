module.exports = {
    reverseString:  (str) => {
        return  str.split("").reverse().join("");
    },
    reverseString2:  (str) => {
        let reversed = "";
        for(let i = 0; i < str.length; i++){
           reversed = str[i] + reversed;
        }
        return  reversed;
    },
    reverseString3: (str) => {
        return str.split("").reduce((output, value) => {
            return value + output;
        }, "");
    }
};


