const dbConnect = require("./mongodb");

const deletedata = async () =>{
    let data = await dbConnect();
    // let result = await data.deleteOne({name: "note 5"})
    let result = await data.deleteMany({name: "note 5"})
    console.log(result);

    if(result.acknowledged){
        console.log("delted records sucessfully")
    }
}

deletedata();