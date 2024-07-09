import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://jacobjperez19:Frogman187-@cluster0.le3pwsd.mongodb.net/food-del?retryWrites=true&w=majority&appName=Cluster0").then(()=>console.log('DB connected'))
}