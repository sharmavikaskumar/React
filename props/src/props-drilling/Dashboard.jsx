
import StudentSection from "./StudentSection";

function Dashboard({ name }) {
  return (
    <div>
      <h3>Dashboard</h3>
      <StudentSection name={name} />
    </div>
  );
}

export default Dashboard;
