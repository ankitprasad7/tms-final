const studentModel = require("../models/student");
const Course = require("../models/Course");

function addCourses(req, res, next) {
  try {
    let courseName = req.body.coursename;
    let courseLecturer = req.body.courselecturer;
    let data = Course.find({ coursename: courseName });
    console.log(data);
    if (data.length >= 1)
      return res.status(409).send({ message: "Course name already exists" });

    let coursedata = new Course({
      coursename: courseName,
      courselecturer: courseLecturer,
    });
    coursedata.save();
    console.log();
    res.status(200).send(coursedata);
  } catch (err) {
    res.send({ message: "course not added" });
  }
}

function addNewStudent(req, res) {
  var courseID = req.body.courseid;
  var studentID = req.body.studentid;
  console.log(courseID);
  Course.find({ courseid: 1007 }).exec((data) => {
    console.log(data);
    // enrolledStudents.push(studentID);
  });

  res.status(200).send({ message: "added" });
}
module.exports = {
  addCourses,
  addNewStudent,
};
