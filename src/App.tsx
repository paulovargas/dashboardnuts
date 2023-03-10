import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Mudas cultivadas", "Variedades com nossos parceiros"],
  ["Tipo A", 11],
  ["Tipo B", 2],
  ["Tipo C", 2],
  ["Tipo D", 2],
  ["Tipo E", 7],
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
