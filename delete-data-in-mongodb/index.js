const dbConnect= require('./mongodb');

// dbConnect().then((resp)=>{
//     resp.find({name:'U10'}).toArray().then((data)=>{
//     console.log(data)
// })
// })

const main=async ()=>{
   let data = await dbConnect();
   data = await data.find({name:'U10'}).toArray();
   console.log(data)
}

main()