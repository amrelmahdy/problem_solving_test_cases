module.exports = {
    maxChar:  (str) => {
        let charObject = {};
        let maxChar = "";
        let maxCharCount = 0;

        let chars = str.split("");
        for(let i = 0; i < chars.length; i++){
            if(charObject.hasOwnProperty(chars[i])){
                charObject[chars[i]] = charObject[chars[i]] + 1;
            } else {
                charObject[chars[i]] = 1;
            }

            if(charObject[chars[i]] > maxCharCount && (chars[i] !== " ")){
                maxChar = chars[i];
                maxCharCount = charObject[chars[i]];
            }
        }
        return  maxChar;
    }
};






