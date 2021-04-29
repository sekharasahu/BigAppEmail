const EmailServices = require('../services/email.service');

class Email {
    constructor(
        receipients_list,
        email_content,
        date_time,
    ) {
        this.receipients_list = receipients_list;
        this.email_content = email_content;
        this.date_time = date_time;
        this.isDeleted = false;
        this.isSent = false;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}

class EmailController {
    //Creating a record
    static async create(req, res) {
        let newEmail = new Email(
            req.body.receipients_list,
            req.body.email_content,
            req.body.date_time
        );

        let result = await EmailServices.saveEmail(newEmail);
        return res.status(201).send(result.ops[0]);
    }

    //Update email record
    static async updateEmail(req, res) {
        let result = await EmailServices.updateEmail(newEmail);
        return res.status(201).send(result.ops[0]);
    }
}

module.exports = EmailController;