/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let chain = new Map()
    for (let i = 0; i < this.words.length; i+= 1) {
        let word = this.words[i];
        let nextWord = this.words[i + 1] || null;

        if (chain.has(word)) {
          chain.get(word).push(nextWord)
        } else {
          chain.set(word, [nextWord])
        }
    }
    this.chain = chain
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    let $words = Array.from(this.chain.keys())
    let $word = $words[Math.floor(Math.random() * $words.length)]
    let res = []

    while (res.length < numWords) {
      if ($word != null) {
        res.push($word)
        $word = $words[Math.floor(Math.random() * $words.length)]
      }
    }
    return res.join(" ");
  }
}

module.exports = {
  MarkovMachine,
};