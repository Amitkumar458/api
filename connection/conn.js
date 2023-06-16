const mongoose = require('mongoose');

const conn = async () => {
    await mongoose.connect(process.env.MONGODB, {})
        .then(() => {
            console.log("connection successful...");
        })
        .catch((err) => {
            console.log(err);
        });
}

conn();