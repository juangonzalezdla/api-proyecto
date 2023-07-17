import mongoose from 'mongoose';

const connectDB = async (url) => {
  mongoose.connect(url).then(() => {
    console.log('Databae connected');
  });
}

export default connectDB;