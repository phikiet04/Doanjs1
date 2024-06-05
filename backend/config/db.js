import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://lamt14865:lamkk0502@cluster0.npvhbmz.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}
// export const connectDB = async () => {
//     await mongoose.connect('mongodb+srv://kietvophi:<password>@kietne.nycuyl4.mongodb.net/').then(()=>console.log("DB Connected"));
// }