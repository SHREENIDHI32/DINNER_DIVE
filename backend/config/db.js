import mongoose from "mongoose"
export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://shreenidhisaravanan32:Shree*123@cluster0.ntlxsun.mongodb.net/FOOD-DEL').then(()=>console.log("DB Connected"));

}