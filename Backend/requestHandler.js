import phonebookSchema from "./models/Phonebook.model.js"
export async function adddata(req,res){
    try{
        console.log(req.body);
        const {name,Lname,email,DOB,number,Alternativenumber}=req.body;
        await phonebookSchema
        .create({name,Lname,email,DOB,number,Alternativenumber})
            .then(()=>{
                res.status(201).send({msg:"sucessfully created"})
            })
            .catch((error)=>{
                res.status(400).send({error:error})
            });
    }catch(error){
        res.status(500).send(error)
    }
}
export async function getdata(req,res){
    try{
        const data=await phonebookSchema.find();
        res.status(200).send(data)
        console.log(data);
    }catch (error){
        res.status(500).send(error)
    }
}

export async function updatedata(req,res){
    try{
        const {id}=req.params;
        console.log(id);
        const{...data}=req.body
        await phonebookSchema.updateOne
        ({_id:id},{$set:{...data}})
        res.status(201).send({msg:"updated"})
        
    }catch (error){
        res.status(400).send(error)
}
}
 export async function deletedata(req,res){
    try{
        const {id}=req.params;
        console.log(id);
        await phonebookSchema.deleteOne({_id:id});
        res.status(200).send({msg:"sucessfully deleted"})
    }catch (error){
        console.error(error);
        res.status(400).send({error})
    }
}