const mongoose =require('mongoose');
const initData= require('./data.js');
const Listing=require('../models/listing.js')




// Basic connection code
const MONGO_URL ='mongodb://127.0.0.1:27017/wanderlust';
main().then(()=>{
    console.log('connected to WanderlustDB ');

}).catch(err =>{
    console.log(err);
})
async function main() {
    await mongoose.connect(MONGO_URL);
    
}


// existing data clean&& inserting new data
const initDB=async()=>{
   await Listing.deleteMany({});
   await Listing.insertMany(initData.data);
   console.log("data was initialized")

}

// calling the function
 
initDB();