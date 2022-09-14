const readLine = require('readline');
const r1=readLine.Interface({
    input:process.stdin,
    output:process.stdout
});
r1.question('Please Enter your name: ',(answer)=>{
    console.log("Hello "+ answer);
    r1.close();
});