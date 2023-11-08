import ChildComponent1 from "../components/ChildComponent1"; // importing ChildComponent1 in parent component
import ChildComponent2 from "../components/ChildComponent2"; // importing ChildComponent2 in parent component

// this is the parant component / home route ::

export default function Home() {
  return (
    <main
      style={{
        // inline styling::
        background: "#caf0f8",
        minHeight: "100vh",
        padding: "1em",
      }}
    >
      <p style={{ textAlign: "center", padding: "5rem 0" }}>
        This is Parent Component!
      </p>
      <ChildComponent1 />
      <ChildComponent2 />
    </main>
  );
}
