const mocha = require("mocha");
const should = require("should");

const sort = require("../../lib").sort;

describe("sort/merge-sort", function ()
{
    const origin = [2, 6, 5, 3, 1, 8, 7, 4];
    const targetASC = [1, 2, 3, 4, 5, 6, 7, 8];
    it(`asc - should sort array: [${origin}] to: [${targetASC}].`, function (done)
    {
        sort.merge(origin).should.deepEqual(targetASC);
        done();
    });

    const targetDESC = [8, 7, 6, 5, 4, 3, 2, 1];
    it(`desc - should sort array: [${origin}] to: [${targetDESC}].`, function (done)
    {
        sort.merge(origin, true).should.deepEqual(targetDESC);
        done();
    });
});