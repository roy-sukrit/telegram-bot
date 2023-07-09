import fs from 'fs';
import csv from 'csv-parser';
require('dotenv').config()




export async function getData(filePath: string) {
  const results: object[] = [];

  const data = await new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', (error) => reject(error));
  });

  if(results.length >0){
  const length =results.length;
  // console.log("length",length);
  
  const number= Math.floor(Math.random() * (length - 0 +1)) + 0;

  // console.log("number",number);

  return results[number];
  }

  else return{}

}


// console.log(__dirname+'\source\JaiSai_Rework.csv');




