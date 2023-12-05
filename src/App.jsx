import React, { useState, useRef, useEffect } from "react";
import * as d3 from "d3";
import "./App.css";

function App() {
  const [data] = useState([25, 50, 35, 15, 94, 10]);
  const svgRef = useRef();

  useEffect(() => {
    //setting up svg
    //setting up the scaling
    //setting the axes
    //setting up the data for the svg
  }, [data]);

  return (
    <>
      <svg ref={svgRef}></svg>
    </>
  );
}

export default App;
