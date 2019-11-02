const assert = require("assert");
const {stringPatternSearch} = require("./../search_text_pattern");

describe("stringPatternSearch()", () => {
    it("works.", (done) => {
        assert.equal(stringPatternSearch("lollipop", "lol"), 1);
        assert.equal(stringPatternSearch("lolol", "lol"), 2);
        done();
    });
});
