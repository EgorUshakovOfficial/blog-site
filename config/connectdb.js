import mongoose from 'mongoose'; 

// Connect to Mongodb database 
const connectdb = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(db => {
            console.log('Application is successfully connected to MongoDB')
        })
        .catch(err => {
            console.log("Error! Application could not connect to MongoDB")
        })
}

export { connectdb };  

