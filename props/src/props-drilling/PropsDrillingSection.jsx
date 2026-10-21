
import Dashboard from "./Dashboard";


function PropsDrillingSection() {
  const studentName = "Rahul";

  return (
    <section>
      <h2>Section 2: Props Drilling</h2>
      <Dashboard name={studentName} />
    </section>
  );
}

export default PropsDrillingSection;
