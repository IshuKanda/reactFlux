import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import { getAuthors } from "../api/authorApi";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";

function CoursesPage() {
    const [courses, setCourses] = useState([]);
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        getCourses().then(_courses => setCourses(_courses));
        getAuthors().then(_authors => setAuthors(_authors));
    }, []);

    return (
        <>
            <h2>Courses</h2>
            <Link className="btn btn-primary btn-block" to="/course">
                Add Course
            </Link>
            <CourseList courses={courses} authors={authors} />
        </>
    )
}

export default CoursesPage;