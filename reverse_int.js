module.exports = {
  reverseInt: (num) => {
      let reversed = num.toString().split("").reverse().join("");
      reversed = parseInt(reversed);
      if(num < 0){
          return reversed = reversed * -1;
      }
      return  reversed;
  },
};