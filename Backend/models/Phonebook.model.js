import mongoose, {Mongoose,model}from "mongoose";
const phonebookSchema=new mongoose.Schema
({
    fname:{type:String},
    lname:{type:String},
    email:{type:String,Number},
    dob:{type:String},
    number:{type:Number},
    altnumber:{type:Number}

})
export default mongoose.model.phonebook || mongoose.model('phonebook',phonebookSchema)