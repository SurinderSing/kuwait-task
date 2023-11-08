import React from "react";
import SubChildComponent from "./ChildComponent2/SubChildComponent"; // importing SubChildComponent in ChildComponent2

export default function ChildComponent2() {
  return (
    <div
      // inline styling::
      style={{
        background: "#dda15e",
        width: "100%",
        display: "grid",
        placeContent: "center",
        textAlign: "center",
        padding: "15px 0",
      }}
    >
      <div>ChildComponent2</div>
      <SubChildComponent /> {/* using SubChildComponent in ChildComponent2 */}
    </div>
  );
}
