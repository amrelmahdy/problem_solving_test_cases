const assert = require("assert");
const {maxChar} = require("./../max_char");


describe("Returning the char with the most used within string", () => {
    it("checking some samples", (done) => {
        assert.equal(maxChar("a"), "a");
        assert.equal(maxChar("test"), "t");
        assert.equal(maxChar("I loveeeeee noodles"), "e");
        assert.equal(maxChar("1337"), "3");
        assert.equal(maxChar("he is the best player not just a normal one "), "e");
        done();
    });
});
