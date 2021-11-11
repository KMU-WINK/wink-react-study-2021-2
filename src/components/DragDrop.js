import React, { useState } from "react";
import * as lib from "./library.js";
import "../css/DragDrop.css";

const DragDrop = () => {
  const [dropFlag, setDropFlag] = useState(false);

  return (
    <div
      id="drag-drop-field"
      className={dropFlag ? "in" : "out"}
      onDrop={(e) => lib.handleOnDrop(e, setDropFlag)}
      onDragOver={(e) => lib.handleDragOver(e, setDropFlag)}
      onDragLeave={(e) => lib.handleOnDragLeave(e, setDropFlag)}

    >
      <p>drag & drop</p>
      <input type="file" accept=".csv"/>
    </div>
  );
};

export default DragDrop;