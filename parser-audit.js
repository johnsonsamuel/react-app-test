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
    if(!inputChunks.length) return;
    console.log(`##[warning]~ # Run  npm install mongoose@5.7.11  to resolve 1 vulnerability
    ┌───────────────┬──────────────────────────────────────────────────────────────┐
    │ High          │ Denial of Service                                            │
    ├───────────────┼──────────────────────────────────────────────────────────────┤
    │ Package       │ mongodb                                                      │
    ├───────────────┼──────────────────────────────────────────────────────────────┤
    │ Dependency of │ mongoose                                                     │
    ├───────────────┼──────────────────────────────────────────────────────────────┤
    │ Path          │ mongoose > mongodb                                           │
    ├───────────────┼──────────────────────────────────────────────────────────────┤
    │ More info     │ https://nodesecurity.io/advisories/1203                      │
    └───────────────┴──────────────────────────────────────────────────────────────┘`);
});

