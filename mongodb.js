const { MongoClient } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {
    useNewUrlParser: true
}, (error, client) => {
    if (error) {
        return console.log(error)
    }

    const db = client.db(databaseName);
    db.collection('users').insertOne({
        name: 'Andrew',
        age: 27
    })
})