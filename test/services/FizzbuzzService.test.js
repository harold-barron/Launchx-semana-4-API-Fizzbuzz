const FizzbuzzService = require("./../../lib/services/FizzbuzzService");

describe("Test to fizzbuzz", ()=>
{
    test("1. add fizz to trick if the result of score%3 ===0 ", () =>
    {
        const fizztest = FizzbuzzService.applyValidationInExplorer("explorers.json","Woopa12");
        expect(fizztest.trick).toBe("Fizz");
    });
    test("2. add buss  to trick if the result of score%5 ===0 ", () =>
    {
        const buzztest = FizzbuzzService.applyValidationInExplorer("explorers.json","Woopa10");
        expect(buzztest.trick).toBe("Buzz");
    });
    test("3. add fizzbuss to trick if the result of score%5 ===0 and the result of score%3 ===0", () =>
    {
        const fizzbuzztest = FizzbuzzService.applyValidationInExplorer("explorers.json","Woopa15");
        expect(fizzbuzztest.trick).toBe("FizzBuzz");
    });
    test("4. add the score value to to trick if the result of score%5 and the result of score%3  !=0", () =>
    {
        const scoreest = FizzbuzzService.applyValidationInExplorer("explorers.json","Woopa1");
        expect(scoreest.trick).toBe(scoreest.score);
    });
});
