import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Tipo A", "Hours per Day"],
  ["Tipo B", 11],
  ["Tipo C", 2],
  ["Tipo D", 2],
  ["Tipo E", 2],
  ["Tipo F", 7],
];

export const options = {
  title: "Prospecto de Mudas Divinut",
  is3D: true,
};

export function App() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}
