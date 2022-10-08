const mongoose = require('mongoose')

var StudentSchema = new mongoose.Schema({
    name: String,
    email: String,
    gender: String,
    image: String,
    dob: Date,
    year: String,
    grade: String
}, {
    versionKey: false //optional (to remove _v: 0 when add new data)
})

//Note: tham số cuối cùng bắt buộc phải là tên của collection (table) trong DB
var StudentModel = mongoose.model('Sinh Vien', StudentSchema, 'student')
module.exports = StudentModel