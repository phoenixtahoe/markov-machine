/** Command-line tool to generate Markov text. */

const fs = require("fs");
const markov = require("./markov");
const axios = require("axios");
const process = require("process");

function readFile(file) {
    fs.readFile(file, 'utf8', function(err, data) {
        if (err) {
            console.error(`Invalid file`);
            process.exit(1);
        } else {
            let mm = new markov.MarkovMachine(data)
            console.log(mm.makeText());
        }
    });
}

async function readUrl(url) {
    try {
        let res = await axios.get(url);
        let mm = new m.MarkovMachine(res.data)
        console.log(mm.makeText());
    } catch (err) {
        console.error(`Invalid URL: ${url}`);
        process.exit(1);
    }
}

let arg = process.argv[2]

if (arg) {
    if (arg.startsWith('http') || arg.startsWith('https')) {
        readUrl(process.argv[2])
    } else {
        readFile(process.argv[2])
    }
} else {
    console.error('Enter a valid URL or File');
    process.exit(1);
}

module.exports = {
  readFile,
  readUrl
};