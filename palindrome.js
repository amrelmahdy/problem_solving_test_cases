module.exports = {
  isPalindrome: (str) => {
      str = str.toLowerCase();
      return str.split("").reverse().join("") === str;
  }
};