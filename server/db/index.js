const mongoose=require('mongoose');

mongoose.set('strictQuery',false);

mongoose.connect('mongodb+srv://admin:mernadmin@cluster0.fpqujv6.mongodb.net/').then(
    ()=>console.log('connected')
).catch(e=>console.log(e))