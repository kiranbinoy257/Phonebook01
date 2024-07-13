import mongoose, {Mongoose,model}from "mongoose";
const phonebookSchema=new mongoose.Schema
({
    name:{type:String},
    Lname:{type:String},
    email:{type:String,Number},
    DOB:{type:String},
    number:{type:Number},
    Alternativenumber:{type:Number}

})
export default mongoose.model.phonebook || mongoose.model('phonebook',phonebookSchema)