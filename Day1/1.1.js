var fs = require('fs');
var stringData = (fs.readFileSync('data', 'utf8'));
var stringDataSplit = stringData.split('\n');
var numberData = stringDataSplit.map(Number);
var frequency = 0;



for (var i = 0; i < numberData.length;i++){

    frequency =  frequency + numberData[i]
    
}






console.log(frequency);

