const assert = require("assert");
const {reverseString, reverseString2, reverseString3} = require("./../reverse");


describe("Reverse A String", () => {
   it("reversing a string solution#1", (done) => {
       assert.equal(reverseString("abc"), "cba");
       done();
    });

    it("reversing a string solution#2", (done) => {
        assert.equal(reverseString2("amr"), "rma");
        done();
    });

    it("reversing a string solution#3", (done) => {
        assert.equal(reverseString3("amr"), "rma");
        done();
    })
});
