import ChildComponent1 from "../components/ChildComponent1";
import ChildComponent2 from "../components/ChildComponent2";

export default function Home() {
  return (
    <main
      style={{
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
