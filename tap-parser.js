const Parser = require('tap-parser');
const annotations = [];

const checkApiAnnotationsFormat = []; //annotations to feed as per github check api...

const p = new Parser(function (results) {

   //Adding the unit test count.... 
   const testOutput = JSON.parse(JSON.stringify(results));
   const testSummary = {
        total: testOutput.count,
        failure: testOutput.fail,
        success: testOutput.pass
   };

   const stringifiedResult =  JSON.stringify(results).trim(); 
   const parseResult = JSON.parse(stringifiedResult.replace(/'/g, ""));

   //Iterate through the failures and add annotations 
   parseResult.failures.map(item => {
       if(!item.diag) return;
       const splitItem = item.diag.at.split('js:');
      
      const fileName = splitItem[0];
      const name = item.diag.name;
      const message = item.diag.message || item.diag.values;
      const lineNumbers = splitItem[1].replace(")","").split(':');         
      const path = fileName.split('(')[1]+'js';

      annotations.push({
        start_line: parseInt(lineNumbers[0]),
        end_line: parseInt(lineNumbers[0]),
        start_column: 0,
        end_column: parseInt(lineNumbers[1]),
        annotation_level: 'warning',
        title: name,
        message: JSON.stringify(message),
        path: path
    });

    checkApiAnnotationsFormat.push(`##[error] ${splitItem[1].replace(")","")} error ${message} path:${path} name:${name}`)
   });

   checkApiAnnotationsFormat.push(testSummary);
   checkApiAnnotationsFormat.push({annotations: annotations});
   console.log(checkApiAnnotationsFormat);
});


process.stdin.pipe(p);