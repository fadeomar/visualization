import React, { useState, useEffect, useRef } from "react";
import { select, axisBottom, scaleLinear, axisRight, scaleBand } from "d3";

const BarChart = () => {
  const [data, setData] = useState([25, 30, 45, 65, 20, 75, 90]);

  const myRef = useRef();
  useEffect(() => {
    const svg = select(myRef.current);
    const xScale = scaleBand()
      .domain(data.map((value, index) => index))
      .range([0, 300])
      .padding(0.5);

    const yScale = scaleLinear().domain([0, 160]).range([150, 0]);
    const colorScale = scaleLinear()
      .domain([75, 120, 160])
      .range(["green", "blue", "red"]);
    const xAxis = axisBottom(xScale)
      .ticks(8)
      .tickFormat((index) => index + 1);
    const yAxis = axisRight(yScale);

    svg.select(".x-axis").style("transform", "translateY(150px)").call(xAxis);
    svg.select(".y-axis").style("transform", "translateX(300px)").call(yAxis);
    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("class", "bar")
      .style("transform", "scale(1, -1)")
      .attr("x", (value, index) => {
        return xScale(index);
      })
      .attr("width", xScale.bandwidth())
      .attr("y", -150)
      .attr("index", (value, index) => index)
      .on("mouseenter", (e, value) => {
        svg
          .selectAll(".tooltip")
          .data([value])
          .join((enter) => enter.append("text").attr("y", yScale(value - 4)))
          .attr("text-anchor", "middle")
          .attr("class", "tooltip")
          .text(value)
          .attr(
            "x",
            xScale(Number(e?.target?.getAttribute("index"))) +
              xScale.bandwidth() / 2
          )
          .transition()
          .attr("y", yScale(value + 8))
          .attr("opacity", 1);
      })
      .on("mouseleave", () => svg.select(".tooltip").remove())
      .transition()
      .attr("fill", colorScale)
      .attr("height", (value) => 150 - yScale(value));
  }, [data]);

  return (
    <React.Fragment>
      <svg ref={myRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
      <br />
      <br />
      <br />
      <br />
      <br />
      <button onClick={() => setData(data.map((value) => value + 5))}>
        Update Data
      </button>
      <button onClick={() => setData(data.filter((value) => value < 35))}>
        Filter Data
      </button>
    </React.Fragment>
  );
};

export default BarChart;
