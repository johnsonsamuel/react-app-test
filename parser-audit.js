var stdin = process.stdin,
    stdout = process.stdout,
    inputChunks = [],
    annotationsFormat = [];

stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data', function (chunk) {
    inputChunks.push(chunk);
});
//
stdin.on('end', function () {
    if(!inputChunks.length) return;
    console.log('##[warning]~'+(JSON.stringify(inputChunks)));
});

