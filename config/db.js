const mongoose  = require("mongoose");
const uri = "mongodb+srv://gyanucs17:Gyanu%409560789941@clustergyan.dlhuch2.mongodb.net/dbgyan?retryWrites=true&w=majority";
const connectDB =async () => {
    const conn =await mongoose.connect(uri, {}
        
        );
    
      console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.bold);

    }

    module.exports = connectDB;


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://gyanucs17:Gyanu%409560789941@clustergyan.dlhuch2.mongodb.net/?retryWrites=true&w=majority";
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

//module.exports = connectDB;