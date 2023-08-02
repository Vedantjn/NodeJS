const fs = require('fs');

const input = process.argv;

if(input[2]=='add')
{
    fs.writeFileSync(input[3],input[4])
}
else if(input[2]=='remove')
{
    fs.unlinkSync(input[3])
}
else
{
    console.log("invalid input ")
}

// node index.js add data.txt 'this is color'
// node index.js remove data.txt
