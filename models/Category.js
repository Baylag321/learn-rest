const mongoose = require("mongoose");
const {transliterate, slugify} = require('transliteration')


const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Категорийн нэрийг оруулна уу"],
        unique: true,
        trim: true,
        maxlength: [50, "Категорийн нэрний урт дээд тал нь 50 тэмдэгт байх ёстой."],
    },
    slug: String,
    description: {
        type: String,
        required: [true, "Категорийн тайлбарыг заавал оруулах ёстой."],
        maxlength: [
            500,
            "Категорийн тайлбарын урт дээд тал нь 500 тэмдэгт байх ёстой.",
        ],
    },
    photo: {
        type: String,
        default: "no-photo.jpg",
    },
    averageRating: {
        type: Number,
        min: [1, "Рэйтинг хамгийн багадаа 1 байх ёстой"],
        max: [10, "Рэйтинг хамгийн ихдээ 10 байх ёстой"],
    },
    averagePrice: Number,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

CategorySchema.pre("save", function (next) {
    this.slug = slugify(this.name)
    next()
})


module.exports = mongoose.model("Category", CategorySchema);
