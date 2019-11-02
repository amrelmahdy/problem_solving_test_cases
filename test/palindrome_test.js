const assert = require("assert");
const {isPalindrome} = require("./../palindrome");


describe("Palindrome Algorithm", () => {
   it("madam is a palindrome", (done) => {
       assert.equal(isPalindrome("madam"), true);
       done();
   });

    it("hany is not a palindrome", (done) => {
        assert.equal(isPalindrome("hany"), false);
        done();
    });

    it("Trunk knurt is not a palindrome", (done) => {
        assert.equal(isPalindrome("Trunk knurt"), true);
        done();
    });


});