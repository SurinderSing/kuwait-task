import React from "react";
// this is the sub child component ::
export default function SubChildComponent() {
  return (
    <div
      // inline styling::
      style={{
        background: "#f1faee",
        width: "60vw",
        height: "10rem",
        margin: "5rem 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      SubChildComponent
    </div>
  );
}
