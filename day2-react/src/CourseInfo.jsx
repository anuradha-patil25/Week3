function CourseInfo(props) {
  return (
    <div>
      <h2>Course Information</h2>

      <p>Course:- {props.course}</p>

      <p>Semester:- {props.semester}</p>

      <p>Subject:- {props.subject}</p>
    </div>
  );
}

export default CourseInfo;