const assert = require("assert");
const {binarySearch} = require("./../binary_search");

const sortedNumsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

describe("binarySearch()", () => {
    it("returns correct index on sortedArray with just one number", (done) => {
        assert.equal(binarySearch([5], 5), 0);
        assert.equal(binarySearch([15], 5), -1);
        done();
    });
    it("works on sorted array with 10 numbers", (done) => {
        assert.equal(binarySearch(sortedNumsArray, 10), 10);
        assert.equal(binarySearch(sortedNumsArray, 0), 0);
        assert.equal(binarySearch(sortedNumsArray, 5), 5);
        assert.equal(binarySearch(sortedNumsArray, 7), 7);
        assert.equal(binarySearch(sortedNumsArray, 1337), -1);
        done();
    });
});