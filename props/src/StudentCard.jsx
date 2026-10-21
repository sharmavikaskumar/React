
function StudentCard(props) {
  return (
    <div className="student-card">
      <h2>{props.name}</h2>
      <p>Course: {props.course}</p>
      <p>Age: {props.age}</p>
      <p>location : {props.location}</p>
    </div>
  );
}

export default StudentCard;
