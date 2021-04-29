const DbClass = require('../utill/db.utill');


class EmailServices {
    static async saveEmail(newEmail) {
        try {
            const db = await DbClass.getConn();
            return await db.insertOne(newEmail);
        } catch (err) {
            console.log(err);
        }
    }

    static async updateEmail(newEmail) {
        try {
            const db = await DbClass.getConn();
            return await db.insertOne(newEmail);
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = EmailServices;