const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const defaultimg='../defaultimg.jpg';
const listingSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    description :String,
    image:{
        type:String,
        default:defaultimg,
        set:(v)=> v ===""? defaultimg:v,
    },
    price:Number,
    location:String,
    country:String,


});

const Listing =mongoose.model('Listing',listingSchema);
module.exports=Listing;