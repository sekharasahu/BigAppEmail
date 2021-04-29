const MongoClient = require('mongodb').MongoClient;
const uri = `${process.env.DB_URI}${process.env.DB}`;

//Following singleton design pattern for high scalability and reusability
class Db {
    static collection = null;
    static conn = null;
    static database = null;

    static async getConn() {
        if (this.collection == null) {
            try {
                this.client = new MongoClient(uri, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                });

                await this.client.connect();
                this.database = await this.client.db(process.env.DB);

            } catch(err) {
                console.log(err);
            }
        }
        return await this.database.collection(process.env.EMAIL_COLL);
    }
}

module.exports = Db;
