process.stdin.setEncoding('utf8');

let errors = [];
process.stdin.on('readable', () => {
  let chunk;
  
  // Use a loop to make sure we read all available data.
  while ((chunk = process.stdin.read()) !== null) {
     const atRegex = /at.*/g;
     const messageRegex = /message.*/g;
     const assertionRegex = /values.*/g;
     const valuesRegex = /values:([\S\s]*?)at:/g;
      if(chunk.indexOf('not ok') > 0 ){
          
          //console.log('$$$$$$$$$$$$$$$$$$$$')  
          if(chunk.match('message:')){
             console.log('Message', chunk.match(messageRegex))
          }else if(chunk.match('values:')){
              let values = chunk.match(valuesRegex);
            console.log('Values', values);
            console.log('Start Values++', chunk.match('values:').input, '+++ End Values')
          }
          //


          if(atRegex.test(chunk)){
            errors.push(chunk.replace(/\t/g, '').match(atRegex));
            //process.stdout.write(`matched => ${chunk.match(atRegex)}`);
          }
        //process.stdout.write(`data: ${chunk}`);
      }
  }
  
  //chunk.replace(/\t/g, '')

  
});

//console.log(process.stdout.write.bind(process.stdout))
//process.stdout.write.bind(process.stdout);
const annotations = [];
const oldAnnotations = [];
process.stdin.on('end', () => {
  //process.stdout.write('end');
  //console.log('#########Data for Annotations##############');
  [].concat.apply([], errors).map((item) => {
      const splitItem = item.split('js:');
      
      const fileName = splitItem[0];
      const lineNumbers = splitItem[1].replace(")'","").split(':');
      //console.log(lineNumbers)
      const path = fileName.split('(')[1]+'js';
      //console.log(splitItem[1])
      //console.log(lineNumbers.split(':'), '============')
      annotations.push({
          start_line: lineNumbers[0],
          end_line: lineNumbers[0],
          start_column: lineNumbers[0],
          end_column: lineNumbers[1],
          annotation_level: 'error',
          title: 'Error',
          message: '',
          path: path
      })

      //console.log(lineNumbers);;:
      //console.log('Line number', splitItem[1].replace(")'",""));
      //console.log('File Name', fileName.split('(')[1]+'js');
  })

  //console.error(annotations)
  // throw (JSON.stringify(annotations));
  //console.log('ERRORS', [].concat.apply([], errors).map(item => JSON.parse(item)));
});