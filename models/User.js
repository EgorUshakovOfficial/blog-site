import mongoose from 'mongoose'; 
const { Schema } = mongoose; 

// Session schema 
const sessionSchema = new Schema({
    token: { type: String }, 
    createdAt: { type: Date, default: Date.now }
})

// User schema 
const userSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String }, 
    email: { type: String }, 
    password: { type: String },
    refreshToken: { type: [sessionSchema], default:[]}
})

const User = mongoose.model("User", userSchema); 

export { User }; 