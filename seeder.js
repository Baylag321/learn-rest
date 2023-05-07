const fs = require("fs");
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");
const Category = require("./models/Category");

dotenv.config({path: "./config/config.env"});

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const categories = JSON.parse(
    fs.readFileSync(__dirname + "/data/categories.json", "utf-8")
);

const importData = async () => {
    try {
        await Category.create(categories);
        console.log("Data imported".green.inverse);
    } catch (err) {
        console.log(err.red.inverse);
    }
};

const deleteData = async () => {
    try {
        await Category.deleteMany();
        console.log("Data deleted".red.inverse);
    } catch (err) {
        console.log(err.red.inverse);
    }
};

if (process.argv[2] == "-i") {
    importData();
} else if (process.argv[2] == "-d") {
    deleteData();
}
