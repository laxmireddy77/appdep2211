const mongoose=require("mongoose");
const express=require("express");
const cors=require("cors");
const path=require("path");
const app=express();
app.use(cors());
app.use(express.static(path.join(__dirname,"./client/build")));
app .get("/getEmployees",async (req,res)=>{
let fetchedData= await employee.find();
console.log(fetchedData);
res.json(fetchedData);
})
app.listen(2222,()=>{
    console.log("Listening to port 2222");
})
let connectToMDB=async()=>{
try{
await mongoose.connect("mongodb+srv://snagalakshmireddy:nagalakshmireddy@cluster0.gnppedx.mongodb.net/players?retryWrites=true&w=majority");
console.log("Connected to mdb");
// saveToMDB();
}catch(error){
console.log("Unable to connect to db");
console.log(error);
}
}
let employeeSchema=new mongoose.Schema({
name:String,
age:Number,
email:String
});
let employee=new mongoose.model("employees",employeeSchema);
let saveToMDB=async()=>{
let laxmi=new employee({
    name:"Laxmi Reddy",
    age:22,
    email:"laxmireddy@gmail.com"
});
let jona=new employee({
    name:"jona Reddy",
    age:27,
    email:"jonareddy@gmail.com"
});
let joel=new employee({
    name:"joel jovi",
    age:30,
    email:"joeljovi@gmail.com"
});
let joshu=new employee({
    name:"joshu peddhi",
    age:22,
    email:"joshupeddhi@gmail.com"
});
try
{
    // await laxmi.save();
    // await jona.save();
    // await joel.save();
    // await joshu.save();
    employee.insertMany([laxmi,jona,joel,joshu]);

    console.log("Saved Successfully");

}catch(error){
console.log("Something is wrong in saving");
console.log(error);
}

}
connectToMDB();
