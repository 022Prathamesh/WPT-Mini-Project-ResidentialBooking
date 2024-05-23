const mongoose = require("mongoose");
const mongoURI = "mongodb://127.0.0.1:27017/HouseHunt";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("Connected to MongoDB");

    const fetchedData = await mongoose.connection.db.collection("house_items");
    
    const categoryData = await mongoose.connection.db.collection("housecategory");
    const data = await fetchedData.find({}).toArray();
    const catData = await categoryData.find({}).toArray();

    global.house_items = data;
    global.house_category = catData;
   

  } catch (err) {
    console.error("Error:", err);
  }
};

module.exports = mongoDB;
