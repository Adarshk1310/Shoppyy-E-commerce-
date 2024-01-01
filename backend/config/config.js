const mongoose =require('mongoose');
const dotenv =require('dotenv');

dotenv.config();

const uri =process.env.MONGODB_SECRET;

mongoose.connect(uri);

const db =mongoose.connection;

db.on('error',console.error.bind(console,"Error connecting to mongoDb"));
db.once('open',function(){
    console.log('Connected to Database:: MongoDB');
});

module.exports.db;