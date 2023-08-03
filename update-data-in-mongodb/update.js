const dbConnect= require('./mongodb')

const updateData=async ()=>{
    let data = await dbConnect();
    let result = await data.update(
        { name:'U10'},
        {
            $set:{name:'max pro 5', price:1000}
        }
        )
    console.log(result)

}

updateData();