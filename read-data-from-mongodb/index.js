// const {MongoClient} = require('mongodb')
// const url= 'mongodb://localhost:27017';
// const databaseName='e-comm'
// const client= new MongoClient(url);

// async function getData()
// {
//     let result = await client.connect();
//     db= result.db(databaseName);
//     collection = db.collection('products');
//     let data = await collection.find({name:'U10'}).toArray();
//     console.log(data)


// }

// getData();


const dbConnect= require('./mongodb');

// Method 1 
dbConnect().then((resp)=>{
    resp.find({name:'U10'}).toArray().then((data)=>{
        console.log(data)
    })
})

// Method 2 : Better method
const main=async ()=>{
   let data = await dbConnect();
   data = await data.find({name:'U10'}).toArray();
   console.log(data)
}

main()