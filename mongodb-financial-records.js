const MongoClient = require('mongodb').MongoClient;

class FinancialRecord {
    constructor(date, description, amount, category) {
        this.date = date;
        this.description = description;
        this.amount = amount;
        this.category = category;
    }

    async save() {
        try {
            const client = await MongoClient.connect('mongodb://localhost:27017');
            const db = client.db('main.js');
            const recordsCollection = db.collection('financialRecords');

            const record = {
                date: this.date,
                description: this.description,
                amount: this.amount,
                category: this.category
            };

            const result = await recordsCollection.insertOne(record);
            client.close();

            return result;
        } catch (error) {
            throw error;
        }
    }

    async update() {
       
    }

    async delete() {
       
    }
}
