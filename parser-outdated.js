var stdin = process.stdin,
    stdout = process.stdout,
    inputChunks = [],
    annotationsFormat = [];

stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data', function (chunk) {
    inputChunks.push(chunk);
});

stdin.on('end', function () {
    const outputJSON = JSON.parse(inputChunks);
    Object.values(outputJSON).map(item => {

        annotationsFormat.push(`##[warning] current:${JSON.stringify(item)}`);
    });
    
    //stdout.write(JSON.stringify(outputJSON));
    //stdout.write('\n');
    stdout.write(JSON.stringify(annotationsFormat));
    stdout.write('\n')
});

