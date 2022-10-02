const dbConnect = require("./mongo")

const updateData= async () => {
    let data = await dbConnect();
    let result = await data.update(
        {name: "samsung m22"},{
            $set: {name: "note 5", price: 550}
        }
    );
    console.log(result)
}


updateData();