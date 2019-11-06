var Parser = require('tap-parser');
const annotations = [];

const textAnnotations = [];

var p = new Parser(function (results) {
   const testOutput = JSON.parse(JSON.stringify(results));
   const testSummary = {
        total: testOutput.count,
        failure: testOutput.fail,
        success: testOutput.pass
   }

   JSON.parse(JSON.stringify(results).replace(/'/g, "")).failures.map(item => {
       //console.log(item.diag)
       if(!item.diag) return;
       const splitItem = item.diag.at.split('js:');
      
      const fileName = splitItem[0];
      const name = item.diag.name;
      const message = item.diag.message || item.diag.values;
      
      //const lineNumbersArr = splitItem[1];
      //console.log(splitItem[1].replace(")",""), '====')
      //console.log(JSON.parse(lineNumbers));
     const lineNumbers = splitItem[1].replace(")","").split(':');
        
      //const lineNumbers = lineNumbersArr;
      
      const path = fileName.split('(')[1]+'js';
    //   console.log(path);
      //console.log(lineNumbers);
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
    textAnnotations.push(`##[error] ${splitItem[1].replace(")","")} error ${JSON.stringify(message)} path:${path} name:${name}`)
   });

   textAnnotations.push(testSummary);
   console.log(textAnnotations)
});



process.stdin.pipe(p);