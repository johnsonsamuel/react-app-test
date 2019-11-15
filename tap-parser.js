const Parser = require('tap-parser');
const annotations = [];

const checkApiAnnotationsFormat = []; //annotations to feed as per github check api........................

const p = new Parser(function (results) {

    //Adding the unit test count.... 
    const testOutput = JSON.parse(JSON.stringify(results));

    const testSummary = {
        total: testOutput.count,
        failure: testOutput.fail,
        success: testOutput.pass
    };

    const stringifiedResult = JSON.stringify(results).trim();
    const parseResult = JSON.parse(stringifiedResult.replace(/'/g, ""));

    //Iterate through the failures and add annotations 
    parseResult.failures.map(item => {
        if (!item.diag) return;
        const splitItem = item.diag.at.split('js:');

        const fileName = splitItem[0];
        const name = item.diag.name;
        const message = item.diag.message || item.diag.values;
        const path = fileName.split('(')[1] + 'js';

        checkApiAnnotationsFormat.push(`##[error] ${splitItem[1].replace(")", "")} error ${JSON.stringify(message)} path:${path} name:${name}`);
    });

    checkApiAnnotationsFormat.push(testSummary);
    //checkApiAnnotationsFormat.push(`##[debug] ${JSON.stringify(testSummary)} `);
    console.log(checkApiAnnotationsFormat); //FIXME: Printing the error as per the check run format
});


process.stdin.pipe(p);