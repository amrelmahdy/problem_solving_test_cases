const assert = require("assert");
const {linearSearchFind, linearSearchIncludes, linearSearchIndexOf} = require("./../linear_search");


const foods = ["pizza", "orange", "yogurt"];
const people = [{ name: "Kevin", last: "Nguyen", born: 1995 }];

describe("linearSearchIndexOf()", () => {
    it("returns index of found item", (done) => {
        assert.equal(linearSearchIndexOf(foods, "pizza"), 0);
        assert.equal(linearSearchIndexOf(foods, "yogurt"), 2);
        done();
    });
    it("returns -1 if item not found", (done) => {
        assert.equal(linearSearchIndexOf(foods, "laptop"), -1);
        done()
    });
});


describe("linearSearchIncludes()", () => {
    it("returns true if item found", (done) => {
        assert.equal(linearSearchIncludes(foods, "pizza"), true);
        done();
    });
    it("returns false if item NOT found", (done) => {
        assert.equal(linearSearchIncludes(foods, "laptop"), false);
        done();
    });

});


describe("linearSearchFind()", () => {
    it("returns item back if found", (done) => {
        const kevin = people[0];
        assert.equal(linearSearchFind(people, person => person.name === "Kevin"), kevin);
        done();
    });
    it("returns undefined if item NOT found", (done) => {
        assert.equal(linearSearchFind(people, person => person.name === "Kevinn"), undefined);
        done();
    });
});