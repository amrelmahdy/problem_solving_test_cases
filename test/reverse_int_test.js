const assert = require("assert");
const {reverseInt} = require("./../reverse_int");


describe("Reverse An Integer", () => {
    it("reversing positive number", (done) => {
        assert.equal(reverseInt(12), 21);
        done();
    });

    it("reversing negative number", (done) => {
        assert.equal(reverseInt(-12), -21);
        done();
    });

});
