import React from "react";
import SubChildComponent from "./ChildComponent2/SubChildComponent";

export default function ChildComponent2() {
  return (
    <div
      style={{
        background: "#dda15e",
        width: "100%",
        display: "grid",
        placeContent: "center",
        textAlign: "center",
        padding : "15px 0",
      }}
    >
      <div>ChildComponent2</div>
      <SubChildComponent />
    </div>
  );
}
