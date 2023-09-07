import { MongoClient } from 'mongodb';

describe('MongoDB Tests', () => {
    let connection;
    let db;

    beforeAll(async () => {
        jest.setTimeout(10000);
    });

    const url = 'mongodb://localhost:27017';
    const dbName = 'test-database';
    connection = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

    await connection.connect();
    db = connection.db(dbName);
});

afterAll(async () => {

    await connection.close();
});

it('Test Adding a User', async () => {

    const users = db.collection('mongodb-users');


    const user = { username: 'testuser', password: 'testpassword', email: 'test@example.com' };
    await users.insertOne(user);


    const foundUser = await users.findOne({ username: 'testuser' });


    expect(foundUser).toEqual(user);
});

it('Test Adding a Financial Record', async () => {

    const financialRecords = db.collection('financialRecords');


    const record = { date: new Date(), description: 'Test Record', amount: 100, category: 'Test' };
    await financialRecords.insertOne(record);


    const foundRecord = await financialRecords.findOne({ description: 'Test Record' });


    expect(foundRecord).toEqual(record);
});
});
