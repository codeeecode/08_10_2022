const express = require('express')
const StudentModel = require('../models/StudentModel')
const router = express.Router()

//URL: localhost:3000/student
router.get('/', (req, res) => {
    StudentModel.find((err, data) => {
        if (!err) {
            //res.send(data)
            //render ra trang index ở thư mục views/student
            res.render('student/index', { sinhvien: data })
        }
    })
})


// //URL: localhost:5000/student/student
// router.get('/student', (req, res) => {
//     res.send('test')
// })
module.exports = router