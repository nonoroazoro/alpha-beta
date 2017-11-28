const should = require("should");

const sort = require("../../lib").sort;

describe("sort/shuffle", () =>
{
    const origin = [1, 2, 3, 4, 5, 6, 7, 8];
    const validation = [1, 2, 3, 4, 5, 6, 7, 8];
    it(`should shuffle array: [${origin}].`, (done) =>
    {
        should.notDeepEqual(sort.shuffle(origin), validation);
        done();
    });
});
