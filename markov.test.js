const markov = require("./markov.js");


describe("Gen Chain Test", function () {
    test('Test Chain', function () {
        let mm = new markov.MarkovMachine("the cat in the hat is in the hat");
    
        expect(mm.chain).toEqual(new Map([
          ["the", ["cat", "hat", "hat"]],
          ["cat", ["in"]],
          ["in", ["the", "the"]],
          ["hat", ["is", null]],
          ["is", ["in"]]
        ]));
    });
});