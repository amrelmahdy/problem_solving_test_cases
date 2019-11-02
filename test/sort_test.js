const assert = require("assert");
const {bubbleSort} = require("./../sort");




describe("Bubble Sort", () => {
    it("sorts an array", (done) => {
        assert.deepEqual(bubbleSort([5, 1, 3, 7, 6, 2, 4]), [1, 2, 3, 4, 5, 6, 7]);
        done()
    });
});