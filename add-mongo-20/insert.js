const dbConnect = require("./mongodb");

const insert = async () =>{
    const db = await dbConnect();
    const result = await db.insertMany([{
        name: "note 4",
        brand: "vivo",
        price: 320,
        category: "mobile"
    },
    {
        name: "note 3",
        brand: "vivo",
        price: 320,
        category: "mobile"
    },
    {
        name: "note 2",
        brand: "vivo",
        price: 320,
        category: "mobile"
    }    
    ]);
    console.log(result.acknowledged)
    if(result.acknowledged)
    {
        console.log("data inserted");
    }
}

insert();