var Parser = require('tap-parser');
const annotations = [];

const textAnnotations = [];

var p = new Parser(function (results) {

    JSON.parse(JSON.stringify(results).replace(/'/g, "")).failures.map(item => {
        if (!item.diag) return;
        const splitItem = item.diag.at.split('js:');

        const fileName = splitItem[0];
        const name = item.diag.name;
        const message = item.diag.message || item.diag.values;
        const lineNumbers = splitItem[1].replace(")", "").split(':');
        const path = fileName.split('(')[1] + 'js';
       
        

        annotations.push({
            start_line: parseInt(lineNumbers[0]),
            end_line: parseInt(lineNumbers[0]),
            start_column: 0,
            end_column: parseInt(lineNumbers[1]),
            annotation_level: 'failure',
            title: name,
            message: JSON.stringify(message),
            path: path
        });

        textAnnotations.push(`##[error] ${splitItem[1].replace(")", "")} error ${JSON.stringify(message)} path:${path} name:${name}`)
    });

    const errors = textAnnotations.map(error => new Error(error));

    //console.log(errors);
    throw new Error(errors);

});



process.stdin.pipe(p);