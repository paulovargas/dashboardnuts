import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Mudas cultivadas", "Variedades com nossos parceiros"],
  ["Cobre 0 - 9 mudas", 741],
  ["Bronze 10 - 49 mudas", 504],
  ["Prata 50 - 199 mudas", 349],
  ["Ouro 200 - 999 mudas", 193],
  ["Platina 1000 - 4999 mudas", 21],
  ["Diamante acima de 5000 mudas", 2],
];

export const options = {
  title: "Estratificação de Produtores conforme categorias",
  is3D: true,
  //colors: ['#b87333', '#cd7f32', '#cdd0d0', '#ffd700', '#e5e4e2']
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
