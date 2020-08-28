import React from 'react';
import './CourseList.css'

const CourseList = (props) => {
    const {name, price, instructor, img, detail} = props.course;
    return (
      <div className="Course-container">
        <div className="image">
          <img src={img} alt="" />
        </div>
        <div className="course-list">
          <h5>{name}</h5>
          <h6> Instructor: {instructor} </h6>
          <h6> {detail}</h6>
          <h4> ${price} </h4>

          <button
            className="enroll-btn"
            onClick={() => props.handleAddCourse(props.course)}
          >
            Enroll Now
          </button>
        </div>
      </div>
    );
};

export default CourseList;