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
   // console.log(outputJSON);
   /*  Object.values(outputJSON).map(item => {

        annotationsFormat.push(`##[warning] current:${outputJSON}`);
    });
    
    stdout.write(JSON.stringify(outputJSON));/
    
    stdout.write('\n');
    stdout.write(JSON.stringify(annotationsFormat));
    stdout.write('\n'); */
    console.log('##[warning]~'+outputJSON);
});

