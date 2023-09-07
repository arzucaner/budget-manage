const MongoClient = require('mongodb').MongoClient;

class User {
    constructor(username, password, email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }

    async signUp() {
        try {
            const client = await MongoClient.connect('mongodb://localhost:27017');
            const db = client.db('main.js');
            const usersCollection = db.collection('users');

            const user = {
                username: this.username,
                password: this.password,
                email: this.email
            };

            const result = await usersCollection.insertOne(user);
            client.close();

            return result;
        } catch (error) {
            throw error;
        }
    }

    async logIn() {
        
    }
}
