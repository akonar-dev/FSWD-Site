const express = require('express');
const dotenv = require('dotenv');
const courses = require('./data/courses');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Get all courses
app.get('/courses', (req, res) => {
    res.json(courses);
});

// Get a course by ID
app.get('/courses/:id', (req, res) => {
    const courseId = parseInt(req.params.id);
    const course = courses.find((c) => c.id === courseId);
    if (!course) {
        return res.status(404).json({ message: 'Course not found' });
    }
    res.json(course);
});

// Add a new course (POST)
app.post('/courses', (req, res) => {
    const { courseName, description, price } = req.body;

    if (!courseName || !description || !price) {
        return res
            .status(400)
            .json({ message: 'Please provide all course details' });
    }

    const newCourse = {
        id: courses.length + 1, // Generate new ID
        courseName,
        description,
        price,
    };

    courses.push(newCourse); // Add the new course to the list
    res.status(201).json(newCourse); // Return the new course
});

// Update a course (PUT)
app.put('/courses/:id', (req, res) => {
    const courseId = Number(req.params.id);
    const course = courses.find((c) => c.id === courseId);

    if (!course) {
        return res.status(404).json({ message: 'Course not found' });
    }

    const { courseName, description, price } = req.body;

    if (courseName) course.courseName = courseName;
    if (description) course.description = description;
    if (price) course.price = price;

    res.json(course); // Return the updated course
});

// Delete a course (DELETE)
app.delete('/courses/:id', (req, res) => {
    const courseId = Number(req.params.id);
    const courseIndex = courses.findIndex((c) => c.id === courseId);

    if (courseIndex === -1) {
        return res.status(404).json({ message: 'Course not found' });
    }

    courses.splice(courseIndex, 1); //Filter is not good for huge data
    res.json({ message: 'Course deleted successfully' });
});

// Delete All courses not Needed eventually
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
