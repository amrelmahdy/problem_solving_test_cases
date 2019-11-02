const assert = require("assert");
const {capitalize} = require("./../capitalize");


describe("Returning the char with the most used within string", () => {
    it("capitalizes the first letter of each word", (done) => {
        assert.equal(capitalize("I'm a little tea pot"), "I'm A Little Tea Pot");
        done();
    });
    it("lowercases the rest of the word", (done) => {
        assert.equal(capitalize("sHoRt AnD sToUt"), "Short And Stout");
        done();
    });
});
