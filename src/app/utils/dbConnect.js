const mongoose = require('mongoose');

export default async function dbConnect(){
    await mongoose.connect('mongodb+srv://node-shop:node-shop@cluster0.giegz.mongodb.net/etdm?retryWrites=true&w=majority');

    mongoose.Promise = global.Promise;
}