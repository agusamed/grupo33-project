const { MongoClient } = require("mongodb");
// Connection URI
const uri = "mongodb+srv://user:abc@cluster0.qkebat8.mongodb.net/?retryWrites=true&w=majority";
// Create a new MongoClient
const client = new MongoClient(uri);
async function runDatabase(command, test) {
    let res;
    try {
        // Connect the client to the server (optional starting in v4.7)
        await client.connect();
        // Establish and verify connection
        if (test) {
            console.log("probando conexion a mongo cloud...")
            await client.db("agusdb").command({ ping: 1 });
            //client.db('agusdb').collection('users').save(user)
            console.log("Funciona correctamente la conexion a mongo!");
        } else {
            res = await command(client)
        }
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
        return res;
    }
}
module.exports = { runDatabase }
