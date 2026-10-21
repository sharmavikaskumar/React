
import StudentCard from "./StudentCard";

function StudentSection({ name }) {
  return (
    <div>
      <h4>Student Section</h4>
      <StudentCard name={name} />
    </div>
  );
}

export default StudentSection;
